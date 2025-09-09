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
                                Transforming Education in Rajasthan
                            </h1>
                            <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: '0.9' }}>
                                Shiksha Setu connects students, teachers, and parents with a comprehensive digital learning platform powered by the Government of Rajasthan.
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
                                src="https://images.unsplash.com/photo-1522881193457-37ae97c905bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                                alt="Education" 
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
                            Discover how Shiksha Setu enhances the learning experience for students, teachers, and parents across Rajasthan
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

            {/* Stats Section */}
            <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)', color: 'white' }}>
                <div className="container">
                    <div className="row text-center">
                        {[
                            { number: '50,000+', label: 'Students Registered' },
                            { number: '5,000+', label: 'Teachers' },
                            { number: '200+', label: 'Schools' },
                            { number: '15', label: 'Districts Covered' }
                        ].map((stat, index) => (
                            <div className="col-6 col-md-3 mb-4 mb-md-0" key={index}>
                                <h2 style={{ fontWeight: '700', fontSize: '2.5rem', marginBottom: '10px' }}>{stat.number}</h2>
                                <p style={{ fontSize: '1.1rem', opacity: '0.9' }}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 style={{ fontWeight: '700', color: '#333', marginBottom: '20px' }}>
                            What Users Say
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
                            Hear from students, teachers, and parents about their experience with Shiksha Setu
                        </p>
                    </div>

                    <div className="row">
                        {[
                            {
                                name: 'Rajesh Kumar',
                                role: 'Parent',
                                text: 'Shiksha Setu has made it so easy to track my child\'s progress and communicate with teachers.',
                                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
                            },
                            {
                                name: 'Priya Sharma',
                                role: 'Teacher',
                                text: 'The resources and tools available have transformed how I teach and engage with my students.',
                                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
                            },
                            {
                                name: 'Aarav Mehta',
                                role: 'Student',
                                text: 'I love the interactive lessons and being able to access my study materials anytime.',
                                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
                            }
                        ].map((testimonial, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                                <div className="card h-100 border-0 shadow-sm" style={{ 
                                    borderRadius: '15px', 
                                    transition: 'all 0.3s ease'
                                }} onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                                }} onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
                                }}>
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center mb-4">
                                            <img 
                                                src={testimonial.avatar} 
                                                alt={testimonial.name} 
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    borderRadius: '50%',
                                                    objectFit: 'cover',
                                                    marginRight: '15px'
                                                }}
                                            />
                                            <div>
                                                <h6 style={{ fontWeight: '600', marginBottom: '5px', color: '#333' }}>{testimonial.name}</h6>
                                                <p style={{ color: '#666', margin: '0', fontSize: '0.9rem' }}>{testimonial.role}</p>
                                            </div>
                                        </div>
                                        <p style={{ color: '#666', fontStyle: 'italic' }}>"{testimonial.text}"</p>
                                    </div>
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
                        Join thousands of students, teachers, and parents already using Shiksha Setu to transform education in Rajasthan
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