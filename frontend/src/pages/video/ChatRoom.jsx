// /src/pages/video/ChatRoom.jsx
import React, { useState } from "react";

function ChatRoom({ messages, onSend }) {
  const [newMessage, setNewMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSend(newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-room">
      <h3>Chat</h3>
      <div className="chat-messages">
        {messages.length > 0 ? (
          messages.map((msg, idx) => (
            <div key={idx} className={`chat-message ${msg.sender}`}>
              <strong>{msg.sender === "me" ? "You" : "Peer"}:</strong>{" "}
              {msg.text}
            </div>
          ))
        ) : (
          <p className="chat-placeholder">No messages yet...</p>
        )}
      </div>

      <form className="chat-input" onSubmit={handleSend}>
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatRoom;
