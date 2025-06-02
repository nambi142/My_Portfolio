import React, { useState } from 'react';
import "../Css/ProjectDetails.css";
import { FaShoppingCart, FaCamera } from "react-icons/fa";

const Ecommerce = () => {
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
        <h1>🛒 Samsung-store - eCommerce Website</h1>
        <p>
          This is a fully functional e-commerce website built using <strong>ReactJS</strong> for the frontend and <strong>JSON Server</strong> for the backend, demonstrating advanced-level proficiency in modern web development. The site is live and deployed with:
        </p>

        <ul>
          <li><strong>Frontend:</strong> Hosted on Netlify</li>
          <li><strong>Backend:</strong> JSON Server deployed on Render</li>
          <li><strong>Communication:</strong> Axios is used for HTTP requests to connect frontend and backend seamlessly.</li>
        </ul>
      </div>

      <h2>
        <FaCamera className="icons" size={32} /> Screenshots:
      </h2>
      <div className="screenshot-gallery">
        {[
          "image9",
          "image8",
          "image5",
          "image6",
          "image1",
          "image2",
          "image7",
          "image10",
          "image11",
          "image15",
          "image16",
          "image19",
          "image13",
          "image17",
          "image18",
          "image14"
          
        ].map((img, index) => (
          <img
            key={index}
            src={`/img/${img}.png`} // Fixed path
            alt={`Screenshot ${index + 1}`}
            className="screenshot"
            onClick={() => handleImageClick(`/img/${img}.png`)}
          />
        ))}
      </div>

      <div className="keyfeatures">
        <h2>🔧 Key Features & Functionality:</h2>
        <ul>
          <li><strong>Product Catalog:</strong> Dynamic product listing pulled from the backend with real-time data.</li>
          <li><strong>Cart System:</strong> Add, remove, and update items with dynamic pricing.</li>
          <li><strong>Global State:</strong> Managed using <strong>Context API</strong> and <strong>useReducer</strong> for complex cart and user flows.</li>
          <li><strong>Routing:</strong> Navigation using <strong>React Router DOM</strong>.</li>
          <li><strong>Form Handling:</strong> Controlled components with validation.</li>
          <li><strong>Mobile Responsive:</strong> Modern UI across devices.</li>
          <li><strong>Search & Filter:</strong> Products searchable and filterable by category or name.</li>
        </ul>
      </div>

      <div className="techstack">
        <h2>🧠 Tech Stack & Tools Used:</h2>
        <ul>
          <li>ReactJS (Hooks, Context API, useReducer)</li>
          <li>Axios</li>
          <li>React Router DOM</li>
          <li>Custom CSS3</li>
          <li>Netlify</li>
          <li>Render</li>
          <li>Git & GitHub</li>
        </ul>
      </div>

      <div className="hilights">
        <h2>🚀 Highlights:</h2>
        <ul>
          <li>Advanced React patterns for real-world app structure</li>
          <li>Fully integrated full-stack app deployment</li>
          <li>Responsive, clean, and intuitive UI/UX</li>
        </ul>
      </div>

      <div className="buttons">
        <a
          href="https://sammsung-store.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn live-btn"
        >
          🔗 View Live Site
        </a>
        <a
          href="https://github.com/nambi142/Samsung_store"
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

export default Ecommerce;
