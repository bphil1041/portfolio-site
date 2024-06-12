import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';

function NavBar({ scrollToSection, refs }) {
    const [activeLink, setActiveLink] = useState(null);
    const [expanded, setExpanded] = useState(false);

    const handleNavLinkClick = (index, sectionRef) => {
        setActiveLink(index);
        scrollToSection(sectionRef);
        setExpanded(false);  // Close the navbar
    };

    return (
        <Navbar className='navbar' bg="black" variant="dark" expand="lg" expanded={expanded}>
            <Navbar.Brand onClick={() => handleNavLinkClick(0, refs.homeRef)} className={activeLink === 0 ? 'active' : ''}>BP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-right">
                    <Nav.Link onClick={() => handleNavLinkClick(1, refs.homeRef)} className={activeLink === 1 ? 'active' : ''}>Home</Nav.Link>
                    <Nav.Link onClick={() => handleNavLinkClick(2, refs.aboutRef)} className={activeLink === 2 ? 'active' : ''}>About Me</Nav.Link>
                    <Nav.Link onClick={() => handleNavLinkClick(3, refs.projectsRef)} className={activeLink === 3 ? 'active' : ''}>Projects</Nav.Link>
                    <Nav.Link onClick={() => handleNavLinkClick(4, refs.musicRef)} className={activeLink === 4 ? 'active' : ''}>Music</Nav.Link>
                    <Nav.Link onClick={() => handleNavLinkClick(5, refs.contactRef)} className={activeLink === 5 ? 'active' : ''}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
