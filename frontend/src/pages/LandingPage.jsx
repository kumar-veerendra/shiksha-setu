import React from 'react';
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();

    const handleGuest = () => {
        // Generate a random 4-digit number
        const randomId = Math.floor(1000 + Math.random() * 9000);
        navigate(`/${randomId}`);
    };

    return ( 
        <div className='landingPageContainer '>
            <nav style={{ backgroundColor: "white" }} className='border-bottom'>
                <div className='navHeader'>
                    <h2><span style={{ color: "#FF9839" }}>Shiksha Setu</span></h2>
                </div>

                <div className='navList' style={{ display: "flex", gap: "1rem" }}>
                    {/* Join as Guest */}
                    <div 
                        role='button'
                        onClick={handleGuest}
                        style={{ 
                            backgroundColor: "black", 
                            color: "white", 
                            padding: "0.5rem 1rem", 
                            borderRadius: "0.25rem", 
                            cursor: "pointer"
                        }}
                    >
                        Join as Guest
                    </div>

                    {/* Register button */}
                    <Link 
                        to="/login?role=student" 
                        style={{ 
                            backgroundColor: "black", 
                            color: "white", 
                            padding: "0.5rem 1rem", 
                            borderRadius: "0.25rem", 
                            textDecoration: "none" 
                        }}
                    >
                        Register
                    </Link>

                    {/* Student Login button */}
                    <Link 
                        to="/login?role=student" 
                        style={{ 
                            backgroundColor: "black", 
                            color: "white", 
                            padding: "0.5rem 1rem", 
                            borderRadius: "0.25rem", 
                            textDecoration: "none" 
                        }}
                    >
                        Login
                    </Link>
                </div>
            </nav>

            <div className="landingMainContainer">
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
            </div>
        </div>
    );
}

export default LandingPage;
