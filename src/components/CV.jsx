import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import PublicationList from './PublicationList';

const CV = () => {
    const [key, setKey] = useState('all');

    return (
        <Container fluid="md" className='section pt-5' id="cv">
            <Row>
                <Col>
                    <Card border="secondary" style={{ border: '0' }}>
                        <Card.Body>
                            <Card.Title as="h5" className="section-title">Curriculum Vitae</Card.Title>
                            <div className="border mb-3"></div>
                            <Card.Text>
                                Download my CV here.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default CV