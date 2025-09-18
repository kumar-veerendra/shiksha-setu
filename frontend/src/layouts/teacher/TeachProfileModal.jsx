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

export default TeachProfileModal;