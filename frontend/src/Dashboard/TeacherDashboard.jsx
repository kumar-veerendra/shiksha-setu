import React, { useState } from 'react';

const TeacherDashboard = () => {
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
                            {/* <div className="d-flex align-items-center mb-2">
                                <div
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
                                    <i className="bi bi-person-badge" style={{ fontSize: '24px', color: 'white' }}></i>
                                </div>
                            </div> */}
                            <h1 style={{ color: 'white', marginBottom: '5px', fontWeight: '500', fontSize: '2rem' }}>
                                Welcome, Dr. Anjali Sharma
                            </h1>
                            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '18px', marginBottom: '0' }}>
                                Mathematics Department - Class 10th Coordinator
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
                                <i className="bi bi-people-fill mb-3" style={{ fontSize: '3rem' }}></i>
                                <h3 className="mb-2" style={{ fontWeight: '700' }}>42</h3>
                                <p className="mb-0" style={{ fontSize: '14px', opacity: '0.9' }}>Total Students</p>
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
                                <h3 className="mb-2" style={{ fontWeight: '700' }}>12</h3>
                                <p className="mb-0" style={{ fontSize: '14px', opacity: '0.9' }}>Assignments to Grade</p>
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
                                <i className="bi bi-calendar-event-fill mb-3" style={{ fontSize: '3rem' }}></i>
                                <h3 className="mb-2" style={{ fontWeight: '700' }}>3</h3>
                                <p className="mb-0" style={{ fontSize: '14px', opacity: '0.9' }}>Classes Today</p>
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
                                <i className="bi bi-chat-left-text-fill mb-3" style={{ fontSize: '3rem' }}></i>
                                <h3 className="mb-2" style={{ fontWeight: '700' }}>7</h3>
                                <p className="mb-0" style={{ fontSize: '14px', opacity: '0.9' }}>Pending Inquiries</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="row">
                    {/* Left Column */}
                    <div className="col-lg-8">
                        {/* My Classes Section */}
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
                                    <i className="bi bi-mortarboard-fill me-2"></i>
                                    My Classes
                                </h5>
                            </div>
                            <div className="card-body p-4">
                                <div className="row">
                                    {[
                                        { class: '10A - Mathematics', students: 42, progress: 68, time: '9:00-10:00 AM', room: 'Room 201' },
                                        { class: '10B - Mathematics', students: 38, progress: 72, time: '10:15-11:15 AM', room: 'Room 205' },
                                        { class: '9A - Advanced Math', students: 25, progress: 85, time: '11:30-12:30 PM', room: 'Room 310' },
                                        { class: '11A - Calculus', students: 30, progress: 60, time: '1:30-2:30 PM', room: 'Room 402' }
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
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <h6 className="mb-0" style={{ color: '#1565C0', fontWeight: '600' }}>{course.class}</h6>
                                                        <span className="badge" style={{ background: 'rgba(33, 150, 243, 0.2)', color: '#1565C0' }}>
                                                            {course.students} students
                                                        </span>
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
                                                                background: `linear-gradient(90deg, #2196F3, #21CBF3)`,
                                                                borderRadius: '10px',
                                                                transition: 'width 1s ease'
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <small style={{ color: '#666', fontWeight: '500' }}>
                                                            <i className="bi bi-clock me-1"></i>{course.time}
                                                        </small>
                                                        <small style={{ color: '#666', fontWeight: '500' }}>
                                                            <i className="bi bi-geo-alt me-1"></i>{course.room}
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Assignment Grading Section */}
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
                                    <i className="bi bi-clipboard-check me-2"></i>
                                    Assignment Grading
                                </h5>
                            </div>
                            <div className="card-body p-4">
                                {[
                                    { assignment: 'Algebra Homework #5', class: '10A Mathematics', submitted: 38, total: 42, due: 'Today' },
                                    { assignment: 'Geometry Quiz', class: '10B Mathematics', submitted: 32, total: 38, due: 'Tomorrow' },
                                    { assignment: 'Calculus Problem Set', class: '11A Calculus', submitted: 22, total: 30, due: '2 days ago' },
                                    { assignment: 'Trigonometry Worksheet', class: '9A Advanced Math', submitted: 20, total: 25, due: 'Yesterday' }
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
                                        <div className="flex-grow-1">
                                            <p className="mb-1" style={{ color: '#1565C0', fontWeight: '500' }}>{item.assignment}</p>
                                            <small className="text-muted" style={{ fontWeight: '400' }}>{item.class}</small>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-1" style={{ color: '#1565C0', fontWeight: '500' }}>
                                                {item.submitted}/{item.total} submitted
                                            </p>
                                            <small className={item.due === 'Today' || item.due === 'Yesterday' ? 'text-danger' : 'text-muted'} style={{ fontWeight: '500' }}>
                                                Due: {item.due}
                                            </small>
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
                                    Grade All Assignments
                                </button>
                            </div>
                        </div>

                        {/* Student Performance Overview */}
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
                                    <i className="bi bi-graph-up me-2"></i>
                                    Student Performance Overview
                                </h5>
                            </div>
                            <div className="card-body p-4">
                                <div className="row text-center">
                                    <div className="col-md-3 mb-3">
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '50%',
                                            background: `conic-gradient(#4CAF50 ${75 * 3.6}deg, rgba(76, 175, 80, 0.1) 0deg)`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            <div style={{
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '50%',
                                                backgroundColor: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: '700',
                                                color: '#4CAF50',
                                                fontSize: '14px'
                                            }}>
                                                75%
                                            </div>
                                        </div>
                                        <small style={{ color: '#666', fontWeight: '600', marginTop: '8px', display: 'block' }}>Class Average</small>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '50%',
                                            background: `conic-gradient(#2196F3 ${62 * 3.6}deg, rgba(33, 150, 243, 0.1) 0deg)`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            <div style={{
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '50%',
                                                backgroundColor: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: '700',
                                                color: '#2196F3',
                                                fontSize: '14px'
                                            }}>
                                                62%
                                            </div>
                                        </div>
                                        <small style={{ color: '#666', fontWeight: '600', marginTop: '8px', display: 'block' }}>Assignment Completion</small>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '50%',
                                            background: `conic-gradient(#FF9800 ${88 * 3.6}deg, rgba(255, 152, 0, 0.1) 0deg)`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            <div style={{
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '50%',
                                                backgroundColor: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: '700',
                                                color: '#FF9800',
                                                fontSize: '14px'
                                            }}>
                                                88%
                                            </div>
                                        </div>
                                        <small style={{ color: '#666', fontWeight: '600', marginTop: '8px', display: 'block' }}>Attendance Rate</small>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '50%',
                                            background: `conic-gradient(#9C27B0 ${53 * 3.6}deg, rgba(156, 39, 176, 0.1) 0deg)`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            <div style={{
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '50%',
                                                backgroundColor: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: '700',
                                                color: '#9C27B0',
                                                fontSize: '14px'
                                            }}>
                                                53%
                                            </div>
                                        </div>
                                        <small style={{ color: '#666', fontWeight: '600', marginTop: '8px', display: 'block' }}>Participation</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Class Analytics & Insights */}
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
      background: 'linear-gradient(90deg, #FF5722, #FF9800)', 
      color: 'white',
      borderRadius: '20px 20px 0 0'
    }}
  >
    <h5 className="mb-0" style={{ fontWeight: '600' }}>
      <i className="bi bi-bar-chart-line-fill me-2"></i>
      Class Analytics & Insights
    </h5>
  </div>
  <div className="card-body p-4">
    {/* Performance Table */}
    <h6 style={{ color: '#FF5722', fontWeight: '500' }}>Top Performing Students</h6>
    <table className="table table-sm table-striped mb-4">
      <thead>
        <tr>
          <th>Name</th>
          <th>Average Score</th>
          <th>Assignments Completed</th>
          <th>Attendance</th>
        </tr>
      </thead>
      <tbody>
        {[
          { name: 'Riya Sharma', score: '95%', assignments: 12, attendance: '98%' },
          { name: 'Aditya Verma', score: '92%', assignments: 11, attendance: '95%' },
          { name: 'Sneha Das', score: '90%', assignments: 12, attendance: '97%' },
          { name: 'Rahul Jain', score: '88%', assignments: 11, attendance: '94%' }
        ].map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.score}</td>
            <td>{student.assignments}</td>
            <td>{student.attendance}</td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Notes Section */}
    <h6 style={{ color: '#FF5722', fontWeight: '500' }}>Teacher Notes</h6>
    <ul style={{ paddingLeft: '20px', marginBottom: '1rem' }}>
      <li>Prepare extra materials for students scoring below 70% in Algebra.</li>
      <li>Schedule one-on-one mentoring sessions for struggling students.</li>
      <li>Plan interactive group activities for upcoming Math Olympiad training.</li>
      <li>Review attendance policies; notify students with less than 75% attendance.</li>
    </ul>

    {/* Charts (Placeholder) */}
    <div 
      style={{ 
        height: '200px', 
        background: 'linear-gradient(135deg, rgba(255,87,34,0.1), rgba(255,152,0,0.05))', 
        borderRadius: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FF5722',
        fontWeight: '600',
        fontSize: '1.1rem'
      }}
    >
      Chart Placeholder: Class Performance Over Time
    </div>
  </div>
