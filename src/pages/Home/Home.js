import React from 'react';
import './Home.css';
import BenPhoto from '../../assets/IMG_0346 2.png';

// Import the sound file
import dankNoise from '../../assets/dank_noise.wav'; 

function Home({ scrollToSection, aboutRef }) {
    const playSound = () => {
        const sound = document.getElementById('dank-noise');
        sound.currentTime = 0; // Reset the sound to the beginning
        sound.play();
        scrollToSection(aboutRef); // Trigger scroll after playing sound
    };

    return (
        <div className='fade-in'>
            <h1 className='home-title'>Ben Phillips</h1>
            <p className='home-subtitle'>Full-Stack Web Developer / Musician</p>
            <img className='BenPhoto' alt='Ben Phillips playing the trumpet with blue and purple lighting.' src={BenPhoto}></img>

            {/* Trigger scroll on click */}
            <div className="scroll-down" onClick={playSound}>
                &#x2193; {/* Down arrow */}
            </div>

            {/* Sound Element */}
            <audio id="dank-noise" src={dankNoise} />
        </div>
    );
}

export default Home;
