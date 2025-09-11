import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { 
  Video, VideoOff, Mic, MicOff, Phone, MessageCircle, Send, Users, Clock 
} from 'lucide-react';

const StudentClassroom = () => {
  // Socket & meeting state
  const [socket, setSocket] = useState(null);
  const [meetingCode, setMeetingCode] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('disconnected'); // 'disconnected', 'connecting', 'waiting', 'connected'
  const [waitingMessage, setWaitingMessage] = useState('');

  // Video/Audio
  const [localStream, setLocalStream] = useState(null);
  const [remoteStreams, setRemoteStreams] = useState({});
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [peers, setPeers] = useState({});

  // Chat
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [showChat, setShowChat] = useState(false);

  // Users
  const [connectedUsers, setConnectedUsers] = useState([]);
  const [studentName, setStudentName] = useState('');

  // Refs
  const localVideoRef = useRef(null);
  const remoteVideoRefs = useRef({});
  const chatContainerRef = useRef(null);

  // ICE servers
  const iceServers = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };

  // Socket init
  useEffect(() => {
    // Initialize Socket.IO connection
    const newSocket = io('http://localhost:8000', {
        transports: ['websocket'], // force WebSocket
        reconnectionAttempts: 5,    // try reconnecting 5 times
        timeout: 5000               // 5s timeout for connection
    });

    // Connection successful
    newSocket.on('connect', () => {
        console.log('Connected to server:', newSocket.id);
        setConnectionStatus('connected');
    });

    // Connection lost
    newSocket.on('disconnect', (reason) => {
        console.log('Disconnected from server:', reason);
        setConnectionStatus('disconnected');
    });

    newSocket.on('waiting', (message) => {
      setConnectionStatus('waiting');
      setWaitingMessage(message);
    });

    newSocket.on('class-started', () => {
      setConnectionStatus('connected');
      setWaitingMessage('');
    });

    newSocket.on('class-ended', () => {
      alert('The teacher has ended the class');
      leaveCall();
    });

    newSocket.on('user-joined', (socketId, allUsers) => {
      setConnectedUsers(allUsers);
      if (socketId !== newSocket.id) createPeerConnection(socketId, newSocket);
    });

    newSocket.on('user-left', (socketId) => {
      if (peers[socketId]) peers[socketId].close();
      setPeers(prev => { const p = { ...prev }; delete p[socketId]; return p; });
      setRemoteStreams(prev => { const r = { ...prev }; delete r[socketId]; return r; });
      setConnectedUsers(prev => prev.filter(id => id !== socketId));
    });

    newSocket.on('signal', (fromId, message) => handleSignalingMessage(fromId, message, newSocket));
    newSocket.on('chat-message', (data, sender) => setMessages(prev => [...prev, { data, sender, timestamp: new Date() }]));

    setSocket(newSocket);
    return () => newSocket.disconnect();
  }, []);

  // Get user media
  const getUserMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setLocalStream(stream);
      if (localVideoRef.current) localVideoRef.current.srcObject = stream;
      return stream;
    } catch (err) {
      alert('Please allow camera and microphone access');
      throw err;
    }
  };

  // Peer connection
  const createPeerConnection = (socketId, socketInstance) => {
    const pc = new RTCPeerConnection(iceServers);
    if (localStream) localStream.getTracks().forEach(track => pc.addTrack(track, localStream));

    pc.ontrack = (event) => {
      setRemoteStreams(prev => ({ ...prev, [socketId]: event.streams[0] }));
    };

    pc.onicecandidate = (event) => {
      if (event.candidate) socketInstance.emit('signal', socketId, { type: 'ice-candidate', candidate: event.candidate });
    };

    setPeers(prev => ({ ...prev, [socketId]: pc }));
    return pc;
  };

  // Signaling
  const handleSignalingMessage = async (fromId, message, socketInstance) => {
    let pc = peers[fromId] || createPeerConnection(fromId, socketInstance);
    try {
      switch (message.type) {
        case 'offer':
          await pc.setRemoteDescription(new RTCSessionDescription(message));
          const answer = await pc.createAnswer();
          await pc.setLocalDescription(answer);
          socketInstance.emit('signal', fromId, { type: 'answer', sdp: answer.sdp });
          break;
        case 'answer':
          await pc.setRemoteDescription(new RTCSessionDescription(message));
          break;
        case 'ice-candidate':
          await pc.addIceCandidate(new RTCIceCandidate(message.candidate));
          break;
      }
    } catch (err) { console.error(err); }
  };

  // Join meeting
  const joinMeeting = async () => {
    if (!meetingCode.trim() || !studentName.trim()) return alert('Enter both name & meeting code');
    setConnectionStatus('connecting');
    await getUserMedia();
    socket.emit('join-call', meetingCode.trim());
  };

  // Leave call
  const leaveCall = () => {
    if (localStream) localStream.getTracks().forEach(t => t.stop());
    Object.values(peers).forEach(pc => pc.close());
    setPeers({}); setRemoteStreams({}); setConnectionStatus('disconnected');
    setConnectedUsers([]); setMessages([]); setMeetingCode(''); setStudentName('');
    if (socket) { socket.removeAllListeners(); socket.disconnect(); }
  };

  // Toggle video/audio
  const toggleVideo = () => {
    if (localStream) { const t = localStream.getVideoTracks()[0]; t && (t.enabled = !t.enabled); setIsVideoOn(t.enabled); }
  };
  const toggleAudio = () => {
    if (localStream) { const t = localStream.getAudioTracks()[0]; t && (t.enabled = !t.enabled); setIsAudioOn(t.enabled); }
  };

  // Send chat
  const sendMessage = () => {
    if (newMessage.trim() && socket) { socket.emit('chat-message', newMessage.trim(), studentName); setNewMessage(''); }
  };

  useEffect(() => { if (chatContainerRef.current) chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight; }, [messages]);
  useEffect(() => { Object.entries(remoteStreams).forEach(([id, stream]) => { if (remoteVideoRefs.current[id]) remoteVideoRefs.current[id].srcObject = stream; }); }, [remoteStreams]);

  // Connection UI
  if (connectionStatus === 'connecting' || connectionStatus === 'waiting') {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
        <div className="card text-center p-4 bg-secondary text-light">
          {connectionStatus === 'connecting' ? (
            <>
              <div className="spinner-border text-primary mb-3" role="status"></div>
              <h5>Connecting to class...</h5>
              <p>Please allow camera & microphone</p>
            </>
          ) : (
            <>
              <Clock className="mb-3" size={48} color="#0d6efd" />
              <h5>Waiting for Class</h5>
              <p>{waitingMessage}</p>
              <button className="btn btn-danger mt-3" onClick={leaveCall}>Leave</button>
            </>
          )}
        </div>
      </div>
    );
  }

  if (connectionStatus !== 'connected') {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
        <div className="card p-4 bg-secondary text-light" style={{ minWidth: '350px' }}>
          <h3 className="text-center mb-3">Join Classroom</h3>
          <input type="text" placeholder="Your Name" value={studentName} onChange={e => setStudentName(e.target.value)} className="form-control mb-2" />
          <input type="text" placeholder="Meeting Code" value={meetingCode} onChange={e => setMeetingCode(e.target.value)} className="form-control mb-3" />
          <button className="btn btn-primary w-100" onClick={joinMeeting}>Join Class</button>
          <p className="text-center mt-2 small">Connection: {socket ? 'Connected' : 'Connecting...'}</p>
        </div>
      </div>
    );
  }

    // Main classroom
  return (
    <div className="d-flex vh-100 bg-dark">
      {/* Video + controls */}
      <div className={`flex-grow-1 d-flex flex-column ${showChat ? 'me-5' : ''}`}>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center p-3 bg-secondary">
          <div className="d-flex align-items-center">
            <h5 className="text-white me-3 mb-0">Classroom: {meetingCode}</h5>
            <div className="d-flex align-items-center text-light">
              <Users size={16} className="me-1" />
              <span>{connectedUsers.length} participants</span>
            </div>
          </div>
          <div className="text-success">● LIVE</div>
        </div>

        {/* Video grid */}
        <div className="flex-grow-1 p-3 overflow-auto">
          <div className="row g-3 h-100">
            {/* Local video */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="position-relative bg-dark rounded overflow-hidden">
                <video ref={localVideoRef} autoPlay muted playsInline className="w-100 h-100" />
                <div className="position-absolute bottom-0 start-0 bg-dark bg-opacity-75 text-white px-2 py-1 rounded">
                  You ({studentName})
                </div>
                {!isVideoOn && (
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-secondary">
                    <VideoOff size={48} color="#fff" />
                  </div>
                )}
              </div>
            </div>

            {/* Remote videos */}
            {Object.entries(remoteStreams).map(([socketId, stream]) => (
              <div key={socketId} className="col-12 col-md-6 col-lg-4">
                <div className="position-relative bg-dark rounded overflow-hidden">
                  <video
                    ref={el => (remoteVideoRefs.current[socketId] = el)}
                    autoPlay
                    playsInline
                    className="w-100 h-100"
                  />
                  <div className="position-absolute bottom-0 start-0 bg-dark bg-opacity-75 text-white px-2 py-1 rounded">
                    Participant
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="d-flex justify-content-center p-3 bg-secondary">
          <button className={`btn ${isVideoOn ? 'btn-secondary' : 'btn-danger'} me-2`} onClick={toggleVideo}>
            {isVideoOn ? <Video size={20} /> : <VideoOff size={20} />}
          </button>
          <button className={`btn ${isAudioOn ? 'btn-secondary' : 'btn-danger'} me-2`} onClick={toggleAudio}>
            {isAudioOn ? <Mic size={20} /> : <MicOff size={20} />}
          </button>
          <button className={`btn ${showChat ? 'btn-primary' : 'btn-secondary'} me-2`} onClick={() => setShowChat(!showChat)}>
            <MessageCircle size={20} />
          </button>
          <button className="btn btn-danger" onClick={leaveCall}>
            <Phone size={20} />
          </button>
        </div>
      </div>

      {/* Chat sidebar */}
      {showChat && (
        <div className="bg-secondary text-light d-flex flex-column" style={{ width: '300px' }}>
          <div className="p-3 border-bottom border-dark">
            <h6 className="mb-0">Chat</h6>
          </div>

          <div ref={chatContainerRef} className="flex-grow-1 overflow-auto p-3">
            {messages.map((msg, index) => (
              <div key={index} className="bg-dark p-2 rounded mb-2">
                <div className="d-flex justify-content-between mb-1">
                  <span className="text-primary small">{msg.sender}</span>
                  <span className="text-muted small">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <p className="mb-0 small">{msg.data}</p>
              </div>
            ))}
          </div>

          <div className="p-3 border-top border-dark d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button className="btn btn-primary" onClick={sendMessage} disabled={!newMessage.trim()}>
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentClassroom;
