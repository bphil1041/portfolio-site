import React from "react";
import "./Home.css";
import BenPhoto from "../../assets/IMG_0346 2.png";
import { useSound } from "../../context/SoundContext";

function Home({ scrollToSection, aboutRef }) {
  const { playDankNoise } = useSound();

  const playSoundAndScroll = () => {
    playDankNoise();
    scrollToSection(aboutRef);
  };

  return (
    <div className="fade-in">
      <h1 className="home-title">Ben Phillips</h1>
      <p className="home-subtitle">Full-Stack Web Developer / Musician</p>
      <p className="home-location">Chicago, IL</p>
      <img
        className="BenPhoto"
        alt="Ben Phillips playing the trumpet with blue and purple lighting."
        src={BenPhoto}
      />

      {/* Trigger scroll on click */}
      <div className="scroll-down" onClick={playSoundAndScroll}>
        &#x2193; {/* Down arrow */}
      </div>
    </div>
  );
}

export default Home;
