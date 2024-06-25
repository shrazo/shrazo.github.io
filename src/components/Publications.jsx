import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import PublicationList from './PublicationList';
import Spinner from 'react-bootstrap/Spinner';
import api from './api';
import RenderHTML from './RenderHTML';

const getYear = (date) => {
  let d = new Date(date)
  return d.getFullYear()
}

const Publications = () => {
  const [key, setKey] = useState('all');
  const [data, setData] = useState([])
  const [years, setYears] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (ep) => {
    setIsLoading(true)
    api.get(ep)
      .then((res) => {
        if (res.status === 200) {
          setData(res.data)
          // console.log(res.data)
          let arr = res.data.map(pub => getYear(pub.date))
          arr = arr.filter(function (x, i, a) {
            return a.indexOf(x) == i;
          });
          // console.log(arr)
          arr.sort().reverse();
          setYears(arr); 
        }
        setIsLoading(false)
      }).catch(err => {
        console.log(err)
      })
    setIsLoading(false)
  }

  useEffect(() => {
    getData('publication')
  }, []);

  return (
    <Container fluid="md" className='section pt-5' id="publications">
      {isLoading && <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>}
      {data && <Row>
        <Col>
          <Card border="secondary" style={{ border: '0' }}>
            <Card.Body>
              <Card.Title as="h5" className="section-title">Publications</Card.Title>
              <div className="border mb-3"></div>
              <Col sm={12}>
                <Tabs
                  id="controlled-tab-example"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-3"
                >
                  <Tab eventKey="all" title="All">
                    <PublicationList data={data} />
                  </Tab>
                  {years.map((year) =>
                    <Tab eventKey={year} title={year} key={year}>
                      <PublicationList data={data.filter(p => getYear(p.date) === year)} />
                    </Tab>
                  )}
                </Tabs>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>}
    </Container>
  )
}

export default Publications