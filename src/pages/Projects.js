import React from 'react';
import { LuListTodo } from "react-icons/lu";
import { IoIosContact } from "react-icons/io";
import { TbMessageChatbot } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import '../Css/Home.css';

const Projects = () => {
  return (
    <div className='container'>
      <div id="Project" className="Project">
        <h2>My Projects</h2>
        <div className="name">

          <div className="portfolio">
            <h3>
              Portfolio site <IoIosContact className="icon" />
            </h3>
            <p>
              Portfolio showcases my skills as a web developer with a clean and
              professional design. It effectively reflects my development skills,
              personal branding, and readiness for IT roles. Great work on
              keeping it personalized yet polished!
            </p>
            <button className='view-btn'><Link to="/Projects/Portfolio" className='view-link'>View Project</Link></button>
          </div>

          <div className="ecom">
            <h3>
              Samsung-store E-Commerce Web application <FaCartShopping className="icon" />
            </h3>
            <p>
              Built with React and Axios, featuring product listing and Context
              API for state management.
            </p>
            <button className='view-btn' ><Link to="/Projects/Ecommerce" className='view-link' >View Project</Link></button>
          </div>

          <div className="todo">
            <h3>
              Todo-Task Application <LuListTodo className="icon" />
            </h3>
            <p>
              Responsive React app with add/delete/complete task features using
              Hooks.
            </p>
            <button className='view-btn'><Link to="/Projects/Todoapp" className='view-link'>View Project</Link></button>
          </div>

          <div className="chatbot">
            <h3>
              Walmart Chat-Assistant <TbMessageChatbot className="icon" />
            </h3>
            <p>
              Built a functional chatbot app with a clean UI that responds to
              user queries using predefined JSON responses.
            </p>
            <button className='view-btn'><Link to="/Projects/Chatbot" className='view-link'>View Project</Link></button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
