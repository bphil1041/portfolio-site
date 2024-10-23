import React, { useRef } from 'react';
import './About.css';
import { FaReact, FaHtml5, FaCss3Alt, FaAngular, FaBootstrap, FaNodeJs, FaGithub, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BsFiletypeScss } from "react-icons/bs";
import { DiMongodb, DiDjango } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import openSound from '../../assets/space_ui_edit.wav'; // Import the sound

const pdfFile = require('../../assets/Phillips-Benjamin-resume.pdf');

function About() {
    const audioRef = useRef(null); // Reference for the audio element

    const playOpenSound = () => {
        if (audioRef.current) {
            audioRef.current.play(); // Play the sound when the resume link is clicked
        }
    };

    return (
        <div className='about-section'>
            <h1 className='about-title'>About Me</h1>
            <p className='about-content'>
                With a background in music performance and composition, I find coding similar to composing music. 
                Just as a composer crafts melodies, I build software, ensuring each line of code contributes to a functional whole. 
                My music experience hones my creative problem-solving skills. Whether orchestrating an application or composing music, 
                I approach both with passion and dedication. My goal is to merge my love for music with my tech expertise, creating elegant 
                and effective solutions for users and clients.
            </p>
            <p className='about-content'>
                I am also passionate about video games, which inspire my approach to coding. The intricate worlds and engaging mechanics 
                of games fuel my creativity and drive to build user-friendly applications. Whether playing or coding, I bring the same enthusiasm 
                and attention to detail, always striving to create innovative solutions that captivate and delight users.
            </p>
            <p className='about-content'>
                In addition to coding and music, I also enjoy Muay Thai, biking, cooking, tending to my houseplants, and spending time with my friends and family.
            </p>

            {/* Trigger sound when resume link is clicked */}
            <a href={pdfFile} download='Phillips-Benjamin-resume.pdf' className='download-link' onClick={playOpenSound}>
                Download my resume!
            </a>
            
            <br></br>
            <p className='skills'>Skills</p>
            <div className='skills-icons'>
                <FaReact className='icon' /><IoLogoJavascript className='icon' />
                <FaHtml5 className='icon' /><FaCss3Alt className='icon' /><BsFiletypeScss className='icon' />
                <FaAngular className='icon' /><FaBootstrap className='icon' /><FaNodeJs className='icon' /><FaGithub className='icon' />
                <DiMongodb className='icon' /><SiTypescript className='icon' /><FaPython className='icon' /><DiDjango className='icon' />
            </div>

            {/* Hidden audio element for the sound effect */}
            <audio ref={audioRef}>
                <source src={openSound} type="audio/wav" />
            </audio>
        </div>
    );
}

export default About;
