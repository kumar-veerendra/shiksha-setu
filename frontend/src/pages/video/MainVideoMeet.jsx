// /src/pages/video/MainVideoMeet.jsx
import React from "react";
import LocalVideo from "./LocalVideo";
import RemoteVideo from "./RemoteVideo";
import ChatRoom from "./ChatRoom";
import Controls from "./Controls";
import useVideoMeet from "./useVideoMeet";
import "./video.css";


function MainVideoMeet() {
  const {
    localStream,
    remoteStream,
    messages,
    sendMessage,
    toggleMic,
    toggleCamera,
    shareScreen,
    endCall,
  } = useVideoMeet();

  return (
    <div className="video-meet-container">
      {/* Video Section */}
      <div className="video-section">
        <LocalVideo stream={localStream} />
        <RemoteVideo stream={remoteStream} />
      </div>

      {/* Chat + Controls Section */}
      <div className="sidebar">
        <ChatRoom messages={messages} onSend={sendMessage} />
        <Controls
          onMicToggle={toggleMic}
          onCamToggle={toggleCamera}
          onScreenShare={shareScreen}
          onEndCall={endCall}
        />
      </div>
    </div>
  );
}

export default MainVideoMeet;


