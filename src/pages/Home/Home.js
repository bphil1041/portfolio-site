import React from 'react';
import './Home.css';
import BenPhoto from '../../assets/IMG_0346 2.png';

function Home({ scrollToSection, aboutRef }) {
    return (
        <div className='fade-in'>
            <h1 className='home-title'>Ben Phillips</h1>
            <p className='home-subtitle'>Full-Stack Web Developer / Musician</p>
            <img className='BenPhoto' alt='Ben Phillips playing the trumpet with blue and purple lighting.' src={BenPhoto}></img>
            {/* Animated arrow with click functionality */}
            <div className="scroll-down" onClick={() => scrollToSection(aboutRef)}>
                &#x2193; {/* Down arrow */}
            </div>
        </div>
    );
}

export default Home;
