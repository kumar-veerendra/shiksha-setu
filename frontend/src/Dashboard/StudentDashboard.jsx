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
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #2196F3 50%, #21CBF3 75%, #a8edea 100%)',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      transition: 'all 0.3s ease'
    }}>
      {/* Header Section */}
      <div 
        className="container-fluid py-4" 
        style={{ 
          background: 'rgba(255, 255, 255, 0.15)', 
          backdropFilter: 'blur(20px)',
          borderRadius: '0 0 20px 20px',
          transition: 'all 0.4s ease',
          boxShadow: '0 8px 32px rgba(33, 150, 243, 0.1)'
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="d-flex align-items-center mb-2">
                {/* <div 
                  className="me-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
                    border: '3px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    boxShadow: '0 8px 25px rgba(33, 150, 243, 0.3)'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <i className="bi bi-mortarboard-fill" style={{ fontSize: '24px', color: 'white' }}></i>
                </div> */}
                
              </div>
              <h1 style={{ color: 'white', marginBottom: '5px', fontWeight: '500',fontSize:'2rem' }}>
                Welcome, Rahul Sharma
              </h1>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '20+px', marginBottom: '0' }}>
                Class 10th - Mathematics & Science
              </p>
            </div>
            <div className="col-md-4 text-md-end">
              <div 
                className="card border-0 shadow-lg" 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.2)', 
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(15px)'
                }}
              >
                <div className="card-body p-3 text-center">
                  <h5 style={{ color: 'white', marginBottom: '5px', fontWeight: '500' }}>
                    {currentTime.toLocaleDateString('en-IN')}
                  </h5>
                  <h3 style={{ color: '#d4e0e3ff', marginBottom: '0', fontWeight: '700' }}>
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
            <div 
              className="card h-100 border-0 shadow-lg" 
              style={{ 
                background: 'linear-gradient(135deg, #2196F3, #1976D2)', 
                color: 'white',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(33, 150, 243, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div className="card-body text-center p-4">
                <i className="bi bi-book-fill mb-3" style={{ fontSize: '3rem' }}></i>
                <h3 className="mb-2" style={{ fontWeight: '700' }}>8</h3>
                <p className="mb-0" style={{ fontSize: '14px', opacity: '0.9' }}>Active Classes</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <div 
              className="card h-100 border-0 shadow-lg" 
              style={{ 
                background: 'linear-gradient(135deg, #21CBF3, #03DAC6)', 
                color: 'white',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(33, 203, 243, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div className="card-body text-center p-4">
                <i className="bi bi-clipboard-check-fill mb-3" style={{ fontSize: '3rem' }}></i>
                <h3 className="mb-2" style={{ fontWeight: '700' }}>3</h3>
                <p className="mb-0" style={{ fontSize: '14px', opacity: '0.9' }}>Pending Tasks</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <div 
              className="card h-100 border-0 shadow-lg" 
              style={{ 
                background: 'linear-gradient(135deg, #667eea, #764ba2)', 
                color: 'white',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(118, 75, 162, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div className="card-body text-center p-4">
                <i className="bi bi-calendar-check-fill mb-3" style={{ fontSize: '3rem' }}></i>
                <h3 className="mb-2" style={{ fontWeight: '700' }}>87%</h3>
                <p className="mb-0" style={{ fontSize: '14px', opacity: '0.9' }}>Attendance</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <div 
              className="card h-100 border-0 shadow-lg" 
              style={{ 
                background: 'linear-gradient(135deg, #1565C0, #0D47A1)', 
                color: 'white',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(21, 101, 192, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div className="card-body text-center p-4">
                <i className="bi bi-trophy-fill mb-3" style={{ fontSize: '3rem' }}></i>
                <h3 className="mb-2" style={{ fontWeight: '700' }}>4.2</h3>
                <p className="mb-0" style={{ fontSize: '14px', opacity: '0.9' }}>Average Score</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-8">
            {/* My Courses Section */}
            <div 
              className="card border-0 shadow-lg mb-4" 
              style={{ 
                background: 'rgba(255, 255, 255, 0.95)', 
                borderRadius: '20px',
                transition: 'all 0.3s ease'
              }}
            >
              <div 
                className="card-header border-0" 
                style={{ 
                  background: 'linear-gradient(90deg, #2196F3, #21CBF3)', 
                  color: 'white',
                  borderRadius: '20px 20px 0 0'
                }}
              >
                <h5 className="mb-0" style={{ fontWeight: '600' }}>
                  <i className="bi bi-book me-2"></i>
                  My Classes
                </h5>
              </div>
              <div className="card-body p-4">
                <div className="row">
                  {[
                    { subject: 'Mathematics', progress: 75, lessons: 24, icon: 'calculator', color: '#2196F3' },
                    { subject: 'Science', progress: 60, lessons: 18, icon: 'flask', color: '#21CBF3' },
                    { subject: 'Hindi', progress: 90, lessons: 32, icon: 'chat-text', color: '#667eea' },
                    { subject: 'English', progress: 65, lessons: 20, icon: 'translate', color: '#1565C0' }
                  ].map((course, index) => (
                    <div className="col-md-6 mb-3" key={index}>
                      <div 
                        className="card h-100 border-0 shadow-sm" 
                        style={{ 
                          background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.05), rgba(33, 203, 243, 0.05))',
                          borderRadius: '15px',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.02)';
                          e.currentTarget.style.boxShadow = '0 10px 30px rgba(33, 150, 243, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                        }}
                      >
                        <div className="card-body p-3">
                          <div className="d-flex align-items-center mb-3">
                            <i className={`bi bi-${course.icon} me-3`} style={{ color: course.color, fontSize: '1.5rem' }}></i>
                            <h6 className="mb-0" style={{ color: '#1565C0', fontWeight: '600' }}>{course.subject}</h6>
                          </div>
                          <div 
                            className="progress mb-3" 
                            style={{ 
                              height: '10px', 
                              borderRadius: '10px',
                              background: 'rgba(33, 150, 243, 0.1)'
                            }}
                          >
                            <div 
                              className="progress-bar" 
                              style={{ 
                                width: `${course.progress}%`, 
                                background: `linear-gradient(90deg, ${course.color}, #21CBF3)`,
                                borderRadius: '10px',
                                transition: 'width 1s ease'
                              }}
                            ></div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <small style={{ color: '#666', fontWeight: '500' }}>{course.progress}% complete</small>
                            <small style={{ color: '#666', fontWeight: '500' }}>{course.lessons} lessons</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
               {/* Contest Winners Section */}
<div 
  className="card border-0 shadow-lg mb-4" 
  style={{ 
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '20px',
    transition: 'all 0.3s ease',
    height: '400px' // ensures equal height with siblings if inside row/col
  }}
>
  <div 
    className="card-header border-0" 
    style={{ 
      background: 'linear-gradient(90deg, #6A11CB, #2575FC)', 
      color: 'white',
      borderRadius: '20px 20px 0 0'
    }}
  >
    <h5 className="mb-0" style={{ fontWeight: '600' }}>
      <i className="bi bi-trophy-fill me-2"></i>
      Contest Winners
    </h5>
  </div>
  <div className="card-body p-3">
    {[
      { name: 'Aarav Sharma', contest: 'Math Olympiad', position: '1st', medal: 'gold' },
      { name: 'Priya Verma', contest: 'Science Quiz', position: '2nd', medal: 'silver' },
      { name: 'Rohan Das', contest: 'Coding Challenge', position: '3rd', medal: 'bronze' }
    ].map((winner, index) => (
      <div 
        key={index}
        className="d-flex align-items-center justify-content-between p-3 mb-2"
        style={{
          background: 'rgba(33, 150, 243, 0.05)',
          borderRadius: '12px',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(33, 150, 243, 0.12)';
          e.currentTarget.style.transform = 'translateX(5px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(33, 150, 243, 0.05)';
          e.currentTarget.style.transform = 'translateX(0)';
        }}
      >
        <div className="d-flex align-items-center">
          <i 
            className="bi bi-award me-3" 
            style={{ 
              fontSize: '1.3rem', 
              color: winner.medal === 'gold' ? '#FFD700' : winner.medal === 'silver' ? '#C0C0C0' : '#CD7F32' 
            }}
          ></i>
          <div>
            <p className="mb-0" style={{ fontWeight: '500', color: '#1565C0' }}>{winner.name}</p>
            <small className="text-muted">{winner.contest} — {winner.position} Place</small>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

            {/* Recent Activities */}
            <div 
              className="card border-0 shadow-lg mb-4" 
              style={{ 
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                transition: 'all 0.3s ease'
              }}
            >
              <div 
                className="card-header border-0" 
                style={{ 
                  background: 'linear-gradient(90deg, #21CBF3, #667eea)', 
                  color: 'white',
                  borderRadius: '20px 20px 0 0'
                }}
              >
                <h5 className="mb-0" style={{ fontWeight: '600' }}>
                  <i className="bi bi-clock-history me-2"></i>
                  Recent Activities
                </h5>
              </div>
              <div className="card-body p-4">
                {[
                  { activity: 'Completed Mathematics Chapter 5', time: '2 hours ago', icon: 'check-circle-fill', color: '#4CAF50' },
                  { activity: 'Submitted Science Assignment', time: '5 hours ago', icon: 'upload', color: '#2196F3' },
                  { activity: 'Scored 85% in Hindi Test', time: '1 day ago', icon: 'trophy-fill', color: '#FF9800' },
                  { activity: 'Watched English Video', time: '2 days ago', icon: 'play-circle-fill', color: '#21CBF3' }
                ].map((item, index) => (
                  <div 
                    className="d-flex align-items-center py-3" 
                    key={index} 
                    style={{ 
                      borderBottom: index < 3 ? '1px solid rgba(33, 150, 243, 0.1)' : 'none',
                      borderRadius: '10px',
                      padding: '12px',
                      margin: '8px 0',
                      background: 'rgba(33, 150, 243, 0.02)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(33, 150, 243, 0.08)';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(33, 150, 243, 0.02)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <i className={`bi bi-${item.icon} me-3`} style={{ fontSize: '1.5rem', color: item.color }}></i>
                    <div className="flex-grow-1">
                      <p className="mb-1" style={{ color: '#1565C0', fontWeight: '500' }}>{item.activity}</p>
                      <small className="text-muted" style={{ fontWeight: '400' }}>{item.time}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          

          {/* Right Column */}
          <div className="col-lg-4">
            {/* Upcoming Assignments */}
            <div 
              className="card border-0 shadow-lg mb-4" 
              style={{ 
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                transition: 'all 0.3s ease'
              }}
            >
              <div 
                className="card-header border-0" 
                style={{ 
                  background: 'linear-gradient(90deg, #667eea, #764ba2)', 
                  color: 'white',
                  borderRadius: '20px 20px 0 0'
                }}
              >
                <h5 className="mb-0" style={{ fontWeight: '600' }}>
                  <i className="bi bi-clipboard-check me-2"></i>
                  Upcoming Tasks
                </h5>
              </div>
              <div className="card-body p-4">
                {[
                  { task: 'Mathematics Homework', due: 'Due in 2 days', priority: 'high' },
                  { task: 'Science Project', due: 'Due in 5 days', priority: 'medium' },
                  { task: 'Hindi Essay', due: 'Due in 1 week', priority: 'low' }
                ].map((assignment, index) => (
                  <div 
                    className="card mb-3 border-0 shadow-sm" 
                    key={index} 
                    style={{ 
                      borderLeft: '4px solid',
                      borderLeftColor: assignment.priority === 'high' ? '#F44336' : assignment.priority === 'medium' ? '#FF9800' : '#4CAF50',
                      background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.05), rgba(33, 203, 243, 0.02))',
                      borderRadius: '15px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(5px)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(33, 150, 243, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                    }}
                  >
                    <div className="card-body p-3">
                      <h6 className="mb-2" style={{ color: '#1565C0', fontWeight: '600' }}>{assignment.task}</h6>
                      <small className="text-muted" style={{ fontWeight: '500' }}>{assignment.due}</small>
                    </div>
                  </div>
                ))}
                <button 
                  className="btn w-100 mt-3" 
                  style={{ 
                    background: 'linear-gradient(90deg, #2196F3, #21CBF3)', 
                    color: 'white', 
                    border: 'none',
                    borderRadius: '15px',
                    padding: '12px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.02)';
                    e.target.style.boxShadow = '0 8px 25px rgba(33, 150, 243, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  View All Tasks
                </button>
              </div>
            </div>


            {/* Performance Chart */}
            <div 
              className="card border-0 shadow-lg mb-4" 
              style={{ 
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                transition: 'all 0.3s ease'
              }}
            >
              <div 
                className="card-header border-0" 
                style={{ 
                  background: 'linear-gradient(90deg, #1565C0, #0D47A1)', 
                  color: 'white',
                  borderRadius: '20px 20px 0 0'
                }}
              >
                <h5 className="mb-0" style={{ fontWeight: '600' }}>
                  <i className="bi bi-graph-up me-2"></i>
                  Performance
                </h5>
              </div>
              <div className="card-body text-center p-4">
                <div className="row">
                  <div className="col-6">
                    <div className="mb-3">
                      <div style={{ 
                        width: '90px', 
                        height: '90px', 
                        borderRadius: '50%', 
                        background: `conic-gradient(#2196F3 ${87*3.6}deg, rgba(33, 150, 243, 0.1) 0deg)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                        transition: 'all 0.3s ease'
                      }}>
                        <div style={{ 
                          width: '70px', 
                          height: '70px', 
                          borderRadius: '50%', 
                          backgroundColor: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: '700',
                          color: '#1565C0',
                          fontSize: '16px'
                        }}>
                          87%
                        </div>
                      </div>
                      <small style={{ color: '#666', fontWeight: '600', marginTop: '8px', display: 'block' }}>Attendance</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <div style={{ 
                        width: '90px', 
                        height: '90px', 
                        borderRadius: '50%', 
                        background: `conic-gradient(#21CBF3 ${78*3.6}deg, rgba(33, 203, 243, 0.1) 0deg)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                        transition: 'all 0.3s ease'
                      }}>
                        <div style={{ 
                          width: '70px', 
                          height: '70px', 
                          borderRadius: '50%', 
                          backgroundColor: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: '700',
                          color: '#1565C0',
                          fontSize: '16px'
                        }}>
                          78%
                        </div>
                      </div>
                      <small style={{ color: '#666', fontWeight: '600', marginTop: '8px', display: 'block' }}>Average Marks</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div 
              className="card border-0 shadow-lg mb-4" 
              style={{ 
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                transition: 'all 0.3s ease'
              }}
            >
              <div 
                className="card-header border-0" 
                style={{ 
                  background: 'linear-gradient(90deg, #764ba2, #667eea)', 
                  color: 'white',
                  borderRadius: '20px 20px 0 0'
                }}
              >
                <h5 className="mb-0" style={{ fontWeight: '600' }}>
                  <i className="bi bi-lightning me-2"></i>
                  Quick Links
                </h5>
              </div>
              <div className="card-body p-3">
                <div className="row g-3">
                  {[
                    { name: 'Live Class', icon: 'camera-video', color: '#F44336' },
                    { name: 'Digital Library', icon: 'book', color: '#4CAF50' },
                    { name: 'Test Series', icon: 'clipboard-data', color: '#FF9800' },
                    { name: 'Doubt Solving', icon: 'question-circle', color: '#9C27B0' }
                  ].map((link, index) => (
                    <div className="col-6" key={index}>
                      <button 
                        className="btn w-100 p-3 border-0" 
                        style={{ 
                          background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.08), rgba(33, 203, 243, 0.05))',
                          borderRadius: '15px',
                          color: '#1565C0',
                          fontWeight: '500',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'translateY(-5px)';
                          e.target.style.boxShadow = '0 10px 25px rgba(33, 150, 243, 0.2)';
                          e.target.style.background = 'linear-gradient(135deg, rgba(33, 150, 243, 0.15), rgba(33, 203, 243, 0.1))';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = 'none';
                          e.target.style.background = 'linear-gradient(135deg, rgba(33, 150, 243, 0.08), rgba(33, 203, 243, 0.05))';
                        }}
                      >
                        <i className={`bi bi-${link.icon} mb-2 d-block`} style={{ color: link.color, fontSize: '1.5rem' }}></i>
                        <small style={{ fontSize: '12px' }}>{link.name}</small>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Study Resources Section */}
            <div 
              className="card border-0 shadow-lg mb-4" 
              style={{ 
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                transition: 'all 0.3s ease'
              }}
            >
              <div 
                className="card-header border-0" 
                style={{ 
                  background: 'linear-gradient(90deg, #2196F3, #1976D2)', 
                  color: 'white',
                  borderRadius: '20px 20px 0 0'
                }}
              >
                <h5 className="mb-0" style={{ fontWeight: '600' }}>
                  <i className="bi bi-bookmark-star me-2"></i>
                  Study Resources
                </h5>
              </div>
              <div className="card-body p-3">
                {[
                  { resource: 'Practice Papers', icon: 'file-text', count: '25+' },
                  { resource: 'Video Tutorials', icon: 'play-btn', count: '150+' },
                  { resource: 'Mock Tests', icon: 'speedometer2', count: '10+' }
                ].map((item, index) => (
                  <div 
                    className="d-flex align-items-center justify-content-between p-2 mb-2" 
                    key={index}
                    style={{
                      background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.05), rgba(33, 203, 243, 0.02))',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(33, 150, 243, 0.12), rgba(33, 203, 243, 0.08))';
                      e.currentTarget.style.transform = 'translateX(5px)';
                      e.currentTarget.style.boxShadow = '0 6px 15px rgba(33, 150, 243, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(33, 150, 243, 0.05), rgba(33, 203, 243, 0.02))';
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <i className={`bi bi-${item.icon} me-3`} style={{ color: '#1565C0', fontSize: '1.3rem' }}></i>
                      <span style={{ fontWeight: '500', color: '#1565C0' }}>{item.resource}</span>
                    </div>
                    <small style={{ fontWeight: '600', color: '#21CBF3' }}>{item.count}</small>
                  </div>
                ))}
              </div>
            </div>
           


            {/* Announcements Section */}
            <div 
              className="card border-0 shadow-lg mb-4" 
              style={{ 
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                transition: 'all 0.3s ease'
              }}
            >
              <div 
                className="card-header border-0" 
                style={{ 
                  background: 'linear-gradient(90deg, #03DAC6, #21CBF3)', 
                  color: 'white',
                  borderRadius: '20px 20px 0 0'
                }}
              >
                <h5 className="mb-0" style={{ fontWeight: '600' }}>
                  <i className="bi bi-megaphone me-2"></i>
                  Announcements
                </h5>
              </div>
              <div className="card-body p-3">
                {[
                  { title: 'Parent-Teacher Meeting', date: '10th Sept, 2025', icon: 'people-fill' },
                  { title: 'Mid-Term Exams Schedule Released', date: '12th Sept, 2025', icon: 'calendar-event' },
                  { title: 'Science Exhibition', date: '15th Sept, 2025', icon: 'lightbulb-fill' }
                ].map((notice, index) => (
                  <div 
                    key={index}
                    className="d-flex align-items-center p-3 mb-2"
                    style={{
                      background: 'rgba(33, 150, 243, 0.05)',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(33, 150, 243, 0.12)';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(33, 150, 243, 0.05)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <i className={`bi bi-${notice.icon} me-3`} style={{ fontSize: '1.3rem', color: '#2196F3' }}></i>
                    <div>
                      <p className="mb-1" style={{ fontWeight: '500', color: '#1565C0' }}>{notice.title}</p>
                      <small className="text-muted">{notice.date}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;