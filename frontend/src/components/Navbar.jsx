import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav 
      className="navbar navbar-expand-lg navbar-dark shadow-lg sticky-top"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradientShift 8s ease infinite'
      }}
    >
      <div className="container">
        {/* Brand / Logo with enhanced styling */}
        <Link className="navbar-brand fw-bold fs-3 text-white d-flex align-items-center" to="/">
          <img 
            src="/shiksha-setuLogo.png" 
            alt="Shiksha Setu Logo" 
            className="me-2"
            style={{
              height: '100px',
              width: 'auto',
              filter: 'brightness(0) invert(1)'
            }}
          />
          Shiksha Setu
        </Link>

        {/* Toggler for mobile view */}
        <button
          className="navbar-toggler border-0 shadow-sm"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            <li className="nav-item position-relative" style={{ marginLeft: '40px', paddingTop: '23px' }}>
              <Link 
                className="nav-link text-white fw-medium text-uppercase position-relative" 
                to="/"
                style={{
                  fontSize: '14px',
                  textDecoration: 'none',
                  color: 'white',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'rgba(255,255,255,0.8)';
                  e.target.querySelector('.nav-underline').style.width = '100%';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'white';
                  e.target.querySelector('.nav-underline').style.width = '0%';
                }}
              >
                Home
                <span 
                  className="nav-underline"
                  style={{
                    content: '',
                    display: 'block',
                    height: '3px',
                    backgroundColor: 'white',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '0%',
                    transition: 'all ease-in-out 250ms'
                  }}
                ></span>
              </Link>
            </li>
            <li className="nav-item position-relative" style={{ marginLeft: '40px', paddingTop: '23px' }}>
              <Link 
                className="nav-link text-white fw-medium text-uppercase position-relative" 
                to="/about"
                style={{
                  fontSize: '14px',
                  textDecoration: 'none',
                  color: 'white',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'rgba(255,255,255,0.8)';
                  e.target.querySelector('.nav-underline').style.width = '100%';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'white';
                  e.target.querySelector('.nav-underline').style.width = '0%';
                }}
              >
                About
                <span 
                  className="nav-underline"
                  style={{
                    content: '',
                    display: 'block',
                    height: '3px',
                    backgroundColor: 'white',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '0%',
                    transition: 'all ease-in-out 250ms'
                  }}
                ></span>
              </Link>
            </li>
            <li className="nav-item position-relative" style={{ marginLeft: '40px', paddingTop: '23px' }}>
              <Link 
                className="nav-link text-white fw-medium text-uppercase position-relative" 
                to="/services"
                style={{
                  fontSize: '14px',
                  textDecoration: 'none',
                  color: 'white',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'rgba(255,255,255,0.8)';
                  e.target.querySelector('.nav-underline').style.width = '100%';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'white';
                  e.target.querySelector('.nav-underline').style.width = '0%';
                }}
              >
                Services
                <span 
                  className="nav-underline"
                  style={{
                    content: '',
                    display: 'block',
                    height: '3px',
                    backgroundColor: 'white',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '0%',
                    transition: 'all ease-in-out 250ms'
                  }}
                ></span>
              </Link>
            </li>
            <li className="nav-item position-relative" style={{ marginLeft: '40px', paddingTop: '23px' }}>
              <Link 
                className="nav-link text-white fw-medium text-uppercase position-relative" 
                to="/contact"
                style={{
                  fontSize: '14px',
                  textDecoration: 'none',
                  color: 'white',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'rgba(255,255,255,0.8)';
                  e.target.querySelector('.nav-underline').style.width = '100%';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'white';
                  e.target.querySelector('.nav-underline').style.width = '0%';
                }}
              >
                Contact
                <span 
                  className="nav-underline"
                  style={{
                    content: '',
                    display: 'block',
                    height: '3px',
                    backgroundColor: 'white',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '0%',
                    transition: 'all ease-in-out 250ms'
                  }}
                ></span>
              </Link>
            </li>
            <li className="nav-item" style={{ marginLeft: '40px', paddingTop: '10px' }}>
              <Link 
                className="btn btn-light text-primary fw-semibold px-4 py-2 rounded-pill shadow-sm border-0" 
                to="/login"
                style={{
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.classList.add('shadow');
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.classList.remove('shadow');
                }}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Add CSS animation keyframes
const gradientStyles = `
  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

// Inject styles into the document head
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = gradientStyles;
  document.head.appendChild(style);
}

export default Navbar;