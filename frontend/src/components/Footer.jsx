import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        {/* Main Footer Content */}
        <div className="row g-4">
          {/* Brand Section */}
          <div className="col-lg-4 col-md-6">
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <img 
                  src="/projectLogo.png" 
                  alt="Shiksha Setu Logo" 
                  className="me-2"
                  style={{
                    height: '100px',
                    width: 'auto',
                    
                  }}
                />
                <h4 className="text-white fw-bold mb-0">Shiksha Setu</h4>
              </div>
              <p className="text-light mb-3">
                Bridging the gap between traditional education and modern technology. 
                Empowering students, teachers, and institutions with innovative learning solutions.
              </p>
              <div className="d-flex gap-3">
                <a href="#" className="text-light fs-5 hover-primary">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-light fs-5 hover-primary">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-light fs-5 hover-primary">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-light fs-5 hover-primary">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-light fs-5 hover-primary">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-sm-6">
            <h5 className="text-white fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-light text-decoration-none hover-primary">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-light text-decoration-none hover-primary">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-light text-decoration-none hover-primary">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-light text-decoration-none hover-primary">
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/blog" className="text-light text-decoration-none hover-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* For Students */}
          <div className="col-lg-2 col-md-6 col-sm-6">
            <h5 className="text-white fw-bold mb-3">For Students</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/courses" className="text-light text-decoration-none hover-primary">
                  Courses
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/assignments" className="text-light text-decoration-none hover-primary">
                  Assignments
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/resources" className="text-light text-decoration-none hover-primary">
                  Study Resources
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/grades" className="text-light text-decoration-none hover-primary">
                  Grades
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/help" className="text-light text-decoration-none hover-primary">
                  Student Help
                </Link>
              </li>
            </ul>
          </div>

          {/* For Teachers */}
          <div className="col-lg-2 col-md-6 col-sm-6">
            <h5 className="text-white fw-bold mb-3">For Teachers</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/dashboard" className="text-light text-decoration-none hover-primary">
                  Dashboard
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/classes" className="text-light text-decoration-none hover-primary">
                  Manage Classes
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/create-content" className="text-light text-decoration-none hover-primary">
                  Create Content
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/analytics" className="text-light text-decoration-none hover-primary">
                  Analytics
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/teacher-resources" className="text-light text-decoration-none hover-primary">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-2 col-md-6">
            <h5 className="text-white fw-bold mb-3">Contact Info</h5>
            <div className="mb-3">
              <div className="d-flex align-items-start mb-2">
                <i className="fas fa-map-marker-alt text-primary me-2 mt-1"></i>
                <small className="text-light">
                  123 Education Street<br/>
                  Learning City, LC 12345<br/>
                  India
                </small>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-phone text-primary me-2"></i>
                <small className="text-light">+91 98765 43210</small>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-envelope text-primary me-2"></i>
                <small className="text-light">info@shikshasetu.edu</small>
              </div>
              <div className="d-flex align-items-center">
                <i className="fas fa-clock text-primary me-2"></i>
                <small className="text-light">24/7 Support Available</small>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="row mt-4 pt-4 border-top border-secondary">
          <div className="col-lg-8 col-md-7 mb-3">
            <h5 className="text-white fw-bold mb-3">Stay Updated</h5>
            <p className="text-light mb-3">
              Subscribe to our newsletter for the latest updates, educational tips, and platform news.
            </p>
            <div className="row g-2">
              <div className="col-md-8">
                <input 
                  type="email" 
                  className="form-control form-control-lg border-0" 
                  placeholder="Enter your email address"
                  style={{ borderRadius: '8px' }}
                />
              </div>
              <div className="col-md-4">
                <button 
                  className="btn btn-primary btn-lg w-100 fw-medium"
                  style={{ borderRadius: '8px' }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5">
            <h5 className="text-white fw-bold mb-3">Download Our App</h5>
            <div className="d-flex flex-column gap-2">
              <a href="#" className="btn btn-outline-light btn-sm d-flex align-items-center">
                <i className="fab fa-apple me-2"></i>
                Download for iOS
              </a>
              <a href="#" className="btn btn-outline-light btn-sm d-flex align-items-center">
                <i className="fab fa-google-play me-2"></i>
                Download for Android
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="row mt-4 pt-4 border-top border-secondary">
          <div className="col-lg-6 col-md-7 mb-2">
            <p className="text-light small mb-0">
              © {currentYear} Shiksha Setu. All rights reserved. 
              <span className="text-primary mx-2">|</span>
              Made with ❤️ for Education
            </p>
          </div>
          <div className="col-lg-6 col-md-5">
            <div className="d-flex flex-wrap justify-content-md-end gap-3">
              <Link to="/privacy" className="text-light text-decoration-none small hover-primary">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-light text-decoration-none small hover-primary">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-light text-decoration-none small hover-primary">
                Cookie Policy
              </Link>
              <Link to="/sitemap" className="text-light text-decoration-none small hover-primary">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .hover-primary:hover {
          color: #0d6efd !important;
          transition: color 0.3s ease;
        }
        
        footer .btn:hover {
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }
        
        footer .social-icons a:hover {
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }
      `}</style>
    </footer>
  );
}

export default Footer;