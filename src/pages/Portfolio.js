import React, { useState } from "react";
import "../Css/ProjectDetails.css";
import { FaUserTie, FaCamera } from "react-icons/fa";

const PortfolioAppDetails = () => {
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
        <h1><FaUserTie /> Professional Portfolio Website</h1>
        <p>
          This <strong>React-based Portfolio Website</strong> showcases my technical skills, featured projects, and contact information with a <strong>clean, professional UI</strong>. It reflects my profile as a budding IT professional ready for opportunities.
        </p>
        <ul>
          <li><strong>Hosted:</strong> Deployed on Netlify</li>
          <li><strong>Design:</strong> Custom CSS for a modern, responsive layout</li>
          <li><strong>Content:</strong> About, Projects, Skills, Tools, Contact Form</li>
        </ul>
      </div>
      

      <h2>
        <FaCamera className="icons" size={32} /> Screenshots:
      </h2>

      <div className="screenshot-gallery">
        {[
          "portfolio1",
          "portfolio2",
          "portfolio3",
          "portfolio4",
          "portfolio5",
          "portfolio6"
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
          <li><strong>Section Navigation:</strong> Fixed header with smooth scroll</li>
          <li><strong>Responsive Design:</strong> Mobile-first layout</li>
          <li><strong>Contact Form:</strong> Integrated email and WhatsApp messaging</li>
          <li><strong>Custom Styling:</strong> Gradient backgrounds and professional theme</li>
          <li><strong>Live Projects:</strong> Links to hosted projects with screenshots</li>
        </ul>
      </div>

      <div className="techstack">
        <h2>🧠 Tech Stack & Tools Used:</h2>
        <ul>
          <li>ReactJS (Hooks, Functional Components)</li>
          <li>CSS3 (Modular files for Header & Home)</li>
          <li>React Icons</li>
          <li>EmailJS (or integration for contact form)</li>
          <li>Netlify</li>
          <li>Git & GitHub</li>
        </ul>
      </div>

      <div className="hilights">
      <h2>🚀 Highlights:</h2>
        <ul>
          <li>Professional IT-styled design</li>
          <li>Scalable structure for adding future projects</li>
          <li>Fully interactive UI with modal image previews</li>
        </ul>
      </div>

      <div className="buttons">
        <a
          href="https://muthuNambi-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn live-btn"
        >
          🔗 View Live Site
        </a>
        <a
          href="https://github.com/nambi142/myportfolio"
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

export default PortfolioAppDetails;
