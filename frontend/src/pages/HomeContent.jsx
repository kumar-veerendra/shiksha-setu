import React from "react";

function HomeContent() {
  return (
    <>
      {/* Hero Section with Gradient Background */}
      <section className="bg-gradient-primary text-white text-center py-5 mt-5" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeInUp">
                Welcome to <span className="text-warning">Shiksha Setu</span>
              </h1>
              <p className="lead fs-4 mb-4">
                Breaking barriers in education through innovative technology. 
                Connecting students and teachers across India with optimized, 
                accessible learning solutions.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
                <a href="#features" className="btn btn-warning btn-lg px-5 py-3 fw-bold shadow-lg">
                  🚀 Start Learning
                </a>
                <a href="#problem" className="btn btn-outline-light btn-lg px-5 py-3 fw-bold">
                  📖 Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section id="problem" className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold text-primary mb-4">The Challenge We're Solving</h2>
                <p className="lead text-muted">Education inequality in India is a pressing reality</p>
              </div>
              
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="card border-0 shadow-sm h-100 bg-danger text-white">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-white rounded-circle p-2 me-3">
                          <span className="text-danger fs-4">📊</span>
                        </div>
                        <h4 className="mb-0">Digital Divide</h4>
                      </div>
                      <ul className="list-unstyled">
                        <li className="mb-2">📱 Only 24% of Indian households have internet access</li>
                        <li className="mb-2">🌐 Rural connectivity remains poor and expensive</li>
                        <li className="mb-2">💾 Limited data plans restrict educational content access</li>
                        <li>⚡ Frequent network disruptions hamper online learning</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-6">
                  <div className="card border-0 shadow-sm h-100 bg-warning text-dark">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-white rounded-circle p-2 me-3">
                          <span className="text-warning fs-4">🎯</span>
                        </div>
                        <h4 className="mb-0">Our Solution</h4>
                      </div>
                      <ul className="list-unstyled">
                        <li className="mb-2">🔧 Advanced compression reduces bandwidth by 40%</li>
                        <li className="mb-2">📱 Offline-first approach for uninterrupted learning</li>
                        <li className="mb-2">🎵 Audio-prioritized content delivery</li>
                        <li>⚡ Ultra-low latency streaming (&lt;500ms)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section Enhanced */}
      <section id="features" className="container-fluid py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-4">Powerful Features for Everyone</h2>
            <p className="lead text-muted">Designed for India's diverse educational landscape</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-lg h-100 hover-lift">
                <div className="card-body text-center p-4">
                  <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '80px', height: '80px'}}>
                    <span className="text-white fs-2">📚</span>
                  </div>
                  <h4 className="card-title fw-bold mb-3">Interactive Learning Hub</h4>
                  <p className="card-text text-muted">
                    Live classes, recorded sessions, interactive whiteboards, and collaborative 
                    resource sharing—all in one seamless platform.
                  </p>
                  <ul className="list-unstyled text-start mt-3">
                    <li>✅ Real-time interactive sessions</li>
                    <li>✅ Screen sharing & annotations</li>
                    <li>✅ Chat & Q&A features</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-lg h-100 hover-lift">
                <div className="card-body text-center p-4">
                  <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '80px', height: '80px'}}>
                    <span className="text-white fs-2">⚡</span>
                  </div>
                  <h4 className="card-title fw-bold mb-3">Smart Bandwidth Optimization</h4>
                  <p className="card-text text-muted">
                    Revolutionary compression algorithms and adaptive streaming ensure 
                    quality education even on 2G networks.
                  </p>
                  <ul className="list-unstyled text-start mt-3">
                    <li>✅ Opus audio codec integration</li>
                    <li>✅ Dynamic quality adjustment</li>
                    <li>✅ Progressive content loading</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-lg h-100 hover-lift">
                <div className="card-body text-center p-4">
                  <div className="bg-info rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '80px', height: '80px'}}>
                    <span className="text-white fs-2">🌐</span>
                  </div>
                  <h4 className="card-title fw-bold mb-3">Offline-First Architecture</h4>
                  <p className="card-text text-muted">
                    Download lessons, sync progress, and continue learning without 
                    internet connectivity. Education never stops.
                  </p>
                  <ul className="list-unstyled text-start mt-3">
                    <li>✅ Full content downloads</li>
                    <li>✅ Progress synchronization</li>
                    <li>✅ Offline assignments & quizzes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-lg h-100 hover-lift">
                <div className="card-body text-center p-4">
                  <div className="bg-warning rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '80px', height: '80px'}}>
                    <span className="text-white fs-2">📱</span>
                  </div>
                  <h4 className="card-title fw-bold mb-3">Multi-Device Support</h4>
                  <p className="card-text text-muted">
                    Access from smartphones, tablets, or computers. Responsive design 
                    adapts to any screen size or device capability.
                  </p>
                  <ul className="list-unstyled text-start mt-3">
                    <li>✅ Progressive Web App (PWA)</li>
                    <li>✅ Cross-platform compatibility</li>
                    <li>✅ Touch-optimized interface</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-lg h-100 hover-lift">
                <div className="card-body text-center p-4">
                  <div className="bg-danger rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '80px', height: '80px'}}>
                    <span className="text-white fs-2">🎓</span>
                  </div>
                  <h4 className="card-title fw-bold mb-3">Personalized Learning</h4>
                  <p className="card-text text-muted">
                    AI-powered recommendations, progress tracking, and adaptive 
                    content delivery tailored to each student's pace.
                  </p>
                  <ul className="list-unstyled text-start mt-3">
                    <li>✅ Learning analytics dashboard</li>
                    <li>✅ Customized study paths</li>
                    <li>✅ Performance insights</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-lg h-100 hover-lift">
                <div className="card-body text-center p-4">
                  <div className="bg-secondary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '80px', height: '80px'}}>
                    <span className="text-white fs-2">🏫</span>
                  </div>
                  <h4 className="card-title fw-bold mb-3">Classroom Management</h4>
                  <p className="card-text text-muted">
                    Comprehensive tools for teachers to manage classes, track attendance, 
                    assign homework, and monitor student progress.
                  </p>
                  <ul className="list-unstyled text-start mt-3">
                    <li>✅ Digital attendance system</li>
                    <li>✅ Assignment distribution</li>
                    <li>✅ Grade management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section Enhanced */}
      <section className="py-5" style={{background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'}}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-4">How Shiksha Setu Works</h2>
            <p className="lead text-muted">Simple steps to revolutionary education</p>
          </div>
          
          <div className="row g-4 justify-content-center">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="position-relative">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{width: '100px', height: '100px'}}>
                  <span className="text-white fs-1 fw-bold">1</span>
                </div>
                <h4 className="fw-bold mb-3">Teacher Creates Content</h4>
                <p className="text-muted">
                  Upload slides, start live sessions, or create interactive content 
                  using our intuitive teacher dashboard.
                </p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 text-center">
              <div className="position-relative">
                <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{width: '100px', height: '100px'}}>
                  <span className="text-white fs-1 fw-bold">2</span>
                </div>
                <h4 className="fw-bold mb-3">Smart Optimization</h4>
                <p className="text-muted">
                  Our AI automatically compresses content, prioritizes audio with Opus codec, 
                  and optimizes for low-bandwidth delivery.
                </p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 text-center">
              <div className="position-relative">
                <div className="bg-warning rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{width: '100px', height: '100px'}}>
                  <span className="text-white fs-1 fw-bold">3</span>
                </div>
                <h4 className="fw-bold mb-3">Students Connect</h4>
                <p className="text-muted">
                  Join live classes or access recorded content. Participate in discussions, 
                  take quizzes, and collaborate with peers.
                </p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 text-center">
              <div className="position-relative">
                <div className="bg-info rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{width: '100px', height: '100px'}}>
                  <span className="text-white fs-1 fw-bold">4</span>
                </div>
                <h4 className="fw-bold mb-3">Learn Anywhere</h4>
                <p className="text-muted">
                  Download content for offline study, sync progress across devices, 
                  and continue learning without internet interruptions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Statistics Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">Transforming Education Across India</h2>
            <p className="lead">Real impact, measurable results</p>
          </div>
          
          <div className="row g-4 text-center">
            <div className="col-lg-3 col-md-6">
              <div className="card bg-transparent border-light h-100">
                <div className="card-body">
                  <h2 className="display-4 fw-bold text-primary mb-2">40%</h2>
                  <h5 className="text-warning">Bandwidth Reduction</h5>
                  <p className="text-muted">Advanced compression saves data costs</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="card bg-transparent border-light h-100">
                <div className="card-body">
                  <h2 className="display-4 fw-bold text-success mb-2">&lt;500ms</h2>
                  <h5 className="text-warning">Ultra-Low Latency</h5>
                  <p className="text-muted">Real-time interaction guaranteed</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="card bg-transparent border-light h-100">
                <div className="card-body">
                  <h2 className="display-4 fw-bold text-info mb-2">90%</h2>
                  <h5 className="text-warning">Offline Availability</h5>
                  <p className="text-muted">Content accessible without internet</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="card bg-transparent border-light h-100">
                <div className="card-body">
                  <h2 className="display-4 fw-bold text-warning mb-2">24/7</h2>
                  <h5 className="text-warning">Learning Access</h5>
                  <p className="text-muted">Education that never sleeps</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h3 className="fw-bold mb-4">Bridging the Digital Divide</h3>
              <p className="lead">
                Shiksha Setu empowers students in rural and underserved areas to access 
                quality education regardless of their internet connectivity or device limitations. 
                We're not just building a platform—we're building bridges to opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials/Use Cases Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-4">Who Benefits from Shiksha Setu?</h2>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary rounded-circle p-2 me-3">
                      <span className="text-white">🎓</span>
                    </div>
                    <h5 className="mb-0">Rural Students</h5>
                  </div>
                  <p className="text-muted">
                    Access quality education from top teachers despite poor internet connectivity. 
                    Download lessons and study offline during power outages.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-success rounded-circle p-2 me-3">
                      <span className="text-white">👨‍🏫</span>
                    </div>
                    <h5 className="mb-0">Teachers</h5>
                  </div>
                  <p className="text-muted">
                    Reach students across geographical boundaries, manage digital classrooms 
                    efficiently, and track student progress with comprehensive analytics.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-warning rounded-circle p-2 me-3">
                      <span className="text-white">🏫</span>
                    </div>
                    <h5 className="mb-0">Educational Institutions</h5>
                  </div>
                  <p className="text-muted">
                    Extend reach to remote areas, reduce infrastructure costs, and provide 
                    consistent quality education regardless of physical limitations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-5 text-white text-center" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="display-4 fw-bold mb-4">Ready to Transform Education?</h2>
              <p className="lead fs-5 mb-4">
                Join thousands of students and teachers already bridging the education gap with Shiksha Setu. 
                Start your journey towards accessible, quality education today.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
                <a href="#" className="btn btn-warning btn-lg px-5 py-3 fw-bold shadow-lg">
                  🚀 Get Started Free
                </a>
                <a href="#" className="btn btn-outline-light btn-lg px-5 py-3 fw-bold">
                  📞 Contact Us
                </a>
              </div>
              <p className="mt-4 text-light">
                <small>No credit card required • Free for educational use • Available in multiple languages</small>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations and hover effects */}
      <style>{`
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
        }
        .bg-gradient-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate__animated.animate__fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
      `}</style>
    </>
  );
}

export default HomeContent;