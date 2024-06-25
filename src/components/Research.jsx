import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import api from './api';
import RenderHTML from './RenderHTML';

const Research = () => {
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
    getData('research')
  }, []);

  return (
    <Container fluid="md" className='section pt-5' id="research">
      {isLoading && <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>}
      {data && <Row>
        <Col>
          <Card border="secondary" style={{ border: '0' }}>
            <Card.Body>
              <Card.Title as="h5" className="section-title">Research</Card.Title>
              <div className="border mb-3"></div>
              <Row>
                {data.map(research =>
                  <Col sm={4} key={research.id}>
                    <Card>
                      <Card.Img variant="top" className='d-flex justify-content-center' src={research.image} style={{}}/> 
                      <Card.Body>
                        <Card.Title className='d-flex justify-content-center'>{research.title}</Card.Title>
                        <Card.Text as="div">
                          <RenderHTML content={research.description.slice(0,200)} />
                        </Card.Text>
                        {/* <Button variant="primary" >Go somewhere</Button> */}
                      </Card.Body>
                    </Card>
                  </Col>
                )}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>}
    </Container>
  )
}

export default Research