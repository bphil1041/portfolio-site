import React from 'react';
import './Home.css';
import BenPhoto from '../../assets/IMG_0346 2.png';

function Home() {
    return (
        <div>
            <h1 className='home-title'>Ben Phillips</h1>
            <p className='home-subtitle'>Web Developer / Musician</p>
            <img className='BenPhoto' src={BenPhoto}></img>
            <p className='about-me'>Hello! My name is Ben. I'm a web developer and musician based in Chicago. As a lifelong musician, I have always loved the process of learning the universal language of music and using what I learn to develop my own voice as a performer, improviser, and composer.</p>
        </div>
    );
}

export default Home;
