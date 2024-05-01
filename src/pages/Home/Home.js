import React from 'react';
import './Home.css';
import BenPhoto from '../../assets/IMG_0346 2.png';

function Home() {
    return (
        <div>
            <h1 className='home-title'>Ben Phillips</h1>
            <p className='home-subtitle'>Software Developer / Musician</p>
            <img className='BenPhoto' src={BenPhoto}></img>
            <p className='about-me'>Hello! My name is Ben. I am a software developer with a diverse background in music performance and composition, customer service, and sales in the bike industry. My unique blend of experiences has honed my communication, problem-solving, and creative thinking skills, making me adept at approaching software development with a holistic perspective.</p>
            <br></br>
            <p className='about-me'>My background in customer service and sales has greatly enhanced my ability to communicate effectively and solve problems. As I transitioned into software development, I specialized in front-end technologies like React and React Native, focusing on crafting engaging user experiences, implementing responsive designs, and ensuring accessibility standards.</p>
            <br></br>
            <p className='about-me'>I am passionate about merging my love for music with my expertise in technology. I am seeking opportunities that allow me to contribute my skills to innovative projects and collaborate with like-minded professionals. I invite you to connect with me to explore potential collaborations or discuss how my skills can benefit your team.</p>
        </div>
    );
}

export default Home;
