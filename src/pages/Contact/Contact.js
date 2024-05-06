import React from 'react';
import { ReactComponent as LinkedinLogo } from '../../assets/LI-Bug.svg.original.svg';
import { ReactComponent as GitHubLogo } from '../../assets/github-mark-white.svg';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact</h1>
            <br></br>
            <h2>Send business inquiries to:</h2>
            <p><a href="mailto:benjamin.r.phillips1041@gmail.com">benjamin.r.phillips1041@gmail.com</a></p>
            <br></br>
            <br></br>
            <h2>Socials:</h2>

            <p>
                <a href="https://www.linkedin.com/in/ben-phillips-b6532027a/" target="_blank" rel="noreferrer">
                    <LinkedinLogo />
                </a>
            </p>
            <p>
                <a href="https://github.com/bphil1041" target="_blank" rel="noreferrer">
                    <GitHubLogo />
                </a>
            </p>

        </div>
    );
}

export default Contact;
