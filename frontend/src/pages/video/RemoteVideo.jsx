// /src/pages/video/RemoteVideo.jsx
import React, { useRef, useEffect } from "react";

function RemoteVideo({ stream }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div className="video-box remote-video">
      {stream ? (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="video-element"
        />
      ) : (
        <p className="video-placeholder">Waiting for participant...</p>
      )}
      <p className="video-label">Participant</p>
    </div>
  );
}

export default RemoteVideo;
