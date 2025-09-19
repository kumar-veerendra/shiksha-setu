// import React, { useState, useEffect } from "react";
// import ProfileModal from "./ProfileModal";
// import { Link } from "react-router-dom";

// const StuNavbar = ({ user, setUser }) => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [connectionStatus, setConnectionStatus] = useState("good");
//   const [dataUsage, setDataUsage] = useState(15.2);
//   const [isOnline, setIsOnline] = useState(navigator.onLine);

//   // Monitor connection status
//   useEffect(() => {
//     const handleOnline = () => setIsOnline(true);
//     const handleOffline = () => setIsOnline(false);
    
//     window.addEventListener('online', handleOnline);
//     window.addEventListener('offline', handleOffline);
    
//     return () => {
//       window.removeEventListener('online', handleOnline);
//       window.removeEventListener('offline', handleOffline);
//     };
//   }, []);

//   const handleLogout = () => {
//     console.log("User logged out");
//     // implement logout logic here
//   };

//   const getConnectionColor = () => {
//     if (!isOnline) return "text-danger";
//     switch(connectionStatus) {
//       case "good": return "text-success";
//       case "poor": return "text-warning";
//       default: return "text-secondary";
//     }
//   };

//   const getConnectionIcon = () => {
//     if (!isOnline) return "❌";
//     switch(connectionStatus) {
//       case "good": return "📶";
//       case "poor": return "📶⚠️";
//       default: return "📶";
//     }
//   };

//   return (
//     <>
//       {/* Main Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
//         <div className="container-fluid px-3">
          
//           {/* Logo & Brand */}
//           <Link className="navbar-brand d-flex align-items-center" to="/student-dashboard">
//             <img 
//               src="./logo.png" 
//               alt="Government of Rajasthan Logo" 
//               style={{ 
//                 height: "40px", 
//                 width: "auto", 
//                 borderRadius: "6px",
//                 marginRight: "0.5rem"
//               }} 
//             />
//             <span className="fw-bold text-primary d-none d-sm-block" style={{fontSize: "0.9rem"}}>
//               Shiksha Setu
//             </span>
//           </Link>

//           {/* Connection Status - Always Visible */}
//           <div className="d-flex align-items-center  ms-auto">
//             <small className={`${getConnectionColor()} fw-bold`}>
//               <span className="me-1">{getConnectionIcon()}</span>
//               <span className="d-none d-md-inline">
//                 {!isOnline ? "Offline" : connectionStatus}
//               </span>
//             </small>
//             <small className="text-muted ms-2 d-none d-sm-inline">
//               📊 {dataUsage}MB
//             </small>
//           </div>

//           {/* Mobile Toggle Button */}
//           <button 
//             className="navbar-toggler border-0" 
//             type="button" 
//             data-bs-toggle="collapse" 
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav" 
//             aria-expanded="false" 
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Navigation Menu - Complete Student Features */}
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
//               {/* Access Classroom Dropdown */}
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   <span className="me-1">📚</span>Classroom
//                 </a>
//                 <ul className="dropdown-menu shadow-sm">
//                   <li><Link className="dropdown-item" to="/live-classes">
//                     <span className="me-2">📡</span>Live Classes
//                   </Link></li>
//                   <li><Link className="dropdown-item" to="/recorded-lectures">
//                     <span className="me-2">🎥</span>Recorded Lectures
//                   </Link></li>
//                   <li><Link className="dropdown-item" to="/notes-materials">
//                     <span className="me-2">📄</span>Notes & Materials
//                   </Link></li>
//                 </ul>
//               </li>
              
//               {/* Assignment Section Dropdown */}
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   <span className="me-1">📝</span>Assignments
//                 </a>
//                 <ul className="dropdown-menu shadow-sm">
//                   <li><Link className="dropdown-item" to="/submit-assignments">
//                     <span className="me-2">📤</span>Submit Assignments
//                   </Link></li>
//                   <li><Link className="dropdown-item" to="/track-submissions">
//                     <span className="me-2">📊</span>Track Submissions
//                   </Link></li>
//                   <li><Link className="dropdown-item" to="/view-grades">
//                     <span className="me-2">🎯</span>View Grades
//                   </Link></li>
//                 </ul>
//               </li>
              
