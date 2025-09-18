import React, { useState, useContext } from 'react';
import server from "../../environment";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import { 
  User, 
  Video, 
  Upload, 
  Users, 
  BookOpen, 
  Calendar, 
  Settings, 
  Bell, 
  Download,
  Play,
  Pause,
  Mic,
  MicOff,
  Monitor,
  FileText,
  BarChart3,
  Clock,
  Wifi,
  WifiOff
} from 'lucide-react';


// Teacher Profile Modal Component
const TeachProfileModal = ({ teacher, setTeacher, setModalOpen }) => {

  // const navigate = useNavigate();


  const [name, setName] = useState(teacher.name || "");
  const [email, setEmail] = useState(teacher.email || "");
  const [profilePic, setProfilePic] = useState(teacher.profilePic || "");
  const [subject, setSubject] = useState(teacher.subject || "");
  const [experience, setExperience] = useState(teacher.experience || "");

  const handleSave = () => {
    setTeacher({ ...teacher, name, email, profilePic, subject, experience });
    setModalOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Profile</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={() => setModalOpen(false)}
            ></button>
          </div>
          <div className="modal-body">
            <div className="text-center mb-4">
              {profilePic ? (
                <img 
                  src={profilePic} 
                  alt="Profile" 
                  className="rounded-circle mb-2" 
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
              ) : (
                <div 
                  className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-2 mx-auto"
                  style={{ width: '100px', height: '100px', fontSize: '2rem' }}
                >
                  {name.charAt(0).toUpperCase() || 'T'}
                </div>
              )}
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange} 
                className="form-control form-control-sm" 
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="form-control"
                placeholder="e.g., Artificial Intelligence"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Experience (years)</label>
              <input
                type="number"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



// Teacher Navbar Component
const TeacherNavbar = ({ teacher, onProfileClick }) => {
  const [isConnected, setIsConnected] = useState(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <Monitor className="me-2 text-primary" size={32} />
          <span className="navbar-brand mb-0 h1">Shiksha Setu</span>
          <div className="d-none d-md-flex align-items-center ms-3">
            {isConnected ? (
              <Wifi className="me-1 text-success" size={16} />
            ) : (
              <WifiOff className="me-1 text-danger" size={16} />
            )}
            <small className="text-muted">
              {isConnected ? 'Connected' : 'Offline Mode'}
            </small>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="position-relative me-3">
            <button className="btn btn-link text-muted p-2">
              <Bell size={20} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
              </span>
            </button>
          </div>
          
          <button 
            className="btn btn-link text-decoration-none d-flex align-items-center p-2"
            onClick={onProfileClick}
          >
            {teacher.profilePic ? (
              <img 
                src={teacher.profilePic} 
                alt="Profile" 
                className="rounded-circle me-2" 
                style={{ width: '32px', height: '32px', objectFit: 'cover' }}
              />
            ) : (
              <div 
                className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-2"
                style={{ width: '32px', height: '32px', fontSize: '0.875rem' }}
              >
                {teacher.name?.charAt(0).toUpperCase() || 'T'}
              </div>
            )}
            <span className="d-none d-md-block text-dark">
              {teacher.name || 'Teacher'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};



// Main Teacher Dashboard Component
const TeacherDashboard = () => {
  const { userData } = useContext(AuthContext); // ✅ get user from context

  const navigate = useNavigate();

  const [teacher, setTeacher] = useState({
    name: 'Dr. Priya Sharma',
    email: 'priya.sharma@college.edu',
    subject: 'Artificial Intelligence',
    experience: '8',
    profilePic: ''
  });

  
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isLive, setIsLive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Sample data
  const upcomingClasses = [
    { id: 1, subject: 'AI Fundamentals', time: '10:00 AM', students: 45, college: 'Rajasthan Rural College' },
    { id: 2, subject: 'Machine Learning', time: '2:00 PM', students: 32, college: 'Village Tech Institute' },
    { id: 3, subject: 'Neural Networks', time: '4:00 PM', students: 28, college: 'Rural Engineering College' }
  ];

  const recentSessions = [
    { id: 1, title: 'Introduction to AI', date: '2024-01-15', duration: '45 min', views: 123, size: '8.5 MB' },
    { id: 2, title: 'Data Preprocessing', date: '2024-01-14', duration: '52 min', views: 98, size: '12.3 MB' },
    { id: 3, title: 'Classification Algorithms', date: '2024-01-12', duration: '38 min', views: 156, size: '7.2 MB' }
  ];

  const stats = [
    { label: 'Total Students', value: '1,247', icon: Users, color: 'primary' },
    { label: 'Live Sessions', value: '34', icon: Video, color: 'success' },
    { label: 'Recorded Content', value: '156', icon: FileText, color: 'info' },
    { label: 'Average Rating', value: '4.8', icon: BarChart3, color: 'warning' }
  ];

  const startLiveSession = async () => {
    try {
      const meetingCode = Math.random().toString(36).substring(2, 8).toUpperCase(); // ✅ generate code

      const response = await fetch(`${server}/api/v1/meetings/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userData.username, meetingCode }) // or userData._id if you store ID
      });

      const data = await response.json();

      if (data.success) {
        const meetingCode = data.meeting.meetingCode;
        navigate(`/classroom/${meetingCode}`);
      } else {
        alert("Failed to start class: " + data.message);
      }
    } catch (error) {
      console.error("Error starting class:", error);
      alert("Something went wrong while starting the class");
    }
  };

  // const stopLiveSession = () => {
  //   setIsLive(false);
  // };

  const stopLiveSession = async (meetingCode) => {
    try {
      const response = await fetch(`${server}/api/v1/meetings/end/${meetingCode}`, {
        method: "PUT"
      });

      const data = await response.json();
      if (data.success) {
        alert("Class ended successfully!");
        navigate("/teacher-dashboard"); // or wherever you want teacher to go back
      } else {
        alert("Failed to end class: " + data.message);
      }
    } catch (err) {
      console.error("Error ending class:", err);
      alert("Something went wrong while ending the class");
    }
  };


  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`btn me-2 mb-2 d-flex align-items-center ${
        activeTab === id 
          ? 'btn-primary' 
          : 'btn-outline-secondary'
      }`}
    >
      <Icon className="me-1" size={16} />
      {label}
    </button>
  );

  const renderOverview = () => (
    <div>
      {/* Stats Grid */}
      <div className="row mb-4">
        {stats.map((stat, index) => (
          <div key={index} className="col-lg-3 col-md-6 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1">{stat.label}</p>
                    <h3 className="mb-0">{stat.value}</h3>
                  </div>
                  <div className={`bg-${stat.color} p-3 rounded`}>
                    <stat.icon className="text-white" size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Quick Actions</h5>
          <div className="row">
            <div className="col-md-4 mb-3">
              <button
                onClick={startLiveSession}
                className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-start p-3"
              >
                <Video className="me-3" size={24} />
                <div className="text-start">
                  <div className="fw-semibold">Start Live Class</div>
                  <small>Begin teaching session</small>
                </div>
              </button>

            </div>
            
            <div className="col-md-4 mb-3">
              <button className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-start p-3">
                <Upload className="me-3" size={24} />
                <div className="text-start">
                  <div className="fw-semibold">Upload Content</div>
                  <small>Add new materials</small>
                </div>
              </button>
            </div>
            
            <div className="col-md-4 mb-3">
              <button className="btn btn-outline-success w-100 d-flex align-items-center justify-content-start p-3">
                <Calendar className="me-3" size={24} />
                <div className="text-start">
                  <div className="fw-semibold">Schedule Class</div>
                  <small>Plan future sessions</small>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Classes */}
      <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0">Today's Classes</h5>
        </div>
        <div className="card-body">
          {upcomingClasses.map((cls) => (
            <div key={cls.id} className="d-flex justify-content-between align-items-center p-3 bg-light rounded mb-2">
              <div className="d-flex align-items-center">
                <Clock className="me-3 text-muted" size={20} />
                <div>
                  <div className="fw-semibold">{cls.subject}</div>
                  <small className="text-muted">{cls.college}</small>
                </div>
              </div>
              <div className="text-end">
                <div className="fw-semibold">{cls.time}</div>
                <small className="text-muted">{cls.students} students</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderLiveSession = () => (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="card-title mb-0">
            {isLive ? 'Live Session Active' : 'Start Live Session'}
          </h5>
          {isLive && (
            <div className="d-flex align-items-center">
              <div className="bg-danger rounded-circle me-2" style={{ width: '12px', height: '12px', animation: 'pulse 2s infinite' }}></div>
              <span className="text-danger fw-semibold">LIVE</span>
            </div>
          )}
        </div>

        {isLive ? (
          <div>
            <div className="bg-dark rounded mb-4 d-flex align-items-center justify-content-center" style={{ aspectRatio: '16/9' }}>
              <div className="text-center text-white">
                <Video className="mb-3" size={64} />
                <h5>Live Session in Progress</h5>
                <p className="text-light">Connected to 45 students across 3 colleges</p>
              </div>
            </div>
            
            <div className="d-flex justify-content-center align-items-center mb-4">
              <button 
                onClick={() => setIsMuted(!isMuted)}
                className={`btn me-3 ${isMuted ? 'btn-danger' : 'btn-secondary'}`}
              >
                {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
              </button>
              
              <button 
                onClick={stopLiveSession}
                className="btn btn-danger px-4"
              >
                End Session
              </button>
            </div>

            <div className="row text-center">
              <div className="col-md-4">
                <div className="p-3 bg-primary bg-opacity-10 rounded">
                  <h3 className="text-primary">45</h3>
                  <small className="text-primary">Active Students</small>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 bg-success bg-opacity-10 rounded">
                  <h3 className="text-success">3.2 Mbps</h3>
                  <small className="text-success">Bandwidth Usage</small>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 bg-info bg-opacity-10 rounded">
                  <h3 className="text-info">23:45</h3>
                  <small className="text-info">Session Duration</small>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '128px', height: '128px' }}>
              <Video size={64} className="text-muted" />
            </div>
            <br />
            <button 
              onClick={startLiveSession}
              className="btn btn-danger btn-lg px-5"
            >
              Start Live Session
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderContent = () => (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title mb-0">Recent Recordings</h5>
        <button className="btn btn-primary">Upload New</button>
      </div>
      <div className="card-body">
        {recentSessions.map((session) => (
          <div key={session.id} className="d-flex justify-content-between align-items-center p-3 border rounded mb-3">
            <div className="d-flex align-items-center">
              <div className="bg-primary bg-opacity-10 p-3 rounded me-3">
                <Play className="text-primary" size={24} />
              </div>
              <div>
                <h6 className="mb-1">{session.title}</h6>
                <small className="text-muted">{session.date} • {session.duration} • {session.size}</small>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="text-end me-3">
                <small className="fw-semibold">{session.views} views</small>
              </div>
              <button className="btn btn-link text-muted p-1">
                <Download size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title mb-4">Student Analytics</h5>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="p-4 bg-primary bg-opacity-10 rounded">
              <h3 className="text-primary">1,247</h3>
              <small className="text-primary">Total Enrolled</small>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="p-4 bg-success bg-opacity-10 rounded">
              <h3 className="text-success">89%</h3>
              <small className="text-success">Attendance Rate</small>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="p-4 bg-info bg-opacity-10 rounded">
              <h3 className="text-info">76%</h3>
              <small className="text-info">Completion Rate</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <div className="min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
        <TeacherNavbar 
          teacher={teacher} 
          onProfileClick={() => setIsProfileModalOpen(true)} 
        />
        
        <div className="container-fluid py-4">
          {/* Welcome Section */}
          <div className="mb-4">
            <h1 className="display-5 fw-bold mb-2">
              Welcome back, {teacher.name || 'Teacher'}!
            </h1>
            <p className="text-muted">
              Empowering rural education through technology • {teacher.subject}
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="mb-4 pb-3 border-bottom">
            <div className="d-flex flex-wrap">
              <TabButton id="overview" label="Overview" icon={BarChart3} />
              <TabButton id="live" label="Live Session" icon={Video} />
              <TabButton id="content" label="Content" icon={FileText} />
              <TabButton id="students" label="Students" icon={Users} />
              <TabButton id="schedule" label="Schedule" icon={Calendar} />
              <TabButton id="settings" label="Settings" icon={Settings} />
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'live' && renderLiveSession()}
          {activeTab === 'content' && renderContent()}
          {activeTab === 'students' && renderStudents()}
          {activeTab === 'schedule' && (
            <div className="card">
              <div className="card-body text-center py-5">
                <Calendar size={48} className="text-muted mb-3" />
                <h5>Schedule Management</h5>
                <p className="text-muted">Coming Soon - Schedule and manage your classes</p>
              </div>
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="card">
              <div className="card-body text-center py-5">
                <Settings size={48} className="text-muted mb-3" />
                <h5>Settings</h5>
                <p className="text-muted">Coming Soon - Customize your preferences</p>
              </div>
            </div>
          )}
        </div>

        {/* Profile Modal */}
        {isProfileModalOpen && (
          <TeachProfileModal 
            teacher={teacher}
            setTeacher={setTeacher}
            setModalOpen={setIsProfileModalOpen}
          />
        )}
      </div>
    </div>
  );
};

export default TeacherDashboard;