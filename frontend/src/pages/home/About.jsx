import React, { useState } from 'react';
import HomeNavBar from '../HomeNavBar';

const About = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  const teamMembers = [
    {
      name: "Veerendra Kumar",
      role: "Full Stack Developer",
      image: "👨‍💻",
      bio: "Specializes in low-latency web applications and Progressive Web Apps. Passionate about making technology accessible to rural communities.",
      skills: ["React", "Node.js", "WebRTC", "PWA"]
    },

    {
      name: "Shivam Mishra",
      role: "Frontend Engineer",
      image: "👨‍💻",
      bio: "Designs intuitive user interfaces with focus on accessibility and low-bandwidth performance. Passionate about responsive design and seamless user experience.",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      name: "Nayan Kumar",
      role: "Backend Engineer",
      image: "👨‍🔧",
      bio: "Builds scalable server architectures optimized for rural connectivity. Expert in data compression and edge computing solutions.",
      skills: ["Python", "Cloud Architecture", "API Design", "Data Compression"]
    },
    {
      name: "Ujjwal Kumar Singh",
      role: "Product Manager",
      image: "👩‍💼",
      bio: "Coordinates product development and ensures solutions meet real rural education needs. Background in educational technology.",
      skills: ["Product Strategy", "Education Tech", "User Research", "Agile"]
    },
    {
      name: "Shreysi Bharti",
      role: "UI/UX Designer",
      image: "👩‍🎨",
      bio: "Expert in designing user-friendly interfaces for low-bandwidth environments. Focuses on accessibility and mobile-first design.",
      skills: ["UI Design", "UX Research", "Mobile Design", "Accessibility"]
    },
    {
      name: "Om Shankar Madhawan",
      role: "Research & Data Specialist",
      image: "🔬",
      bio: "Explores innovative solutions for rural education using data insights. Skilled in user research, data analytics, and applying AI for problem-solving.",
      skills: ["Data Analysis", "Machine Learning", "User Research", "Statistics"]
    }

  ];

  const milestones = [
    {
      year: "2025",
      month: "Jan",
      event: "Project Conceptualization",
      description: "Identified the rural education gap during our college visits"
    },
    {
      year: "2025",
      month: "Mar",
      event: "Research & Development",
      description: "Extensive field research in 15+ rural colleges across 5 states"
    },
    {
      year: "2025",
      month: "Jun",
      event: "Prototype Development",
      description: "Built and tested MVP with adaptive streaming technology"
    },
    {
      year: "2025",
      month: "Aug",
      event: "Pilot Testing",
      description: "Successfully tested in 10 rural colleges with 500+ students"
    },
    {
      year: "2025",
      month: "Sep",
      event: "SIH Participation",
      description: "Presenting our solution at Smart India Hackathon 2024"
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Accessibility First",
      description: "Every feature is designed to work on the most basic smartphones with slowest internet connections."
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Bringing together urban expertise and rural aspirations through seamless technology integration."
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Pushing boundaries of what's possible with limited resources through creative engineering solutions."
    },
    {
      icon: "💚",
      title: "Social Impact",
      description: "Committed to reducing the digital divide and democratizing quality education across India."
    }
  ];

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Navigation */}
      {/* <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#2c3e50' }}>
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
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link active" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav> */}

      <HomeNavBar />

      {/* Hero Section */}
      <section className="py-5 bg-primary text-white mt-5">
        <div className="container mt-3">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">About Shiksha Setu</h1>
              <p className="lead mb-4">
                We're a passionate team of students and developers working to bridge the digital divide 
                in rural education through innovative, low-bandwidth virtual classroom solutions.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <div className="bg-white bg-opacity-20 rounded px-3 py-2 text-dark">
                  <small>🎯 Mission-Driven</small>
                </div>
                <div className="bg-white bg-opacity-20 rounded px-3 py-2 text-dark">
                  <small>🏆 SIH 2025 Participants</small>
                </div>
                <div className="bg-white bg-opacity-20 rounded px-3 py-2 text-dark">
                  <small>🌟 Social Impact Focus</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="bg-white bg-opacity-10 rounded-circle p-5 d-inline-block">
                <span style={{ fontSize: '5rem' }}>🚀</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card border-0 h-100 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary rounded-circle p-3 me-3">
                      <span className="text-white h5 mb-0">🎯</span>
                    </div>
                    <h3 className="mb-0">Our Mission</h3>
                  </div>
                  <p className="text-muted mb-4">
                    To democratize quality education by connecting expert educators in urban areas 
                    with students in rural diploma colleges through innovative, low-bandwidth technology solutions.
                  </p>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center mb-2">
                      <span className="badge bg-primary rounded-pill me-2">✓</span>
                      <small>Bridge the urban-rural learning divide</small>
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <span className="badge bg-primary rounded-pill me-2">✓</span>
                      <small>Enable access to specialized subjects</small>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="badge bg-primary rounded-pill me-2">✓</span>
                      <small>Empower rural students with expert knowledge</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 mb-4">
              <div className="card border-0 h-100 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-success rounded-circle p-3 me-3">
                      <span className="text-white h5 mb-0">🔮</span>
                    </div>
                    <h3 className="mb-0">Our Vision</h3>
                  </div>
                  <p className="text-muted mb-4">
                    A future where every student in rural India has access to world-class education, 
                    regardless of their geographic location or internet connectivity limitations.
                  </p>
                  <div className="row">
                    <div className="col-6 text-center mb-3">
                      <div className="h4 text-success">10,000+</div>
                      <small className="text-muted">Students Impacted</small>
                    </div>
                    <div className="col-6 text-center mb-3">
                      <div className="h4 text-success">500+</div>
                      <small className="text-muted">Rural Colleges</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">Our Core Values</h2>
              <p className="lead text-muted">
                Principles that guide every decision and feature we build
              </p>
            </div>
          </div>

          <div className="row">
            {values.map((value, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="card border-0 shadow-sm h-100 text-center">
                  <div className="card-body p-4">
                    <div className="display-4 mb-3">{value.icon}</div>
                    <h5 className="mb-3">{value.title}</h5>
                    <p className="text-muted small">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">Our Journey</h2>
              <p className="lead text-muted">
                From concept to nationwide impact - the Rural Connect story
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="timeline position-relative">
                {milestones.map((milestone, index) => (
                  <div key={index} className="timeline-item mb-4">
                    <div className="row align-items-center">
                      <div className="col-md-2 text-center">
                        <div className="bg-primary text-white rounded-circle p-3 d-inline-block">
                          <small className="fw-bold">{milestone.month}<br/>{milestone.year}</small>
                        </div>
                      </div>
                      <div className="col-md-10">
                        <div className="card border-0 shadow-sm">
                          <div className="card-body p-4">
                            <h5 className="mb-2">{milestone.event}</h5>
                            <p className="text-muted mb-0">{milestone.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">Meet Our Team</h2>
              <p className="lead text-muted">
                Passionate individuals working together to make education accessible
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="list-group">
                {teamMembers.map((member, index) => (
                  <button
                    key={index}
                    className={`list-group-item list-group-item-action p-3 ${
                      activeTeamMember === index ? 'active' : ''
                    }`}
                    onClick={() => setActiveTeamMember(index)}
                  >
                    <div className="d-flex align-items-center">
                      <span className="me-3 fs-2">{member.image}</span>
                      <div className="text-start">
                        <h6 className="mb-1">{member.name}</h6>
                        <small className={activeTeamMember === index ? 'text-white-50' : 'text-muted'}>
                          {member.role}
                        </small>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-4">
                    <span className="display-3 me-4">{teamMembers[activeTeamMember].image}</span>
                    <div>
                      <h3 className="mb-1">{teamMembers[activeTeamMember].name}</h3>
                      <h6 className="text-muted">{teamMembers[activeTeamMember].role}</h6>
                    </div>
                  </div>
                  <p className="lead text-muted mb-4">{teamMembers[activeTeamMember].bio}</p>
                  <h6 className="mb-3">Skills & Expertise:</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {teamMembers[activeTeamMember].skills.map((skill, index) => (
                      <span key={index} className="badge bg-primary rounded-pill px-3 py-2">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-3">Join Our Mission</h2>
              <p className="lead mb-4">
                Help us transform rural education and create equal opportunities for all students across India.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <button className="btn btn-warning btn-lg px-4 py-2">
                  Partner With Us
                </button>
                <button className="btn btn-outline-light btn-lg px-4 py-2">
                  Get Involved
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row">
            
            {/* Logo + Tagline */}
            <div className="col-md-4 mb-4">
              <div className="d-flex align-items-center mb-2">
                <span className="h5 mb-0 me-2">🌐</span>
                <span className="fw-bold text-white">Shiksha Setu</span>
              </div>
              <small className="text-light">
                Bridging the digital divide in education
              </small>
            </div>

            {/* About Section */}
            <div className="col-md-4 mb-4">
              <h6 className="fw-bold text-white">About</h6>
              <p className="small text-light mb-0">
                Shiksha Setu enables remote classrooms and provides quality 
                learning resources for students in rural areas, ensuring equal 
                access to education.
              </p>
            </div>

            {/* Features Section */}
            <div className="col-md-4 mb-4">
              <h6 className="fw-bold text-white">Features</h6>
              <ul className="list-unstyled small">
                <li><a href="#live" className="text-light text-decoration-none">Live Classes</a></li>
                <li><a href="#materials" className="text-light text-decoration-none">Study Materials</a></li>
                <li><a href="#dashboards" className="text-light text-decoration-none">Dashboards</a></li>
                <li><a href="#community" className="text-light text-decoration-none">Community Support</a></li>
              </ul>
            </div>

          </div>

          <div className="text-center pt-3 border-top border-secondary mt-3">
            <small className="text-light">
              Built with ❤️ for Smart India Hackathon 2025
            </small>
          </div>
        </div>
      </footer>


      {/* Bootstrap JavaScript
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet" /> */}
    </div>
  );
};

export default About;