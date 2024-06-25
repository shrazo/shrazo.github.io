import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';
import api from './api';

const getMonthYear = (date) => {
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let d = new Date(date)
    return month[d.getMonth()] + " " +d.getFullYear()
}

const Experience = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const getData = async (ep) => {
        setIsLoading(true)
        api.get(ep)
            .then((res) => {
                if (res.status === 200) {
                    setData(res.data)
                    // console.log(res.data)
                }
                setIsLoading(false)
            }).catch(err => {
                console.log(err)
            })
        setIsLoading(false)
    }

    useEffect(() => {
        getData('experience')
    }, []);

    return (
        <Container fluid="md" className='section pt-5' id="experience">
            {isLoading && <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
            { data && <Row>
                <Col>
                    <Card border="secondary" style={{ border: '0' }}>
                        <Card.Body>
                            <Card.Title as="h5" className="section-title">Experience</Card.Title>
                            <div className="border mb-3"></div>
                            <Card.Text as="div">
                                <ListGroup variant="flush">
                                    {data.map(exp=><ListGroup.Item as="li" key={exp.id} className="d-flex justify-content-between" >
                                        <div className="ms-0 me-auto">
                                            <div className="fw-bold">
                                                {exp.post}, <a href={exp.company_url}><span className="text-uppercase">{exp.company}</span></a>
                                            </div>
                                            <div className="font-italic">
                                                <p>{getMonthYear(exp.start_date)} {exp.end_date && "-" + getMonthYear(exp.end_date)}</p>
                                            </div>
                                        </div>
                                    </ListGroup.Item>)}
                                </ListGroup>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>}
        </Container>
    )
}

export default Experience