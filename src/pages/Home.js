import React from "react";
import { FaReact, FaCartShopping } from "react-icons/fa6";
import { LuListTodo } from "react-icons/lu";
import { IoIosContact } from "react-icons/io";
import { TbMessageChatbot } from "react-icons/tb";
import { Link } from "react-router-dom";
import "../Css/Home.css";

const Home = () => {
  return (
    <div className="container">

      {/* ---------- HERO SECTION ---------- */}
      <div className="home">
        <div className="home-text">
          <h1>Hello!</h1>
          <h2>My self, Muthu Nambi</h2>
          <p>Aspiring React.js Developer</p>
          <FaReact />
        </div>
      </div>

      {/* ---------- ABOUT ME ---------- */}
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

      {/* ---------- PROJECTS ---------- */}
      <div id="Project" className="Project">
        <h2>My Projects</h2>
        <div className="name">
          {/* Portfolio */}
          <div className="portfolio">
            <h3>
              Portfolio site <IoIosContact className="icon" />
            </h3>
            <p>
              Portfolio showcases my skills as a web developer with a clean and
              professional design. It effectively reflects my development skills,
              personal branding, and readiness for IT roles.
            </p>
            <button className="view-btn">
              <Link to="/Projects/Portfolio" className="view-link">
                View Project
              </Link>
            </button>
          </div>

          {/* Samsung Store */}
          <div className="ecom">
            <h3>
              Samsung-store E-Commerce Web application{" "}
              <FaCartShopping className="icon" />
            </h3>
            <p>
              Built with React and Axios, featuring product listing and Context
              API for state management.
            </p>
            <button className="view-btn">
              <Link to="/Projects/Ecommerce" className="view-link">
                View Project
              </Link>
            </button>
          </div>

          {/* New Balance */}
          <div className="newbalance">
            <h3>
              New Balance Clone E-Commerce Application{" "}
              <FaCartShopping className="icon" />
            </h3>
            <p>
              Recreated the official New Balance site using React.js for the
              frontend and Firebase for backend storage & authentication.
              Includes cart system, global state management, search filters,
              and mobile responsiveness. Deployed on Netlify.
            </p>
            <button className="view-btn">
              <Link to="/Projects/Newbalance" className="view-link">
                View Project
              </Link>
            </button>
          </div>

          {/* Todo App */}
          <div className="todo">
            <h3>
              Todo-Task Application <LuListTodo className="icon" />
            </h3>
            <p>
              Responsive React app with add/delete/complete task features using
              Hooks.
            </p>
            <button className="view-btn">
              <Link to="/Projects/Todoapp" className="view-link">
                View Project
              </Link>
            </button>
          </div>

          {/* Chatbot */}
          <div className="chatbot">
            <h3>
              Walmart Chat-Assistant <TbMessageChatbot className="icon" />
            </h3>
            <p>
              Built a functional chatbot app with a clean UI that responds to
              user queries using predefined JSON responses.
            </p>
            <button className="view-btn">
              <Link to="/Projects/Chatbot" className="view-link">
                View Project
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* ---------- SKILLS ---------- */}
      <div className="skills">
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
            <li>Conditional Rendering - Dynamic UI based on logic</li>
            <li>Form Handling - Controlled components and validation.</li>
            <li>Lists and Keys - Rendering collections and maintaining identity.</li>
            <li>React Router - Navigation and routing between views/pages.</li>
            <li>Context API - Global state management.</li>
          </ul>
        </div>

        <div className="tools">
          <h2>🧰 Tools & Workflow</h2>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code with React & AI dev extensions</li>
            <li>NPM</li>
            <li>Chrome React DevTools</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
