import React from "react";
import { SiGmail } from "react-icons/si";
import {
  FaSquareWhatsapp,
  FaGithub,
  FaLinkedin,
  FaSquareInstagram,
} from "react-icons/fa6";
import "../Css/Home.css";

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Muthu Nambi. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://www.instagram.com/nambi_707/">
              <FaSquareInstagram />
            </a>
            <a href="mailto:muthu142001@gmail.com">
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

export default Footer;
