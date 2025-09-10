import React from "react";

const TeacherNavbar = () => {
    return (
        <>
            <style>{`
                .modern-navbar {
                       background: rgba(20, 20, 20, 0.85); /* dark overlay */
                        border-bottom: 3px solid rgba(255, 255, 255, 0.2);
                        backdrop-filter: blur(20px);
                        transition: all 0.3s ease;
                    }
                .navbar-brand:hover {
                    transform: scale(1.05);
                    transition: all 0.3s ease;
                }

                .logo-image {
                    width: auto;
                    height: 100px;
                    transition: all 0.3s ease;
                    object-fit: contain;
                }

                .nav-link-modern {
                    color: #fff !important;
                    border-radius: 20px;
                    transition: all 0.3s ease;
                    font-weight: 600;
                    font-size: 13px;
                }

                .nav-link-modern:hover {
                    background: rgba(255, 255, 255, 0.2) !important;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
                    color: white !important;
                }

                .badge-modern {
                    background: linear-gradient(45deg, #FF6B6B, #FF8E53);
                    border-radius: 12px;
                    font-size: 10px;
                    font-weight: 600;
                }

                .badge-warning {
                    background: linear-gradient(45deg, #FFD93D, #FF8C42);
                    border-radius: 12px;
                    font-size: 10px;
                    font-weight: 600;
                }

                .dropdown-menu-modern {
                    border-radius: 20px;
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(20px);
                    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
                    border: 1px solid rgba(102, 126, 234, 0.1);
                    margin-top: 10px;
                }

                .dropdown-item-modern {
                    color: #667eea;
                    border-radius: 15px;
                    margin: 5px 10px;
                    font-weight: 500;
                    transition: all 0.3s ease;
                }

                .dropdown-item-modern:hover {
                    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.05));
                    transform: translateX(5px);
                    color: #667eea;
                }

                .logout-item:hover {
                    background: linear-gradient(135deg, rgba(220, 53, 69, 0.1), rgba(220, 53, 69, 0.05));
                    color: #dc3545;
                }

                .navbar-toggler-modern {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 10px;
                    border: none;
                }

                .brand-text {
                    font-family: "Segoe UI", sans-serif;
                    font-weight: 700;
                    font-size: 20px;
                    color: white;
                }

                .brand-subtext {
                    font-size: 11px;
                    color: rgba(255, 255, 255, 0.8);
                    font-weight: 500;
                }

                .mega-dropdown {
                    min-width: 280px;
                    padding: 15px 0;
                }

                .dropdown-header-modern {
                    color: #667eea;
                    font-weight: 700;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    padding: 8px 20px;
                    margin-bottom: 5px;
                }

                .dropdown-item-with-desc {
                    padding: 12px 20px !important;
                    margin: 2px 10px !important;
                }

                .item-desc {
                    font-size: 11px;
                    color: #6c757d;
                    margin-top: 2px;
                }
            `}</style>

            <nav className="navbar navbar-expand-lg navbar-light shadow-lg sticky-top modern-navbar">
                <div className="container">
                    {/* Brand */}
                    <a className="navbar-brand fw-bold d-flex align-items-center text-decoration-none" href="/teacher-dashboard">
                        <img
                            src="projectLogo.png"
                            alt="Shiksha Setu Logo"
                            className="logo-image me-3"
                        />
                        <div>
                            <div className="brand-text">Shiksha Setu</div>
                            <div className="brand-subtext">Teacher Portal - Government of Rajasthan</div>
                        </div>
                    </a>

                    {/* Mobile Toggle */}
                    <button className="navbar-toggler navbar-toggler-modern" data-bs-toggle="collapse" data-bs-target="#teacherNavbar">
                        <i className="bi bi-list text-white fs-5"></i>
                    </button>

                    {/* Navigation Links */}
                    <div className="navbar-collapse" id="teacherNavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-1">
                                <a className="nav-link nav-link-modern px-4 py-2 text-uppercase" href="/teacher-dashboard">
                                    <i className="bi bi-speedometer2 me-2"></i>Dashboard
                                </a>
                            </li>

                            <li className="nav-item dropdown mx-1">
                                <a className="nav-link nav-link-modern dropdown-toggle px-4 py-2 text-uppercase" href="#" data-bs-toggle="dropdown">
                                    <i className="bi bi-book me-2"></i>Classes
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-modern mega-dropdown">
                                    <li><h6 className="dropdown-header-modern">Manage Classes</h6></li>
                                    <li><a className="dropdown-item dropdown-item-modern dropdown-item-with-desc" href="/classes/create">
                                        <i className="bi bi-plus-circle me-3 text-success"></i>
                                        <div>
                                            <div>Create New Class</div>
                                            <div className="item-desc">Set up new courses & subjects</div>
                                        </div>
                                    </a></li>
                                    <li><a className="dropdown-item dropdown-item-modern dropdown-item-with-desc" href="/classes/manage">
                                        <i className="bi bi-gear me-3 text-primary"></i>
                                        <div>
                                            <div>Manage Classes</div>
                                            <div className="item-desc">View enrolled students & settings</div>
                                        </div>
                                    </a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown mx-1">
                                <a className="nav-link nav-link-modern dropdown-toggle px-4 py-2 text-uppercase d-flex align-items-center" href="#" data-bs-toggle="dropdown">
                                    <i className="bi bi-clipboard-check me-2"></i>Assignments
                                    <span className="badge badge-warning ms-2 px-2 py-1">5</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-modern mega-dropdown">
                                    <li><h6 className="dropdown-header-modern">Assignment Management</h6></li>
                                    <li><a className="dropdown-item dropdown-item-modern dropdown-item-with-desc" href="/assignments/upload">
                                        <i className="bi bi-cloud-upload me-3 text-info"></i>
                                        <div>
                                            <div>Upload Assignment</div>
                                            <div className="item-desc">Create & distribute new tasks</div>
                                        </div>
                                    </a></li>
                                    <li><a className="dropdown-item dropdown-item-modern dropdown-item-with-desc" href="/assignments/submissions">
                                        <i className="bi bi-file-text me-3 text-warning"></i>
                                        <div>
                                            <div>Review Submissions</div>
                                            <div className="item-desc">Check student submissions</div>
                                        </div>
                                    </a></li>
                                    <li><a className="dropdown-item dropdown-item-modern dropdown-item-with-desc" href="/assignments/grades">
                                        <i className="bi bi-star me-3 text-success"></i>
                                        <div>
                                            <div>Grades & Feedback</div>
                                            <div className="item-desc">Evaluate & provide feedback</div>
                                        </div>
                                    </a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown mx-1">
                                <a className="nav-link nav-link-modern dropdown-toggle px-4 py-2 text-uppercase" href="#" data-bs-toggle="dropdown">
                                    <i className="bi bi-calendar-check me-2"></i>Attendance
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-modern">
                                    <li><a className="dropdown-item dropdown-item-modern dropdown-item-with-desc" href="/attendance/mark">
                                        <i className="bi bi-check-circle me-3 text-success"></i>
                                        <div>
                                            <div>Mark Attendance</div>
                                            <div className="item-desc">Live or post-class marking</div>
                                        </div>
                                    </a></li>
                                    <li><a className="dropdown-item dropdown-item-modern dropdown-item-with-desc" href="/attendance/reports">
                                        <i className="bi bi-bar-chart me-3 text-info"></i>
                                        <div>
                                            <div>View Reports</div>
                                            <div className="item-desc">Attendance analytics</div>
                                        </div>
                                    </a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown mx-1">
                                <a className="nav-link nav-link-modern dropdown-toggle px-4 py-2 text-uppercase" href="#" data-bs-toggle="dropdown">
                                    <i className="bi bi-clipboard-data me-2"></i>Exams
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-modern">
                                    <li><a className="dropdown-item dropdown-item-modern dropdown-item-with-desc" href="/exams/create">
                                        <i className="bi bi-plus-square me-3 text-primary"></i>
                                        <div>
                                            <div>Create Tests</div>
                                            <div className="item-desc">Design quizzes & exams</div>
                                        </div>
                                    </a></li>
                                    <li><a className="dropdown-item dropdown-item-modern dropdown-item-with-desc" href="/exams/results">
                                        <i className="bi bi-trophy me-3 text-warning"></i>
                                        <div>
                                            <div>Upload Results</div>
                                            <div className="item-desc">Publish exam scores</div>
                                        </div>
                                    </a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown mx-1">
                                <a className="nav-link nav-link-modern dropdown-toggle px-4 py-2 text-uppercase d-flex align-items-center" href="#" data-bs-toggle="dropdown">
                                    <i className="bi bi-chat-dots me-2"></i>Messages
                                    <span className="badge badge-modern ms-2 px-2 py-1">12</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-modern">
                                    <li><a className="dropdown-item dropdown-item-modern dropdown-item-with-desc" href="/messages/students">
                                        <i className="bi bi-people me-3 text-info"></i>
                                        <div>
                                            <div>Student Messages</div>
                                            <div className="item-desc">Direct communication</div>
                                        </div>
                                    </a></li>
                                    <li><a className="dropdown-item dropdown-item-modern dropdown-item-with-desc" href="/messages/announcements">
                                        <i className="bi bi-megaphone me-3 text-warning"></i>
                                        <div>
                                            <div>Announcements</div>
                                            <div className="item-desc">Broadcast to classes</div>
                                        </div>
                                    </a></li>
                                    <li><a className="dropdown-item dropdown-item-modern dropdown-item-with-desc" href="/forum">
                                        <i className="bi bi-chat-square-text me-3 text-primary"></i>
                                        <div>
                                            <div>Discussion Forum</div>
                                            <div className="item-desc">Class discussions</div>
                                        </div>
                                    </a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown mx-1">
                                <a className="nav-link nav-link-modern dropdown-toggle px-4 py-2 text-uppercase" href="#" data-bs-toggle="dropdown">
                                    <i className="bi bi-person-circle me-2"></i>Account
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-modern">
                                    <li><a className="dropdown-item dropdown-item-modern py-3 px-4" href="/teacher-profile">
                                        <i className="bi bi-person me-3 text-primary"></i>Profile & Settings
                                    </a></li>
                                    <li><hr className="dropdown-divider mx-3 my-2" style={{ borderColor: 'rgba(102, 126, 234, 0.2)' }} /></li>
                                    <li><a className="dropdown-item dropdown-item-modern logout-item py-3 px-4 text-danger" href="/logout">
                                        <i className="bi bi-box-arrow-right me-3"></i>Logout
                                    </a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default TeacherNavbar;