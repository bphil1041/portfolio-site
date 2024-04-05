import React from 'react';
import './Home.css';
import BenPhoto from '../../assets/IMG_0346 2.png';

function Home() {
    return (
        <div>
            <h1 className='home-title'>Ben Phillips</h1>
            <p className='home-subtitle'>Web Developer / Musician</p>
            <img className='BenPhoto' src={BenPhoto}></img>
            <p>Hello! My name is Ben. I'm a web developer and musician based in Chicago.</p>
            <br></br>
            <p>I view software development the same way I view music composition; as a ________ </p>
        </div>
    );
}

export default Home;
