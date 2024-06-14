import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";




import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact</h1>
            <br />
            <h2>email</h2>
            <p><a className='email' href="mailto:benjamin.r.phillips1041@gmail.com">benjamin.r.phillips1041@gmail.com</a></p>
            <br />
            <br />
            <h2>socials</h2>
            <div className="socials-container">
                <a href="https://www.linkedin.com/in/ben-phillips-b6532027a/" target="_blank" rel="noreferrer">
                    <CiLinkedin className="social-logo" />
                </a>
                <a href="https://github.com/bphil1041" target="_blank" rel="noreferrer">
                    <FaGithub className="social-logo" />
                </a>
            </div>
        </div>
    );
}

export default Contact;
