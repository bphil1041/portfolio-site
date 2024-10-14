import React, { useEffect } from 'react';
import { Card, Col, Row, Modal, Button } from 'react-bootstrap';
import DOMPurify from 'dompurify';
import './Projects.css';
import project1Image from '../../assets/Screenshot 2024-03-05 at 11.46.28 PM 2.png';
import project2Image from '../../assets/myFlixScreenshot.png';
import project3Image from '../../assets/movie_api_doc.png';
import project4Image from '../../assets/Meet App.png';
import project5Image from '../../assets/Gengar.png';
import project6Image from '../../assets/chat-app.png';
import project7Image from '../../assets/myflix-angular-screenshot.png';
import project8Image from '../../assets/recipease-image.png';


function Projects() {
    const [showModal, setShowModal] = React.useState(false);
    const [selectedProject, setSelectedProject] = React.useState(null);

    const projects = [

        { id: 7, name: 'myFlix Angular (front end)', image: project7Image, description: 'The front end of a full-stack movie app called myFlix, build using Angular, where you can learn about my favorite movies. Features include; sign up, login, logout, edit user info, delete account, filter movies by genre / director, and read individual movie info. <a href="https://github.com/bphil1041/myFlix-Angular-client" target="_blank" rel="noreferrer">  Click here </a> to check it out. <br> <br> Technologies used: Angular, TypeScript, HTML, CSS, SCSS ' },
        { id: 2, name: 'myFlix React (front end)', image: project2Image, description: 'The front end of a full-stack movie app called myFlix, built using React, where you can learn about my favorite movies. Features include; sign up, login, logout, edit user info, delete account, filter movies by genre / director, and read individual movie info. <a href="https://github.com/bphil1041/myFlix-client" target="_blank" rel="noreferrer">  Click here </a> to check it out. <br> <br> Technologies used: React, Bootstrap, Parcel. ' },
        { id: 3, name: 'myFlix (back end)', image: project3Image, description: 'This is the server-side for the myFlix app which provides users with information about movies, directors, and genres. Users can register, update their profiles, and create a list of favorite movies. <br> <br> Technologies used: Node.js, Express, REST API, MongoDB, JWT Authentication, Data Validation, and Heroku. <br> <br> View the code <a href="https://github.com/bphil1041/Movie-Api" target="_blank" rel="noreferrer"> on my GitHub </a>' },
        { id: 8, name: 'RecipEase', image: project8Image, description: 'A Django App for viewing and creating recipes.' },
        { id: 4, name: 'Meet App', image: project4Image, description: 'A serverless, progressive React Web App (PWA) using TDD technique. This app fetches and displays events fetched from a Google Calendar. <br> <br> Technologies used: React, Google Calendar API, AWS Lambda, Jest (Unit and Integration Testing), Jest Cucumber (User Acceptance Testing), Puppeteer, Atatus (Performance Monitoring). <br> <br> View the code <a href="https://github.com/bphil1041/meet-app" target="_blank" rel="noreferrer"> on my GitHub.</a>' },
        { id: 5, name: 'Pokedex', image: project5Image, description: 'A simple Pokédex application that displays basic Pokémon information that is fetched from an API.<br> <br> Technologies used: <br> Javascript, HTML, and CSS. <br> <br> View the code <a href="https://github.com/bphil1041/Pokedex" target="_blank" rel="noreferrer"> on my GitHub.</a>' },
        { id: 6, name: 'Chat App', image: project6Image, description: 'A React Native Chat app that is designed to facilitate communcation between users. Users can share text messages, images, and their current location. <br> <br> View the code <a href="https://github.com/bphil1041/chat-demo" target="_blank" rel="noreferrer">on my GitHub</a>' },
        { id: 1, name: 'JavaScript Game', image: project1Image, description: 'In this JavaScript game you play as a baby dragon flying through the air and shooting down your enemies. This project started from a tutorial on FreeCodeCamp, but I branched off and made this project my own. This game is a work in progress, and you can test it out <a href="https://github.com/bphil1041/Javascript-game" target="_blank" rel="noreferrer" >on my GitHub</a>. For the best experience, please play the game on a computer in fullscreen. <br> <br> Technologies used: JavaScript, HTML, CSS.' },

        // Add more projects as needed
    ];

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    useEffect(() => {
        if (showModal) {
            const links = document.querySelectorAll('.modalBody a');
            links.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(link.href, '_blank', 'noopener,noreferrer');
                });
            });
        }
    }, [showModal]);

    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <p className='info-p'>Click each card to learn more!</p>
            <Row xs={1} md={2} lg={3} className="g-4">
                {projects.map((project) => (
                    <Col key={project.id}>
                        <Card className="project-card" onClick={() => handleProjectClick(project)}>
                            <Card.Body>
                                <Card.Title className='card-title'>{project.name}</Card.Title>
                                <Card.Img variant="top" src={project.image} />
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header>
                    <Modal.Title className='modalTitle'>{selectedProject?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalBody'>
                    <img src={selectedProject?.image} alt={selectedProject?.name} className="modal-image" />
                    <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selectedProject?.description) }}></p>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='modalButton' variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Projects;
