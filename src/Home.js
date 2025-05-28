import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaReact, FaCartShopping } from "react-icons/fa6";
import { LuListTodo } from "react-icons/lu";
import { SiGmail } from "react-icons/si";
import {
  FaSquareWhatsapp,
  FaGithub,
  FaLinkedin,
  FaSquareInstagram,
} from "react-icons/fa6";

const Home = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Email submission
  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };
    emailjs
      .send(
        "service_3u23jnq",
        "template_nstaec3",
        templateParams,
        "BMpW4NjLKBbPvjGwP"
      )
      .then(
        () => {
          alert("Email sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send email. Try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  // Handle WhatsApp submission
  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const message = `Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;
    const whatsappURL = `https://wa.me/918637619849?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="container">
      <div className="header">
        <h2>MUTHU NAMBI A</h2>
        <nav>
          <ul className="list">
            <li>
              <a href="#Project">Projects</a>
            </li>
            <li>
              <a href="#About-Me">About</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
            <li>
              <a href="/resume.pdf" download="Muthu_Nambi_Resume.pdf">
                Download CV (PDF)
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="home">
        <div className="home-text">
          <h1>Hello!</h1>
          <h2> My self, Muthu Nambi</h2>
          <p> Aspiring React.js Developer</p>
          <FaReact />
        </div>
      </div>

      <div id="Project" className="Project">
        <h2>My Projects</h2>
        <div className="name">
          <div className="ecom">
            <h3>
              E-Commerce Website <FaCartShopping className="icon" />
            </h3>
            <p>
              Build with React and Axios, featuring product listing and Context
              API for state management.
            </p>
          </div>
          <div className="todo">
            <h3>
              To-Do App <LuListTodo className="icon" />
            </h3>
            <p>
              Responsive React app with add/delete/complete task features using
              Hooks.
            </p>
          </div>
        </div>
      </div>

      <div id="About-Me" className="About-Me">
        <h2>About Me</h2>
        <p>
          I'm a front-end developer skilled in React.js, JavaScript, and modern
          UI design. I completed a React-focused internship and built several
          hands-on projects, including an e-commerce site and a personal
          portfolio. I enjoy creating responsive, user-friendly web applications
          and continuously expanding my skills.
        </p>
      </div>

      <div className="core-skills">
        <h2>🌐 Core Front-End Skills</h2>
        <ul>
          <li>HTML5 - Semantic markup for structuring content.</li>
          <li>CSS3 - Styling, layouts (Flexbox, Grid), animations</li>
          <li>
            JavaScript (ES6+) - Modern JS syntax and features (arrow functions,
            async/await, destructuring, etc.).
          </li>
        </ul>
      </div>

      <div className="react-skills"> 
        <h2>⚛️ React.js Skills</h2>
        <ul>
          <li>React Fundamentals - Components, JSX, Props, State.</li>
          <li>React Hooks - useState, useEffect, useContext, etc.</li>
          <li>
            Component Lifecycle - Understanding how components mount, update, and
            unmount.
          </li>
          <li>Conditional Rendering - Dynamic UI based on logic</li>
          <li>Form Handling - Controlled components and validation.</li>
          <li>
            Lists and Keys - Rendering collections and maintaining identity.
          </li>
          <li>React Router - Navigation and routing between views/pages.</li>
          <li>Context API - Global state management.</li>
        </ul>
      </div>
      
      <div className="tools">
        <h2>🧰 Tools & Workflow</h2>
        <ul>
          <li>Git & GitHub</li>
          <li>VS Code with React & AI dev extensions</li>
          <li>NPM / Yarn, ESLint / Prettier</li>
          <li>Chrome React DevTools</li>
        </ul>
      </div>

      {/*Compained Contact Section*/}
      <div id="Contact" className="contact-me">
        <h2>Send me an Message</h2>
        <form>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <div className="button-group">
            <button type="button" onClick={sendEmail}>
              Send Email
            </button>
            <button type="button" onClick={sendToWhatsApp}>
              Send via WhatsApp
            </button>
          </div>
        </form>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Muthu Nambi. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://www.instagram.com/nambi_707/">
              <FaSquareInstagram />
            </a>
            <a href="mailto:muthunambi4321@gmail.com">
              <SiGmail />
            </a>
            <a
              href="https://wa.me/918637619849"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareWhatsapp />
            </a>
            <a
              href="https://github.com/nambi142"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/muthu-nambi-6a463a238/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
