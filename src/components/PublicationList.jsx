import React, { useState } from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

const PublicationList = ({ data }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Modal show={show} onHide={handleClose} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    bibtex format
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" sm onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" sm onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <ListGroup as="ol" numbered>
                {data.map(publication =>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        key={publication.id}
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold paper-title">
                                {publication.title} {publication.doi && <a href={publication.doi} className='text-decoration-none'> <Badge bg="secondary" pill>
                                    DOI </Badge> </a> } {' '} {publication.pdf_link && <a href={publication.pdf_link} className='text-decoration-none'> <Badge bg="success">PDF</Badge></a>} {' '} 
                                    {publication.cite && <Badge bg="dark" onClick={handleShow} >Cite</Badge>}
                            </div>
                            <div className="paper-authors">{publication.author}</div>
                            <div className="paper-details font-italic">
                                {publication.volume}({publication.issue}), {publication.pages}, {publication.date}
                            </div>
                            <div className="paper-journal text-uppercase">
                                {publication.journal_name}
                            </div>
                        </div>
                    </ListGroup.Item>
                )}
            </ListGroup>
        </div>
    )
}

export default PublicationList