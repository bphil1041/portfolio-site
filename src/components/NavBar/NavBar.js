import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './NavBar.css'

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/">Ben Phillips</Navbar.Brand> {/* Use Link to navigate to home */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Use Link to navigate to home */}
                    <Nav.Link as={Link} to="/about">About</Nav.Link> {/* Use Link to navigate to about */}
                    <Nav.Link as={Link} to="/projects">Projects</Nav.Link> {/* Use Link to navigate to projects */}
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link> {/* Use Link to navigate to contact */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
