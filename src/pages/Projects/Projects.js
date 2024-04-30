import React from 'react';
import { Card, Col, Row, Modal, Button } from 'react-bootstrap';
import DOMPurify from 'dompurify';
import './Projects.css';
import project1Image from '../../assets/Screenshot 2024-03-05 at 11.46.28 PM 2.png';
import project2Image from '../../assets/myFlixScreenshot.png';
import project4Image from '../../assets/Meet App.png';

function Projects() {
    const [showModal, setShowModal] = React.useState(false);
    const [selectedProject, setSelectedProject] = React.useState(null);

    const projects = [
        { id: 1, name: 'JavaScript Game', image: project1Image, description: 'In this JavaScript game you play as a baby dragon flying through the air and shooting down your enemies. This project started from a tutorial on FreeCodeCamp, but I branched off and made this project my own. This game is a work in progress, and you can test it out <a href="https://bphil1041.github.io/Javascript-game/" target="_blank" rel="noreferrer">on my GitHub</a>. For the best experience, please play the game on a computer in fullscreen.' },
        { id: 2, name: 'myFlix (front end)', image: project2Image, description: 'The front end of a full-stack movie app called where you can learn about my favorite movies. Features include; sign up, login, logout, edit user info, delete account, filter movies by genre / director, and read individual movie info. <a href="https://myflix-bp.netlify.app/login" target="_blank" rel="noreferrer">  Click here </a> to check it out. ' },
        { id: 3, name: 'myFlix (back end)', image: 'project3.jpg', description: 'Description of Project 3' },
        { id: 4, name: 'Meet App', image: project4Image, description: 'A serverless, progressive React Web App (PWA) using TDD technique. View the app <a href="https://bphil1041.github.io/meet-app/" target="_blank" rel="noreferrer"> here</a>' },
        // Add more projects as needed
    ];

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    return (
        <>
            <h1>Projects</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {projects.map((project) => (
                    <Col key={project.id}>
                        <Card className="project-card" onClick={() => handleProjectClick(project)}>
                            <Card.Img variant="top" src={project.image} />
                            <Card.Body>
                                <Card.Title className='card-title'>{project.name}</Card.Title>
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
                    {/* Add more details about the project */}
                </Modal.Body>
                <Modal.Footer>
                    <Button className='modalButton' variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                    {/* Add additional buttons or actions */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Projects;
