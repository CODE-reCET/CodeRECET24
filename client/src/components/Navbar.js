import React, { useState, useEffect } from "react";
import "./navbar.css"; // Import your CSS file
import { Link } from "react-router-dom";

const Navbare = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 950); // Adjust the breakpoint as needed
    };

    handleResize(); // Check initial view
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const toggleNavLinks = (event) => {
    event.preventDefault(); // Prevent immediate navigation
    setShowNavLinks(!showNavLinks);
  };

  return (
    <nav className="navbar">
      <div className="brand-title">EarthBin</div>
      <a href="/" className="toggle-button" onClick={toggleNavLinks}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={`navbar-links ${showNavLinks ? "active" : ""}`}>
        <ul style={{ gap: isMobileView ? "50px" : "60px" }}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/events">Community</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbare;
