import React from 'react';
import { Card, Col, Row, Modal, Button } from 'react-bootstrap';
import './Projects.css'; // Assuming you have a Projects.css file for styling

function Projects() {
    const [showModal, setShowModal] = React.useState(false);
    const [selectedProject, setSelectedProject] = React.useState(null);

    const projects = [
        { id: 1, name: 'Project 1', image: 'project1.jpg', description: 'Description of Project 1' },
        { id: 2, name: 'Project 2', image: 'project2.jpg', description: 'Description of Project 2' },
        { id: 3, name: 'Project 3', image: 'project3.jpg', description: 'Description of Project 3' },
        // Add more projects as needed
    ];

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    return (
        <>
            <Row xs={1} md={2} lg={3} className="g-4">
                {projects.map((project) => (
                    <Col key={project.id}>
                        <Card className="project-card" onClick={() => handleProjectClick(project)}>
                            <Card.Img variant="top" src={project.image} />
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProject?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={selectedProject?.image} alt={selectedProject?.name} className="modal-image" />
                    <p>{selectedProject?.description}</p>
                    {/* Add more details about the project */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                    {/* Add additional buttons or actions */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Projects;
