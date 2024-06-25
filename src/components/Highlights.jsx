import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';
import api from './api'

const Highlights = () => {
    const [highlights, setHighlights] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
        setIsLoading(true)
        api.get('highlight')
            .then((res) => {
                if (res.status === 200) {
                    setHighlights(res.data)
                    // console.log(res.data)
                }
                setIsLoading(false)
            }).catch(err => {
                console.log(err)
            })
        setIsLoading(false)
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <Container fluid="md" className='section pt-5' id="highlights">
            {isLoading && <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
            {highlights && <Row>
                <Col>
                    <Card border="secondary" style={{ border: '0' }}>
                        <Card.Body>
                            <Card.Title as="h5" className="section-title">Recent Highlights</Card.Title>
                            <div className="border mb-3"></div>
                            <Card.Text as="div">
                                <ListGroup variant="flush">
                                    {highlights.slice(0, 10).map(highlight =>
                                        <ListGroup.Item key={highlight.id} className='d-flex'>
                                            <div className="date fw-bold me-2">
                                                {highlight.date}:
                                            </div>
                                            <div style={{ wordWrap: 'break-word', display: 'block' }}>                                                
                                                <div className="ql-editor" dangerouslySetInnerHTML={{ __html: highlight.description }} />
                                            </div>
                                        </ListGroup.Item>
                                    )}
                                </ListGroup>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>}
        </Container>
    )
}

export default Highlights