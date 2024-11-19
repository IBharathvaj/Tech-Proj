// src/components/Chatbot.js
import React, { useState } from 'react';

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleChat = () => {
    if (userInput.trim()) {
      setChatMessages([...chatMessages, { text: userInput, sender: 'user' }]);
      setUserInput('');

      // Simulate AI response
      setTimeout(() => {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { text: 'This is an AI response.', sender: 'ai' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="chatbot" onClick={() => alert('Navigate to chat interface')}>
      <img src="chatbot-icon.jpg" alt="Chatbot" />
      <input
        type="text"
        placeholder="Ask me anything..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleChat}>Send</button>
      <div className="chat-history">
        {chatMessages.map((message, index) => (
          <div key={index} className={message.sender}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chatbot;
