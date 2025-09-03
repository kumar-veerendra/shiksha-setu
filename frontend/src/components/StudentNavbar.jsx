import React from "react";
import { Link } from "react-router-dom";

const StudentNavbar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-light shadow-lg sticky-top"
            style={{
                background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffcc02 100%)',
                borderBottom: '4px solid #d4af37'
            }}
        >
            <div className="container">
                {/* Brand / Logo */}
                <Link className="navbar-brand fw-bold d-flex align-items-center" to="/dashboard" style={{ color: '#8B4513' }}>
                    <div className="d-flex align-items-center">
                        {/* Emblem as an icon-like image */}
                        <img
                            src="emblem.png"
                            alt="Rajasthan Emblem"
                            style={{
                                width: '60px',
                                height: '60px',
                                marginRight: '10px',
                                verticalAlign: 'middle'
                            }}
                        />

                        <div>
                            <div style={{ fontSize: '18px', lineHeight: '1.2', color: '#8B4513', fontWeight: 'bold' }}>
                                Government of Rajasthan
                            </div>
                            <div style={{ fontSize: '12px', lineHeight: '1.2', color: '#6178a3ff', fontWeight: 'bold' }}>
                                Child Welfare Department
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Toggler for mobile view */}
                <button
                    className="navbar-toggler border-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#studentNavbar"
                    aria-controls="studentNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{ borderColor: '#8B4513' }}
                >
                    <span style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%238B4513' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='m4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`
                    }}></span>
                </button>

                {/* Navbar links */}
                <div className="collapse navbar-collapse" id="studentNavbar">
                    <ul className="navbar-nav ms-auto align-items-lg-center" style={{ margin: 0, padding: 0, listStyle: 'none' }}>

                        {/* Dashboard */}
                        <li className="nav-item position-relative mx-2">
                            <Link
                                className="nav-link fw-semibold text-uppercase position-relative px-3 py-2 rounded-pill"
                                to="/dashboard"
                                style={{
                                    fontSize: '13px',
                                    textDecoration: 'none',
                                    color: '#8B4513',
                                    transition: 'all 0.3s ease',
                                    border: '2px solid transparent'
                                }}
                            >
                                <i className="bi bi-speedometer2 me-1"></i>
                                Dashboard
                            </Link>
                        </li>

                        {/* Courses */}
                        <li className="nav-item position-relative mx-2">
                            <Link
                                className="nav-link fw-semibold text-uppercase position-relative px-3 py-2 rounded-pill"
                                to="/courses"
                                style={{
                                    fontSize: '13px',
                                    textDecoration: 'none',
                                    color: '#8B4513',
                                    transition: 'all 0.3s ease',
                                    border: '2px solid transparent'
                                }}
                            >
                                <i className="bi bi-book me-1"></i>
                                Courses
                            </Link>
                        </li>

                        {/* Assignments */}
                        <li className="nav-item position-relative mx-2">
                            <Link
                                className="nav-link fw-semibold text-uppercase position-relative px-3 py-2 rounded-pill d-flex align-items-center"
                                to="/assignments"
                                style={{
                                    fontSize: '13px',
                                    textDecoration: 'none',
                                    color: '#8B4513',
                                    transition: 'all 0.3s ease',
                                    border: '2px solid transparent'
                                }}
                            >
                                <i className="bi bi-clipboard-check me-1"></i>
                                Assignments
                                <span className="badge ms-2" style={{ backgroundColor: '#d4af37', color: '#8B4513', fontSize: '10px' }}>3</span>
                            </Link>
                        </li>

                        {/* Dropdown Menu (More) */}
                        <li className="nav-item dropdown position-relative mx-2">
                            <a
                                className="nav-link dropdown-toggle fw-semibold text-uppercase position-relative px-3 py-2 rounded-pill d-flex align-items-center"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                    fontSize: '13px',
                                    textDecoration: 'none',
                                    color: '#8B4513',
                                    transition: 'all 0.3s ease',
                                    border: '2px solid transparent'
                                }}
                            >
                                <i className="bi bi-person-circle me-1"></i>
                                More
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end shadow-lg border-2" style={{
                                borderRadius: '15px',
                                overflow: 'hidden',
                                borderColor: '#d4af37',
                                background: 'linear-gradient(135deg, #fff8dc 0%, #ffeaa7 100%)'
                            }}>
                                {/* Attendance */}
                                <li>
                                    <Link className="dropdown-item py-2 px-3 d-flex align-items-center fw-medium" to="/attendance">
                                        <i className="bi bi-calendar-check me-2" style={{ color: '#ff6b35' }}></i>
                                        Attendance
                                    </Link>
                                </li>

                                {/* Exams & Results */}
                                <li>
                                    <Link className="dropdown-item py-2 px-3 d-flex align-items-center fw-medium" to="/exams">
                                        <i className="bi bi-clipboard-data me-2" style={{ color: '#f7931e' }}></i>
                                        Exams & Results
                                    </Link>
                                </li>

                                {/* Messages/Forum */}
                                <li>
                                    <Link className="dropdown-item py-2 px-3 d-flex align-items-center fw-medium position-relative" to="/messages">
                                        <i className="bi bi-chat-dots me-2" style={{ color: '#ffcc02' }}></i>
                                        Messages/Forum
                                        <span className="badge ms-auto" style={{ backgroundColor: '#ff6b35', color: 'white', fontSize: '10px' }}>2</span>
                                    </Link>
                                </li>

                                <li><hr className="dropdown-divider my-1" style={{ borderColor: '#d4af37' }} /></li>

                                {/* Profile/Settings */}
                                <li>
                                    <Link className="dropdown-item py-2 px-3 d-flex align-items-center fw-medium" to="/profile">
                                        <i className="bi bi-gear me-2" style={{ color: '#8B4513' }}></i>
                                        Profile & Settings
                                    </Link>
                                </li>

                                {/* Logout */}
                                <li>
                                    <Link className="dropdown-item py-2 px-3 d-flex align-items-center fw-medium" to="/logout" style={{ color: '#dc3545' }}>
                                        <i className="bi bi-box-arrow-right me-2"></i>
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default StudentNavbar;
