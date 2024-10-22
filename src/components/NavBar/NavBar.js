import React, { useState, useRef } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';
import NotificationSound from '../../assets/13_ui_space_notification2.wav'; // Import the sound file
import AbandonedShip from '../../assets/3. AbandonedShip.wav'; // Music file to loop

function NavBar({ scrollToSection, refs }) {
    const [activeLink, setActiveLink] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const notificationAudioRef = useRef(null); // Reference for notification sound
    const musicAudioRef = useRef(null); // Reference for background music
    const [isSoundOn, setIsSoundOn] = useState(false); // Initialize sound as off

    const playNotificationAudio = () => {
        if (isSoundOn) {
            const audio = notificationAudioRef.current;
            if (audio) {
                audio.currentTime = 0; // Reset the audio to the start
                audio.play(); // Play the audio
            }
        }
    };

    const handleNavLinkClick = (index, sectionRef) => {
        setActiveLink(index);
        playNotificationAudio(); // Play sound when a nav link is clicked
        scrollToSection(sectionRef);
        setExpanded(false); // Close the navbar
    };

    const toggleSound = () => {
        setIsSoundOn(!isSoundOn); // Toggle sound on/off
        const audio = musicAudioRef.current;
        if (audio) {
            if (isSoundOn) {
                audio.pause(); // Pause the music
            } else {
                audio.play(); // Play the music
            }
        }
    };

    return (
        <>
            <audio ref={notificationAudioRef}>
                <source src={NotificationSound} type="audio/wav" />
                Your browser does not support the audio element.
            </audio>
            <audio ref={musicAudioRef} loop>
                <source src={AbandonedShip} type="audio/wav" />
                Your browser does not support the audio element.
            </audio>

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
                    {/* Sound On/Off buttons */}
                    <div className="navbar-sound-controls">
                        <button 
                            className={`navbar-sound-button ${isSoundOn ? 'active' : ''}`} 
                            onClick={toggleSound}>
                            Sound On
                        </button>
                        <button 
                            className={`navbar-sound-button ${!isSoundOn ? 'active' : ''}`} 
                            onClick={toggleSound}>
                            Sound Off
                        </button>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavBar;
