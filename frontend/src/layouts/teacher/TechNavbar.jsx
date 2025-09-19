import React, { useState, useContext } from 'react';
import server from "../../environment";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

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


// Teacher Navbar Component
const TechNavbar = ({ teacher, onProfileClick }) => {
  const { userData  } = useAuth();
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
                {userData.name?.charAt(0).toUpperCase() || 'T'}
              </div>
            )}
            <span className="d-none d-md-block text-dark">
              {userData.name || 'Teacher'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TechNavbar;