import React, { useState } from 'react'; 
import "../Css/ProjectDetails.css";
import { FaCamera } from "react-icons/fa";

const Newbalance = () => {
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
        <h1>🛒 New Balance Clone - E-Commerce Application</h1>
        <p>
          I built a <strong>New Balance Clone</strong> as a full-stack shopping application using 
          <strong> React.js</strong> for the frontend and <strong>Firebase</strong> as the backend 
          to manage authentication and data storage. The project recreates the core features of 
          the official New Balance website with responsive design and modern e-commerce functionality.
        </p>

        <ul>
          <li><strong>Frontend:</strong> React.js + Custom CSS3</li>
          <li><strong>Backend:</strong> Firebase (Firestore database + Authentication)</li>
          <li><strong>Deployment:</strong> Netlify for production hosting</li>
          <li><strong>Version Control:</strong> Git & GitHub for code management</li>
        </ul>
      </div>

      <h2>
        <FaCamera className="icons" size={32} /> Screenshots:
      </h2>
      <div className="screenshot-gallery">
        {[
          "newbalace1",
          "newbalace2",
          "newbalace3",
          "newbalace4",
          "newbalace5",
          "newbalace6",
          "newbalace7",
          "newbalace8"
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
          <li><strong>Product Catalog:</strong> Dynamic product listing stored in Firebase.</li>
          <li><strong>Cart System:</strong> Add, remove, and update items with real-time pricing.</li>
          <li><strong>Global State Management:</strong> Implemented using <strong>React Context API</strong> and <strong>useReducer</strong>.</li>
          <li><strong>Routing:</strong> Built with <strong>React Router DOM</strong> for smooth navigation.</li>
          <li><strong>Form Handling:</strong> Controlled inputs with validation for checkout and user forms.</li>
          <li><strong>Authentication:</strong> Firebase authentication for login & signup.</li>
          <li><strong>Mobile Responsive:</strong> Optimized layout for desktop, tablet, and mobile devices.</li>
          <li><strong>Search & Filter:</strong> Product search and category-based filters.</li>
        </ul>
      </div>

      <div className="techstack">
        <h2>🧠 Tech Stack & Tools Used:</h2>
        <ul>
          <li>React.js (Hooks, Context API, useReducer)</li>
          <li>Firebase (Firestore, Authentication)</li>
          <li>React Router DOM</li>
          <li>Custom CSS3</li>
          <li>Netlify</li>
          <li>Git & GitHub</li>
        </ul>
      </div>

      <div className="hilights">
        <h2>🚀 Highlights:</h2>
        <ul>
          <li>Recreated the official New Balance website UI & experience</li>
          <li>Integrated real-time Firebase database & authentication</li>
          <li>Clean, scalable React project structure with reusable components</li>
          <li>Fully mobile responsive with smooth UI/UX</li>
        </ul>
      </div>

      <div className="buttons">
        <a
          href="https://newbalanceclone.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn live-btn"
        >
          🔗 View Live Site
        </a>
        <a
          href="https://github.com/nambi142/New-Balance-Clone"
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

export default Newbalance;