</div>

                    </div>

                    {/* Right Column */}
                    <div className="col-lg-4">
                        {/* Today's Schedule */}
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
                                    <i className="bi bi-calendar-day me-2"></i>
                                    Today's Schedule
                                </h5>
                            </div>
                            <div className="card-body p-4">
                                {[
                                    { time: '9:00-10:00 AM', class: '10A Mathematics', room: 'Room 201' },
                                    { time: '10:15-11:15 AM', class: '10B Mathematics', room: 'Room 205' },
                                    { time: '11:30-12:30 PM', class: 'Department Meeting', room: 'Conference Room' },
                                    { time: '1:30-2:30 PM', class: '9A Advanced Math', room: 'Room 310' },
                                    { time: '3:00-4:00 PM', class: 'Office Hours', room: 'Faculty Lounge' }
                                ].map((schedule, index) => (
                                    <div
                                        className="card mb-3 border-0 shadow-sm"
                                        key={index}
                                        style={{
                                            borderLeft: '4px solid #2196F3',
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
                                            <h6 className="mb-2" style={{ color: '#1565C0', fontWeight: '600' }}>{schedule.time}</h6>
                                            <p className="mb-1" style={{ color: '#2196F3', fontWeight: '500' }}>{schedule.class}</p>
                                            <small className="text-muted" style={{ fontWeight: '500' }}>
                                                <i className="bi bi-geo-alt me-1"></i>{schedule.room}
                                            </small>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Actions */}
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
                                    <i className="bi bi-lightning me-2"></i>
                                    Quick Actions
                                </h5>
                            </div>
                            <div className="card-body p-3">
                                <div className="row g-3">
                                    {[
                                        { name: 'Create Assignment', icon: 'plus-circle', color: '#4CAF50' },
                                        { name: 'Schedule Class', icon: 'calendar-plus', color: '#2196F3' },
                                        { name: 'Send Announcement', icon: 'megaphone', color: '#FF9800' },
                                        { name: 'Grade Papers', icon: 'pencil-square', color: '#9C27B0' },
                                        { name: 'View Analytics', icon: 'bar-chart', color: '#607D8B' },
                                        { name: 'Student Reports', icon: 'file-text', color: '#F44336' }
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

                        {/* Upcoming Events */}
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
                                    <i className="bi bi-calendar-event me-2"></i>
                                    Upcoming Events
                                </h5>
                            </div>
                            <div className="card-body p-3">
                                {[
                                    { title: 'Parent-Teacher Meeting', date: '12th Sept, 2025', time: '2:00 PM', icon: 'people-fill' },
                                    { title: 'Math Olympiad Training', date: '15th Sept, 2025', time: '3:30 PM', icon: 'trophy-fill' },
                                    { title: 'Quarterly Assessment', date: '20th Sept, 2025', time: 'All Day', icon: 'clipboard-data' },
                                    { title: 'Curriculum Review', date: '25th Sept, 2025', time: '4:00 PM', icon: 'journal-text' }
                                ].map((event, index) => (
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
                                        <i className={`bi bi-${event.icon} me-3`} style={{ fontSize: '1.3rem', color: '#2196F3' }}></i>
                                        <div className="flex-grow-1">
                                            <p className="mb-1" style={{ fontWeight: '500', color: '#1565C0' }}>{event.title}</p>
                                            <small className="text-muted">{event.date} • {event.time}</small>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Announcements */}
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
                                    <i className="bi bi-megaphone me-2"></i>
                                    My Announcements
                                </h5>
                            </div>
                            <div className="card-body p-3">
                                {[
                                    { title: 'Homework deadline extended', class: '10A Mathematics', date: '2 hours ago' },
                                    { title: 'Extra class scheduled', class: '11A Calculus', date: 'Yesterday' },
                                    { title: 'Important resources uploaded', class: '9A Advanced Math', date: '2 days ago' }
                                ].map((announcement, index) => (
                                    <div
                                        className="d-flex align-items-center p-3 mb-2"
                                        key={index}
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
                                        <i className="bi bi-megaphone-fill me-3" style={{ fontSize: '1.3rem', color: '#2196F3' }}></i>
                                        <div>
                                            <p className="mb-1" style={{ fontWeight: '500', color: '#1565C0' }}>{announcement.title}</p>
                                            <small className="text-muted">{announcement.class} • {announcement.date}</small>
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
                                        padding: '10px',
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
                                    View All Announcements
                                </button>
                            </div>
                        </div>

                    </div> {/* End Right Column */}
                </div> {/* End Main Content Row */}
            </div> {/* End Container */}
        </div> // End Dashboard Wrapper
    );
};

export default TeacherDashboard;