// import React from 'react';
// import "../App.css";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { useState } from 'react';
// import Footer from "../components/Footer"
// import HomeContent from './HomeContent';

// function HomeNavBar() {
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     const navigate = useNavigate();

//     const [meetingCode, setMeetingCode] = useState("");

//     const handleGuest = () => {
//         if (!meetingCode) {
//         alert("Please enter a meeting code");
//         return;
//         }
//         navigate(`/classroom/${meetingCode}`);
//     };

//     const navbarStyles = {  
//         loginBtn: {
//         background: isDarkMode 
//             ? 'linear-gradient(135deg, #64748b 0%, #475569 100%)' 
//             : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
//         border: 'none',
//         color: isDarkMode ? '#ffffff' : '#1f2937',
//         fontWeight: '600',
//         padding: '0.5rem 1.5rem',
//         borderRadius: '2rem',
//         transition: 'all 0.3s ease',
//         boxShadow: isDarkMode 
//             ? '0 2px 10px rgba(100, 116, 139, 0.3)' 
//             : '0 2px 10px rgba(251, 191, 36, 0.3)'
//         } 
//     };

//     return (
//         <>
            
//             <div className='landingPageContainer '>
//                 <nav style={{ backgroundColor: "white" }} className='border-bottom fixed-top'>
//                     <div className='navHeader'>
//                         <h2><span style={{ color: "#FF9839" }}>Shiksha Setu</span></h2>
//                     </div>

//                     <div className='navList' style={{ display: "flex", gap: "1rem" }}>

//                         <li className="nav-item ms-3 mx-5">
//                             <Link 
//                             to="/" 
//                             className="btn login-btn-custom"
//                             >
//                             Home
//                             </Link>
//                         </li>

//                         <li className="nav-item ms-3 mx-5">
//                             <Link 
//                             to="/feature" 
//                             className="btn login-btn-custom"
//                             >
//                             Feature
//                             </Link>
//                         </li>

//                         <li className="nav-item ms-3 mx-5">
//                             <Link 
//                             to="/about" 
//                             className="btn login-btn-custom"
//                             >
//                             About
//                             </Link>
//                         </li>
                        
//                         <li className="nav-item ms-3 mx-5">
//                             <Link 
//                             to="/contact" 
//                             className="btn login-btn-custom"
//                             >
//                             Contact
//                             </Link>
//                         </li>
                
//                         {/* Join as Guest */}
//                         <div 
//                             role='button'
//                             onClick={handleGuest}
//                             style={{ 
//                                 color: "black", 
//                                 padding: "0.5rem 1rem", 
//                                 borderRadius: "0.25rem", 
//                                 cursor: "pointer"
//                             }}
//                         >
//                             Join as Guest
//                         </div>

                     
                        
//                     {/* Login/Profile Button */}
//                       <li className="nav-item ms-3 mx-5">
//                         <Link 
//                           to="/login" 
//                           className="btn login-btn-custom"
//                           style={navbarStyles.loginBtn}
//                         >
//                           <i className="fas fa-sign-in-alt me-2"></i> Login
//                         </Link>
//                       </li>                

//                     </div>
//                 </nav>

//                 {/* <div className="landingMainContainer">
//                     <div>
//                         <h1><span style={{color: "#FF9839"}}>Connect</span> to your live classroom</h1> 
//                         <p>Cover a distance by Shiksha Setu</p>

//                         <div role='button'>
//                             <Link to={"/auth"}>Get Started</Link>
//                         </div>
//                     </div>

//                     <div>
//                         <img src="/mobile.png" alt="mobile" />
//                     </div>
//                 </div> */}

//             </div>

//         </>
//     );
// }

// export default HomeNavBar;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

function HomeNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [meetingCode, setMeetingCode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleGuest = () => {
    if (!meetingCode.trim()) {
      alert("Please enter a meeting code");
      return;
    }
    navigate(`/classroom/${meetingCode}`);
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');

        .setu-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          font-family: 'Nunito', sans-serif;
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0,0,0,0.07);
          transition: box-shadow 0.3s ease;
        }

        .setu-nav.scrolled {
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        }

        .setu-nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Logo */
        .setu-logo {
          font-size: 1.45rem;
          font-weight: 800;
          color: #FF9839;
          letter-spacing: -0.5px;
          text-decoration: none;
          white-space: nowrap;
        }
        .setu-logo span {
          color: #1f2937;
        }

        /* Desktop links */
        .setu-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .setu-links a.setu-link {
          font-size: 0.92rem;
          font-weight: 600;
          color: #374151;
          padding: 0.45rem 0.85rem;
          border-radius: 0.5rem;
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
        }
        .setu-links a.setu-link:hover {
          color: #FF9839;
          background: rgba(255,152,57,0.08);
        }

        /* Guest join area */
        .setu-guest {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #f9fafb;
          border: 1.5px solid #e5e7eb;
          border-radius: 2rem;
          padding: 0.3rem 0.3rem 0.3rem 0.85rem;
          transition: border-color 0.2s;
        }
        .setu-guest:focus-within {
          border-color: #FF9839;
        }
        .setu-guest input {
          border: none;
          background: transparent;
          font-family: 'Nunito', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          color: #374151;
          outline: none;
          width: 130px;
        }
        .setu-guest input::placeholder {
          color: #9ca3af;
          font-weight: 500;
        }
        .setu-guest button {
          background: #f3f4f6;
          border: none;
          border-radius: 2rem;
          padding: 0.35rem 0.85rem;
          font-family: 'Nunito', sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          color: #374151;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          white-space: nowrap;
        }
        .setu-guest button:hover {
          background: #FF9839;
          color: #fff;
        }

        /* Login button */
        .setu-login {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: linear-gradient(135deg, #FF9839 0%, #f97316 100%);
          color: #fff;
          font-family: 'Nunito', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          padding: 0.48rem 1.3rem;
          border-radius: 2rem;
          text-decoration: none;
          border: none;
          box-shadow: 0 3px 14px rgba(255,152,57,0.35);
          transition: transform 0.2s, box-shadow 0.2s;
          white-space: nowrap;
        }
        .setu-login:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(255,152,57,0.45);
          color: #fff;
          text-decoration: none;
        }

        /* Hamburger button */
        .setu-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 40px;
          height: 40px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          border-radius: 0.5rem;
          transition: background 0.2s;
        }
        .setu-hamburger:hover { background: #f3f4f6; }

        .setu-hamburger .bar {
          display: block;
          width: 22px;
          height: 2.5px;
          background: #374151;
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }
        .setu-hamburger.open .bar:nth-child(1) {
          transform: translateY(7.5px) rotate(45deg);
        }
        .setu-hamburger.open .bar:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .setu-hamburger.open .bar:nth-child(3) {
          transform: translateY(-7.5px) rotate(-45deg);
        }

        /* Mobile drawer */
        .setu-mobile-menu {
          display: none;
          flex-direction: column;
          padding: 0.75rem 1.5rem 1.25rem;
          background: #fff;
          border-top: 1px solid #f3f4f6;
          gap: 0.25rem;
          animation: slideDown 0.22s ease;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .setu-mobile-menu a.setu-link-mobile {
          font-size: 1rem;
          font-weight: 700;
          color: #374151;
          padding: 0.65rem 0.75rem;
          border-radius: 0.6rem;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
          display: block;
        }
        .setu-mobile-menu a.setu-link-mobile:hover {
          background: rgba(255,152,57,0.08);
          color: #FF9839;
        }

        .setu-mobile-divider {
          height: 1px;
          background: #f3f4f6;
          margin: 0.5rem 0;
        }

        .setu-guest-mobile {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #f9fafb;
          border: 1.5px solid #e5e7eb;
          border-radius: 2rem;
          padding: 0.35rem 0.35rem 0.35rem 1rem;
          margin-bottom: 0.5rem;
          transition: border-color 0.2s;
        }
        .setu-guest-mobile:focus-within { border-color: #FF9839; }
        .setu-guest-mobile input {
          flex: 1;
          border: none;
          background: transparent;
          font-family: 'Nunito', sans-serif;
          font-size: 0.92rem;
          font-weight: 600;
          color: #374151;
          outline: none;
        }
        .setu-guest-mobile input::placeholder { color: #9ca3af; font-weight: 500; }
        .setu-guest-mobile button {
          background: #f3f4f6;
          border: none;
          border-radius: 2rem;
          padding: 0.4rem 1rem;
          font-family: 'Nunito', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: #374151;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          white-space: nowrap;
        }
        .setu-guest-mobile button:hover { background: #FF9839; color: #fff; }

        .setu-login-mobile {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.4rem;
          background: linear-gradient(135deg, #FF9839 0%, #f97316 100%);
          color: #fff;
          font-family: 'Nunito', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          padding: 0.65rem 1.5rem;
          border-radius: 2rem;
          text-decoration: none;
          box-shadow: 0 3px 14px rgba(255,152,57,0.3);
          transition: box-shadow 0.2s;
        }
        .setu-login-mobile:hover {
          color: #fff;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(255,152,57,0.45);
        }

        /* Overlay */
        .setu-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.18);
          z-index: 999;
          backdrop-filter: blur(2px);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .setu-links, .setu-guest, .setu-login { display: none !important; }
          .setu-hamburger { display: flex; }
          .setu-mobile-menu.open { display: flex; }
          .setu-overlay.open { display: block; }
        }
      `}</style>

      {/* Overlay */}
      <div
        className={`setu-overlay ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
      />

      <nav className={`setu-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="setu-nav-inner">

          {/* Logo */}
          <Link to="/" className="setu-logo" onClick={closeMenu}>
            Shiksha <span>Setu</span>
          </Link>

          {/* Desktop nav */}
          <ul className="setu-links">
            {[['/', 'Home'], ['/feature', 'Features'], ['/about', 'About'], ['/contact', 'Contact']].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="setu-link">{label}</Link>
              </li>
            ))}
          </ul>

          {/* Desktop guest join */}
          <div className="setu-guest">
            <input
              type="text"
              placeholder="Enter meeting code"
              value={meetingCode}
              onChange={e => setMeetingCode(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleGuest()}
            />
            <button onClick={handleGuest}>Join</button>
          </div>

          {/* Desktop login */}
          <Link to="/login" className="setu-login">
            Login
          </Link>

          {/* Hamburger (mobile) */}
          <button
            className={`setu-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`setu-mobile-menu ${menuOpen ? 'open' : ''}`}>
          {[['/', 'Home'], ['/feature', 'Features'], ['/about', 'About'], ['/contact', 'Contact']].map(([to, label]) => (
            <Link key={to} to={to} className="setu-link-mobile" onClick={closeMenu}>
              {label}
            </Link>
          ))}

          <div className="setu-mobile-divider" />

          {/* Guest join (mobile) */}
          <div className="setu-guest-mobile">
            <input
              type="text"
              placeholder="Enter meeting code"
              value={meetingCode}
              onChange={e => setMeetingCode(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleGuest()}
            />
            <button onClick={handleGuest}>Join</button>
          </div>

          {/* Login (mobile) */}
          <Link to="/login" className="setu-login-mobile" onClick={closeMenu}>
            Login
          </Link>
        </div>
      </nav>
    </>
  );
}

export default HomeNavBar;