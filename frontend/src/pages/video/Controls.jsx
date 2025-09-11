// /src/pages/video/Controls.jsx
import React from "react";
import { FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash, FaDesktop, FaPhoneSlash } from "react-icons/fa";

function Controls({ onMicToggle, onCamToggle, onScreenShare, onEndCall }) {
  const [micOn, setMicOn] = React.useState(true);
  const [camOn, setCamOn] = React.useState(true);

  const handleMicToggle = () => {
    setMicOn(!micOn);
    onMicToggle();
  };

  const handleCamToggle = () => {
    setCamOn(!camOn);
    onCamToggle();
  };

  return (
    <div className="controls">
      {/* Mic */}
      <button className="control-btn" onClick={handleMicToggle}>
        {micOn ? <FaMicrophone /> : <FaMicrophoneSlash />}
      </button>

      {/* Camera */}
      <button className="control-btn" onClick={handleCamToggle}>
        {camOn ? <FaVideo /> : <FaVideoSlash />}
      </button>

      {/* Screen Share */}
      <button className="control-btn" onClick={onScreenShare}>
        <FaDesktop />
      </button>

      {/* End Call */}
      <button className="control-btn end-call" onClick={onEndCall}>
        <FaPhoneSlash />
      </button>
    </div>
  );
}

export default Controls;
