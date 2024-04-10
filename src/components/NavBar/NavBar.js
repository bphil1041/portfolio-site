import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';

import './NavBar.css'

function NavBar() {
    return (

        <Navbar bg="transparent" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/home">Ben Phillips - Web Dev / Music</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-right"> {/* Use navbar-right class to push Nav items to the right */}
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/music">Music</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
