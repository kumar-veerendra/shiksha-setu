import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import io from "socket.io-client";
import { Badge, IconButton, TextField } from '@mui/material';
import { Button } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff'
import styles from "../styles/videoComponent.module.css";
import CallEndIcon from '@mui/icons-material/CallEnd'
import MicIcon from '@mui/icons-material/Mic'
import MicOffIcon from '@mui/icons-material/MicOff'
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import StopScreenShareIcon from '@mui/icons-material/StopScreenShare'
import ChatIcon from '@mui/icons-material/Chat'
import server from '../environment';

// Add these imports for low bandwidth
import TeacherUploadSlides from './TeacherUploadSlides'; // your existing component
import StudentSlidesViewer from './StudentSlidesViewer';   // your existing component
import SlideshowIcon from '@mui/icons-material/Slideshow';

import { useAuth } from '../context/AuthContext';
import PollComponent from './PollComponent ';

const server_url = server;

var connections = {};

const peerConfigConnections = {
    "iceServers": [
        { "urls": "stun:stun.l.google.com:19302" }
    ]
}

export default function VideoMeetComponent() {
    const chatContainerRef = useRef(null); // for automatic chat scroll
    
    const { meetingCode } = useParams();
    const { userData  } = useAuth(); // user info

    var socketRef = useRef();
    let socketIdRef = useRef();

    let localVideoref = useRef();

    let [userRole, setUserRole] = useState(""); // Add this to store user role


    let [videoAvailable, setVideoAvailable] = useState(true);

    let [audioAvailable, setAudioAvailable] = useState(true);

    let [video, setVideo] = useState([]);

    let [audio, setAudio] = useState();

    let [screen, setScreen] = useState(false);

    let [showModal, setModal] = useState(false);

    let [screenAvailable, setScreenAvailable] = useState();

    let [messages, setMessages] = useState([])

    let [message, setMessage] = useState("");

    let [newMessages, setNewMessages] = useState(3);

    let [askForUsername, setAskForUsername] = useState(true);

    let [username, setUsername] = useState("");

    const videoRef = useRef([])

    let [videos, setVideos] = useState([])


    // Add these with your existing state declarations for low bandwidth optamization
    let [slideMode, setSlideMode] = useState(false);
    let [slides, setSlides] = useState([]);
    let [currentSlide, setCurrentSlide] = useState(1);
    let [presentationActive, setPresentationActive] = useState(false);



    // TODO
    // if(isChrome() === false) {


    // }

    // useEffect(() => {
    //     console.log("HELLO")
    //     getPermissions();

    // })

    useEffect(() => {
        console.log("HELLO")
        getPermissions();
    }, []); // run only once


    // chat scroll
    useEffect(() => {
        const container = chatContainerRef.current;
        if (!container) return;

        // Check if user is near the bottom (within 50px)
        const isAtBottom =
            container.scrollHeight - container.scrollTop - container.clientHeight < 50;

        if (isAtBottom) {
            container.scrollTop = container.scrollHeight; // Scroll to bottom
        }
    }, [messages]);



    let getDislayMedia = () => {
        if (screen) {
            if (navigator.mediaDevices.getDisplayMedia) {
                navigator.mediaDevices.getDisplayMedia({ video: true, audio: true })
                    .then(getDislayMediaSuccess)
                    .then((stream) => { })
                    .catch((e) => console.log(e))
            }
        }
    }

    // let getDislayMedia = () => {
    //     if (screen && navigator.mediaDevices.getDisplayMedia) {
    //         navigator.mediaDevices.getDisplayMedia({ video: true, audio: true })
    //             .then(getDislayMediaSuccess)
    //             .catch((e) => {
    //                 console.log('Screen share error:', e);
    //                 setScreen(false); // Reset state if sharing fails
    //             })
    //     }
    // }

    const getPermissions = async () => {
        try {
            const videoPermission = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoPermission) {
                setVideoAvailable(true);
                console.log('Video permission granted');
            } else {
                setVideoAvailable(false);
                console.log('Video permission denied');
            }

            const audioPermission = await navigator.mediaDevices.getUserMedia({ audio: true });
            if (audioPermission) {
                setAudioAvailable(true);
                console.log('Audio permission granted');
            } else {
                setAudioAvailable(false);
                console.log('Audio permission denied');
            }

            if (navigator.mediaDevices.getDisplayMedia) {
                setScreenAvailable(true);
            } else {
                setScreenAvailable(false);
            }

            // useEffect(() => {
            //       console.log("getDisplayMedia:", navigator.mediaDevices?.getDisplayMedia);

            //     if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
            //         setScreenAvailable(true);
            //     } else {
            //         setScreenAvailable(false);
            //     }
            // }, []); // empty dependency → runs only once



            if (videoAvailable || audioAvailable) {
                const userMediaStream = await navigator.mediaDevices.getUserMedia({ video: videoAvailable, audio: audioAvailable });
                if (userMediaStream) {
                    window.localStream = userMediaStream;
                    if (localVideoref.current) {
                        localVideoref.current.srcObject = userMediaStream;
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (video !== undefined && audio !== undefined) {
            getUserMedia();
            console.log("SET STATE HAS ", video, audio);

        }


    }, [video, audio])
    let getMedia = () => {
        setVideo(videoAvailable);
        setAudio(audioAvailable);
        connectToSocketServer();

    }




    let getUserMediaSuccess = (stream) => {
        try {
            window.localStream.getTracks().forEach(track => track.stop())
        } catch (e) { console.log(e) }

        window.localStream = stream
        localVideoref.current.srcObject = stream

        for (let id in connections) {
            if (id === socketIdRef.current) continue

            connections[id].addStream(window.localStream)

            connections[id].createOffer().then((description) => {
                console.log(description)
                connections[id].setLocalDescription(description)
                    .then(() => {
                        socketRef.current.emit('signal', id, JSON.stringify({ 'sdp': connections[id].localDescription }))
                    })
                    .catch(e => console.log(e))
            })
        }

        stream.getTracks().forEach(track => track.onended = () => {
            setVideo(false);
            setAudio(false);

            try {
                let tracks = localVideoref.current.srcObject.getTracks()
                tracks.forEach(track => track.stop())
            } catch (e) { console.log(e) }

            let blackSilence = (...args) => new MediaStream([black(...args), silence()])
            window.localStream = blackSilence()
            localVideoref.current.srcObject = window.localStream

            for (let id in connections) {
                connections[id].addStream(window.localStream)

                connections[id].createOffer().then((description) => {
                    connections[id].setLocalDescription(description)
                        .then(() => {
                            socketRef.current.emit('signal', id, JSON.stringify({ 'sdp': connections[id].localDescription }))
                        })
                        .catch(e => console.log(e))
                })
            }
        })
    }

    let getUserMedia = () => {
        if ((video && videoAvailable) || (audio && audioAvailable)) {
            navigator.mediaDevices.getUserMedia({ video: video, audio: audio })
                .then(getUserMediaSuccess)
                .then((stream) => { })
                .catch((e) => console.log(e))
        } else {
            try {
                let tracks = localVideoref.current.srcObject.getTracks()
                tracks.forEach(track => track.stop())
            } catch (e) { }
        }
    }





    let getDislayMediaSuccess = (stream) => {
        console.log("HERE")
        try {
            window.localStream.getTracks().forEach(track => track.stop())
        } catch (e) { console.log(e) }

        window.localStream = stream
        localVideoref.current.srcObject = stream

        for (let id in connections) {
            if (id === socketIdRef.current) continue

            connections[id].addStream(window.localStream)

            connections[id].createOffer().then((description) => {
                connections[id].setLocalDescription(description)
                    .then(() => {
                        socketRef.current.emit('signal', id, JSON.stringify({ 'sdp': connections[id].localDescription }))
                    })
                    .catch(e => console.log(e))
            })
        }

        stream.getTracks().forEach(track => track.onended = () => {
            setScreen(false)

            try {
                let tracks = localVideoref.current.srcObject.getTracks()
                tracks.forEach(track => track.stop())
            } catch (e) { console.log(e) }

            let blackSilence = (...args) => new MediaStream([black(...args), silence()])
            window.localStream = blackSilence()
            localVideoref.current.srcObject = window.localStream

            getUserMedia()

        })
    }

    let gotMessageFromServer = (fromId, message) => {
        var signal = JSON.parse(message)

        if (fromId !== socketIdRef.current) {
            if (signal.sdp) {
                connections[fromId].setRemoteDescription(new RTCSessionDescription(signal.sdp)).then(() => {
                    if (signal.sdp.type === 'offer') {
                        connections[fromId].createAnswer().then((description) => {
                            connections[fromId].setLocalDescription(description).then(() => {
                                socketRef.current.emit('signal', fromId, JSON.stringify({ 'sdp': connections[fromId].localDescription }))
                            }).catch(e => console.log(e))
                        }).catch(e => console.log(e))
                    }
                }).catch(e => console.log(e))
            }

            if (signal.ice) {
                connections[fromId].addIceCandidate(new RTCIceCandidate(signal.ice)).catch(e => console.log(e))
            }
        }
    }




    let connectToSocketServer = () => {
        socketRef.current = io.connect(server_url, { secure: false })

        socketRef.current.on('signal', gotMessageFromServer)

        socketRef.current.on('connect', () => {
            console.log("connection path :" ,window.location.href);
            socketRef.current.emit('join-call', window.location.href)
            socketIdRef.current = socketRef.current.id

            socketRef.current.on('chat-message', addMessage)



            //low bandwidth
            // ADD SLIDE LISTENERS HERE 👇
            socketRef.current.on('slides-uploaded', ({ slides, currentSlide }) => {
                setSlides(slides);
                setCurrentSlide(currentSlide || 1);
            });

            socketRef.current.on('slide-changed', ({ slideIndex }) => {
                setCurrentSlide(slideIndex);
            });

            socketRef.current.on('presentation-started', () => {
                setPresentationActive(true);
                setSlideMode(true); // Auto-open slides for students
            });

            socketRef.current.on('presentation-ended', () => {
                setPresentationActive(false);
            });
            // END OF SLIDE LISTENERS 👆



            socketRef.current.on('user-left', (id) => {
                setVideos((videos) => videos.filter((video) => video.socketId !== id))
            })

            socketRef.current.on('user-joined', (id, clients) => {
                clients.forEach((socketListId) => {

                    connections[socketListId] = new RTCPeerConnection(peerConfigConnections)
                    // Wait for their ice candidate       
                    connections[socketListId].onicecandidate = function (event) {
                        if (event.candidate != null) {
                            socketRef.current.emit('signal', socketListId, JSON.stringify({ 'ice': event.candidate }))
                        }
                    }

                    // Wait for their video stream
                    connections[socketListId].onaddstream = (event) => {
                        console.log("BEFORE:", videoRef.current);
                        console.log("FINDING ID: ", socketListId);

                        let videoExists = videoRef.current.find(video => video.socketId === socketListId);

                        if (videoExists) {
                            console.log("FOUND EXISTING");

                            // Update the stream of the existing video
                            setVideos(videos => {
                                const updatedVideos = videos.map(video =>
                                    video.socketId === socketListId ? { ...video, stream: event.stream } : video
                                );
                                videoRef.current = updatedVideos;
                                return updatedVideos;
                            });
                        } else {
                            // Create a new video
                            console.log("CREATING NEW");
                            let newVideo = {
                                socketId: socketListId,
                                stream: event.stream,
                                autoplay: true,
                                playsinline: true
                            };

                            setVideos(videos => {
                                const updatedVideos = [...videos, newVideo];
                                videoRef.current = updatedVideos;
                                return updatedVideos;
                            });
                        }
                    };


                    // Add the local video stream
                    if (window.localStream !== undefined && window.localStream !== null) {
                        connections[socketListId].addStream(window.localStream)
                    } else {
                        let blackSilence = (...args) => new MediaStream([black(...args), silence()])
                        window.localStream = blackSilence()
                        connections[socketListId].addStream(window.localStream)
                    }
                })

                if (id === socketIdRef.current) {
                    for (let id2 in connections) {
                        if (id2 === socketIdRef.current) continue

                        try {
                            connections[id2].addStream(window.localStream)
                        } catch (e) { }

                        connections[id2].createOffer().then((description) => {
                            connections[id2].setLocalDescription(description)
                                .then(() => {
                                    socketRef.current.emit('signal', id2, JSON.stringify({ 'sdp': connections[id2].localDescription }))
                                })
                                .catch(e => console.log(e))
                        })
                    }
                }
            })
        })
    }

    let silence = () => {
        let ctx = new AudioContext()
        let oscillator = ctx.createOscillator()
        let dst = oscillator.connect(ctx.createMediaStreamDestination())
        oscillator.start()
        ctx.resume()
        return Object.assign(dst.stream.getAudioTracks()[0], { enabled: false })
    }
    let black = ({ width = 640, height = 480 } = {}) => {
        let canvas = Object.assign(document.createElement("canvas"), { width, height })
        canvas.getContext('2d').fillRect(0, 0, width, height)
        let stream = canvas.captureStream()
        return Object.assign(stream.getVideoTracks()[0], { enabled: false })
    }

    // let handleVideo = (e) => {
    //     e.preventDefault(); // Add this
    //     setVideo(!video);
    //     // getUserMedia();
    // }

    const handleVideo = (e) => {
        e.preventDefault();

        const videoTracks = localVideoref.current?.srcObject?.getVideoTracks();
        if (!videoTracks) return;

        videoTracks.forEach(track => {
            track.enabled = !track.enabled; // toggle camera
        });

        setVideo(prev => !prev); // update icon
    };



    // let handleAudio = (e) => {
    //     e.preventDefault(); // Add this
    //     setAudio(!audio)
    //     // getUserMedia();
    // }

    const handleAudio = (e) => {
        e.preventDefault();

        const audioTracks = localVideoref.current?.srcObject?.getAudioTracks();
        if (!audioTracks) return;

        audioTracks.forEach(track => {
            track.enabled = !track.enabled; // toggle microphone
        });

        setAudio(prev => !prev); // update icon
    };




    useEffect(() => {
        if (screen === true) {
            getDislayMedia();
        }
    }, [screen])

    // let handleScreen = (e) => {
    //     e.preventDefault(); // Add this
    //     setScreen(!screen);
    // }

    let [screenLoading, setScreenLoading] = useState(false);

    let handleScreen = (e) => {
        e.preventDefault();
        
        if (screenLoading) return; // Prevent multiple clicks
        
        setScreenLoading(true);
        
        if (screen) {
            // Stop screen sharing
            try {
                let tracks = localVideoref.current.srcObject.getTracks()
                tracks.forEach(track => track.stop())
            } catch (e) { console.log(e) }
            
            setScreen(false);
            setScreenLoading(false);
            getUserMedia();
        } else {
            // Start screen sharing
            setScreen(true);
            setTimeout(() => setScreenLoading(false), 1000); // Reset after 1 second
        }
    }



    let handleEndCall = () => {
        try {
            let tracks = localVideoref.current.srcObject.getTracks()
            tracks.forEach(track => track.stop())
        } catch (e) { }
        window.location.href = "/"
    }

    // low bandwidth
    // Add this function
    let handleSlideToggle = (e) => {
        e.preventDefault();
        setSlideMode(!slideMode);
        if (!slideMode) {
            setNewMessages(0); // Reset chat badge when opening slides
        }
    }

    let openChat = () => {
        setModal(true);
        setNewMessages(0);
    }
    let closeChat = () => {
        setModal(false);
    }
    let handleMessage = (e) => {
        setMessage(e.target.value);
    }

    // const addMessage = (data, sender, socketIdSender) => {
    //     // Only add message if it's NOT from yourself (prevents double messages)
    //     if (socketIdSender !== socketIdRef.current) {
    //         setMessages((prevMessages) => [
    //             ...prevMessages,
    //             { sender: sender, data: data }
    //         ]);
    //         setNewMessages((prevNewMessages) => prevNewMessages + 1);
    //     }
    // };

    const addMessage = (data, sender, socketIdSender) => {
        // Check if this exact message already exists (prevent duplicates)
        setMessages((prevMessages) => {
            const isDuplicate = prevMessages.some(msg => 
                msg.sender === sender && 
                msg.data === data && 
                Math.abs(Date.now() - (msg.timestamp || 0)) < 2000 // Within 2 seconds
            );
            
            if (isDuplicate) {
                console.log("Duplicate message detected, ignoring");
                return prevMessages;
            }
            
            const newMessage = {
                sender: sender,
                data: data,
                timestamp: Date.now()
            };
            
            return [...prevMessages, newMessage];
        });
        
        setNewMessages((prevNewMessages) => prevNewMessages + 1);
    };



    let sendMessage = (e) => {
         e.preventDefault();
    
        // Add message immediately to UI (optimistic update)
        const newMessage = { sender: username, data: message };
        setMessages(prevMessages => [...prevMessages, newMessage]);


        console.log(socketRef.current);
        socketRef.current.emit('chat-message', message, username)
        setMessage("");

        // this.setState({ message: "", sender: username })
    }

    
    let connect = (e) => {
        e.preventDefault(); // Add this just in case
        setAskForUsername(false);
        getMedia();
    }


    return (
        <div>
            

            {askForUsername === true ?

                <div>


                    <h2>Enter into Live Class </h2>
                    <TextField id="outlined-basic" label="Username" value={username} onChange={e => setUsername(e.target.value)} variant="outlined" />
                    <Button variant="contained" onClick={connect}>Connect</Button>


                    <div>
                        <video ref={localVideoref} autoPlay muted></video>
                    </div>

                </div> :


                <div className={styles.meetVideoContainer}>

                    {showModal ? <div className={styles.chatRoom}>

                        <div className={styles.chatContainer}>
                            <h1>Chat</h1>

                            {/* <div className={styles.chattingDisplay}>

                                {messages.length !== 0 ? messages.map((item, index) => {

                                    console.log(messages)
                                    return (
                                        <div style={{ marginBottom: "20px" }} key={index}>
                                            <p style={{ fontWeight: "bold" }}>{item.sender}</p>
                                            <p>{item.data}</p>
                                        </div>
                                    )
                                }) : <p>No Messages Yet</p>}


                            </div> */}

                        
                            <div className={styles.chattingDisplay} ref={chatContainerRef}>
                                {messages.length !== 0 ? (
                                    messages.map((item, index) => (
                                    <div style={{ marginBottom: "20px" }} key={index}>
                                        <p style={{ fontWeight: "bold" }}>{item.sender}</p>
                                        <p>{item.data}</p>
                                    </div>
                                    ))
                                ) : (
                                    <p>No Messages Yet</p>
                                )}
                            </div>


                            <div className={styles.chattingArea}>
                                <TextField value={message} onChange={(e) => setMessage(e.target.value)}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            sendMessage(e);
                                        }
                                    }}
                                 id="outlined-basic" label="Enter Your chat" variant="outlined" />
                                <Button variant='contained' onClick={sendMessage}>Send</Button>
                            </div>


                        </div>
                    </div> : <></>}

                    {/* low bandwidth */}
                    {/* ADD THIS NEW SLIDE PANEL */}
                    
                    {/* {slideMode ? (
                        <div className={styles.chatRoom}>
                            <div className={styles.chatContainer}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                    <h1>Slides</h1>
                                    <Button onClick={() => setSlideMode(false)} size="small">Close</Button>
                                </div>

                                
                                {console.log('Role check - userData?.role:', userData?.role)}
                                {console.log('Is teacher?', userData?.role === 'teacher')}
                                                    
                                {userData?.role === 'teacher' ? (
                                    
                                    <TeacherUploadSlides 
                                        roomId={meetingCode}
                                        socket={socketRef.current}
                                    />
                                    
                                ) : (
                                    <StudentSlidesViewer 
                                        roomId={meetingCode}
                                        socket={socketRef.current}
                                    />
                                )}
                            </div>
                        </div>
                    ) : null} */}

                        {/* full screen file */}
                    {slideMode && (
                        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
                            <div className="modal-dialog modal-fullscreen">
                                <div className="modal-content bg-dark text-white">
                                    <div className="modal-header border-0">
                                        <h5 className="modal-title">Slides</h5>
                                        <button
                                            type="button"
                                            className="btn-close btn-close-white"
                                            onClick={() => setSlideMode(false)}
                                        ></button>
                                        </div>
                                        <div className="modal-body d-flex justify-content-center align-items-center">
                                        {userData?.role === "teacher" ? (
                                            <TeacherUploadSlides roomId={meetingCode} socket={socketRef.current} />
                                        ) : (
                                            <StudentSlidesViewer roomId={meetingCode} socket={socketRef.current} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}



                    <div className={styles.buttonContainers}>
                        <IconButton onClick={handleVideo} style={{ color: "white" }}>
                            {(video === true) ? <VideocamIcon /> : <VideocamOffIcon />}
                        </IconButton>
                        <IconButton onClick={handleEndCall} style={{ color: "red" }}>
                            <CallEndIcon  />
                        </IconButton>
                        <IconButton onClick={handleAudio} style={{ color: "white" }}>
                            {audio === true ? <MicIcon /> : <MicOffIcon />}
                        </IconButton>
                        
                        {console.log("Render check:", screenAvailable, screen)}
                        {/* {screenAvailable === true ? (
                            // <IconButton onClick={handleScreen} style={{ color: "white" }}>
                            //     {screen === true ? <ScreenShareIcon /> : <StopScreenShareIcon />}
                            // </IconButton> : <></>}

                            <IconButton 
                                onClick={handleScreen} 
                                style={{ color: screenLoading ? "gray" : "white" }}
                                disabled={screenLoading}
                            >
                                {screen ?  <StopScreenShareIcon /> : <ScreenShareIcon /> }
                            </IconButton>
                            ) : null } */}

                        {screenAvailable === true ?
                            <IconButton onClick={handleScreen} style={{ color: "white" }}>
                                {screen === true ? <ScreenShareIcon /> : <StopScreenShareIcon />}
                            </IconButton> : <></>}

                        
                        {/* PollComponent */}
                        <PollComponent 
                            socketRef={socketRef} 
                            username={userData?.name} 
                            userRole={userData?.role} 
                            meetingCode={meetingCode}
                        />

                        {/* // low bandwidth Add this button after the PollComponent and before the Chat badge */}
                        <IconButton onClick={handleSlideToggle} style={{ color: slideMode ? "orange" : "white" }}>
                            <SlideshowIcon />
                        </IconButton>

                        <Badge badgeContent={newMessages} max={999} color='orange'>
                            <IconButton onClick={() => setModal(!showModal)} style={{ color: "white" }}>
                                <ChatIcon />                        </IconButton>
                        </Badge>

                    </div>


                    <video className={styles.meetUserVideo} ref={localVideoref} autoPlay muted></video>

                    <div className={styles.conferenceView}>
                        {videos.map((video) => (
                            <div key={video.socketId}>
                                <video

                                    data-socket={video.socketId}
                                    ref={ref => {
                                        if (ref && video.stream) {
                                            ref.srcObject = video.stream;
                                        }
                                    }}
                                    autoPlay
                                >
                                </video>
                            </div>

                        ))}

                    </div>

                </div>

            }

        </div>
    )
}