//               {/* Profile Dashboard Dropdown */}
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   <span className="me-1">👤</span>Profile
//                 </a>
//                 <ul className="dropdown-menu shadow-sm">
//                   <li><Link className="dropdown-item" to="/attendance-tracker">
//                     <span className="me-2">📅</span>Attendance Tracker
//                   </Link></li>
//                   <li><Link className="dropdown-item" to="/progress-reports">
//                     <span className="me-2">📈</span>Progress Reports
//                   </Link></li>
//                   <li><Link className="dropdown-item" to="/notices">
//                     <span className="me-2">📢</span>Notices
//                   </Link></li>
//                 </ul>
//               </li>
              
//               {/* Offline Content - Critical for Rural Education */}
//               <li className="nav-item">
//                 <Link className="nav-link fw-semibold text-success" to="/offline-content">
//                   <span className="me-1">💾</span>Offline
//                 </Link>
//               </li>
//             </ul>

//             {/* User Profile Dropdown */}
//             <div className="dropdown">
//               <button
//                 className="btn btn-link dropdown-toggle d-flex align-items-center text-decoration-none border-0 p-0"
//                 type="button"
//                 id="userDropdown"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 {user?.profilePic ? (
//                   <img 
//                     src={user.profilePic} 
//                     alt="Profile" 
//                     className="rounded-circle border"
//                     style={{width: "35px", height: "35px", objectFit: "cover"}}
//                   />
//                 ) : (
//                   <div 
//                     className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold border"
//                     style={{width: "35px", height: "35px", fontSize: "0.9rem"}}
//                   >
//                     {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
//                   </div>
//                 )}
//                 <span className="ms-2 d-none d-md-inline fw-semibold text-dark">
//                   {user?.name || "Student"}
//                 </span>
//               </button>

//               {/* Profile Dropdown Menu */}
//               <ul className="dropdown-menu dropdown-menu-end shadow border-0" aria-labelledby="userDropdown">
//                 <li>
//                   <div className="dropdown-item-text border-bottom pb-2 mb-2">
//                     <div className="fw-semibold">{user?.name || "Student"}</div>
//                     <small className="text-muted">{user?.email || "No email"}</small>
//                   </div>
//                 </li>
                
//                 <li>
//                   <button 
//                     className="dropdown-item" 
//                     type="button"
//                     onClick={() => setModalOpen(true)}
//                   >
//                     <span className="me-2">✏️</span>
//                     Edit Profile
//                   </button>
//                 </li>
                
//                 {/* Rural-Specific Options */}
//                 <li>
//                   <Link className="dropdown-item" to="/data-settings">
//                     <span className="me-2">⚙️</span>
//                     Data Settings
//                   </Link>
//                 </li>
                
//                 <li>
//                   <Link className="dropdown-item" to="/download-manager">
//                     <span className="me-2">📥</span>
//                     Download Manager
//                   </Link>
//                 </li>
                
//                 <li>
//                   <button className="dropdown-item" type="button">
//                     <span className="me-2">🔄</span>
//                     Sync Offline Content
//                   </button>
//                 </li>
                
//                 <li><hr className="dropdown-divider" /></li>
                
//                 <li>
//                   <Link className="dropdown-item" to="/help">
//                     <span className="me-2">📞</span>
//                     Help & Support
//                   </Link>
//                 </li>
                
//                 <li>
//                   <button 
//                     className="dropdown-item text-danger" 
//                     type="button"
//                     onClick={handleLogout}
//                   >
//                     <span className="me-2">🚪</span>
//                     Logout
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Bottom Navigation - Essential for Rural Students */}
//       <nav className="navbar fixed-bottom bg-white border-top d-lg-none" style={{zIndex: 1030}}>
//         <div className="container-fluid p-0">
//           <div className="row g-0 w-100 text-center">
//             <div className="col-3">
//               <Link to="/live-classes" className="text-decoration-none text-dark d-block p-2">
//                 <div style={{fontSize: "1.2rem"}}>📡</div>
//                 <small className="d-block">Live</small>
//               </Link>
//             </div>
            
//             <div className="col-3">
//               <Link to="/submit-assignments" className="text-decoration-none text-dark d-block p-2">
//                 <div style={{fontSize: "1.2rem"}}>📝</div>
//                 <small className="d-block">Tasks</small>
//               </Link>
//             </div>
            
