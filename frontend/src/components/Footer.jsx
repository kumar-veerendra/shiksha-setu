import React from 'react';

export default function RajasthanClassroomFooter() {
  const currentYear = new Date().getFullYear();
  const lastUpdate = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const footerStyles = {
    footerGradient: {
      background: 'linear-gradient(135deg, #1e40af 0%, #3730a3 50%, #7c2d12 100%)',
      color: 'white'
    },
    footerLink: {
      color: '#bfdbfe',
      textDecoration: 'none',
      transition: 'all 0.3s ease'
    },
    footerSection: {
      borderBottom: '2px solid #60a5fa',
      paddingBottom: '0.5rem',
      marginBottom: '1rem'
    },
    specialNotice: {
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)',
      borderRadius: '0.75rem',
      borderLeft: '4px solid #60a5fa',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    statusIndicator: {
      width: '10px',
      height: '10px',
      backgroundColor: '#10b981',
      borderRadius: '50%',
      display: 'inline-block',
      animation: 'pulse 2s infinite',
      boxShadow: '0 0 8px rgba(16, 185, 129, 0.5)'
    },
    bottomBar: {
      background: 'rgba(30, 58, 138, 0.8)',
      backdropFilter: 'blur(10px)'
    },
    footerIcon: {
      color: '#fbbf24',
      marginRight: '0.5rem'
    },
    lowBandwidth: {
      background: 'rgba(16, 185, 129, 0.2)',
      padding: '0.25rem 0.75rem',
      borderRadius: '1rem',
      fontSize: '0.75rem',
      display: 'inline-block',
      marginTop: '0.5rem',
      border: '1px solid rgba(16, 185, 129, 0.3)'
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.1); }
            100% { opacity: 1; transform: scale(1); }
          }
          .footer-link:hover {
            color: #ffffff !important;
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
            transform: translateX(2px);
          }
          .footer-gradient h5 {
            border-bottom: 2px solid #60a5fa;
            padding-bottom: 0.5rem;
            margin-bottom: 1rem;
            color: #f1f5f9;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          }
          .footer-gradient {
            position: relative;
            overflow: hidden;
          }
          .footer-gradient::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="rgba(255,255,255,0.02)"><polygon points="0,0 1000,100 1000,0"/></svg>');
            pointer-events: none;
          }
        `}
      </style>
      
      <footer style={footerStyles.footerGradient} className="footer-gradient">
        {/* Main Footer Content */}
        <div className="container py-5">
          <div className="row g-4">
            
            {/* About Section */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-section">
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-book-open fs-4" style={footerStyles.footerIcon}></i>
                  <h5 className="mb-0">Rajasthan Online Education</h5>
                </div>
                <p className="small text-light opacity-75 lh-base">
                  Digital education platform for college students in rural areas. 
                  Ensuring access to quality education for all.
                </p>
                <div style={footerStyles.lowBandwidth}>
                  <i className="fas fa-wifi" style={footerStyles.footerIcon}></i>
                  <small>Low Bandwidth Optimized</small>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-section">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#courses" className="footer-link small" style={footerStyles.footerLink}>
                      <i className="fas fa-chevron-right me-2" style={{fontSize: '0.7rem'}}></i>
                      Courses
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#library" className="footer-link small" style={footerStyles.footerLink}>
                      <i className="fas fa-chevron-right me-2" style={{fontSize: '0.7rem'}}></i>
                      Digital Library
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#assignments" className="footer-link small" style={footerStyles.footerLink}>
                      <i className="fas fa-chevron-right me-2" style={{fontSize: '0.7rem'}}></i>
                      Assignments
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#results" className="footer-link small" style={footerStyles.footerLink}>
                      <i className="fas fa-chevron-right me-2" style={{fontSize: '0.7rem'}}></i>
                      Results
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#scholarships" className="footer-link small" style={footerStyles.footerLink}>
                      <i className="fas fa-chevron-right me-2" style={{fontSize: '0.7rem'}}></i>
                      Scholarships
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#career" className="footer-link small" style={footerStyles.footerLink}>
                      <i className="fas fa-chevron-right me-2" style={{fontSize: '0.7rem'}}></i>
                      Career Guidance
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Support & Resources */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-section">
                <h5>Support & Resources</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#help" className="footer-link small" style={footerStyles.footerLink}>
                      <i className="fas fa-question-circle" style={footerStyles.footerIcon}></i>
                      Help Center
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#tutorials" className="footer-link small" style={footerStyles.footerLink}>
                      <i className="fas fa-chevron-right me-2" style={{fontSize: '0.7rem'}}></i>
                      Tutorials
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#technical-support" className="footer-link small" style={footerStyles.footerLink}>
                      <i className="fas fa-chevron-right me-2" style={{fontSize: '0.7rem'}}></i>
                      Technical Support
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#offline-access" className="footer-link small" style={footerStyles.footerLink}>
                      <i className="fas fa-chevron-right me-2" style={{fontSize: '0.7rem'}}></i>
                      Offline Access
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#mobile-app" className="footer-link small" style={footerStyles.footerLink}>
                      <i className="fas fa-chevron-right me-2" style={{fontSize: '0.7rem'}}></i>
                      Mobile App
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#study-centers" className="footer-link small" style={footerStyles.footerLink}>
                      <i className="fas fa-chevron-right me-2" style={{fontSize: '0.7rem'}}></i>
                      Study Centers
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-section">
                <h5>Contact Information</h5>
                
                <div className="mb-3">
                  <div className="d-flex align-items-start">
                    <i className="fas fa-phone mt-1" style={footerStyles.footerIcon}></i>
                    <div>
                      <div className="text-light opacity-75 small">Helpline: 1800-180-6127</div>
                      <div className="text-light opacity-50" style={{fontSize: '0.7rem'}}>
                        9:00 AM to 6:00 PM
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="d-flex align-items-start">
                    <i className="fas fa-envelope mt-1" style={footerStyles.footerIcon}></i>
                    <div>
                      <div className="text-light opacity-75 small">support@rajedu.gov.in</div>
                      <div className="text-light opacity-50" style={{fontSize: '0.7rem'}}>
                        Response within 24 hours
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="d-flex align-items-start">
                    <i className="fas fa-map-marker-alt mt-1" style={footerStyles.footerIcon}></i>
                    <div className="text-light opacity-75" style={{fontSize: '0.7rem'}}>
                      Education Bhawan, C-Scheme<br/>
                      Jaipur, Rajasthan 302005
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Links Bar */}
          <div className="row mt-4 pt-4" style={{borderTop: '1px solid rgba(96, 165, 250, 0.3)'}}>
            <div className="col-12">
              <div className="d-flex flex-wrap justify-content-center gap-3 small">
                <a href="https://rajasthan.gov.in" target="_blank" rel="noopener noreferrer" 
                   className="footer-link" style={footerStyles.footerLink}>
                  <i className="fas fa-globe" style={footerStyles.footerIcon}></i>
                  Government of Rajasthan
                  <i className="fas fa-external-link-alt ms-1" style={{fontSize: '0.7rem'}}></i>
                </a>
                <span className="text-blue-200">|</span>
                <a href="#privacy" className="footer-link" style={footerStyles.footerLink}>Privacy Policy</a>
                <span className="text-warning">|</span>
                <a href="#terms" className="footer-link" style={footerStyles.footerLink}>Terms & Conditions</a>
                <span className="text-warning">|</span>
                <a href="#accessibility" className="footer-link" style={footerStyles.footerLink}>Accessibility</a>
                <span className="text-warning">|</span>
                <a href="#sitemap" className="footer-link" style={footerStyles.footerLink}>Site Map</a>
              </div>
            </div>
          </div>

          {/* Special Notice for Rural Students */}
          <div className="row mt-4">
            <div className="col-12">
              <div className="p-4 text-center" style={footerStyles.specialNotice}>
                <div className="d-flex align-items-center justify-content-center mb-2">
                  <i className="fas fa-users fs-5" style={footerStyles.footerIcon}></i>
                  <strong>Special Facilities for Rural Students</strong>
                </div>
                <p className="small text-light opacity-75 mb-0">
                  Having internet connectivity issues? Access the platform from your nearest Jan Seva Kendra or college computer lab.
                  Register your mobile number for SMS updates and offline study materials.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={footerStyles.bottomBar}>
          <div className="container py-3">
            <div className="row align-items-center">
              <div className="col-md-8 text-center text-md-start">
                <div className="text-light opacity-75 small">
                  © {currentYear} Government of Rajasthan. All rights reserved.
                </div>
                <div className="text-light opacity-50" style={{fontSize: '0.7rem'}}>
                  Developed by National Informatics Centre (NIC)
                </div>
              </div>
              
              <div className="col-md-4 text-center text-md-end mt-2 mt-md-0">
                <div className="d-flex align-items-center justify-content-center justify-content-md-end gap-3">
                  <span className="text-light opacity-50 small">
                    Last Updated: {lastUpdate}
                  </span>
                  <div className="d-flex align-items-center gap-1">
                    <div style={footerStyles.statusIndicator}></div>
                    <span className="text-light opacity-50 small">System Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}