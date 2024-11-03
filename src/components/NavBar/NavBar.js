import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useSound } from "../../context/SoundContext";
import "./NavBar.css";

function NavBar({ scrollToSection, refs }) {
  const [activeLink, setActiveLink] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Initially visible on page load
  const { isSoundOn, toggleSound, playNotification } = useSound();

  const handleNavLinkClick = (index, sectionRef) => {
    setActiveLink(index);
    playNotification();
    scrollToSection(sectionRef);
    setExpanded(false);
  };

  const handleMouseMove = (e) => {
    if (e.clientY < 115) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Show navbar for a few seconds on page load
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Adjust delay time in milliseconds (3000ms = 3 seconds)

    // Add mousemove event listener to control navbar visibility
    window.addEventListener("mousemove", handleMouseMove);

    // Clear timer and remove event listener on cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Navbar
      className={`navbar ${isVisible ? "visible" : "hidden"} ${
        expanded ? "dropdown-navbar" : ""
      }`}
      variant="dark"
      expand="lg"
      expanded={expanded}
    >
      <Navbar.Brand
        onClick={() => handleNavLinkClick(0, refs.homeRef)}
        className={activeLink === 0 ? "active" : ""}
      >
        BP
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(!expanded)}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav navbar-links">
          <Nav.Link
            onClick={() => handleNavLinkClick(1, refs.homeRef)}
            className={activeLink === 1 ? "active" : ""}
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => handleNavLinkClick(2, refs.aboutRef)}
            className={activeLink === 2 ? "active" : ""}
          >
            About Me
          </Nav.Link>
          <Nav.Link
            onClick={() => handleNavLinkClick(3, refs.projectsRef)}
            className={activeLink === 3 ? "active" : ""}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            onClick={() => handleNavLinkClick(4, refs.musicRef)}
            className={activeLink === 4 ? "active" : ""}
          >
            Music
          </Nav.Link>
          <Nav.Link
            onClick={() => handleNavLinkClick(5, refs.contactRef)}
            className={activeLink === 5 ? "active" : ""}
          >
            Contact
          </Nav.Link>
          <Nav.Link
            className={`nav-link navbar-sound-button ${
              isSoundOn ? "active" : ""
            }`}
            onClick={toggleSound}
          >
            {isSoundOn ? "Sound Off" : "Sound On"}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
