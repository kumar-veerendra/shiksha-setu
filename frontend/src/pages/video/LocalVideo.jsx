// /src/pages/video/LocalVideo.jsx
import React, { useRef, useEffect } from "react";

function LocalVideo({ stream }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div className="video-box local-video">
      <video
        ref={videoRef}
        autoPlay
        muted // 🔇 to avoid echo from your own mic
        playsInline
        className="video-element"
      />
      <p className="video-label">You</p>
    </div>
  );
}

export default LocalVideo;
