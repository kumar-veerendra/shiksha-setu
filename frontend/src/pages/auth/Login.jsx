import React, { useState } from "react";

function Login() {
  const [selectedRole, setSelectedRole] = useState('student');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { role: selectedRole, ...formData });
    // Handle login logic here
  };

  const roleConfig = {
    student: {
      title: 'Student Login',
      subtitle: 'Access your learning dashboard',
      bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: '🎓'
    },
    teacher: {
      title: 'Teacher Login',
      subtitle: 'Manage your classes and students',
      bgGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      icon: '👨‍🏫'
    },
    admin: {
      title: 'Admin Login',
      subtitle: 'System administration panel',
      bgGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      icon: '⚙️'
    }
  };

  return (
    <div 
      className="min-vh-100 d-flex align-items-center justify-content-center position-relative"
      style={{
        background: roleConfig[selectedRole].bgGradient,
        transition: 'all 0.5s ease'
      }}
    >
      {/* Background Pattern */}
      <div 
        className="position-absolute w-100 h-100"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.1
        }}
      ></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            {/* Logo Section */}
            <div className="text-center mb-4">
              <div className="d-inline-flex align-items-center mb-3">
                <img 
                  src="./shiksha-setuLogo.png" 
                  alt="Shiksha Setu Logo" 
                  className="me-2"
                  style={{
                    height: '100px',
                    width: 'auto',
                    filter: 'brightness(0) invert(1)'
                  }}
                />
                <h1 className="text-white fw-bold mb-0 fs-1">Shiksha Setu</h1>
              </div>
              <p className="text-white-50 mb-0">Bridging Education with Technology</p>
            </div>

            {/* Role Selection Tabs */}
            <div className="card shadow-lg border-0 mb-4" style={{ borderRadius: '20px' }}>
              <div className="card-header bg-transparent border-0 p-0">
                <ul className="nav nav-pills nav-justified p-3" style={{ borderRadius: '20px 20px 0 0' }}>
                  {Object.entries(roleConfig).map(([role, config]) => (
                    <li className="nav-item" key={role}>
                      <button
                        className={`nav-link ${selectedRole === role ? 'active' : ''} fw-medium px-3 py-2 border-0`}
                        style={{
                          borderRadius: '12px',
                          backgroundColor: selectedRole === role ? '#007bff' : 'transparent',
                          color: selectedRole === role ? 'white' : '#6c757d',
                          transition: 'all 0.3s ease'
                        }}
                        onClick={() => setSelectedRole(role)}
                      >
                        <span className="me-1">{config.icon}</span>
                        {role.charAt(0).toUpperCase() + role.slice(1)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="card-body p-4">
                {/* Dynamic Header */}
                <div className="text-center mb-4">
                  <h3 className="fw-bold text-dark mb-2">
                    {roleConfig[selectedRole].title}
                  </h3>
                  <p className="text-muted mb-0">
                    {roleConfig[selectedRole].subtitle}
                  </p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-medium text-dark">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg border-2"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={`Enter your ${selectedRole} email`}
                      required
                      style={{ borderRadius: '12px' }}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-medium text-dark">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg border-2"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                      required
                      style={{ borderRadius: '12px' }}
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label text-muted" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-decoration-none text-primary fw-medium">
                      Forgot Password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-lg w-100 text-white fw-bold shadow-sm"
                    style={{
                      borderRadius: '12px',
                      background: roleConfig[selectedRole].bgGradient,
                      border: 'none',
                      transition: 'all 0.3s ease'
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
                    Login as {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
                  </button>
                </form>

                {/* Additional Links */}
                <div className="text-center mt-4">
                  <p className="text-muted mb-2">
                    Don't have an account?
                  </p>
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    <a href="#" className="btn btn-outline-primary btn-sm rounded-pill px-3">
                      Register as Student
                    </a>
                    <a href="#" className="btn btn-outline-secondary btn-sm rounded-pill px-3">
                      Apply as Teacher
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center">
              <p className="text-white-50 small mb-0">
                © 2024 Shiksha Setu. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;