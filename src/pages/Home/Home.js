import React from 'react';
import './Home.css';
import BenPhoto from '../../assets/60635.png';

function Home() {
    return (
        <div>
            <h1 className='home-title'>Ben Phillips</h1>
            <p className='home-subtitle'>Web Developer / Musician</p>
            <img className='BenPhoto' src={BenPhoto}></img>
            <p>Hello! My name is Ben. I'm a web developer and musician based in Chicago. </p>
        </div>
    );
}

export default Home;
