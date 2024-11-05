import openSound from "../../assets/space_ui_edit.wav"; // Import the sound
import React, { useRef } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { useSound } from "../../context/SoundContext"; // Import the sound context
import "./Contact.css";

function Contact() {
  const audioRef = useRef(null); // Reference for the audio element
  const { isSoundOn } = useSound(); // Access sound control from context

  const playOpenSound = () => {
    if (isSoundOn && audioRef.current) {
      // Check if sound is on
      audioRef.current.play(); // Play sound only if sound is enabled
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <br />
      <h2>email</h2>
      <p>
        {/* Trigger sound when email link is clicked */}
        <a
          className="email"
          href="mailto:bphillipsdev1041@gmail.com"
          onClick={playOpenSound}
        >
          bphillipsdev1041@gmail.com
        </a>
      </p>
      <br />
      <br />
      <h2>socials</h2>
      <div className="socials-container">
        {/* Trigger sound when LinkedIn link is clicked */}
        <a
          href="https://www.linkedin.com/in/ben-phillips-b6532027a/"
          target="_blank"
          rel="noreferrer"
          onClick={playOpenSound}
        >
          <CiLinkedin className="social-logo" />
        </a>
        {/* Trigger sound when GitHub link is clicked */}
        <a
          href="https://github.com/bphil1041"
          target="_blank"
          rel="noreferrer"
          onClick={playOpenSound}
        >
          <FaGithub className="social-logo" />
        </a>
      </div>

      {/* Hidden audio element for the sound effect */}
      <audio ref={audioRef}>
        <source src={openSound} type="audio/wav" />
      </audio>
    </div>
  );
}

export default Contact;
