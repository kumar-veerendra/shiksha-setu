import React from 'react';
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import Footer from "../components/Footer"
import HomeContent from './HomeContent';

function LandingPage() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const navigate = useNavigate();

    const handleGuest = () => {
        // Generate a random 4-digit number
        const randomId = Math.floor(1000 + Math.random() * 9000);
        navigate(`/${randomId}`);
    };

    const navbarStyles = {  
        loginBtn: {
        background: isDarkMode 
            ? 'linear-gradient(135deg, #64748b 0%, #475569 100%)' 
            : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
        border: 'none',
        color: isDarkMode ? '#ffffff' : '#1f2937',
        fontWeight: '600',
        padding: '0.5rem 1.5rem',
        borderRadius: '2rem',
        transition: 'all 0.3s ease',
        boxShadow: isDarkMode 
            ? '0 2px 10px rgba(100, 116, 139, 0.3)' 
            : '0 2px 10px rgba(251, 191, 36, 0.3)'
        } 
    };

    return (
        <>
            <div className='landingPageContainer '>
                <nav style={{ backgroundColor: "white" }} className='border-bottom sticky-top'>
                    <div className='navHeader'>
                        <h2><span style={{ color: "#FF9839" }}>Shiksha Setu</span></h2>
                    </div>

                    <div className='navList' style={{ display: "flex", gap: "1rem" }}>

                        <li className="nav-item ms-3 mx-5">
                            <Link 
                            to="/Home" 
                            className="btn login-btn-custom"
                            >
                            Home
                            </Link>
                        </li>

                        <li className="nav-item ms-3 mx-5">
                            <Link 
                            to="/login" 
                            className="btn login-btn-custom"
                            >
                            Feature
                            </Link>
                        </li>

                        <li className="nav-item ms-3 mx-5">
                            <Link 
                            to="/login" 
                            className="btn login-btn-custom"
                            >
                            About
                            </Link>
                        </li>
                        
                        <li className="nav-item ms-3 mx-5">
                            <Link 
                            to="/login" 
                            className="btn login-btn-custom"
                            >
                            Contact
                            </Link>
                        </li>
                
                        {/* Join as Guest */}
                        <div 
                            role='button'
                            onClick={handleGuest}
                            style={{ 
                                color: "black", 
                                padding: "0.5rem 1rem", 
                                borderRadius: "0.25rem", 
                                cursor: "pointer"
                            }}
                        >
                            Join as Guest
                        </div>

                     
                        
                    {/* Login/Profile Button */}
                      <li className="nav-item ms-3 mx-5">
                        <Link 
                          to="/login" 
                          className="btn login-btn-custom"
                          style={navbarStyles.loginBtn}
                        >
                          <i className="fas fa-sign-in-alt me-2"></i> Login
                        </Link>
                      </li>                

                    </div>
                </nav>

                {/* <div className="landingMainContainer">
                    <div>
                        <h1><span style={{color: "#FF9839"}}>Connect</span> to your live classroom</h1> 
                        <p>Cover a distance by Shiksha Setu</p>

                        <div role='button'>
                            <Link to={"/auth"}>Get Started</Link>
                        </div>
                    </div>

                    <div>
                        <img src="/mobile.png" alt="mobile" />
                    </div>
                </div> */}

            </div>

            <HomeContent />
            
            <Footer />
        </>
    );
}

export default LandingPage;
