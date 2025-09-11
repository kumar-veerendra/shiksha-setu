import React, { useState, useEffect } from "react";
import ProfileModal from "./ProfileModal";
import { Link } from "react-router-dom";

const StuNavbar = ({ user, setUser }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState("good");
  const [dataUsage, setDataUsage] = useState(15.2);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Monitor connection status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleLogout = () => {
    console.log("User logged out");
    // implement logout logic here
  };

  const getConnectionColor = () => {
    if (!isOnline) return "text-danger";
    switch(connectionStatus) {
      case "good": return "text-success";
      case "poor": return "text-warning";
      default: return "text-secondary";
    }
  };

  const getConnectionIcon = () => {
    if (!isOnline) return "❌";
    switch(connectionStatus) {
      case "good": return "📶";
      case "poor": return "📶⚠️";
      default: return "📶";
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid px-3">
          
          {/* Logo & Brand */}
          <Link className="navbar-brand d-flex align-items-center" to="/student-dashboard">
            <img 
              src="./logo.png" 
              alt="Government of Rajasthan Logo" 
              style={{ 
                height: "40px", 
                width: "auto", 
                borderRadius: "6px",
                marginRight: "0.5rem"
              }} 
            />
            <span className="fw-bold text-primary d-none d-sm-block" style={{fontSize: "0.9rem"}}>
              Rural Classroom
            </span>
          </Link>

          {/* Connection Status - Always Visible */}
          <div className="d-flex align-items-center me-3">
            <small className={`${getConnectionColor()} fw-bold`}>
              <span className="me-1">{getConnectionIcon()}</span>
              <span className="d-none d-md-inline">
                {!isOnline ? "Offline" : connectionStatus}
              </span>
            </small>
            <small className="text-muted ms-2 d-none d-sm-inline">
              📊 {dataUsage}MB
            </small>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="navbar-toggler border-0" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Menu - Complete Student Features */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              {/* Access Classroom Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="me-1">📚</span>Classroom
                </a>
                <ul className="dropdown-menu shadow-sm">
                  <li><Link className="dropdown-item" to="/live-classes">
                    <span className="me-2">📡</span>Live Classes
                  </Link></li>
                  <li><Link className="dropdown-item" to="/recorded-lectures">
                    <span className="me-2">🎥</span>Recorded Lectures
                  </Link></li>
                  <li><Link className="dropdown-item" to="/notes-materials">
                    <span className="me-2">📄</span>Notes & Materials
                  </Link></li>
                </ul>
              </li>
              
              {/* Assignment Section Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="me-1">📝</span>Assignments
                </a>
                <ul className="dropdown-menu shadow-sm">
                  <li><Link className="dropdown-item" to="/submit-assignments">
                    <span className="me-2">📤</span>Submit Assignments
                  </Link></li>
                  <li><Link className="dropdown-item" to="/track-submissions">
                    <span className="me-2">📊</span>Track Submissions
                  </Link></li>
                  <li><Link className="dropdown-item" to="/view-grades">
                    <span className="me-2">🎯</span>View Grades
                  </Link></li>
                </ul>
              </li>
              
              {/* Profile Dashboard Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="me-1">👤</span>Profile
                </a>
                <ul className="dropdown-menu shadow-sm">
                  <li><Link className="dropdown-item" to="/attendance-tracker">
                    <span className="me-2">📅</span>Attendance Tracker
                  </Link></li>
                  <li><Link className="dropdown-item" to="/progress-reports">
                    <span className="me-2">📈</span>Progress Reports
                  </Link></li>
                  <li><Link className="dropdown-item" to="/notices">
                    <span className="me-2">📢</span>Notices
                  </Link></li>
                </ul>
              </li>
              
              {/* Offline Content - Critical for Rural Education */}
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-success" to="/offline-content">
                  <span className="me-1">💾</span>Offline
                </Link>
              </li>
            </ul>

            {/* User Profile Dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-link dropdown-toggle d-flex align-items-center text-decoration-none border-0 p-0"
                type="button"
                id="userDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user?.profilePic ? (
                  <img 
                    src={user.profilePic} 
                    alt="Profile" 
                    className="rounded-circle border"
                    style={{width: "35px", height: "35px", objectFit: "cover"}}
                  />
                ) : (
                  <div 
                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold border"
                    style={{width: "35px", height: "35px", fontSize: "0.9rem"}}
                  >
                    {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                  </div>
                )}
                <span className="ms-2 d-none d-md-inline fw-semibold text-dark">
                  {user?.name || "Student"}
                </span>
              </button>

              {/* Profile Dropdown Menu */}
              <ul className="dropdown-menu dropdown-menu-end shadow border-0" aria-labelledby="userDropdown">
                <li>
                  <div className="dropdown-item-text border-bottom pb-2 mb-2">
                    <div className="fw-semibold">{user?.name || "Student"}</div>
                    <small className="text-muted">{user?.email || "No email"}</small>
                  </div>
                </li>
                
                <li>
                  <button 
                    className="dropdown-item" 
                    type="button"
                    onClick={() => setModalOpen(true)}
                  >
                    <span className="me-2">✏️</span>
                    Edit Profile
                  </button>
                </li>
                
                {/* Rural-Specific Options */}
                <li>
                  <Link className="dropdown-item" to="/data-settings">
                    <span className="me-2">⚙️</span>
                    Data Settings
                  </Link>
                </li>
                
                <li>
                  <Link className="dropdown-item" to="/download-manager">
                    <span className="me-2">📥</span>
                    Download Manager
                  </Link>
                </li>
                
                <li>
                  <button className="dropdown-item" type="button">
                    <span className="me-2">🔄</span>
                    Sync Offline Content
                  </button>
                </li>
                
                <li><hr className="dropdown-divider" /></li>
                
                <li>
                  <Link className="dropdown-item" to="/help">
                    <span className="me-2">📞</span>
                    Help & Support
                  </Link>
                </li>
                
                <li>
                  <button 
                    className="dropdown-item text-danger" 
                    type="button"
                    onClick={handleLogout}
                  >
                    <span className="me-2">🚪</span>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation - Essential for Rural Students */}
      <nav className="navbar fixed-bottom bg-white border-top d-lg-none" style={{zIndex: 1030}}>
        <div className="container-fluid p-0">
          <div className="row g-0 w-100 text-center">
            <div className="col-3">
              <Link to="/live-classes" className="text-decoration-none text-dark d-block p-2">
                <div style={{fontSize: "1.2rem"}}>📡</div>
                <small className="d-block">Live</small>
              </Link>
            </div>
            
            <div className="col-3">
              <Link to="/submit-assignments" className="text-decoration-none text-dark d-block p-2">
                <div style={{fontSize: "1.2rem"}}>📝</div>
                <small className="d-block">Tasks</small>
              </Link>
            </div>
            
            <div className="col-3">
              <Link to="/view-grades" className="text-decoration-none text-primary d-block p-2">
                <div style={{fontSize: "1.2rem"}}>🎯</div>
                <small className="d-block">Grades</small>
              </Link>
            </div>
            
            <div className="col-3">
              <Link to="/offline-content" className="text-decoration-none text-success d-block p-2">
                <div style={{fontSize: "1.2rem"}}>💾</div>
                <small className="d-block">Offline</small>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Profile Modal */}
      {modalOpen && (
        <ProfileModal 
          user={user} 
          setUser={setUser} 
          setModalOpen={setModalOpen} 
        />
      )}
    </>
  );
};

export default StuNavbar;