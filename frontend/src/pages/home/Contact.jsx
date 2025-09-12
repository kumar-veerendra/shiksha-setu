import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    subject: 'general',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        role: '',
        subject: 'general',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }, 2000);
  };

  return (
    <>
      <div className="bg-light min-vh-100">
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
          <div className="container">
            <a className="navbar-brand fw-bold" href="#">
              <i className="fas fa-graduation-cap me-2"></i>
              RuralEdu Connect
            </a>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#solution">Solution</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-primary text-white py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h1 className="display-4 fw-bold mb-3">Contact Our Team</h1>
                <p className="lead mb-4">
                  Have questions about our low-bandwidth virtual classroom solution? 
                  Need a demo for your rural diploma college? We're here to help bridge 
                  the education divide.
                </p>
                <div className="row text-center text-lg-start">
                  <div className="col-md-4 mb-3">
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                      <i className="fas fa-wifi me-2"></i>
                      <span>Low-Bandwidth Optimized</span>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                      <i className="fas fa-mobile-alt me-2"></i>
                      <span>Mobile-Friendly</span>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                      <i className="fas fa-clock me-2"></i>
                      <span>24/7 Support</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <i className="fas fa-comments display-1 opacity-50"></i>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container py-5">
          <div className="row">
            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body p-4 p-md-5">
                  <h2 className="card-title h3 mb-4">
                    <i className="fas fa-paper-plane text-primary me-2"></i>
                    Send Us a Message
                  </h2>
                  
                  {/* Success Alert */}
                  {submitStatus === 'success' && (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                      <i className="fas fa-check-circle me-2"></i>
                      <strong>Success!</strong> Your message has been sent. We'll respond within 24 hours.
                      <button 
                        type="button" 
                        className="btn-close" 
                        onClick={() => setSubmitStatus('')}
                      ></button>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    {/* Name and Email Row */}
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label">
                          Full Name <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="fas fa-user"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">
                          Email Address <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="fas fa-envelope"></i>
                          </span>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phone and Organization Row */}
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="fas fa-phone"></i>
                          </span>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="organization" className="form-label">Organization/College</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="fas fa-building"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            id="organization"
                            name="organization"
                            value={formData.organization}
                            onChange={handleInputChange}
                            placeholder="Rural Diploma College, Tech Institute, etc."
                          />
                        </div>
                      </div>
                    </div>

                    {/* Role and Subject Row */}
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="role" className="form-label">Your Role</label>
                        <select
                          className="form-select"
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                        >
                          <option value="">Select your role</option>
                          <option value="student">Student</option>
                          <option value="educator">Educator/Faculty</option>
                          <option value="administrator">College Administrator</option>
                          <option value="principal">Principal/Director</option>
                          <option value="developer">Developer/Tech Team</option>
                          <option value="investor">Investor/Partner</option>
                          <option value="government">Government Official</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <select
                          className="form-select"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                        >
                          <option value="general">General Inquiry</option>
                          <option value="demo">Request Demo</option>
                          <option value="partnership">Partnership Opportunity</option>
                          <option value="technical">Technical Support</option>
                          <option value="implementation">Implementation Guide</option>
                          <option value="pricing">Pricing Information</option>
                          <option value="feedback">Feedback & Suggestions</option>
                          <option value="media">Media & Press</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">
                        Message <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell us about your rural education challenges, bandwidth constraints, specific subjects needing expert lecturers, or how we can help bridge the learning divide in your area..."
                      ></textarea>
                      <div className="form-text">
                        Please include details about your current internet connectivity, 
                        number of students, and specific technical challenges.
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg px-4"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span 
                              className="spinner-border spinner-border-sm me-2" 
                              role="status" 
                              aria-hidden="true"
                            ></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-paper-plane me-2"></i>
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              {/* Contact Information */}
              <div className="card shadow-sm border-0 mb-4">
                <div className="card-body p-4">
                  <h3 className="card-title h5 mb-4">
                    <i className="fas fa-info-circle text-primary me-2"></i>
                    Contact Information
                  </h3>
                  
                  <div className="mb-4">
                    <h6 className="fw-bold mb-2">
                      <i className="fas fa-envelope text-primary me-2"></i>
                      Email
                    </h6>
                    <p className="mb-0">
                      <a 
                        href="mailto:contact@ruraleduconnect.in" 
                        className="text-decoration-none"
                      >
                        contact@ruraleduconnect.in
                      </a>
                    </p>
                    <small className="text-muted">Primary contact for all inquiries</small>
                  </div>

                  <div className="mb-4">
                    <h6 className="fw-bold mb-2">
                      <i className="fas fa-phone text-primary me-2"></i>
                      Phone
                    </h6>
                    <p className="mb-0">+91 98765 43210</p>
                    <small className="text-muted">Available 9 AM - 6 PM IST</small>
                  </div>

                  <div className="mb-4">
                    <h6 className="fw-bold mb-2">
                      <i className="fas fa-clock text-primary me-2"></i>
                      Response Time
                    </h6>
                    <p className="mb-0">Within 24 hours</p>
                    <small className="text-muted">Urgent requests within 4 hours</small>
                  </div>

                  <div className="mb-0">
                    <h6 className="fw-bold mb-2">
                      <i className="fas fa-users text-primary me-2"></i>
                      Team
                    </h6>
                    <p className="mb-0">SIH 2024 Team</p>
                    <small className="text-muted">Smart India Hackathon Participants</small>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card shadow-sm border-0 mb-4">
                <div className="card-body p-4">
                  <h3 className="card-title h5 mb-4">
                    <i className="fas fa-rocket text-primary me-2"></i>
                    Quick Actions
                  </h3>
                  
                  <div className="d-grid gap-3">
                    <button className="btn btn-outline-primary">
                      <i className="fas fa-play me-2"></i>
                      Schedule Demo
                    </button>
                    <button className="btn btn-outline-success">
                      <i className="fas fa-download me-2"></i>
                      Download Brochure
                    </button>
                    <button className="btn btn-outline-info">
                      <i className="fas fa-book me-2"></i>
                      View Documentation
                    </button>
                    <button className="btn btn-outline-secondary">
                      <i className="fab fa-github me-2"></i>
                      Source Code
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Stats */}
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h3 className="card-title h5 mb-4">
                    <i className="fas fa-chart-line text-primary me-2"></i>
                    Project Impact
                  </h3>
                  
                  <div className="row text-center">
                    <div className="col-6 mb-3">
                      <div className="border-end">
                        <h4 className="text-primary fw-bold mb-1">500+</h4>
                        <small className="text-muted">Rural Students</small>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <h4 className="text-success fw-bold mb-1">50+</h4>
                      <small className="text-muted">Expert Lecturers</small>
                    </div>
                    <div className="col-6">
                      <div className="border-end">
                        <h4 className="text-warning fw-bold mb-1">25+</h4>
                        <small className="text-muted">Rural Colleges</small>
                      </div>
                    </div>
                    <div className="col-6">
                      <h4 className="text-info fw-bold mb-1">95%</h4>
                      <small className="text-muted">Satisfaction Rate</small>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="text-center">
                    <h6 className="mb-3">Follow Our Progress</h6>
                    <div className="btn-group" role="group">
                      <a href="#" className="btn btn-outline-primary btn-sm">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="btn btn-outline-primary btn-sm">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="#" className="btn btn-outline-dark btn-sm">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href="#" className="btn btn-outline-danger btn-sm">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-dark text-white py-4 mt-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="mb-0">
                  <i className="fas fa-copyright me-1"></i>
                  2024 RuralEdu Connect - SIH 2024 Project
                </p>
              </div>
              <div className="col-md-6 text-md-end">
                <p className="mb-0">
                  <i className="fas fa-heart text-danger me-1"></i>
                  Bridging the Rural-Urban Education Divide
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Bootstrap JS CDN */}
      {/* //<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js"></script> */}
    </>
  );
};

export default Contact;