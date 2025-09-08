import React, { useState } from 'react';

const StudentDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #fff8dc 0%, #ffeaa7 20%, #fdcb6e 100%)',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Header Section */}
      <div className="container-fluid py-4" style={{ background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="d-flex align-items-center mb-2">
                <div 
                  className="me-3 d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
                    border: '2px solid #8B4513'
                  }}
                >
                  <i className="bi bi-mortarboard-fill" style={{ fontSize: '20px', color: 'white' }}></i>
                </div>
                <div>
                  <h2 style={{ color: '#8B4513', marginBottom: '0', fontSize: '24px' }}>
                    Shiksha Setu
                  </h2>
                  <p style={{ color: '#d4af37', marginBottom: '0', fontSize: '14px' }}>
                    Government of Rajasthan - Child Welfare Department
                  </p>
                </div>
              </div>
              <h4 style={{ color: '#8B4513', marginBottom: '5px' }}>
                Welcome, Rahul Sharma
              </h4>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '0' }}>
                Class 10th - Mathematics & Science
              </p>
            </div>
            <div className="col-md-4 text-md-end">
              <div className="card border-0 shadow-sm" style={{ background: 'rgba(255, 107, 53, 0.1)' }}>
                <div className="card-body p-3 text-center">
                  <h5 style={{ color: '#8B4513', marginBottom: '5px' }}>
                    {currentTime.toLocaleDateString('en-IN')}
                  </h5>
                  <h3 style={{ color: '#ff6b35', marginBottom: '0' }}>
                    {currentTime.toLocaleTimeString('en-IN', { hour12: true })}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        {/* Quick Stats Row */}
        <div className="row mb-4">
          <div className="col-md-3 col-sm-6 mb-3">
            <div className="card h-100 border-0 shadow-sm" style={{ background: 'linear-gradient(135deg, #ff6b35, #f7931e)', color: 'white' }}>
              <div className="card-body text-center">
                <i className="bi bi-book-fill mb-2" style={{ fontSize: '2.5rem' }}></i>
                <h3 className="mb-1">8</h3>
                <p className="mb-0">Active Courses</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <div className="card h-100 border-0 shadow-sm" style={{ background: 'linear-gradient(135deg, #f7931e, #ffcc02)', color: 'white' }}>
              <div className="card-body text-center">
                <i className="bi bi-clipboard-check-fill mb-2" style={{ fontSize: '2.5rem' }}></i>
                <h3 className="mb-1">3</h3>
                <p className="mb-0">Pending Tasks</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <div className="card h-100 border-0 shadow-sm" style={{ background: 'linear-gradient(135deg, #ffcc02, #d4af37)', color: 'white' }}>
              <div className="card-body text-center">
                <i className="bi bi-calendar-check-fill mb-2" style={{ fontSize: '2.5rem' }}></i>
                <h3 className="mb-1">87%</h3>
                <p className="mb-0">Attendance</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <div className="card h-100 border-0 shadow-sm" style={{ background: 'linear-gradient(135deg, #8B4513, #A0522D)', color: 'white' }}>
              <div className="card-body text-center">
                <i className="bi bi-trophy-fill mb-2" style={{ fontSize: '2.5rem' }}></i>
                <h3 className="mb-1">4.2</h3>
                <p className="mb-0">Average Score</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-8">
            {/* My Courses Section */}
            <div className="card border-0 shadow-sm mb-4" style={{ background: 'rgba(255, 255, 255, 0.95)' }}>
              <div className="card-header border-0" style={{ background: 'linear-gradient(90deg, #ff6b35, #f7931e)', color: 'white' }}>
                <h5 className="mb-0">
                  <i className="bi bi-book me-2"></i>
                  My Courses
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  {[
                    { subject: 'Mathematics', progress: 75, lessons: 24, icon: 'calculator' },
                    { subject: 'Science', progress: 60, lessons: 18, icon: 'flask' },
                    { subject: 'Hindi', progress: 90, lessons: 32, icon: 'chat-text' },
                    { subject: 'English', progress: 65, lessons: 20, icon: 'translate' }
                  ].map((course, index) => (
                    <div className="col-md-6 mb-3" key={index}>
                      <div className="card h-100 border" style={{ borderColor: '#d4af37', background: 'rgba(255, 248, 220, 0.5)' }}>
                        <div className="card-body p-3">
                          <div className="d-flex align-items-center mb-2">
                            <i className={`bi bi-${course.icon} me-2`} style={{ color: '#ff6b35', fontSize: '1.2rem' }}></i>
                            <h6 className="mb-0" style={{ color: '#8B4513' }}>{course.subject}</h6>
                          </div>
                          <div className="progress mb-2" style={{ height: '8px' }}>
                            <div 
                              className="progress-bar" 
                              style={{ width: `${course.progress}%`, background: 'linear-gradient(90deg, #ff6b35, #f7931e)' }}
                            ></div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <small style={{ color: '#666' }}>{course.progress}% complete</small>
                            <small style={{ color: '#666' }}>{course.lessons} lessons</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="card border-0 shadow-sm mb-4" style={{ background: 'rgba(255, 255, 255, 0.95)' }}>
              <div className="card-header border-0" style={{ background: 'linear-gradient(90deg, #f7931e, #ffcc02)', color: 'white' }}>
                <h5 className="mb-0">
                  <i className="bi bi-clock-history me-2"></i>
                  Recent Activities
                </h5>
              </div>
              <div className="card-body">
                {[
                  { activity: 'Completed Mathematics Chapter 5', time: '2 hours ago', icon: 'check-circle-fill', color: 'success' },
                  { activity: 'Submitted Science Assignment', time: '5 hours ago', icon: 'upload', color: 'primary' },
                  { activity: 'Scored 85% in Hindi Test', time: '1 day ago', icon: 'trophy-fill', color: 'warning' },
                  { activity: 'Watched English Video', time: '2 days ago', icon: 'play-circle-fill', color: 'info' }
                ].map((item, index) => (
                  <div className="d-flex align-items-center py-2" key={index} style={{ borderBottom: index < 3 ? '1px solid #f0f0f0' : 'none' }}>
                    <i className={`bi bi-${item.icon} me-3 text-${item.color}`} style={{ fontSize: '1.2rem' }}></i>
                    <div className="flex-grow-1">
                      <p className="mb-0" style={{ color: '#8B4513' }}>{item.activity}</p>
                      <small className="text-muted">{item.time}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-4">
            {/* Upcoming Assignments */}
            <div className="card border-0 shadow-sm mb-4" style={{ background: 'rgba(255, 255, 255, 0.95)' }}>
              <div className="card-header border-0" style={{ background: 'linear-gradient(90deg, #ffcc02, #d4af37)', color: 'white' }}>
                <h5 className="mb-0">
                  <i className="bi bi-clipboard-check me-2"></i>
                  Upcoming Tasks
                </h5>
              </div>
              <div className="card-body">
                {[
                  { task: 'Mathematics Homework', due: 'Due in 2 days', priority: 'high' },
                  { task: 'Science Project', due: 'Due in 5 days', priority: 'medium' },
                  { task: 'Hindi Essay', due: 'Due in 1 week', priority: 'low' }
                ].map((assignment, index) => (
                  <div className="card mb-2 border" key={index} style={{ 
                    borderLeftWidth: '4px', 
                    borderLeftColor: assignment.priority === 'high' ? '#dc3545' : assignment.priority === 'medium' ? '#ffc107' : '#28a745',
                    background: 'rgba(255, 248, 220, 0.3)'
                  }}>
                    <div className="card-body p-3">
                      <h6 className="mb-1" style={{ color: '#8B4513' }}>{assignment.task}</h6>
                      <small className="text-muted">{assignment.due}</small>
                    </div>
                  </div>
                ))}
                <button className="btn w-100 mt-2" style={{ background: 'linear-gradient(90deg, #ff6b35, #f7931e)', color: 'white', border: 'none' }}>
                  View All Tasks
                </button>
              </div>
            </div>

            {/* Performance Chart */}
            <div className="card border-0 shadow-sm mb-4" style={{ background: 'rgba(255, 255, 255, 0.95)' }}>
              <div className="card-header border-0" style={{ background: 'linear-gradient(90deg, #8B4513, #A0522D)', color: 'white' }}>
                <h5 className="mb-0">
                  <i className="bi bi-graph-up me-2"></i>
                  Performance
                </h5>
              </div>
              <div className="card-body text-center">
                <div className="row">
                  <div className="col-6">
                    <div className="mb-3">
                      <div style={{ 
                        width: '80px', 
                        height: '80px', 
                        borderRadius: '50%', 
                        background: `conic-gradient(#ff6b35 ${87*3.6}deg, #f0f0f0 0deg)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto'
                      }}>
                        <div style={{ 
                          width: '60px', 
                          height: '60px', 
                          borderRadius: '50%', 
                          backgroundColor: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 'bold',
                          color: '#8B4513'
                        }}>
                          87%
                        </div>
                      </div>
                      <small style={{ color: '#666' }}>Attendance</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <div style={{ 
                        width: '80px', 
                        height: '80px', 
                        borderRadius: '50%', 
                        background: `conic-gradient(#f7931e ${78*3.6}deg, #f0f0f0 0deg)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto'
                      }}>
                        <div style={{ 
                          width: '60px', 
                          height: '60px', 
                          borderRadius: '50%', 
                          backgroundColor: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 'bold',
                          color: '#8B4513'
                        }}>
                          78%
                        </div>
                      </div>
                      <small style={{ color: '#666' }}>Average Marks</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="card border-0 shadow-sm" style={{ background: 'rgba(255, 255, 255, 0.95)' }}>
              <div className="card-header border-0" style={{ background: 'linear-gradient(90deg, #d4af37, #DAA520)', color: 'white' }}>
                <h5 className="mb-0">
                  <i className="bi bi-lightning me-2"></i>
                  Quick Links
                </h5>
              </div>
              <div className="card-body p-2">
                <div className="row g-2">
                  {[
                    { name: 'Live Class', icon: 'camera-video', color: '#dc3545' },
                    { name: 'Digital Library', icon: 'book', color: '#28a745' },
                    { name: 'Test Series', icon: 'clipboard-data', color: '#fd7e14' },
                    { name: 'Doubt Solving', icon: 'question-circle', color: '#6f42c1' }
                  ].map((link, index) => (
                    <div className="col-6" key={index}>
                      <button className="btn w-100 p-2 border" style={{ 
                        background: 'rgba(255, 248, 220, 0.5)',
                        borderColor: '#d4af37',
                        color: '#8B4513'
                      }}>
                        <i className={`bi bi-${link.icon} mb-1 d-block`} style={{ color: link.color, fontSize: '1.2rem' }}></i>
                        <small>{link.name}</small>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
