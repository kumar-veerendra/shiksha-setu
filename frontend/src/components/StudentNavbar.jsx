import React from "react";

const StudentNavbar = () => {
    return (
        <>
            <style jsx>{`

                .modern-navbar {
                    background: linear-gradient(90deg, #ff6a00, #ee0979);
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
                    color: white !important;
                    border-radius: 20px;
                    transition: all 0.3s ease;
                    font-weight: 600;
                    font-size: 16px;
                }

                .nav-link-modern:hover {
                    background: rgba(255, 255, 255, 0.2) !important;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(33, 150, 243, 0.3);
                    color: white !important;
                }

                .badge-modern {
                    background: linear-gradient(45deg, #FF6B6B, #FF8E53);
                    border-radius: 12px;
                    font-size: 10px;
                    font-weight: 600;
                }

                .dropdown-menu-modern {
                    border-radius: 20px;
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(20px);
                    box-shadow: 0 20px 40px rgba(33, 150, 243, 0.2);
                    border: 1px solid rgba(33, 150, 243, 0.1);
                    margin-top: 10px;
                }

                .dropdown-item-modern {
                    color: #1565C0;
                    border-radius: 15px;
                    margin: 5px 10px;
                    font-weight: 500;
                    transition: all 0.3s ease;
                }

                .dropdown-item-modern:hover {
                    background: linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(33, 203, 243, 0.05));
                    transform: translateX(5px);
                    color: #1565C0;
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
            `}</style>

            <nav className="navbar navbar-expand-lg navbar-light shadow-lg sticky-top modern-navbar">
                <div className="container">
                    {/* Brand */}
                    <a className="navbar-brand fw-bold d-flex align-items-center text-decoration-none" href="/dashboard">
                        <img
                            src="/projectLogo.png"
                            alt="Shiksha Setu Logo"
                            className="logo-image me-3"
                        />
                        <div>
                            <div className="brand-text">Shiksha Setu</div>
                            <div className="brand-subtext">Government of Rajasthan - Child Welfare Department</div>
                        </div>
                    </a>

                    {/* Mobile Toggle */}
                    <button className="navbar-toggler navbar-toggler-modern" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <i className="bi bi-list text-white fs-5"></i>
                    </button>

                    {/* Navigation Links */}
                    <div className="navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-1">
                                <a className="nav-link nav-link-modern px-4 py-2 text-uppercase" href="/dashboard">
                                    <i className="bi bi-speedometer2 me-2"></i>Dashboard
                                </a>
                            </li>
                            <li className="nav-item mx-1">
                                <a className="nav-link nav-link-modern px-4 py-2 text-uppercase" href="/classes">
                                    <i className="bi bi-book me-2"></i>Classes
                                </a>
                            </li>
                            <li className="nav-item mx-1">
                                <a className="nav-link nav-link-modern px-4 py-2 text-uppercase d-flex align-items-center" href="/assignments">
                                    <i className="bi bi-clipboard-check me-2"></i>Assignments
                                    <span className="badge badge-modern ms-2 px-2 py-1">3</span>
                                </a>
                            </li>
                            <li className="nav-item dropdown mx-1">
                                <a className="nav-link nav-link-modern dropdown-toggle px-4 py-2 text-uppercase" href="#" data-bs-toggle="dropdown">
                                    <i className="bi bi-person-circle me-2"></i>More
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-modern">
                                    <li><a className="dropdown-item dropdown-item-modern py-3 px-4" href="/attendance">
                                        <i className="bi bi-calendar-check me-3 text-primary"></i>Attendance
                                    </a></li>
                                    <li><a className="dropdown-item dropdown-item-modern py-3 px-4" href="/exams">
                                        <i className="bi bi-clipboard-data me-3" style={{ color: '#21CBF3' }}></i>Exams & Results
                                    </a></li>
                                    <li><a className="dropdown-item dropdown-item-modern py-3 px-4 d-flex align-items-center" href="/messages">
                                        <i className="bi bi-chat-dots me-3" style={{ color: '#667eea' }}></i>
                                        Messages/Forum
                                        <span className="badge badge-modern ms-auto px-2 py-1">2</span>
                                    </a></li>
                                    <li><hr className="dropdown-divider mx-3 my-2" style={{ borderColor: 'rgba(33, 150, 243, 0.2)' }} /></li>
                                    <li><a className="dropdown-item dropdown-item-modern py-3 px-4" href="/profile">
                                        <i className="bi bi-gear me-3 text-primary"></i>Profile & Settings
                                    </a></li>
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

export default StudentNavbar;