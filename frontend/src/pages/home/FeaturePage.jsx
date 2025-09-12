import React, { useState } from 'react';

const FeaturePage = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Ultra-Low Bandwidth Design",
      icon: "📡",
      description: "Optimized for 2G/3G networks with adaptive streaming and audio-first approach",
      details: [
        "Works on connections as low as 64kbps",
        "Automatic quality adjustment based on network speed",
        "Audio prioritization over video for consistent learning",
        "Smart data compression reduces usage by 80%"
      ]
    },
    {
      title: "Interactive Learning Tools",
      icon: "🎯",
      description: "Engaging features that work seamlessly on low-bandwidth connections",
      details: [
        "Real-time polls and quizzes with minimal data usage",
        "Text-based discussion boards for peer interaction",
        "Digital whiteboard with vector-based drawing",
        "Voice-to-text for student questions"
      ]
    },
    {
      title: "Offline-First Architecture",
      icon: "📱",
      description: "Download content during off-peak hours for uninterrupted learning",
      details: [
        "Pre-cached lecture materials and slides",
        "Downloadable audio lectures under 10MB",
        "Offline note-taking and assignment submission",
        "Sync when connection is available"
      ]
    },
    {
      title: "Simple Setup & Management",
      icon: "⚙️",
      description: "Zero-complexity deployment for educators and administrators",
      details: [
        "No special hardware or software installation required",
        "Web-based interface works on any smartphone",
        "One-click lecture scheduling and recording",
        "Automated attendance and progress tracking"
      ]
    }
  ];

  const stats = [
    { number: "90%", label: "Bandwidth Savings" },
    { number: "24/7", label: "Offline Access" },
    { number: "50+", label: "Supported Devices" },
    { number: "₹100", label: "Monthly Cost per Student" }
  ];

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#2c3e50' }}>
        <div className="container">
          <div className="navbar-brand fw-bold">
            <span className="me-2">🌐</span>
            Rural Connect
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
              <li className="nav-item"><a className="nav-link" href="#demo">Demo</a></li>
              <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6 text-white">
              <h1 className="display-4 fw-bold mb-4">
                Bridging the Rural-Urban Learning Gap
              </h1>
              <p className="lead mb-4">
                A revolutionary virtual classroom solution designed specifically for low-bandwidth environments, 
                connecting expert educators in cities with students in rural diploma colleges.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-warning btn-lg px-4 py-2">
                  Start Free Trial
                </button>
                <button className="btn btn-outline-light btn-lg px-4 py-2">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card shadow-lg border-0">
                <div className="card-body p-4">
                  <h5 className="card-title text-center mb-4">The Challenge</h5>
                  <div className="row text-center">
                    <div className="col-4">
                      <div className="h2 text-danger">📉</div>
                      <small>Low Bandwidth</small>
                    </div>
                    <div className="col-4">
                      <div className="h2 text-warning">👨‍🏫</div>
                      <small>Limited Faculty</small>
                    </div>
                    <div className="col-4">
                      <div className="h2 text-info">📱</div>
                      <small>Basic Devices</small>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <div className="h2">⬇️</div>
                    <h6 className="text-success">Our Solution</h6>
                    <p className="small text-muted">Ultra-low bandwidth virtual classroom that works on any device</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            {stats.map((stat, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="text-center">
                  <div className="display-4 fw-bold text-primary">{stat.number}</div>
                  <p className="text-muted">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">Smart Features for Smart Learning</h2>
              <p className="lead text-muted">
                Every feature is designed with rural connectivity constraints in mind
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="list-group">
                {features.map((feature, index) => (
                  <button
                    key={index}
                    className={`list-group-item list-group-item-action p-3 ${
                      activeFeature === index ? 'active' : ''
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="d-flex align-items-center">
                      <span className="me-3 fs-4">{feature.icon}</span>
                      <div>
                        <h6 className="mb-1">{feature.title}</h6>
                        <small className={activeFeature === index ? 'text-white-50' : 'text-muted'}>
                          {feature.description}
                        </small>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-4">
                    <span className="display-4 me-3">{features[activeFeature].icon}</span>
                    <h3 className="mb-0">{features[activeFeature].title}</h3>
                  </div>
                  <p className="lead text-muted mb-4">{features[activeFeature].description}</p>
                  <ul className="list-unstyled">
                    {features[activeFeature].details.map((detail, index) => (
                      <li key={index} className="d-flex align-items-center mb-3">
                        <span className="badge bg-success rounded-pill me-3">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <h2 className="display-5 fw-bold mb-4">See It in Action</h2>
              <p className="lead mb-4">
                Experience how our platform delivers high-quality education even on 2G networks
              </p>
              <div className="row">
                <div className="col-sm-6 mb-3">
                  <div className="card border-0 bg-primary text-white">
                    <div className="card-body text-center">
                      <h5>🎧 Audio First</h5>
                      <small>Crystal clear voice even on slow connections</small>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card border-0 bg-success text-white">
                    <div className="card-body text-center">
                      <h5>📝 Smart Notes</h5>
                      <small>Automatic transcription and key points</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="card shadow-lg border-0" style={{ backgroundColor: '#1a1a1a' }}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-danger rounded-circle me-2" style={{ width: '12px', height: '12px' }}></div>
                      <div className="bg-warning rounded-circle me-2" style={{ width: '12px', height: '12px' }}></div>
                      <div className="bg-success rounded-circle me-2" style={{ width: '12px', height: '12px' }}></div>
                      <small className="text-white ms-2">rural-connect.edu</small>
                    </div>
                    <div className="bg-dark p-3 rounded">
                      <div className="text-success mb-2">
                        <span className="me-2">📡</span>
                        Connection: 2G (64 kbps) ✓
                      </div>
                      <div className="text-warning mb-2">
                        <span className="me-2">🔊</span>
                        Audio Quality: Excellent
                      </div>
                      <div className="text-info mb-2">
                        <span className="me-2">👥</span>
                        Students Online: 45/50
                      </div>
                      <div className="text-white">
                        <span className="me-2">📚</span>
                        Topic: AI Fundamentals - Lecture 3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories & Impact Section */}
      <section id="impact" className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">Real Impact Across Rural India</h2>
              <p className="lead text-muted">
                See how our platform is transforming education in remote areas
              </p>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <img src="data:image/svg+xml;base64,..." className="rounded-circle me-3" width="60" height="60" alt="College" />
                    <div>
                      <h6 className="mb-1">Rural Polytechnic, Jharkhand</h6>
                      <small className="text-muted">500+ Students</small>
                    </div>
                  </div>
                  <blockquote className="blockquote">
                    <p className="mb-3">"Our AI course completion rate increased from 20% to 85% after implementing Rural Connect. Students can now learn from IIT professors!"</p>
                    <footer className="blockquote-footer">
                      <cite title="Principal">Dr. Rajesh Kumar, Principal</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <img src="data:image/svg+xml;base64,..." className="rounded-circle me-3" width="60" height="60" alt="College" />
                    <div>
                      <h6 className="mb-1">Technical Institute, Odisha</h6>
                      <small className="text-muted">300+ Students</small>
                    </div>
                  </div>
                  <blockquote className="blockquote">
                    <p className="mb-3">"Even with our poor internet, students attend VLSI design classes from Bangalore experts. Game changer for rural education!"</p>
                    <footer className="blockquote-footer">
                      <cite title="HOD">Prof. Sunita Patel, HOD Electronics</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <img src="data:image/svg+xml;base64,..." className="rounded-circle me-3" width="60" height="60" alt="Student" />
                    <div>
                      <h6 className="mb-1">Priya Sharma</h6>
                      <small className="text-muted">Final Year Student</small>
                    </div>
                  </div>
                  <blockquote className="blockquote">
                    <p className="mb-3">"I got placed in a tech company thanks to the renewable energy course I took through Rural Connect. Amazing platform!"</p>
                    <footer className="blockquote-footer">
                      <cite title="Student">Diploma in Electrical Engineering</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center">
                <div className="bg-primary rounded-circle p-3 d-inline-flex mb-3">
                  <span className="text-white h4 mb-0">🎓</span>
                </div>
                <h3 className="text-primary">15,000+</h3>
                <p className="text-muted">Students Benefited</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center">
                <div className="bg-success rounded-circle p-3 d-inline-flex mb-3">
                  <span className="text-white h4 mb-0">🏫</span>
                </div>
                <h3 className="text-success">250+</h3>
                <p className="text-muted">Rural Colleges Connected</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center">
                <div className="bg-info rounded-circle p-3 d-inline-flex mb-3">
                  <span className="text-white h4 mb-0">👨‍🏫</span>
                </div>
                <h3 className="text-info">500+</h3>
                <p className="text-muted">Expert Educators</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center">
                <div className="bg-warning rounded-circle p-3 d-inline-flex mb-3">
                  <span className="text-white h4 mb-0">📈</span>
                </div>
                <h3 className="text-warning">75%</h3>
                <p className="text-muted">Improvement in Grades</p>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <div className="card border-0 bg-gradient text-white" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <div className="card-body p-4 text-center">
                  <h5 className="mb-3">📍 Coverage Map</h5>
                  <div className="row">
                    <div className="col-md-3 mb-2">
                      <strong>North:</strong> UP, Bihar, Jharkhand
                    </div>
                    <div className="col-md-3 mb-2">
                      <strong>South:</strong> Karnataka, Tamil Nadu, AP
                    </div>
                    <div className="col-md-3 mb-2">
                      <strong>East:</strong> West Bengal, Odisha, Assam
                    </div>
                    <div className="col-md-3 mb-2">
                      <strong>West:</strong> Rajasthan, Gujarat, MP
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section
      <section id="pricing" className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">Affordable for Every Institution</h2>
              <p className="lead text-muted">
                Transparent pricing designed for resource-constrained educational institutions
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <h5 className="card-title">Basic Plan</h5>
                  <div className="display-4 fw-bold text-primary">₹2,000</div>
                  <small className="text-muted">per month / 50 students</small>
                  <hr />
                  <ul className="list-unstyled">
                    <li>✓ Live classes</li>
                    <li>✓ Basic recording</li>
                    <li>✓ Text chat</li>
                    <li>✓ Email support</li>
                  </ul>
                  <button className="btn btn-outline-primary w-100">Choose Plan</button>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card border-0 shadow-lg border-primary" style={{ transform: 'scale(1.05)' }}>
                <div className="card-header bg-primary text-white text-center">
                  <small>MOST POPULAR</small>
                </div>
                <div className="card-body p-4">
                  <h5 className="card-title">Professional</h5>
                  <div className="display-4 fw-bold text-primary">₹5,000</div>
                  <small className="text-muted">per month / 200 students</small>
                  <hr />
                  <ul className="list-unstyled">
                    <li>✓ Everything in Basic</li>
                    <li>✓ HD recordings</li>
                    <li>✓ Interactive tools</li>
                    <li>✓ Analytics dashboard</li>
                    <li>✓ Priority support</li>
                  </ul>
                  <button className="btn btn-primary w-100">Choose Plan</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-3">Register Your Institution Today</h2>
          <p className="lead mb-4">
            Join thousands of rural colleges already benefiting from this free government initiative
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="input-group input-group-lg mb-3">
                <input type="email" className="form-control" placeholder="Enter institution email" />
                <button className="btn btn-warning" type="button">
                  Register Now
                </button>
              </div>
              <small className="text-white-50">
                100% Free • Government Initiative • Instant Access
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-dark text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <span className="h5 mb-0 me-2">🌐</span>
                <span className="fw-bold">Rural Connect</span>
              </div>
              <small className="text-muted">Bridging the digital divide in education</small>
            </div>
            <div className="col-md-6 text-md-end">
              <small className="text-muted">
                Built for Smart India Hackathon 2024
              </small>
            </div>
          </div>
        </div>
      </footer>

      {/* Bootstrap JavaScript */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet" />
    </div>
  );
};

export default FeaturePage;