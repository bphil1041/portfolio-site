import React from 'react';
import './Home.css';
import BenPhoto from '../../assets/IMG_0346 2.png';

function Home() {
    return (
        <div>
            <h1 className='home-title'>Ben Phillips</h1>
            <p className='home-subtitle'>Full-Stack Web Developer / Musician</p>
            <img className='BenPhoto' src={BenPhoto}></img>
            <p className='hey'>Hello and welcome to my humble abode! I love to use my creative and problem solving skills to help people, whether that be with the keyboard or the trumpet. Please feel free to have a look around.</p>
        </div>
    );
}

export default Home;
