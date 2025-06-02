import React, { useState } from "react";
import "../Css/ProjectDetails.css";
import { FaRobot, FaCamera } from "react-icons/fa";

const ChatbotAppDetails = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="project-details-container">
      <div className='intro'>
        <h1><FaRobot /> Smart Chatbot Assistant</h1>
        <p>
          This <strong>AI-powered Chatbot App</strong> is built using <strong>ReactJS</strong> for the frontend and integrated with a lightweight backend for conversation storage and bot responses. It features smooth conversational UI and real-time message handling, ideal for user support or interactive guidance. 
        </p>
        <ul>
          <li><strong>Frontend:</strong> Hosted on Netlify</li>
          <li><strong>Backend:</strong> Mock backend or API simulation</li>
          <li><strong>Messaging:</strong> Real-time UI rendering with message logs</li>
        </ul>
      </div>

      <h2>
        <FaCamera className="icons" size={32} /> Screenshots:
      </h2>

      <div className="screenshot-gallery">
        {[
          "chatbot1",
          "chatbot2"
        ].map((img, index) => (
          <img
            key={index}
            src={`/img/${img}.jpg`}
            alt={`Screenshot ${index + 1}`}
            className="screenshot"
            onClick={() => handleImageClick(`/img/${img}.jpg`)}
          />
        ))}
      </div>

      <div className="keyfeatures">
        <h2>🔧 Key Features & Functionality:</h2>
        <ul>
          <li><strong>Conversational UI:</strong> Dynamic two-way chat interface</li>
          <li><strong>Auto Scroll:</strong> Keeps view updated with latest messages</li>
          <li><strong>Bot Responses:</strong> Simulated intelligent responses</li>
          <li><strong>UI Components:</strong> Designed with reusable React components</li>
          <li><strong>Custom Hooks:</strong> To manage chat state and logic</li>
          <li><strong>Responsive Design:</strong> Works perfectly on mobile and desktop</li>
        </ul>
      </div>

      <div className="techstack">
        <h2>🧠 Tech Stack & Tools Used:</h2>
        <ul>
          <li>ReactJS (Hooks, Functional Components)</li>
          <li>Custom CSS3</li>
          <li>React Icons</li>
          <li>Netlify</li>
          <li>Git & GitHub</li>
        </ul>
      </div>

      <div className="hilights">
        <h2>🚀 Highlights:</h2>
        <ul>
          <li>Clean chat interface inspired by real messaging apps</li>
          <li>Interactive and fun user experience</li>
          <li>Highly customizable and scalable architecture</li>
        </ul>
      </div>

      <div className="buttons">
        <a
          href="https://chat-bot-walmart.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn live-btn"
        >
          🔗 View Live Site
        </a>
        <a
          href="https://github.com/nambi142/Chat-Bot"
          target="_blank"
          rel="noopener noreferrer"
          className="btn code-btn"
        >
          💻 View Code
        </a>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Preview" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotAppDetails;
