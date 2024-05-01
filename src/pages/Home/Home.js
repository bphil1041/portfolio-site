import React from 'react';
import './Home.css';
import BenPhoto from '../../assets/IMG_0346 2.png';

function Home() {
    return (
        <div>
            <h1 className='home-title'>Ben Phillips</h1>
            <p className='home-subtitle'>Software Developer / Musician</p>
            <img className='BenPhoto' src={BenPhoto}></img>
            <p className='about-me'>Hello! My name is Ben. I'm a software developer and musician based in Chicago. In addition to music and coding, I enjoy biking, Muay Thai, cooking, and trying to keep my plants alive.</p>
            <br></br>
            <p className='about-me'>As a lifelong musician, I have always loved the process of learning the universal language of music and using what I learn to develop my own voice as a performer, improviser, and composer. Coding follows this same blueprint of studying and implementation of ones knowledge for the use and joy of both yourself and other people.</p>
            <br></br>
            <p>So welcome to my website! Please stay and have a look around.</p>
        </div>
    );
}

export default Home;
