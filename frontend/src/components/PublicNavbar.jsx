import React from "react";
import { Link } from "react-router-dom";


const PublicNavbar = () => {
    return (
        <>
            <style jsx>{`
                .public-navbar {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
                }
                
                .navbar-scrolled {
                    background: rgba(255, 255, 255, 0.98);
                    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
                }
                
                .logo-image {
                    width: 100px;
                    height: 100px;
                    transition: all 0.3s ease;
                    object-fit: contain;
                }
                
                .brand-text {
                    font-family: "Segoe UI", sans-serif;
                    font-weight: 700;
                    font-size: 22px;
                    color: #2196F3;
                    margin-left: 10px;
                }
                
                .nav-link-public {
                    color: #333 !important;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    margin: 0 8px;
                    border-radius: 6px;
                    padding: 8px 16px !important;
                }
                
                .nav-link-public:hover {
                    color: #2196F3 !important;
                    background: rgba(33, 150, 243, 0.08);
                }
                
                .login-btn {
                    background: transparent;
                    color: #2196F3;
                    border: 1.5px solid #2196F3;
                    border-radius: 20px;
                    padding: 8px 20px;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }
                
                .login-btn:hover {
                    background: rgba(33, 150, 243, 0.1);
                    transform: translateY(-2px);
                }
                
                .signup-btn {
                    background: linear-gradient(90deg, #2196F3, #21CBF3);
                    color: white;
                    border: none;
                    border-radius: 20px;
                    padding: 8px 20px;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(33, 150, 243, 0.2);
                }
                
                .signup-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(33, 150, 243, 0.3);
                }
                
                .navbar-toggler-public {
                    border: none;
                    padding: 4px 8px;
                    border-radius: 8px;
                }
                
                .navbar-toggler-public:focus {
                    box-shadow: none;
                }
            `}</style>

            <nav className="navbar navbar-expand-lg navbar-light sticky-top public-navbar" id="publicNavbar">
                <div className="container">
                    {/* Brand */}
                    <a className="navbar-brand d-flex align-items-center text-decoration-none" href="/">
                        <img
                            src="/projectLogo.png"
                            alt="Shiksha Setu Logo"
                            className="logo-image"
                        />
                        <span className="brand-text">Shiksha Setu</span>
                    </a>

                    {/* Mobile Toggle */}
                    <button 
                        className="navbar-toggler navbar-toggler-public" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#publicNavbarContent"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navigation Links */}
                    <div className="navbar-collapse" id="publicNavbarContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link nav-link-public" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-public" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-public" href="/courses">Courses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-public" href="/contact">Contact</a>
                            </li>
                        </ul>
                        
                        {/* Auth Buttons */}
                        <div className="d-flex align-items-center gap-2">
                            <Link to="/login" className="btn login-btn me-2">Log In</Link>
                            <Link to="/signup" className="btn signup-btn">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Scroll effect script */}
            <script dangerouslySetInnerHTML={{
                __html: `
                    window.addEventListener('scroll', function() {
                        const navbar = document.getElementById('publicNavbar');
                        if (window.scrollY > 10) {
                            navbar.classList.add('navbar-scrolled');
                        } else {
                            navbar.classList.remove('navbar-scrolled');
                        }
                    });
                `
            }} />
        </>
    );
};

export default PublicNavbar;