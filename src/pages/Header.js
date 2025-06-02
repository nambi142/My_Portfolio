import "../Css/Home.css";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h2>MUTHU NAMBI A</h2>

        {/* Hamburger icon only for mobile */}
        <div
          className="hamburger"
          ref={hamburgerRef}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Normal nav links for desktop */}
        <nav className={`menu ${menuOpen ? "open" : ""}`} ref={menuRef}>
          <ul className="list">
            <li>
              <a href="#Project" onClick={(e) => handleNavClick(e, "Project")}>
                Projects
              </a>
            </li>
            <li>
              <a href="#About-Me" onClick={(e) => handleNavClick(e, "About-Me")}>
                About
              </a>
            </li>
            <li>
              <a href="#Contact" onClick={(e) => handleNavClick(e, "Contact")}>
                Contact
              </a>
            </li>
            <li>
              <a href="/resume.pdf" download="Muthu_Nambi_Resume.pdf">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
