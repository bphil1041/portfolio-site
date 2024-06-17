import React from 'react';
import './About.css';
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { DiMongodb } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";


const pdfFile = require('../../assets/Phillips-Benjamin-resume.pdf');


function About() {
    return (
        <div className='about-section'>
            <h1 className='about-title'>About Me</h1>
            <p className='about-content'>With a background in music performance and composition, I find coding similar to composing music. Just as a composer crafts melodies, I build software, ensuring each line of code contributes to a functional whole. My music experience hones my creative problem-solving skills. Whether orchestrating an application or composing music, I approach both with passion and dedication. My goal is to merge my love for music with my tech expertise, creating elegant and effective solutions for users and clients.</p>
            <p className='about-content'>I am also passionate about video games, which inspire my approach to coding. The intricate worlds and engaging mechanics of games fuel my creativity and drive to build user-friendly applications. Whether playing or coding, I bring the same enthusiasm and attention to detail, always striving to create innovative solutions that captivate and delight users.</p>
            <p className='about-content'>In addition to coding and music, I also enjoy Muay Thai, biking, cooking, tending to my houseplants, and spending time with my friends and family.</p>
            <a href={pdfFile} download='Phillips-Benjamin-resume.pdf' className='download-link'>Download my resume!</a>
            <br></br>
            <p className='skills'>Skills</p>
            <div className='skills-icons'>
                <FaReact className='icon' /><IoLogoJavascript className='icon' />
                <FaHtml5 className='icon' /><FaCss3Alt className='icon' /><BsFiletypeScss className='icon' />
                <FaAngular className='icon' /><FaBootstrap className='icon' /><FaNodeJs className='icon' /><FaGithub className='icon' /><DiMongodb className='icon' />
                <SiTypescript className='icon' />
            </div>







        </div>


    );
}

export default About;
