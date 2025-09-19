import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import server from "../../environment";
import ChatBot from "./ChatBot";
import { useAuth } from "../../context/AuthContext";

const StuDashboard = ({ user }) => {
  const { userData } = useAuth(); // contains token, role, username, name

  const [connectionStatus] = useState("good"); // good, poor, offline
  const [dataUsage] = useState(15.2);
  const [batteryLevel] = useState(78);
  const navigate = useNavigate();
  
  // Live Classes Data
  const upcomingClasses = [
    { 
      course: "Artificial Intelligence", 
      time: "10:00 AM", 
      instructor: "Dr. Sharma (Delhi)",
      type: "Live",
      bandwidth: "Audio + Slides"
    },
    { 
      course: "VLSI Design", 
      time: "2:00 PM", 
      instructor: "Prof. Gupta (Mumbai)",
      type: "Recorded",
      bandwidth: "Download Available"
    },
    { 
      course: "Renewable Energy", 
      time: "4:00 PM", 
      instructor: "Dr. Singh (Jaipur)",
      type: "Live",
      bandwidth: "Audio Only"
    }
  ];

  // Enhanced Assignments with Tracking
  const assignments = [
    { 
      title: "AI Basics Quiz", 
      due: "2025-09-15", 
      subject: "AI", 
      priority: "high",
      status: "pending",
      submissionStatus: "not_submitted",
      grade: null
    },
    { 
      title: "Solar Panel Design", 
      due: "2025-09-18", 
      subject: "Renewable Energy", 
      priority: "medium",
      status: "submitted",
      submissionStatus: "submitted",
      grade: "85/100"
    },
    { 
      title: "VLSI Lab Report", 
      due: "2025-09-20", 
      subject: "VLSI", 
      priority: "low",
      status: "graded",
      submissionStatus: "submitted",
      grade: "92/100"
    }
  ];

  // Progress Reports Data
  const progressData = [
    { subject: "AI", attendance: "85%", avgGrade: "78%", completedTasks: "8/10" },
    { subject: "VLSI", attendance: "92%", avgGrade: "88%", completedTasks: "9/10" },
    { subject: "Renewable Energy", attendance: "78%", avgGrade: "82%", completedTasks: "7/9" }
  ];

  // Offline Content
  const offlineContent = [
    { title: "AI Lecture 1-5", size: "45MB", downloaded: true },
    { title: "VLSI Notes PDF", size: "12MB", downloaded: true },
    { title: "Renewable Energy Videos", size: "78MB", downloaded: false }
  ];

  // Recent Grades
  const recentGrades = [
    { assignment: "AI Quiz 1", grade: "88/100", subject: "AI", date: "2025-09-10" },
    { assignment: "Solar Panel Design", grade: "85/100", subject: "Renewable Energy", date: "2025-09-08" },
    { assignment: "VLSI Lab Report", grade: "92/100", subject: "VLSI", date: "2025-09-05" }
  ];

  // Announcements/Notices
  const announcements = [
    { message: "Network maintenance scheduled for 2-4 PM today", type: "warning" },
    { message: "New AI course materials available for download", type: "info" },
    { message: "Assignment submission deadline extended", type: "success" }
  ];

  // Helper Functions
  const getConnectionBadge = () => {
    const badges = {
      good: "badge bg-success",
      poor: "badge bg-warning", 
      offline: "badge bg-danger"
    };
    return badges[connectionStatus] || "badge bg-secondary";
  };

  const getStatusBadge = (status) => {
    const badges = {
      pending: "badge bg-warning",
      submitted: "badge bg-info", 
      graded: "badge bg-success",
      overdue: "badge bg-danger"
    };
    return badges[status] || "badge bg-secondary";
  };

  const getPriorityBadge = (priority) => {
    const badges = {
      high: "badge bg-danger",
      medium: "badge bg-warning",
      low: "badge bg-info"
    };
    return badges[priority] || "badge bg-secondary";
  };

  return (
    <div className="min-vh-100" style={{backgroundColor: "#f8f9fa"}}>
      <main className="container-fluid p-3">
        
        {/* Welcome Banner with Status */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card border-0 shadow-sm" style={{background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}}>
              <div className="card-body text-white">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h2 className="card-title mb-2">Welcome, {userData?.name || "Student"}! 📚</h2>
                    <p className="card-text mb-0">Rural Diploma College - Complete Learning Dashboard</p>
                  </div>
                  <div className="col-md-4 text-end">
                    <div className="d-flex flex-column align-items-end">
                      <div className="mb-2">
                        <span className={getConnectionBadge()}>
                          📶 {connectionStatus.toUpperCase()}
                        </span>
                      </div>
                      <small>📊 Data: {dataUsage}MB | 🔋 {batteryLevel}%</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions for Rural Students */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6 className="card-title mb-3">⚡ Quick Actions</h6>
                <div className="row g-2">
                  <div className="col-6 col-md-3">
                    {/* <button className="btn btn-outline-primary btn-sm w-100"
                      onClick={() => navigate("/live-class")}
                    >
                      📡 Join Live Class
                    </button> */}

                    <button
                      className="btn btn-outline-primary btn-sm w-100"
                      onClick={async () => {
                        try {
                          const response = await fetch(`${server}/api/v1/meetings/active`, {
                            method: "GET",
                            headers: { "Content-Type": "application/json" }
                          });

                          const data = await response.json();

                          if (data.success && data.meeting) {
                            // If there is an active meeting, join it
                            navigate(`/classroom/${data.meeting.meetingCode}`);
                          } else {
                            // No active meeting
                            alert("No class is started yet");
                          }
                        } catch (err) {
                          console.error("Error joining class:", err);
                          alert("Something went wrong while joining the class");
                        }
                      }}
                    >
                      📡 Join Live Class
                    </button>

                  </div>

                  <div className="col-6 col-md-3">
                    <button className="btn btn-outline-success btn-sm w-100">
                      💾 Download Content
                    </button>
                  </div>
                  <div className="col-6 col-md-3">
                    <button className="btn btn-outline-info btn-sm w-100">
                      📱 Smart Audio Switch
                    </button>
                  </div>
                  <div className="col-6 col-md-3">
                    <button className="btn btn-outline-warning btn-sm w-100">
                      📞 Help & Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Left Column */}
          <div className="col-lg-8">
            
            {/* Live Classes - Access Classroom */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-white border-0">
                <h5 className="card-title mb-0">📡 Today's Expert Sessions (Live Classes)</h5>
              </div>
              <div className="card-body">
                {upcomingClasses.length > 0 ? (
                  <div className="list-group list-group-flush">
                    {upcomingClasses.map((cls, idx) => (
                      <div key={idx} className="list-group-item px-0 border-0 border-bottom">
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <h6 className="mb-1">{cls.course}</h6>
                            <small className="text-muted">👨‍🏫 {cls.instructor}</small>
                          </div>
                          <div className="col-md-3">
                            <span className="badge bg-light text-dark">{cls.time}</span>
                            <br />
                            <small className="text-info">📶 {cls.bandwidth}</small>
                          </div>
                          <div className="col-md-3 text-end">
                            <span className={`badge ${cls.type === 'Live' ? 'bg-danger' : 'bg-success'}`}>
                              {cls.type === 'Live' ? '🔴 Live' : '📼 Recorded'}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-muted">No classes scheduled for today</p>
                  </div>
                )}
              </div>
            </div>

            {/* Assignment Section - Submit, Track, View Grades */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-white border-0">
                <h5 className="card-title mb-0">📝 Assignment Section (Submit | Track | Grades)</h5>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-sm table-hover">
                    <thead className="table-light">
                      <tr>
                        <th>Assignment</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Grade</th>
                        <th>Priority</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {assignments.map((assign, idx) => (
                        <tr key={idx}>
                          <td>
                            <strong>{assign.title}</strong>
                            <br />
                            <small className="text-muted">{assign.subject}</small>
                          </td>
                          <td>
                            <small>{new Date(assign.due).toLocaleDateString()}</small>
                          </td>
                          <td>
                            <span className={getStatusBadge(assign.status)}>
                              {assign.status.toUpperCase()}
                            </span>
                          </td>
                          <td>
                            {assign.grade ? (
                              <span className="badge bg-success">{assign.grade}</span>
                            ) : (
                              <span className="text-muted">Pending</span>
                            )}
                          </td>
                          <td>
                            <span className={getPriorityBadge(assign.priority)}>
                              {assign.priority.toUpperCase()}
                            </span>
                          </td>
                          <td>
                            {assign.status === 'pending' ? (
                              <button className="btn btn-primary btn-sm">Submit</button>
                            ) : (
                              <button className="btn btn-outline-secondary btn-sm">View</button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Profile Dashboard - Progress Reports */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-white border-0">
                <h5 className="card-title mb-0">📈 Profile Dashboard (Progress Reports)</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  {progressData.map((subject, idx) => (
                    <div key={idx} className="col-md-4 mb-3">
                      <div className="card bg-light border-0">
                        <div className="card-body text-center">
                          <h6 className="card-title text-primary">{subject.subject}</h6>
                          <div className="mb-2">
                            <small className="d-block mb-1">
                              📅 <strong>Attendance:</strong> 
                              <span className="badge bg-info ms-1">{subject.attendance}</span>
                            </small>
                            <small className="d-block mb-1">
                              🎯 <strong>Avg Grade:</strong> 
                              <span className="badge bg-success ms-1">{subject.avgGrade}</span>
                            </small>
                            <small className="d-block">
                              ✅ <strong>Tasks:</strong> 
                              <span className="badge bg-warning ms-1">{subject.completedTasks}</span>
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="col-lg-4">
            
            {/* Recent Grades - View Grades Feature */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-white border-0">
                <h6 className="card-title mb-0">🎯 Recent Grades (View Grades)</h6>
              </div>
              <div className="card-body">
                {recentGrades.map((grade, idx) => (
                  <div key={idx} className="d-flex justify-content-between align-items-center mb-3 p-2 bg-light rounded">
                    <div>
                      <small className="fw-bold d-block">{grade.assignment}</small>
                      <small className="text-muted">{grade.subject}</small>
                    </div>
                    <div className="text-end">
                      <span className="badge bg-success">{grade.grade}</span>
                      <br />
                      <small className="text-muted">{grade.date}</small>
                    </div>
                  </div>
                ))}
                <button className="btn btn-outline-primary btn-sm w-100 mt-2">
                  View All Grades
                </button>
              </div>
            </div>

            {/* Notes & Materials - Offline Content */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-white border-0">
                <h6 className="card-title mb-0">💾 Notes & Materials (Offline Content)</h6>
              </div>
              <div className="card-body">
                {offlineContent.map((content, idx) => (
                  <div key={idx} className="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom">
                    <div>
                      <small className="fw-bold d-block">{content.title}</small>
                      <small className="text-muted">{content.size}</small>
                    </div>
                    <span className={`badge ${content.downloaded ? 'bg-success' : 'bg-warning'}`}>
                      {content.downloaded ? '✅ Downloaded' : '⬇️ Download'}
                    </span>
                  </div>
                ))}
                <div className="d-grid gap-2 mt-3">
                  <button className="btn btn-outline-success btn-sm">
                    🔄 Sync All Content
                  </button>
                  <button className="btn btn-outline-info btn-sm">
                    📱 Recorded Lectures
                  </button>
                </div>
              </div>
            </div>

            {/* Attendance Tracker - Profile Dashboard Feature */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-white border-0">
                <h6 className="card-title mb-0">📅 Attendance Tracker</h6>
              </div>
              <div className="card-body">
                <div className="text-center mb-3">
                  <h4 className="text-success">85%</h4>
                  <small className="text-muted">Overall Attendance</small>
                </div>
                <div className="progress mb-2" style={{height: "10px"}}>
                  <div 
                    className="progress-bar bg-success" 
                    role="progressbar"
                    style={{width: "85%"}}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="row text-center">
                  <div className="col-6">
                    <small className="text-success fw-bold">Present: 34</small>
                  </div>
                  <div className="col-6">
                    <small className="text-danger">Absent: 6</small>
                  </div>
                </div>
                <small className="text-muted d-block text-center mt-2">
                  Target: 75% minimum required
                </small>
              </div>
            </div>

            {/* Device Status - Rural Specific */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-white border-0">
                <h6 className="card-title mb-0">📱 Device Status</h6>
              </div>
              <div className="card-body">
                <div className="row g-2 text-center">
                  <div className="col-6">
                    <div className="p-2 bg-light rounded">
                      <small className="d-block">📶 Network</small>
                      <span className={getConnectionBadge()}>
                        {connectionStatus.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-2 bg-light rounded">
                      <small className="d-block">🔋 Battery</small>
                      <span className="badge bg-info">{batteryLevel}%</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <small className="text-muted d-block">💽 Storage Used: 2.1GB / 8GB</small>
                  <div className="progress mt-1" style={{height: "6px"}}>
                    <div 
                      className="progress-bar bg-warning" 
                      role="progressbar"
                      style={{width: "26%"}}
                      aria-valuenow="26"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notices - Profile Dashboard Feature */}
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-white border-0">
                <h6 className="card-title mb-0">📢 Latest Notices</h6>
              </div>
              <div className="card-body">
                {announcements.map((announcement, idx) => (
                  <div key={idx} className={`alert alert-${announcement.type === 'warning' ? 'warning' : announcement.type === 'info' ? 'info' : 'success'} py-2 mb-2`}>
                    <small>
                      {announcement.type === 'warning' && '⚠️ '}
                      {announcement.type === 'info' && 'ℹ️ '}
                      {announcement.type === 'success' && '✅ '}
                      {announcement.message}
                    </small>
                  </div>
                ))}
                <button className="btn btn-outline-secondary btn-sm w-100 mt-2">
                  View All Notices
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Summary Cards Row */}
        <div className="row mt-4 mb-4">
          <div className="col-md-3 mb-3">
            <div className="card bg-primary text-white border-0">
              <div className="card-body text-center">
                <h5 className="card-title">📚</h5>
                <h6>Total Courses</h6>
                <h4>3</h4>
                <small>AI, VLSI, Renewable Energy</small>
              </div>
            </div>
          </div>
          
          <div className="col-md-3 mb-3">
            <div className="card bg-success text-white border-0">
              <div className="card-body text-center">
                <h5 className="card-title">✅</h5>
                <h6>Completed Tasks</h6>
                <h4>24/29</h4>
                <small>83% completion rate</small>
              </div>
            </div>
          </div>
          
          <div className="col-md-3 mb-3">
            <div className="card bg-info text-white border-0">
              <div className="card-body text-center">
                <h5 className="card-title">🎯</h5>
                <h6>Average Grade</h6>
                <h4>83%</h4>
                <small>Above college average</small>
              </div>
            </div>
          </div>
          
          <div className="col-md-3 mb-3">
            <div className="card bg-warning text-white border-0">
              <div className="card-body text-center">
                <h5 className="card-title">💾</h5>
                <h6>Offline Content</h6>
                <h4>2.1GB</h4>
                <small>Ready for offline study</small>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info for Rural Students */}
        <div className="row">
          <div className="col-12">
            <div className="card border-0 bg-light">
              <div className="card-body text-center">
                <small className="text-muted">
                  📞 <strong>Support:</strong> Call 1800-XXX-XXXX (Toll Free) | 
                  📧 <strong>Email:</strong> support@ruralclassroom.gov.in | 
                  💬 <strong>WhatsApp:</strong> +91-XXXXXXXXXX
                </small>
                <br />
                <small className="text-muted mt-2 d-block">
                  🏛️ Government of Rajasthan | Directorate of Technical Education | Rural Diploma College Initiative
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom padding for mobile navigation */}
        <div style={{height: "80px"}} className="d-block d-lg-none"></div>

      </main>

      <ChatBot />
    </div>
  );
};

export default StuDashboard;