//             <div className="col-3">
//               <Link to="/view-grades" className="text-decoration-none text-primary d-block p-2">
//                 <div style={{fontSize: "1.2rem"}}>🎯</div>
//                 <small className="d-block">Grades</small>
//               </Link>
//             </div>
            
//             <div className="col-3">
//               <Link to="/offline-content" className="text-decoration-none text-success d-block p-2">
//                 <div style={{fontSize: "1.2rem"}}>💾</div>
//                 <small className="d-block">Offline</small>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Profile Modal */}
//       {modalOpen && (
//         <ProfileModal 
//           user={user} 
//           setUser={setUser} 
//           setModalOpen={setModalOpen} 
//         />
//       )}
//     </>
//   );
// };

// export default StuNavbar;





import React, { useState, useEffect } from "react";
import ProfileModal from "./ProfileModal";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const StuNavbar = ({ user, setUser }) => {
  const { userData  } = useAuth();

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
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom">
        <div className="container-fluid px-4">
          
          {/* Logo & Brand */}
          <Link className="navbar-brand d-flex align-items-center" to="/student-dashboard">
            <img 
              src="./logo.png" 
              alt="Government of Rajasthan Logo" 
              style={{ 
                height: "42px", 
                width: "auto", 
                borderRadius: "8px",
                marginRight: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
              }} 
            />
            <div className="d-none d-sm-block">
              <span className="fw-bold text-primary" style={{fontSize: "1.1rem"}}>
                Shiksha Setu
              </span>
              <div className="text-muted" style={{fontSize: "0.75rem", marginTop: "-2px"}}>
                Government of Rajasthan
              </div>
            </div>
          </Link>

          {/* Mobile Toggle Button */}
          <button 
            className="navbar-toggler border-0 shadow-none" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            style={{padding: "8px"}}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">

  {/* Classroom Dropdown */}
  <li className="nav-item dropdown position-relative me-2">
    <a 
      className="nav-link dropdown-toggle fw-medium px-3 py-2" 
      href="#" 
      role="button" 
      data-bs-toggle="dropdown" 
      aria-expanded="false"
    >
      <i className="fas fa-book me-2 text-primary"></i>Classroom
    </a>
    <ul className="dropdown-menu shadow border-0 rounded-3">
      <li><Link className="dropdown-item py-2" to="/live-classes"><i className="fas fa-video me-2 text-danger"></i>Live Classes</Link></li>
      <li><Link className="dropdown-item py-2" to="/recorded-lectures"><i className="fas fa-play-circle me-2 text-info"></i>Recorded Lectures</Link></li>
      <li><Link className="dropdown-item py-2" to="/notes-materials"><i className="fas fa-file-alt me-2 text-secondary"></i>Notes & Materials</Link></li>
    </ul>
  </li>

  {/* Assignments Dropdown */}
  <li className="nav-item dropdown position-relative me-2">
    <a 
      className="nav-link dropdown-toggle fw-medium px-3 py-2" 
      href="#" 
      role="button" 
      data-bs-toggle="dropdown" 
      aria-expanded="false"
    >
      <i className="fas fa-tasks me-2 text-warning"></i>Assignments
    </a>
    <ul className="dropdown-menu shadow border-0 rounded-3">
      <li><Link className="dropdown-item py-2" to="/submit-assignments"><i className="fas fa-upload me-2 text-primary"></i>Submit Assignments</Link></li>
      <li><Link className="dropdown-item py-2" to="/track-submissions"><i className="fas fa-chart-line me-2 text-info"></i>Track Submissions</Link></li>
      <li><Link className="dropdown-item py-2" to="/view-grades"><i className="fas fa-star me-2 text-warning"></i>View Grades</Link></li>
    </ul>
  </li>

  {/* Dashboard Dropdown */}
  <li className="nav-item dropdown position-relative me-2">
    <a 
      className="nav-link dropdown-toggle fw-medium px-3 py-2" 
      href="#" 
      role="button" 
      data-bs-toggle="dropdown" 
      aria-expanded="false"
    >
      <i className="fas fa-chart-bar me-2 text-success"></i>Dashboard
    </a>
    <ul className="dropdown-menu shadow border-0 rounded-3">
      <li><Link className="dropdown-item py-2" to="/attendance-tracker"><i className="fas fa-calendar-check me-2 text-primary"></i>Attendance Tracker</Link></li>
      <li><Link className="dropdown-item py-2" to="/progress-reports"><i className="fas fa-chart-pie me-2 text-success"></i>Progress Reports</Link></li>
      <li><Link className="dropdown-item py-2" to="/notices"><i className="fas fa-bullhorn me-2 text-danger"></i>Notices</Link></li>
    </ul>
  </li>

  {/* Offline Link */}
  <li className="nav-item">
    <Link className="nav-link fw-medium text-success px-3 py-2" to="/offline-content">
      <i className="fas fa-download me-2"></i>Offline
    </Link>
  </li>
</ul>

            {/* Right Side - Connection Status + User Profile */}
            <div className="d-flex align-items-center">
              
              {/* Connection Status */}
              <div className="d-flex align-items-center me-3 px-2 py-1 rounded" style={{backgroundColor: "#f8f9fa"}}>
                <small className={`${getConnectionColor()} fw-bold d-flex align-items-center`}>
                  <span className="me-2" style={{fontSize: "0.9rem"}}>{getConnectionIcon()}</span>
                  <span className="d-none d-md-inline">
                    {!isOnline ? "Offline" : connectionStatus}
                  </span>
                </small>
                <small className="text-muted ms-2 d-none d-lg-inline">
                  <i className="fas fa-chart-bar me-1"></i>{dataUsage}MB
                </small>
              </div>

              {/* User Profile Dropdown - Clean Icon Only */}
              <div className="dropdown position-relative">
                <button
                  className="btn btn-outline-light dropdown-toggle d-flex align-items-center border-0 shadow-sm"
                  type="button"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #e9ecef",
                    borderRadius: "50px",
                    padding: "8px 16px 8px 8px",
                    transition: "all 0.3s ease"
                  }}
                >
                  {/* User Avatar */}
                  {user?.profilePic ? (
                    <img 
                      src={user.profilePic} 
                      alt="Profile" 
                      className="rounded-circle"
                      style={{width: "32px", height: "32px", objectFit: "cover"}}
                    />
                  ) : (
                    <div 
                      className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
                      style={{width: "32px", height: "32px", fontSize: "0.9rem"}}
                    >
                      {userData?.name ? userData.name.charAt(0).toUpperCase() : "S"}
                    </div>
                  )}
                  
                  {/* User Name - Hidden on smaller screens */}
                  <span className="ms-2 d-none d-xl-inline fw-medium text-dark" style={{fontSize: "0.9rem"}}>
                    {userData?.name || "Student"}
                  </span>
                </button>

                {/* Enhanced Dropdown Menu */}
                <ul className="dropdown-menu dropdown-menu-end shadow-lg border-0 rounded-3 mt-2" style={{minWidth: "280px"}}>
                  
                  {/* User Info Header */}
                  <li>
                    <div className="dropdown-item-text bg-light rounded-top p-3 mb-2">
                      <div className="d-flex align-items-center">
                        {user?.profilePic ? (
                          <img 
                            src={user.profilePic} 
                            alt="Profile" 
                            className="rounded-circle me-3"
                            style={{width: "48px", height: "48px", objectFit: "cover"}}
                          />
                        ) : (
                          <div 
                            className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold me-3"
                            style={{width: "48px", height: "48px", fontSize: "1.2rem"}}
                          >
                            {userData?.name ? userData.name.charAt(0).toUpperCase() : "S"}
                          </div>
                        )}
                        <div>
                          <div className="fw-bold text-dark">{userData?.name || "Student Name"}</div>
                          <small className="text-muted">{userData?.username || "student@example.com"}</small>
                          <div>
                            <span className="badge bg-primary rounded-pill" style={{fontSize: "0.7rem"}}>
                              Student
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  
                  {/* Profile Actions */}
                  <li>
                    <button 
                      className="dropdown-item py-2 px-3" 
                      type="button"
                      onClick={() => setModalOpen(true)}
                    >
                      <i className="fas fa-user-edit me-2 text-primary"></i>
                      Edit Profile
                    </button>
                  </li>
                  
                  <li>
                    <Link className="dropdown-item py-2 px-3" to="/account-settings">
                      <i className="fas fa-cog me-2 text-secondary"></i>
                      Account Settings
                    </Link>
                  </li>
                  
                  <li><hr className="dropdown-divider my-2" /></li>
                  
                  {/* Rural-Specific Options */}
                  <li>
                    <Link className="dropdown-item py-2 px-3" to="/data-settings">
                      <i className="fas fa-wifi me-2 text-info"></i>
                      Data Settings
                    </Link>
                  </li>
                  
                  <li>
                    <Link className="dropdown-item py-2 px-3" to="/download-manager">
                      <i className="fas fa-download me-2 text-success"></i>
                      Download Manager
                    </Link>
                  </li>
                  
                  <li>
                    <button className="dropdown-item py-2 px-3" type="button">
                      <i className="fas fa-sync me-2 text-warning"></i>
                      Sync Offline Content
                    </button>
                  </li>
                  
                  <li><hr className="dropdown-divider my-2" /></li>
                  
                  {/* Support & Logout */}
                  <li>
                    <Link className="dropdown-item py-2 px-3" to="/help">
                      <i className="fas fa-question-circle me-2 text-info"></i>
                      Help & Support
                    </Link>
                  </li>
                  
                  <li>
                    <button 
                      className="dropdown-item py-2 px-3 text-danger fw-medium" 
                      type="button"
                      onClick={handleLogout}
                    >
                      <i className="fas fa-sign-out-alt me-2"></i>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="navbar fixed-bottom bg-white border-top d-lg-none shadow-lg" style={{zIndex: 1030}}>
        <div className="container-fluid p-0">
          <div className="row g-0 w-100 text-center">
            <div className="col-3">
              <Link to="/live-classes" className="text-decoration-none text-dark d-block p-2 mobile-nav-item">
                <div><i className="fas fa-video text-danger" style={{fontSize: "1.2rem"}}></i></div>
                <small className="d-block mt-1">Live</small>
              </Link>
            </div>
            
            <div className="col-3">
              <Link to="/submit-assignments" className="text-decoration-none text-dark d-block p-2 mobile-nav-item">
                <div><i className="fas fa-tasks text-warning" style={{fontSize: "1.2rem"}}></i></div>
                <small className="d-block mt-1">Tasks</small>
              </Link>
            </div>
            
            <div className="col-3">
              <Link to="/view-grades" className="text-decoration-none text-primary d-block p-2 mobile-nav-item">
                <div><i className="fas fa-star text-primary" style={{fontSize: "1.2rem"}}></i></div>
                <small className="d-block mt-1">Grades</small>
              </Link>
            </div>
            
            <div className="col-3">
              <Link to="/offline-content" className="text-decoration-none text-success d-block p-2 mobile-nav-item">
                <div><i className="fas fa-download text-success" style={{fontSize: "1.2rem"}}></i></div>
                <small className="d-block mt-1">Offline</small>
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

      {/* Custom Styles */}
      <style >{`
        .navbar-brand:hover {
          transform: translateY(-1px);
          transition: transform 0.2s ease;
        }

        .nav-link:hover {
          color: #0066cc !important;
          transition: color 0.3s ease;
        }

        .dropdown-menu {
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-item:hover {
          background-color: #f8f9fa;
          border-radius: 8px;
          margin: 0 4px;
          transition: all 0.2s ease;
        }

        .mobile-nav-item:hover {
          background-color: #f8f9fa;
          border-radius: 12px;
          margin: 2px;
          transition: all 0.2s ease;
        }

        #userDropdown:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
          border-color: #0066cc !important;
        }

        .navbar {
          backdrop-filter: blur(10px);
          position: relative;
          z-index: 1050;
        }

        .dropdown-menu {
          z-index: 1060 !important;
        }

        .navbar .dropdown {
          position: static;
        }

        @media (max-width: 991.98px) {
          .navbar-collapse {
            z-index: 1055;
            position: relative;
            background: white;
            border-radius: 8px;
            margin-top: 8px;
            padding: 16px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          }
        }
      `}</style>
    </>
  );
};

export default StuNavbar;