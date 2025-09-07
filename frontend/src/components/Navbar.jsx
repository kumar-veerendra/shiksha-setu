import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarStyles = {
    navbar: {
      backgroundColor: isScrolled 
        ? (isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(30, 58, 138, 0.95)') 
        : (isDarkMode ? '#0f172a' : '#1e40af'),
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease',
      boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
      borderBottom: isDarkMode ? '3px solid #64748b' : '3px solid #fbbf24'
    },
    brand: {
      fontWeight: '700',
      fontSize: '1.5rem',
      color: '#ffffff',
      textDecoration: 'none'
    },
    navLink: {
      color: isDarkMode ? '#cbd5e1' : '#e2e8f0',
      fontWeight: '500',
      fontSize: '0.95rem',
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      transition: 'all 0.3s ease',
      textDecoration: 'none'
    },
    dropdownMenu: {
      backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
      border: 'none',
      borderRadius: '0.75rem',
      boxShadow: isDarkMode ? '0 10px 25px rgba(0, 0, 0, 0.3)' : '0 10px 25px rgba(0, 0, 0, 0.15)',
      marginTop: '0.5rem',
      overflow: 'hidden'
    },
    dropdownItem: {
      color: isDarkMode ? '#e2e8f0' : '#374151',
      padding: '0.75rem 1.5rem',
      fontSize: '0.9rem',
      borderBottom: isDarkMode ? '1px solid #374151' : '1px solid #f3f4f6',
      transition: 'all 0.2s ease'
    },
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
    },
    topBar: {
      backgroundColor: isDarkMode ? '#020617' : '#0f172a',
      color: '#e2e8f0',
      fontSize: '0.8rem',
      padding: '0.25rem 0'
    }
  };

  return (
    <>
      <style>
        {`
          .navbar-custom .nav-link:hover {
            color: #ffffff !important;
            background-color: rgba(255, 255, 255, 0.1);
            transform: translateY(-1px);
          }
          
          .dropdown-item-custom:hover {
            background-color: ${isDarkMode ? '#475569 !important' : '#3730a3 !important'};
            color: #ffffff !important;
            transform: translateX(5px);
          }
          
          .dropdown-item-custom:not(:last-child) {
            border-bottom: 1px solid ${isDarkMode ? '#374151' : '#f3f4f6'};
          }
          
          .login-btn-custom:hover {
            transform: translateY(-2px);
            box-shadow: ${isDarkMode 
              ? '0 4px 15px rgba(100, 116, 139, 0.4)' 
              : '0 4px 15px rgba(251, 191, 36, 0.4)'};
            background: ${isDarkMode 
              ? 'linear-gradient(135deg, #475569 0%, #334155 100%)' 
              : 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'};
          }
          
          .navbar-brand-custom:hover {
            transform: scale(1.02);
          }
          
          .navbar-toggler-custom {
            border: 2px solid ${isDarkMode ? '#64748b' : '#fbbf24'};
            border-radius: 0.5rem;
          }
          
          .navbar-toggler-custom:focus {
            box-shadow: 0 0 0 0.2rem ${isDarkMode 
              ? 'rgba(100, 116, 139, 0.25)' 
              : 'rgba(251, 191, 36, 0.25)'};
          }
          
          .dropdown-toggle::after {
            border-top: 0.3em solid;
            border-right: 0.3em solid transparent;
            border-left: 0.3em solid transparent;
            transition: transform 0.2s ease;
          }
          
          .dropdown-toggle[aria-expanded="true"]::after {
            transform: rotate(180deg);
          }
          
          .emergency-ticker {
            background: ${isDarkMode 
              ? 'linear-gradient(90deg, #7c2d12, #92400e)' 
              : 'linear-gradient(90deg, #dc2626, #b91c1c)'};
            color: white;
            padding: 0.25rem 0;
            text-align: center;
            font-size: 0.8rem;
            animation: slideIn 0.5s ease;
            overflow: hidden;
            white-space: nowrap;
          }
          
          .sliding-text {
            display: inline-block;
            animation: slideRightToLeft 15s linear infinite;
          }
          
          @keyframes slideIn {
            from { transform: translateY(-100%); }
            to { transform: translateY(0); }
          }
          
          @keyframes slideRightToLeft {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          
          .mobile-search {
            background: ${isDarkMode 
              ? 'rgba(51, 65, 85, 0.3)' 
              : 'rgba(255, 255, 255, 0.1)'};
            border: 1px solid ${isDarkMode 
              ? 'rgba(100, 116, 139, 0.3)' 
              : 'rgba(255, 255, 255, 0.2)'};
            border-radius: 2rem;
            color: white;
            padding: 0.5rem 1rem;
          }
          
          .mobile-search::placeholder {
            color: ${isDarkMode 
              ? 'rgba(203, 213, 225, 0.7)' 
              : 'rgba(255, 255, 255, 0.7)'};
          }

          .dark-mode-toggle {
            background: none;
            border: 1px solid ${isDarkMode ? '#64748b' : '#fbbf24'};
            color: ${isDarkMode ? '#cbd5e1' : '#e2e8f0'};
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .dark-mode-toggle:hover {
            background: ${isDarkMode 
              ? 'rgba(100, 116, 139, 0.2)' 
              : 'rgba(251, 191, 36, 0.2)'};
            transform: scale(1.1);
          }

          /* Pause animation on hover */
          .emergency-ticker:hover .sliding-text {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Top Information Bar */}
      <div style={navbarStyles.topBar}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="d-flex align-items-center gap-3 small">
                <span>
                  <i className="fas fa-phone text-warning"></i> Helpline: 1800-180-6127
                </span>
                <span>
                  <i className="fas fa-envelope text-warning"></i> support@rajedu.gov.in
                </span>
              </div>
            </div>
            <div className="col-md-6 text-end">
              <div className="d-flex align-items-center justify-content-end gap-3 small">
                <span>
                  <i className="fas fa-calendar text-warning"></i> {new Date().toLocaleDateString('en-IN')}
                </span>
                <div className="d-flex align-items-center gap-1">
                  <div style={{width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%', animation: 'pulse 2s infinite'}}></div>
                  <span>System Online</span>
                </div>
                {/* Dark Mode Toggle */}
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="dark-mode-toggle"
                  title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                >
                  <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency/Important Notice Bar with Sliding Animation */}
      <div className="emergency-ticker">
        <div className="sliding-text">
          <i className="fas fa-bullhorn me-2"></i>
          <strong>Important:</strong> New scholarship applications are now open for rural students. 
          <Link to="/scholarships" className={`${isDarkMode ? 'text-slate-300' : 'text-warning'} ms-2 text-decoration-none`}>
            <strong>Apply Now →</strong>
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className="navbar navbar-expand-lg navbar-dark sticky-top navbar-custom"
        style={navbarStyles.navbar}
      >
        <div className="container">
          {/* Brand / Logo */}
          <Link 
            className="navbar-brand d-flex align-items-center navbar-brand-custom" 
            to="/"
            style={navbarStyles.brand}
          >
            <img 
              src="./gov-logo.png" 
              alt="Government of Rajasthan Logo" 
              style={{ 
                height: "50px", 
                width: "auto", 
                borderRadius: "8px",
                marginRight: "1rem",
                transition: "transform 0.3s ease"
              }} 
            />

          </Link>

          {/* Mobile Search Bar */}
          <div className="d-lg-none me-3">
            <input 
              type="search" 
              placeholder="Search..."
              className="form-control mobile-search"
              style={{ width: '150px' }}
            />
          </div>

          {/* Hamburger for mobile */}
          <button
            className="navbar-toggler navbar-toggler-custom"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className={`fas fa-bars ${isDarkMode ? 'text-slate-400' : 'text-warning'}`}></i>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Desktop Search Bar */}
            <div className="d-none d-lg-flex me-4 ms-auto">
              <div className="input-group">
                <input 
                  type="search" 
                  className="form-control mobile-search"
                  placeholder="Search courses, resources..."
                  style={{ minWidth: '200px' }}
                />
                <button className={`btn ${isDarkMode ? 'btn-outline-secondary' : 'btn-outline-warning'}`} type="button">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>

            <ul className="navbar-nav">

              {/* Government Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="govDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={navbarStyles.navLink}
                >
                  <i className="fas fa-landmark me-2"></i>Government
                </Link>
                <ul className="dropdown-menu" style={navbarStyles.dropdownMenu} aria-labelledby="govDropdown">
                  <li><Link className="dropdown-item dropdown-item-custom" to="/governor" style={navbarStyles.dropdownItem}>
                    <i className="fas fa-user-tie me-2 text-primary"></i>Governor
                  </Link></li>
                  <li><Link className="dropdown-item dropdown-item-custom" to="/chief-minister" style={navbarStyles.dropdownItem}>
                    <i className="fas fa-user-crown me-2 text-primary"></i>Chief Minister
                  </Link></li>
                  <li><Link className="dropdown-item dropdown-item-custom" to="/cabinet" style={navbarStyles.dropdownItem}>
                    <i className="fas fa-users me-2 text-primary"></i>Cabinet Ministers
                  </Link></li>
                </ul>
              </li>

              {/* Education Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="educationDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={navbarStyles.navLink}
                >
                  <i className="fas fa-graduation-cap me-2"></i>Education
                </Link>
                <ul className="dropdown-menu" style={navbarStyles.dropdownMenu} aria-labelledby="educationDropdown">
                  <li><Link className="dropdown-item dropdown-item-custom" to="/online-classroom" style={navbarStyles.dropdownItem}>
                    <i className="fas fa-chalkboard-teacher me-2 text-success"></i>Online Classroom
                  </Link></li>
                  <li><Link className="dropdown-item dropdown-item-custom" to="/assignments" style={navbarStyles.dropdownItem}>
                    <i className="fas fa-tasks me-2 text-success"></i>Assignments
                  </Link></li>
                  <li><Link className="dropdown-item dropdown-item-custom" to="/digital-library" style={navbarStyles.dropdownItem}>
                    <i className="fas fa-book me-2 text-success"></i>Digital Library
                  </Link></li>
                  <li><Link className="dropdown-item dropdown-item-custom" to="/scholarships" style={navbarStyles.dropdownItem}>
                    <i className="fas fa-award me-2 text-success"></i>Scholarships
                  </Link></li>
                </ul>
              </li>

              {/* Services Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="servicesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={navbarStyles.navLink}
                >
                  <i className="fas fa-cogs me-2"></i>Services
                </Link>
                <ul className="dropdown-menu" style={navbarStyles.dropdownMenu} aria-labelledby="servicesDropdown">
                  <li><Link className="dropdown-item dropdown-item-custom" to="/citizen-services" style={navbarStyles.dropdownItem}>
                    <i className="fas fa-user-friends me-2 text-info"></i>Citizen Services
                  </Link></li>
                  <li><Link className="dropdown-item dropdown-item-custom" to="/grievances" style={navbarStyles.dropdownItem}>
                    <i className="fas fa-exclamation-circle me-2 text-info"></i>Grievances
                  </Link></li>
                  <li><Link className="dropdown-item dropdown-item-custom" to="/healthcare" style={navbarStyles.dropdownItem}>
                    <i className="fas fa-heartbeat me-2 text-info"></i>Healthcare
                  </Link></li>
                </ul>
              </li>

              {/* Tourism Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="tourismDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={navbarStyles.navLink}
                >
                  <i className="fas fa-map-marked-alt me-2"></i>Tourism
                </Link>
                <ul className="dropdown-menu" style={navbarStyles.dropdownMenu} aria-labelledby="tourismDropdown">
                  <li><Link className="dropdown-item dropdown-item-custom" to="/tourist-spots" style={navbarStyles.dropdownItem}>
                    <i className="fas fa-camera me-2 text-warning"></i>Tourist Spots
                  </Link></li>
                  <li><Link className="dropdown-item dropdown-item-custom" to="/hotels" style={navbarStyles.dropdownItem}>
                    <i className="fas fa-bed me-2 text-warning"></i>Hotels & Stay
                  </Link></li>
                  <li><Link className="dropdown-item dropdown-item-custom" to="/culture" style={navbarStyles.dropdownItem}>
                    <i className="fas fa-theater-masks me-2 text-warning"></i>Culture & Heritage
                  </Link></li>
                </ul>
              </li>

              {/* About Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="aboutDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={navbarStyles.navLink}
                >
                  <i className="fas fa-info-circle me-2"></i>About
                </Link>
                <ul className="dropdown-menu" style={navbarStyles.dropdownMenu} aria-labelledby="aboutDropdown">
                  <li><Link className="dropdown-item dropdown-item-custom" to="/history" style={navbarStyles.dropdownItem}>
                    <i className="fas fa-scroll me-2 text-secondary"></i>History
                  </Link></li>
                  <li><Link className="dropdown-item dropdown-item-custom" to="/geography" style={navbarStyles.dropdownItem}>
                    <i className="fas fa-globe me-2 text-secondary"></i>Geography
                  </Link></li>
                  <li><Link className="dropdown-item dropdown-item-custom" to="/contact" style={navbarStyles.dropdownItem}>
                    <i className="fas fa-phone me-2 text-secondary"></i>Contact Us
                  </Link></li>
                </ul>
              </li>

              {/* Login/Profile Button */}
              <li className="nav-item ms-3">
                <Link 
                  to="/login" 
                  className="btn login-btn-custom"
                  style={navbarStyles.loginBtn}
                >
                  <i className="fas fa-sign-in-alt me-2"></i> Login
                </Link>
              </li>

              {/* Emergency Contact - Mobile Only */}
              <li className="nav-item d-lg-none mt-3">
                <div className="text-center">
                  <div className="small text-light mb-2">Emergency Helpline</div>
                  <a href="tel:1800-180-6127" className="btn btn-outline-warning btn-sm">
                    <i className="fas fa-phone me-1"></i>1800-180-6127
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;