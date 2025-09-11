// VideoMeetTest.jsx
import React, { useState, useRef, useEffect } from 'react';
import useVideoMeet from './useVideoMeet.js'; // Import your hook

export default function VideoMeetTest() {
  const [serverUrl, setServerUrl] = useState('http://localhost:3001');
  const [meetingId, setMeetingId] = useState('test-room');
  const [username, setUsername] = useState('TestUser');
  
  const videoMeet = useVideoMeet({
    serverUrl: serverUrl,
    meetingId: meetingId,
    username: username,
    role: 'student',
    initialVideo: true,
    initialAudio: true
  });

  // Debug info
  const [debugInfo, setDebugInfo] = useState('');
  const [permissionStatus, setPermissionStatus] = useState('Not requested');

  useEffect(() => {
    const updateDebugInfo = () => {
      const videoElement = videoMeet.localVideoRef.current;
      if (videoElement) {
        setDebugInfo(
          `Video Element Debug:
- srcObject: ${videoElement.srcObject ? 'Set' : 'Not set'}
- videoWidth: ${videoElement.videoWidth}
- videoHeight: ${videoElement.videoHeight}
- readyState: ${videoElement.readyState}
- paused: ${videoElement.paused}
- muted: ${videoElement.muted}
- autoplay: ${videoElement.autoplay}`
        );
      }
    };

    const interval = setInterval(updateDebugInfo, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleConnect = async () => {
    try {
      setPermissionStatus('Requesting permissions...');
      await videoMeet.connect();
      setPermissionStatus('Connected successfully');
    } catch (error) {
      setPermissionStatus(`Error: ${error.message}`);
      console.error('Connection error:', error);
    }
  };

  const handleDisconnect = () => {
    videoMeet.disconnect();
    setPermissionStatus('Disconnected');
  };

  return (
    <>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <div className="bg-dark text-white min-vh-100 py-4">
        <div className="container">
          <h1 className="text-center mb-4">Video Meet Test</h1>
          
          {/* Connection Settings */}
          <div className="card bg-secondary mb-4">
            <div className="card-body">
              <h5 className="card-title">Connection Settings</h5>
              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label">Server URL</label>
                  <input
                    type="text"
                    className="form-control bg-dark text-white border-secondary"
                    value={serverUrl}
                    onChange={(e) => setServerUrl(e.target.value)}
                    placeholder="http://localhost:3001"
                    disabled={videoMeet.connected}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Meeting ID</label>
                  <input
                    type="text"
                    className="form-control bg-dark text-white border-secondary"
                    value={meetingId}
                    onChange={(e) => setMeetingId(e.target.value)}
                    placeholder="room123"
                    disabled={videoMeet.connected}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control bg-dark text-white border-secondary"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Your name"
                    disabled={videoMeet.connected}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="card bg-secondary mb-4">
            <div className="card-body">
              <h5 className="card-title">Status</h5>
              <div className="row">
                <div className="col-sm-6 col-md-3 mb-2">
                  <strong>Connected:</strong> 
                  <span className={`ms-2 ${videoMeet.connected ? 'text-success' : 'text-danger'}`}>
                    {videoMeet.connected ? 'Yes' : 'No'}
                  </span>
                </div>
                <div className="col-sm-6 col-md-3 mb-2">
                  <strong>Video:</strong> 
                  <span className={`ms-2 ${videoMeet.videoOn ? 'text-success' : 'text-danger'}`}>
                    {videoMeet.videoOn ? 'On' : 'Off'}
                  </span>
                </div>
                <div className="col-sm-6 col-md-3 mb-2">
                  <strong>Audio:</strong> 
                  <span className={`ms-2 ${videoMeet.audioOn ? 'text-success' : 'text-danger'}`}>
                    {videoMeet.audioOn ? 'On' : 'Off'}
                  </span>
                </div>
                <div className="col-sm-6 col-md-3 mb-2">
                  <strong>Permission:</strong> 
                  <span className="ms-2 text-warning">
                    {permissionStatus}
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <strong>Remote Videos:</strong> 
                <span className="ms-2 text-info">
                  {videoMeet.remoteVideos.length} connected
                </span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="card bg-secondary mb-4">
            <div className="card-body">
              <h5 className="card-title">Controls</h5>
              <div className="d-flex flex-wrap gap-3">
                <button
                  onClick={videoMeet.connected ? handleDisconnect : handleConnect}
                  className={`btn ${videoMeet.connected ? 'btn-danger' : 'btn-success'}`}
                >
                  {videoMeet.connected ? '📞 Disconnect' : '📞 Connect'}
                </button>
                
                <button
                  onClick={videoMeet.toggleVideo}
                  disabled={!videoMeet.connected}
                  className={`btn ${videoMeet.videoOn ? 'btn-primary' : 'btn-outline-secondary'}`}
                >
                  {videoMeet.videoOn ? '📹 Turn Off Video' : '📹 Turn On Video'}
                </button>
                
                <button
                  onClick={videoMeet.toggleAudio}
                  disabled={!videoMeet.connected}
                  className={`btn ${videoMeet.audioOn ? 'btn-primary' : 'btn-outline-secondary'}`}
                >
                  {videoMeet.audioOn ? '🎤 Mute' : '🎤 Unmute'}
                </button>

                <button
                  onClick={videoMeet.toggleScreen}
                  disabled={!videoMeet.connected}
                  className={`btn ${videoMeet.screenOn ? 'btn-warning' : 'btn-outline-secondary'}`}
                >
                  {videoMeet.screenOn ? '🖥️ Stop Sharing' : '🖥️ Share Screen'}
                </button>
              </div>
            </div>
          </div>

          {/* Video Display */}
          <div className="card bg-secondary mb-4">
            <div className="card-body">
              <h5 className="card-title">Local Video</h5>
              <div className="position-relative bg-black rounded overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <video
                  ref={videoMeet.localVideoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                  onLoadedMetadata={(e) => {
                    console.log('✅ Video loaded metadata:', {
                      videoWidth: e.target.videoWidth,
                      videoHeight: e.target.videoHeight,
                      duration: e.target.duration
                    });
                    setPermissionStatus('Video stream loaded');
                  }}
                  onError={(e) => {
                    console.error('❌ Video element error:', e);
                    setPermissionStatus('Video error');
                  }}
                />
                {!videoMeet.videoOn && (
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-secondary">
                    <div className="text-center">
                      <div style={{ fontSize: '64px' }}>📷</div>
                      <p className="mt-2">Camera Off</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Remote Videos */}
          {videoMeet.remoteVideos.length > 0 && (
            <div className="card bg-secondary mb-4">
              <div className="card-body">
                <h5 className="card-title">Remote Videos ({videoMeet.remoteVideos.length})</h5>
                <div className="row g-3">
                  {videoMeet.remoteVideos.map((remoteVideo, index) => (
                    <div key={remoteVideo.socketId} className="col-md-6 col-lg-4">
                      <div className="position-relative bg-black rounded overflow-hidden" style={{ aspectRatio: '16/9' }}>
                        <video
                          ref={(el) => {
                            if (el && remoteVideo.stream) {
                              el.srcObject = remoteVideo.stream;
                            }
                          }}
                          autoPlay
                          playsInline
                          className="w-100 h-100"
                          style={{ objectFit: 'cover' }}
                        />
                        <div className="position-absolute bottom-0 start-0 bg-dark bg-opacity-75 text-white px-2 py-1 small">
                          Remote {index + 1}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Debug Info */}
          <div className="card bg-secondary">
            <div className="card-body">
              <h5 className="card-title">Debug Information</h5>
              <pre className="bg-dark text-light p-3 rounded small overflow-auto">{debugInfo}</pre>
              
              <div className="mt-3">
                <button
                  onClick={() => {
                    console.log('=== MANUAL DEBUG INFO ===');
                    console.log('localVideoRef.current:', videoMeet.localVideoRef.current);
                    console.log('Video element srcObject:', videoMeet.localVideoRef.current?.srcObject);
                    console.log('Video element properties:', {
                      videoWidth: videoMeet.localVideoRef.current?.videoWidth,
                      videoHeight: videoMeet.localVideoRef.current?.videoHeight,
                      readyState: videoMeet.localVideoRef.current?.readyState,
                      paused: videoMeet.localVideoRef.current?.paused
                    });
                    
                    // Check if getUserMedia is supported
                    console.log('getUserMedia support:', !!navigator.mediaDevices?.getUserMedia);
                    console.log('getDisplayMedia support:', !!navigator.mediaDevices?.getDisplayMedia);
                    
                    // Check permissions
                    if (navigator.permissions) {
                      navigator.permissions.query({name: 'camera'}).then(result => {
                        console.log('Camera permission:', result.state);
                      }).catch(e => console.log('Camera permission check failed:', e));
                      
                      navigator.permissions.query({name: 'microphone'}).then(result => {
                        console.log('Microphone permission:', result.state);
                      }).catch(e => console.log('Microphone permission check failed:', e));
                    }

                    // Check available devices
                    if (navigator.mediaDevices?.enumerateDevices) {
                      navigator.mediaDevices.enumerateDevices().then(devices => {
                        console.log('Available devices:', devices.filter(d => d.kind === 'videoinput' || d.kind === 'audioinput'));
                      }).catch(e => console.log('Device enumeration failed:', e));
                    }

                    // Test simple getUserMedia
                    if (navigator.mediaDevices?.getUserMedia) {
                      navigator.mediaDevices.getUserMedia({ video: true, audio: false })
                        .then(stream => {
                          console.log('✅ Simple getUserMedia test successful:', stream);
                          console.log('Video tracks:', stream.getVideoTracks());
                          // Clean up test stream
                          stream.getTracks().forEach(track => track.stop());
                        })
                        .catch(error => {
                          console.log('❌ Simple getUserMedia test failed:', error);
                        });
                    }
                  }}
                  className="btn btn-primary me-3"
                >
                  Log Debug Info to Console
                </button>

                <button
                  onClick={() => {
                    // Test direct video element
                    const videoEl = videoMeet.localVideoRef.current;
                    if (videoEl) {
                      console.log('=== VIDEO ELEMENT TEST ===');
                      console.log('Video element exists:', !!videoEl);
                      console.log('Video srcObject:', videoEl.srcObject);
                      console.log('Video readyState:', videoEl.readyState);
                      console.log('Video networkState:', videoEl.networkState);
                      console.log('Video paused:', videoEl.paused);
                      console.log('Video muted:', videoEl.muted);
                      console.log('Video autoplay:', videoEl.autoplay);
                      console.log('Video controls:', videoEl.controls);
                      
                      // Try to play manually
                      videoEl.play().then(() => {
                        console.log('✅ Manual play() successful');
                      }).catch(e => {
                        console.log('❌ Manual play() failed:', e);
                      });
                    }
                  }}
                  className="btn btn-info"
                >
                  Test Video Element
                </button>
              </div>

              {/* Quick Actions */}
              <div className="mt-4">
                <h6>Quick Actions:</h6>
                <div className="d-flex flex-wrap gap-2">
                  <button
                    onClick={async () => {
                      try {
                        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
                        console.log('Direct camera access successful:', stream);
                        videoMeet.localVideoRef.current.srcObject = stream;
                        setTimeout(() => stream.getTracks().forEach(track => track.stop()), 5000);
                      } catch (error) {
                        console.error('Direct camera access failed:', error);
                        alert(`Camera access failed: ${error.message}`);
                      }
                    }}
                    className="btn btn-sm btn-outline-primary"
                  >
                    Test Direct Camera Access
                  </button>

                  <button
                    onClick={() => {
                      const videoEl = videoMeet.localVideoRef.current;
                      if (videoEl && videoEl.srcObject) {
                        videoEl.load();
                        videoEl.play();
                      }
                    }}
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Force Video Reload
                  </button>

                  <button
                    onClick={() => {
                      if (videoMeet.localVideoRef.current) {
                        const rect = videoMeet.localVideoRef.current.getBoundingClientRect();
                        console.log('Video element position:', rect);
                        console.log('Video element visible:', rect.width > 0 && rect.height > 0);
                      }
                    }}
                    className="btn btn-sm btn-outline-info"
                  >
                    Check Video Visibility
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bootstrap JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}