import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="home-container">

      {/* Top Bar */}
      <div className="top-bar">

        {/* Hamburger Menu */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <h2 className="logo">Resume Builder</h2>

      </div>

      {/* Side Menu */}
      {menuOpen && (
        <div className="side-menu">

          <Link to="/register" className="menu-link">
            Register
          </Link>

          <Link to="/login" className="menu-link">
            Login
          </Link>

        </div>
      )}

      {/* Main Content */}
      <div className="hero-section">

        <h1 className="hero-title">
          Build Your <span>Professional Resume</span>
        </h1>

        <p className="hero-subtitle">
          Create modern resumes in minutes 🚀
        </p>

      </div>

    </div>
  );
}

export default Home;