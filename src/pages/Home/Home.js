import React from 'react';
import './Home.css';
import BenPhoto from '../../assets/IMG_0346 2.png';

function Home() {
    return (
        <div>
            <h1 className='home-title'>Ben Phillips</h1>
            <p className='home-subtitle'>Full-Stack Web Developer / Musician</p>
            <img className='BenPhoto' src={BenPhoto}></img>
            <p className='about-me'>Hello! My name is Ben, a Full-Stack Web Developer with a diverse background in music performance and composition, customer service, and sales in the bike industry. These experiences have honed my communication, problem-solving, and creative thinking skills, enabling a holistic approach to software development. Specializing in front-end technologies like React and React Native, I focus on crafting engaging user experiences, responsive designs, and ensuring accessibility standards. I am passionate about merging my love for music with my expertise in technology and seek opportunities to contribute to innovative projects and collaborate with like-minded professionals. Let's connect to explore potential collaborations or discuss how my skills can benefit your team.</p>

        </div>
    );
}

export default Home;
