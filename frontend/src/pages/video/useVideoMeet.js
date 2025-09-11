// useVideoMeet.js
import { useCallback, useEffect, useRef, useState } from "react";
import io from "socket.io-client";

/**
 * useVideoMeet hook
 *
 * Usage:
 * const {
 *   localVideoRef,
 *   remoteVideos, // [{ socketId, stream }]
 *   messages,
 *   newMessages,
 *   connected,
 *   connect,
 *   disconnect,
 *   sendMessage,
 *   toggleVideo,
 *   toggleAudio,
 *   toggleScreen,
 *   role, // 'teacher' | 'student'
 * } = useVideoMeet({ serverUrl, meetingId, username, role });
 *
 * - meetingId can be any string that identifies the call (e.g. window.location.href)
 * - role is optional; if provided it can be used by UI components to change behaviour
 * - initialVideo/initialAudio control whether permissions are requested immediately on connect
 */

export default function useVideoMeet({
  serverUrl,
  meetingId,
  username = "anonymous",
  role = "student", // 'teacher' or 'student' (optional)
  initialVideo = true, // new option to control initial video state
  initialAudio = true, // new option to control initial audio state
  iceServers = [
    { urls: "stun:stun.l.google.com:19302" }
  ],
} = {}) {
  // refs
  const socketRef = useRef(null);
  const socketIdRef = useRef(null);
  const localStreamRef = useRef(null);
  const localVideoRef = useRef(null);
  const peerConnectionsRef = useRef({}); // { socketId: RTCPeerConnection }
  const remoteStreamsRef = useRef({}); // mapping socketId -> MediaStream
  const screenStreamRef = useRef(null); // separate ref for screen stream
  const isScreenSharingRef = useRef(false);

  // UI state
  const [connected, setConnected] = useState(false);
  const [videoOn, setVideoOn] = useState(initialVideo);
  const [audioOn, setAudioOn] = useState(initialAudio);
  const [screenOn, setScreenOn] = useState(false);
  const [remoteVideos, setRemoteVideos] = useState([]); // [{ socketId, stream }]
  const [messages, setMessages] = useState([]); // { sender, text, ts }
  const [newMessages, setNewMessages] = useState(0);

  // cleanup function for MediaStream
  const cleanupMediaStream = useCallback((stream) => {
    if (stream) {
      stream.getTracks().forEach(track => {
        track.stop();
        stream.removeTrack(track);
      });
    }
  }, []);

  // helper: create new RTCPeerConnection and attach handlers
  const createPeerConnection = useCallback((peerId) => {
    const pc = new RTCPeerConnection({ iceServers });

    // send ice candidates to peer
    pc.onicecandidate = (event) => {
      if (event.candidate && socketRef.current && socketRef.current.connected) {
        socketRef.current.emit("signal", peerId, JSON.stringify({ ice: event.candidate }));
      }
    };

    // when remote track arrives
    pc.ontrack = (evt) => {
      console.log("Received remote track from", peerId);
      
      // cleanup old stream for this peer if it exists
      if (remoteStreamsRef.current[peerId]) {
        cleanupMediaStream(remoteStreamsRef.current[peerId]);
      }

      // create new remote stream
      const remoteStream = new MediaStream();
      
      // add tracks to stream
      if (evt.streams && evt.streams[0]) {
        evt.streams[0].getTracks().forEach(track => {
          remoteStream.addTrack(track);
        });
      } else if (evt.track) {
        remoteStream.addTrack(evt.track);
      }
      
      remoteStreamsRef.current[peerId] = remoteStream;
      
      setRemoteVideos(prev => {
        const filtered = prev.filter(v => v.socketId !== peerId);
        return [...filtered, { socketId: peerId, stream: remoteStream }];
      });
    };

    // when connection state changes
    pc.onconnectionstatechange = () => {
      console.log(`Peer ${peerId} connection state:`, pc.connectionState);
      
      if (pc.connectionState === "disconnected" || 
          pc.connectionState === "failed" || 
          pc.connectionState === "closed") {
        
        // cleanup
        if (remoteStreamsRef.current[peerId]) {
          cleanupMediaStream(remoteStreamsRef.current[peerId]);
          delete remoteStreamsRef.current[peerId];
        }
        
        delete peerConnectionsRef.current[peerId];
        setRemoteVideos(prev => prev.filter(v => v.socketId !== peerId));
      }
    };

    peerConnectionsRef.current[peerId] = pc;
    return pc;
  }, [iceServers, cleanupMediaStream]);

  // get local media (camera + mic)
  const acquireLocalMedia = useCallback(async (useVideo = true, useAudio = true) => {
    try {
      console.log("Acquiring local media", { useVideo, useAudio });
      
      const constraints = { 
        video: useVideo ? { 
          width: { ideal: 1280 }, 
          height: { ideal: 720 }
        } : false, 
        audio: useAudio 
      };
      
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      
      // cleanup previous stream
      if (localStreamRef.current && !isScreenSharingRef.current) {
        cleanupMediaStream(localStreamRef.current);
      }
      
      localStreamRef.current = stream;
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      
      // replace tracks on all existing peer connections
      Object.values(peerConnectionsRef.current).forEach(pc => {
        const videoSender = pc.getSenders().find(s => s.track && s.track.kind === "video");
        const audioSender = pc.getSenders().find(s => s.track && s.track.kind === "audio");
        
        stream.getTracks().forEach(track => {
          try {
            if (track.kind === "video" && videoSender) {
              videoSender.replaceTrack(track);
            } else if (track.kind === "audio" && audioSender) {
              audioSender.replaceTrack(track);
            } else {
              // add new track if no sender exists
              pc.addTrack(track, stream);
            }
          } catch (error) {
            console.warn("Error adding/replacing track:", error);
          }
        });
      });
      
      setVideoOn(useVideo);
      setAudioOn(useAudio);
      isScreenSharingRef.current = false;
      
      return stream;
    } catch (err) {
      console.error("acquireLocalMedia failed:", err);
      throw err;
    }
  }, [cleanupMediaStream]);

  // switch to screen sharing (replace video track) or back to camera
  const replaceVideoTrack = useCallback(async (useScreen) => {
    try {
      if (useScreen) {
        if (!navigator.mediaDevices.getDisplayMedia) {
          throw new Error("Screen sharing is not supported in this browser");
        }
        
        console.log("Starting screen share");
        const screenStream = await navigator.mediaDevices.getDisplayMedia({ 
          video: true, 
          audio: false 
        });
        
        const screenTrack = screenStream.getVideoTracks()[0];
        if (!screenTrack) {
          throw new Error("No video track found in screen stream");
        }
        
        screenStreamRef.current = screenStream;
        
        // replace video track in all peer connections
        Object.values(peerConnectionsRef.current).forEach(pc => {
          const videoSender = pc.getSenders().find(s => s.track && s.track.kind === "video");
          if (videoSender) {
            videoSender.replaceTrack(screenTrack).catch(e => 
              console.warn("Error replacing track with screen:", e)
            );
          } else {
            try {
              pc.addTrack(screenTrack, screenStream);
            } catch (e) {
              console.warn("Error adding screen track:", e);
            }
          }
        });
        
        // update local video element
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = screenStream;
        }
        
        // handle screen share end
        screenTrack.onended = async () => {
          console.log("Screen sharing ended by user");
          setScreenOn(false);
          isScreenSharingRef.current = false;
          
          try {
            // switch back to camera
            await acquireLocalMedia(videoOn, audioOn);
          } catch (error) {
            console.error("Error switching back to camera:", error);
          }
        };
        
        setScreenOn(true);
        isScreenSharingRef.current = true;
        
      } else {
        // stop screen sharing and go back to camera
        console.log("Stopping screen share");
        
        if (screenStreamRef.current) {
          cleanupMediaStream(screenStreamRef.current);
          screenStreamRef.current = null;
        }
        
        setScreenOn(false);
        isScreenSharingRef.current = false;
        
        // re-acquire camera
        await acquireLocalMedia(videoOn, audioOn);
      }
    } catch (err) {
      console.error("replaceVideoTrack failed:", err);
      setScreenOn(false);
      isScreenSharingRef.current = false;
      throw err;
    }
  }, [acquireLocalMedia, cleanupMediaStream, videoOn, audioOn]);

  // create offers to newly joined peers
  const createAndSendOffer = useCallback(async (peerId, pc) => {
    try {
      console.log("Creating offer for peer:", peerId);
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      
      if (socketRef.current && socketRef.current.connected) {
        socketRef.current.emit("signal", peerId, JSON.stringify({ sdp: pc.localDescription }));
      }
    } catch (err) {
      console.error("createAndSendOffer error:", err);
    }
  }, []);

  // socket message handler for 'signal'
  const handleSignal = useCallback(async (fromId, message) => {
    try {
      const signal = JSON.parse(message);
      if (fromId === socketIdRef.current) return;
      
      let pc = peerConnectionsRef.current[fromId];
      if (!pc) {
        pc = createPeerConnection(fromId);
      }

      if (signal.sdp) {
        const sdp = signal.sdp;
        await pc.setRemoteDescription(new RTCSessionDescription(sdp));
        
        if (sdp.type === "offer") {
          const answer = await pc.createAnswer();
          await pc.setLocalDescription(answer);
          
          if (socketRef.current && socketRef.current.connected) {
            socketRef.current.emit("signal", fromId, JSON.stringify({ sdp: pc.localDescription }));
          }
        }
      } else if (signal.ice) {
        await pc.addIceCandidate(new RTCIceCandidate(signal.ice));
      }
    } catch (err) {
      console.error("handleSignal error:", err);
    }
  }, [createPeerConnection]);

  // connect to socket + join room
  const connect = useCallback(async () => {
    try {
      if (!serverUrl) {
        throw new Error("serverUrl is required");
      }

      console.log("Connecting to:", serverUrl);
      socketRef.current = io.connect(serverUrl, {
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
      });

      socketRef.current.on("connect", () => {
        console.log("Socket connected");
        socketIdRef.current = socketRef.current.id;
        socketRef.current.emit("join-call", meetingId || window.location.href);
        setConnected(true);
      });

      socketRef.current.on("disconnect", (reason) => {
        console.log("Socket disconnected:", reason);
        setConnected(false);
      });

      socketRef.current.on("connect_error", (error) => {
        console.error("Socket connection error:", error);
        setConnected(false);
      });

      socketRef.current.on("signal", handleSignal);

      socketRef.current.on("user-joined", async (joinedId, clients) => {
        console.log("User joined:", joinedId, "All clients:", clients);
        
        // create peer connections for all clients
        for (const clientId of clients) {
          if (clientId === socketIdRef.current) continue;
          
          let pc = peerConnectionsRef.current[clientId];
          if (!pc) {
            pc = createPeerConnection(clientId);
          }
          
          // attach local tracks if available
          if (localStreamRef.current) {
            localStreamRef.current.getTracks().forEach(track => {
              try {
                const existingSender = pc.getSenders().find(s => s.track && s.track.kind === track.kind);
                if (!existingSender) {
                  pc.addTrack(track, localStreamRef.current);
                }
              } catch (error) {
                console.warn("Error adding track to peer:", error);
              }
            });
          }
        }

        // if we are the new joiner, create offers to existing peers
        if (joinedId === socketIdRef.current) {
          for (const clientId of clients) {
            if (clientId === socketIdRef.current) continue;
            const pc = peerConnectionsRef.current[clientId];
            if (pc) {
              await createAndSendOffer(clientId, pc);
            }
          }
        }
      });

      socketRef.current.on("user-left", (id) => {
        console.log("User left:", id);
        
        // cleanup peer connection
        if (peerConnectionsRef.current[id]) {
          try {
            peerConnectionsRef.current[id].close();
          } catch (e) {
            console.warn("Error closing peer connection:", e);
          }
          delete peerConnectionsRef.current[id];
        }
        
        // cleanup remote stream
        if (remoteStreamsRef.current[id]) {
          cleanupMediaStream(remoteStreamsRef.current[id]);
          delete remoteStreamsRef.current[id];
        }
        
        setRemoteVideos(prev => prev.filter(v => v.socketId !== id));
      });

      socketRef.current.on("chat-message", (text, sender) => {
        const message = { sender, text, ts: Date.now() };
        setMessages(prev => [...prev, message]);
        if (sender !== username) {
          setNewMessages(n => n + 1);
        }
      });

      // get local media after socket setup (only if video or audio is enabled)
      if (videoOn || audioOn) {
        await acquireLocalMedia(videoOn, audioOn);
      }
      
    } catch (error) {
      console.error("Connection failed:", error);
      setConnected(false);
      throw error;
    }
  }, [serverUrl, meetingId, handleSignal, createPeerConnection, createAndSendOffer, acquireLocalMedia, username, videoOn, audioOn, cleanupMediaStream]);

  // disconnect / cleanup
  const disconnect = useCallback(() => {
    try {
      console.log("Disconnecting...");
      
      // close all peer connections
      Object.values(peerConnectionsRef.current).forEach(pc => {
        try {
          pc.close();
        } catch (e) {
          console.warn("Error closing peer connection:", e);
        }
      });
      peerConnectionsRef.current = {};

      // cleanup remote streams
      Object.values(remoteStreamsRef.current).forEach(stream => {
        cleanupMediaStream(stream);
      });
      remoteStreamsRef.current = {};
      setRemoteVideos([]);

      // disconnect socket
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }

      // cleanup local streams
      if (localStreamRef.current) {
        cleanupMediaStream(localStreamRef.current);
        localStreamRef.current = null;
      }

      if (screenStreamRef.current) {
        cleanupMediaStream(screenStreamRef.current);
        screenStreamRef.current = null;
      }

      // clear video element
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = null;
      }

    } catch (err) {
      console.warn("Disconnect cleanup error:", err);
    } finally {
      setConnected(false);
      setVideoOn(initialVideo);
      setAudioOn(initialAudio);
      setScreenOn(false);
      isScreenSharingRef.current = false;
    }
  }, [cleanupMediaStream, initialVideo, initialAudio]);

  // toggle controls
  const toggleVideo = useCallback(async () => {
    try {
      const newVideoState = !videoOn;
      console.log("Toggling video to:", newVideoState);
      
      if (newVideoState) {
        // turning video on
        if (!isScreenSharingRef.current) {
          await acquireLocalMedia(true, audioOn);
        }
      } else {
        // turning video off
        if (localStreamRef.current) {
          localStreamRef.current.getVideoTracks().forEach(track => {
            track.enabled = false;
          });
        }
        
        // disable video tracks on peer connections
        Object.values(peerConnectionsRef.current).forEach(pc => {
          pc.getSenders().forEach(sender => {
            if (sender.track && sender.track.kind === "video") {
              sender.track.enabled = false;
            }
          });
        });
        
        setVideoOn(false);
      }
    } catch (error) {
      console.error("Error toggling video:", error);
    }
  }, [videoOn, audioOn, acquireLocalMedia]);

  const toggleAudio = useCallback(() => {
    const newAudioState = !audioOn;
    console.log("Toggling audio to:", newAudioState);
    
    // update local stream
    if (localStreamRef.current) {
      localStreamRef.current.getAudioTracks().forEach(track => {
        track.enabled = newAudioState;
      });
    }
    
    // update peer connections
    Object.values(peerConnectionsRef.current).forEach(pc => {
      pc.getSenders().forEach(sender => {
        if (sender.track && sender.track.kind === "audio") {
          sender.track.enabled = newAudioState;
        }
      });
    });
    
    setAudioOn(newAudioState);
  }, [audioOn]);

  const toggleScreen = useCallback(async () => {
    try {
      const newScreenState = !screenOn;
      console.log("Toggling screen share to:", newScreenState);
      
      await replaceVideoTrack(newScreenState);
    } catch (error) {
      console.error("Error toggling screen share:", error);
      // Reset screen state on error
      setScreenOn(false);
      isScreenSharingRef.current = false;
    }
  }, [screenOn, replaceVideoTrack]);

  // messaging
  const sendMessage = useCallback((text) => {
    if (!socketRef.current || !socketRef.current.connected) {
      console.warn("Cannot send message: socket not connected");
      return false;
    }
    
    try {
      socketRef.current.emit("chat-message", text, username);
      const message = { sender: username, text, ts: Date.now() };
      setMessages(prev => [...prev, message]);
      return true;
    } catch (error) {
      console.error("Error sending message:", error);
      return false;
    }
  }, [username]);

  // clear new messages counter
  const clearNewMessages = useCallback(() => {
    setNewMessages(0);
  }, []);

  // cleanup on unmount
  useEffect(() => {
    return () => {
      disconnect();
    };
  }, [disconnect]);

  return {
    // refs
    localVideoRef,

    // state
    connected,
    videoOn,
    audioOn,
    screenOn,
    remoteVideos,
    messages,
    newMessages,
    role,

    // actions
    connect,
    disconnect,
    sendMessage,
    toggleVideo,
    toggleAudio,
    toggleScreen,
    clearNewMessages,
  };
}