import React, { useState } from 'react';

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi! I'm here to help you with your studies. How can I assist you today?", 
      sender: "bot",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = { 
        id: Date.now(), 
        text: newMessage, 
        sender: "user",
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages([...messages, userMessage]);
      setNewMessage("");
      setIsTyping(true);
      
      // Simulate bot response
      setTimeout(() => {
        setIsTyping(false);
        const botResponses = [
          "Thanks for your message! I'm here to help with your studies.",
          "I can help you with assignments, grades, attendance, or technical support.",
          "What specific topic would you like help with?",
          "Feel free to ask me about your courses or any study-related questions!",
          "I'm here 24/7 to support your learning journey."
        ];
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        
        const botMessage = { 
          id: Date.now() + 1, 
          text: randomResponse, 
          sender: "bot",
          timestamp: new Date().toLocaleTimeString()
        };
        setMessages(prev => [...prev, botMessage]);
      }, 1500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([{
      id: 1, 
      text: "Hi! I'm here to help you with your studies. How can I assist you today?", 
      sender: "bot",
      timestamp: new Date().toLocaleTimeString()
    }]);
  };

  return (
    <>

      {/* Chat Button - Bottom Right */}
      <div 
        className="position-fixed"
        style={{
          bottom: '20px',
          right: '20px',
          zIndex: 1050
        }}
      >
        <button
          className="btn btn-primary rounded-circle shadow-lg"
          style={{
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            fontSize: '24px',
            transition: 'all 0.3s ease',
            position: 'relative'
          }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          {isChatOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <>
              <i className="fas fa-comments"></i>
              {/* Notification dot */}
              <span 
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{fontSize: '10px'}}
              >
                !
              </span>
            </>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div 
          className="position-fixed shadow-lg"
          style={{
            bottom: '90px',
            right: '20px',
            width: '350px',
            height: '500px',
            backgroundColor: 'white',
            borderRadius: '15px',
            zIndex: 1040,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid rgba(0,0,0,0.1)'
          }}
        >
          {/* Chat Header */}
          <div 
            className="d-flex align-items-center justify-content-between p-3 text-white"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '15px 15px 0 0'
            }}
          >
            <div className="d-flex align-items-center">
              <div className="me-3">
                <i className="fas fa-robot" style={{fontSize: '20px'}}></i>
              </div>
              <div>
                <h6 className="mb-0 fw-bold">Study Helper Bot</h6>
                <small style={{opacity: 0.9}}>
                  <span className="badge bg-success rounded-pill me-1" style={{fontSize: '8px'}}>●</span>
                  Online - Here to help!
                </small>
              </div>
            </div>
            <div className="dropdown">
              <button 
                className="btn btn-sm text-white border-0 p-1" 
                type="button" 
                data-bs-toggle="dropdown"
                style={{background: 'rgba(255,255,255,0.2)'}}
              >
                <i className="fas fa-ellipsis-v"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button className="dropdown-item" onClick={clearChat}>
                    <i className="fas fa-trash me-2"></i>Clear Chat
                  </button>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <button className="dropdown-item" onClick={() => setIsChatOpen(false)}>
                    <i className="fas fa-times me-2"></i>Close
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Chat Messages Area */}
          <div 
            className="flex-grow-1 p-3 overflow-auto"
            style={{
              backgroundColor: '#f8f9fa',
              maxHeight: '350px'
            }}
          >
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`mb-3 d-flex ${message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
              >
                <div className="d-flex flex-column" style={{maxWidth: '80%'}}>
                  <div 
                    className="p-2 rounded shadow-sm"
                    style={{
                      backgroundColor: message.sender === 'user' ? '#667eea' : 'white',
                      color: message.sender === 'user' ? 'white' : '#333',
                      borderRadius: message.sender === 'user' 
                        ? '18px 18px 5px 18px' 
                        : '18px 18px 18px 5px',
                      wordWrap: 'break-word'
                    }}
                  >
                    <small style={{fontSize: '14px', lineHeight: '1.4'}}>
                      {message.text}
                    </small>
                  </div>
                  <small 
                    className={`text-muted mt-1 ${message.sender === 'user' ? 'text-end' : 'text-start'}`}
                    style={{fontSize: '11px'}}
                  >
                    {message.timestamp}
                  </small>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="mb-3 d-flex justify-content-start">
                <div 
                  className="p-2 rounded shadow-sm bg-white"
                  style={{borderRadius: '18px 18px 18px 5px'}}
                >
                  <div className="d-flex align-items-center">
                    <div className="spinner-grow spinner-grow-sm text-primary me-2" role="status" style={{width: '0.5rem', height: '0.5rem'}}>
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <small className="text-muted">Bot is typing...</small>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Reply Buttons */}
          <div className="px-3 pb-2">
            <div className="d-flex flex-wrap gap-1">
              {!messages.find(m => m.text.includes("assignment")) && (
                <button 
                  className="btn btn-outline-primary btn-sm rounded-pill"
                  style={{fontSize: '11px'}}
                  onClick={() => {
                    setNewMessage("Help with assignments");
                    setTimeout(handleSendMessage, 100);
                  }}
                >
                  📝 Assignments
                </button>
              )}
              {!messages.find(m => m.text.includes("grade")) && (
                <button 
                  className="btn btn-outline-success btn-sm rounded-pill"
                  style={{fontSize: '11px'}}
                  onClick={() => {
                    setNewMessage("Check my grades");
                    setTimeout(handleSendMessage, 100);
                  }}
                >
                  🎯 Grades
                </button>
              )}
              <button 
                className="btn btn-outline-info btn-sm rounded-pill"
                style={{fontSize: '11px'}}
                onClick={() => {
                  setNewMessage("Technical support");
                  setTimeout(handleSendMessage, 100);
                }}
              >
                🔧 Support
              </button>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-3 border-top bg-white" style={{borderRadius: '0 0 15px 15px'}}>
            <div className="input-group">
              <textarea
                className="form-control border-0 shadow-sm"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                rows="1"
                style={{
                  resize: 'none',
                  borderRadius: '20px',
                  backgroundColor: '#f8f9fa',
                  fontSize: '14px'
                }}
              />
              <button
                className="btn ms-2 rounded-circle"
                type="button"
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                style={{
                  background: newMessage.trim() 
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                    : '#e9ecef',
                  color: 'white',
                  border: 'none',
                  width: '40px',
                  height: '40px'
                }}
              >
                <i className="fas fa-paper-plane" style={{fontSize: '14px'}}></i>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Demo Content */}
      {/* <div className="container mt-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h4 className="card-title">Student Dashboard</h4>
                <p className="card-text">
                  This is your student dashboard. The chatbot in the bottom-right corner 
                  is ready to help you with your studies!
                </p>
                <div className="alert alert-info">
                  <i className="fas fa-info-circle me-2"></i>
                  <strong>Try the chatbot:</strong> Click the chat button in the bottom-right corner to get help with assignments, grades, or technical support.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </>
  );
};

export default ChatBot;