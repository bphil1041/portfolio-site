import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import './NavBar.css';

function NavBar() {
    const [activeLink, setActiveLink] = useState(null);

    const handleNavLinkClick = (index) => {
        setActiveLink(index);
    };


    return (
        <Navbar className='navbar' bg="black" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/home" onClick={() => handleNavLinkClick(0)} className={activeLink === 0 ? 'active' : ''}>BP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-right">
                    <Nav.Link as={Link} to="/home" onClick={() => handleNavLinkClick(1)} className={activeLink === 1 ? 'active' : ''}>Home</Nav.Link>
                    <Nav.Link as={Link} to="/projects" onClick={() => handleNavLinkClick(2)} className={activeLink === 2 ? 'active' : ''}>Projects</Nav.Link>
                    <Nav.Link as={Link} to="/music" onClick={() => handleNavLinkClick(3)} className={activeLink === 3 ? 'active' : ''}>Music</Nav.Link>
                    <Nav.Link as={Link} to="/contact" onClick={() => handleNavLinkClick(4)} className={activeLink === 4 ? 'active' : ''}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
