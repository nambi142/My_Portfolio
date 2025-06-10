import React, { useState } from "react";
import "../Css/ProjectDetails.css";
import { FaClipboardList, FaCamera } from "react-icons/fa";

const TodoAppDetails = () => {
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
        <h1><FaClipboardList /> Advanced Todo App</h1>
        <p>
          This is a modern and fully functional <strong>Todo App</strong> built with <strong>ReactJS</strong> and powered by a <strong>JSON Server</strong> backend. It uses advanced React techniques like <strong>Context API</strong> and <strong>useReducer</strong> for global state management. The frontend is deployed on Netlify and the backend JSON Server is deployed using Render.
        </p>
        <ul>
          <li><strong>Frontend:</strong> Deployed on vercel</li>
          <li><strong>Backend:</strong> JSON Server hosted on Render</li>
          <li><strong>API Communication:</strong> Handled using Axios</li>
        </ul>
      </div>

      <h2>
        <FaCamera className="icons" size={32} /> Screenshots:
      </h2>

      <div className="screenshot-gallery">
        {[
          "Todo2",
          "Todo4",
          "Todo3",
          "Todo1"
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
          <li><strong>Task Management:</strong> Add, edit, delete, and mark tasks as completed</li>
          <li><strong>Live Sync:</strong> All changes are reflected in real-time via API</li>
          <li><strong>Global State:</strong> Efficient state management using <strong>Context API</strong> and <strong>useReducer</strong></li>
          <li><strong>Routing:</strong> Pages for tasks, about, and help using React Router DOM</li>
          <li><strong>Form Validation:</strong> Controlled input fields with validation</li>
          <li><strong>Dark Mode:</strong> Theme toggle for better UX</li>
          <li><strong>Mobile Responsive:</strong> Fully responsive design</li>
        </ul>
      </div>

      <div className="techstack">
        <h2>🧠 Tech Stack & Tools Used:</h2>
        <ul>
          <li>ReactJS (Hooks, Context API, useReducer)</li>
          <li>Axios</li>
          <li>React Router DOM</li>
          <li>Custom CSS3</li>
          <li>vercel</li>
          <li>Render</li>
          <li>Git & GitHub</li>
        </ul>
      </div>

      <div className="hilights">
        <h2>🚀 Highlights:</h2>
        <ul>
          <li>Uses advanced state management patterns</li>
          <li>Connected to live backend with Axios</li>
          <li>Elegant and minimal design</li>
        </ul>
      </div>
      
      <div className="buttons">
        <a
          href="https://todo-app-lac-sigma-48.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn live-btn"
        >
          🔗 View Live Site
        </a>
        <a
          href="https://github.com/nambi142/Todo-App"
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

export default TodoAppDetails;
