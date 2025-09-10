import React from "react";

const PublicDashboard = () => {
    return (
        <div style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '80px 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '20px' }}>
                                Empowering Digital Learning Across India
                            </h1>
                            <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: '0.9' }}>
                                Shiksha Setu connects students, teachers, and parents with a comprehensive digital learning platform that bridges traditional education with modern technology.
                            </p>
                            <div className="d-flex justify-content-center gap-3 flex-wrap">
                                <button style={{
                                    background: 'white',
                                    color: '#667eea',
                                    border: 'none',
                                    borderRadius: '30px',
                                    padding: '12px 30px',
                                    fontWeight: '600',
                                    fontSize: '1.1rem',
                                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                                    transition: 'all 0.3s ease'
                                }} onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-3px)';
                                    e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
                                }} onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                                }}>
                                    Get Started
                                </button>
                                <button style={{
                                    background: 'transparent',
                                    color: 'white',
                                    border: '2px solid white',
                                    borderRadius: '30px',
                                    padding: '12px 30px',
                                    fontWeight: '600',
                                    fontSize: '1.1rem',
                                    transition: 'all 0.3s ease'
                                }} onMouseEnter={(e) => {
                                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                                    e.target.style.transform = 'translateY(-3px)';
                                }} onMouseLeave={(e) => {
                                    e.target.style.background = 'transparent';
                                    e.target.style.transform = 'translateY(0)';
                                }}>
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-5 mt-lg-0">
                            <img
                                src="/digiLearn.jpg"
                                alt="Indian students in classroom"
                                style={{
                                    width: '100%',
                                    borderRadius: '20px',
                                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 style={{ fontWeight: '700', color: '#333', marginBottom: '20px' }}>
                            Platform Features
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
                            Discover how Shiksha Setu enhances the learning experience for students, teachers, and parents across India
                        </p>
                    </div>

                    <div className="row">
                        {[
                            {
                                title: 'Interactive Learning',
                                description: 'Engaging digital content with videos, quizzes, and interactive exercises',
                                icon: 'bi-play-btn',
                                color: '#2196F3'
                            },
                            {
                                title: 'Progress Tracking',
                                description: 'Monitor academic performance with detailed analytics and reports',
                                icon: 'bi-graph-up',
                                color: '#4CAF50'
                            },
                            {
                                title: 'Teacher Resources',
                                description: 'Access to comprehensive teaching materials and lesson plans',
                                icon: 'bi-journal-bookmark',
                                color: '#FF9800'
                            },
                            {
                                title: 'Parent Portal',
                                description: 'Stay informed about your child\'s attendance and academic progress',
                                icon: 'bi-people',
                                color: '#9C27B0'
                            },
                            {
                                title: 'Digital Assignments',
                                description: 'Create, submit, and grade assignments completely online',
                                icon: 'bi-clipboard-check',
                                color: '#F44336'
                            },
                            {
                                title: 'Secure Platform',
                                description: 'Government-backed secure environment for all educational activities',
                                icon: 'bi-shield-check',
                                color: '#607D8B'
                            }
                        ].map((feature, index) => (
                            <div className="col-md-6 col-lg-4 mb-4" key={index}>
                                <div className="card h-100 border-0 shadow-sm" style={{
                                    borderRadius: '15px',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }} onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
                                }} onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
                                }}>
                                    <div className="card-body text-center p-4">
                                        <div style={{
                                            width: '70px',
                                            height: '70px',
                                            borderRadius: '50%',
                                            background: `${feature.color}15`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 20px'
                                        }}>
                                            <i className={`bi ${feature.icon}`} style={{ fontSize: '2rem', color: feature.color }}></i>
                                        </div>
                                        <h5 style={{ fontWeight: '600', color: '#333', marginBottom: '15px' }}>{feature.title}</h5>
                                        <p style={{ color: '#666' }}>{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section style={{ padding: '60px 0', background: '#2196F3', color: 'white' }}>
                <div className="container">
                    <div className="row text-center">
                        {[
                            { title: 'Student Support', desc: 'Interactive learning with quizzes, videos, and assignments' },
                            { title: 'Teacher Tools', desc: 'Lesson plans, teaching resources, and digital assignments' },
                            { title: 'Parent Portal', desc: 'Track attendance, progress, and updates from school' },
                            { title: 'Secure Access', desc: 'Government-backed safe and reliable platform' }
                        ].map((item, index) => (
                            <div className="col-6 col-md-3 mb-4 mb-md-0" key={index}>
                                <h4 style={{ fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '10px' }}>
                                    {item.title}
                                </h4>
                                <p style={{ fontSize: '0.95rem', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bridge Section (New) */}
            <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 style={{ fontWeight: '700', color: '#333', marginBottom: '20px' }}>
                            Bridging the Gap Between Teachers and Students
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '750px', margin: '0 auto' }}>
                            Shiksha Setu is designed to bring classrooms to every corner of India.
                            With optimized video and class management tools, even students in rural areas with low bandwidth can attend live classes, just like Zoom or Google Classroom, but lighter and more accessible.
                        </p>
                    </div>
                    <div className="row text-center">
                        {[
                            { icon: "bi-wifi-off", title: "Low Bandwidth Friendly", desc: "Attend classes smoothly even with weak internet connectivity." },
                            { icon: "bi-person-video3", title: "Live & Recorded Classes", desc: "Students never miss a lecture with live streaming and on-demand recordings." },
                            { icon: "bi-chat-dots", title: "Interactive Tools", desc: "Engage with teachers through chats, Q&A, and collaborative assignments." }
                        ].map((item, idx) => (
                            <div className="col-md-4 mb-4" key={idx}>
                                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: "15px", padding: "25px" }}>
                                    <div style={{ fontSize: "2.5rem", color: "#667eea", marginBottom: "15px" }}>
                                        <i className={`bi ${item.icon}`}></i>
                                    </div>
                                    <h5 style={{ fontWeight: "600", color: "#333", marginBottom: "15px" }}>{item.title}</h5>
                                    <p style={{ color: "#666" }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                padding: '80px 0',
                background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                color: 'white',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h2 style={{ fontWeight: '700', marginBottom: '20px', fontSize: '2.5rem' }}>
                        Ready to Get Started?
                    </h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '40px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', opacity: '0.9' }}>
                        Experience the future of education with our innovative platform designed to bridge the digital divide and enhance learning outcomes
                    </p>
                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <button style={{
                            background: 'white',
                            color: '#764ba2',
                            border: 'none',
                            borderRadius: '30px',
                            padding: '15px 40px',
                            fontWeight: '600',
                            fontSize: '1.1rem',
                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease'
                        }} onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-3px)';
                            e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
                        }} onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                        }}>
                            Create Account
                        </button>
                        <button style={{
                            background: 'transparent',
                            color: 'white',
                            border: '2px solid white',
                            borderRadius: '30px',
                            padding: '15px 40px',
                            fontWeight: '600',
                            fontSize: '1.1rem',
                            transition: 'all 0.3s ease'
                        }} onMouseEnter={(e) => {
                            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                            e.target.style.transform = 'translateY(-3px)';
                        }} onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.transform = 'translateY(0)';
                        }}>
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PublicDashboard;
