import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';
import api from './api'

const About = () => {
    const [about, setAbout] = useState({
        "id": 1,
        "title": "About Me",
        "description":"I am an Assistant Professor of Electrical and Electronic Engineering at the Chittagong University of Engineering and Technology(CUET), Bangladesh. Currently, I'm on leave to pursue my Ph. D. in Electrical and Computer Engineering at the National University of Singapore, Singapore. I completed my Masters from CUET and undergrad from Bangladesh University of Engineering and Technology(BUET), Dhaka, Bangladesh. My research is in realization of novel topological phenomena in classical electrical circuits. Base idea actually comes from Solid State Physics and I use typical electrical circuits to realize those novel charateristics. I'm primarily focused in processing quantum information using quantum gates and quantum operations which will be based on topological quantum computation.",
        "photo": "../assets/SHR.jpg",
        "created_at": "2024-06-23T17:12:09.055943Z",
        "updated_at": "2024-06-23T18:11:00.589124Z",
        "address": "CNNL, Dept. of ECE, NUS, Singapore"
    });
    const [links, setLinks] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getLinkContent = (link) => {
        switch (link.media) {
            case 'email':
                return <a href={`mailto:${link.link}`} key={link.id}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="cornflowerblue" className="mx-1" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                    </svg>
                </a>
            case 'google-scholar':
                return <a href={link.link} key={link.id}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="cornflowerblue" className="mx-1" viewBox="0 0 50 50">
                        <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 21 11 L 11 20 L 17.78125 20 C 17.80125 22.847 19.967531 25.730469 23.769531 25.730469 C 24.129531 25.730469 24.529688 25.690391 24.929688 25.650391 C 24.749688 26.100391 24.560547 26.470078 24.560547 27.080078 C 24.560547 28.230078 25.140391 28.920078 25.650391 29.580078 C 24.020391 29.690078 20.989766 29.879531 18.759766 31.269531 C 16.629766 32.559531 15.980469 34.43 15.980469 35.75 C 15.980469 38.47 18.500469 41 23.730469 41 C 29.930469 41 33.220703 37.510547 33.220703 34.060547 C 33.220703 31.530547 31.779453 30.279922 30.189453 28.919922 L 28.900391 27.890625 C 28.500391 27.570625 27.949219 27.120312 27.949219 26.320312 C 27.949219 25.510313 28.500703 24.989766 28.970703 24.509766 C 30.480703 23.309766 32 21.960234 32 19.240234 C 32 18.197234 31.756203 17.348391 31.408203 16.650391 L 35 13.570312 L 35 17.277344 C 34.405 17.623344 34 18.261 34 19 L 34 25 C 34 26.104 34.896 27 36 27 C 37.104 27 38 26.104 38 25 L 38 19 C 38 18.262 37.595 17.624344 37 17.277344 L 37 12 C 37 11.957 36.980609 11.920906 36.974609 11.878906 L 38 11 L 21 11 z M 24.269531 14.240234 C 27.269531 14.240234 28.820312 18.35 28.820312 21 C 28.820312 21.65 28.739922 22.819922 27.919922 23.669922 C 27.339922 24.259922 26.370938 24.699219 25.460938 24.699219 C 22.370938 24.699219 20.949219 20.620156 20.949219 18.160156 C 20.949219 17.210156 21.14 16.220938 21.75 15.460938 C 22.33 14.710938 23.339531 14.240234 24.269531 14.240234 z M 26.039062 30.609375 C 26.409063 30.609375 26.590859 30.610391 26.880859 30.650391 C 29.620859 32.630391 30.800781 33.620234 30.800781 35.490234 C 30.800781 37.760234 28.97 39.460938 25.5 39.460938 C 21.64 39.460938 19.160156 37.590469 19.160156 34.980469 C 19.160156 32.370469 21.459766 31.499219 22.259766 31.199219 C 23.769766 30.679219 25.719062 30.609375 26.039062 30.609375 z"></path>
                    </svg>
                </a>
            case 'linkedin':
                return <a href={link.link} key={link.id}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="cornflowerblue" className="mx-1 bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                </a>
            case 'github':
                return <a href={link.link} key={link.id}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="cornflowerblue" className="mx-1 bi bi-twitter-x" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                </a>
            case 'facebook':
                return <a href={link.link} key={link.id}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="cornflowerblue" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                </a>
        }
    }

    const getData = async () => {
        setIsLoading(true)
        // console.log('Data requested')
        api.get('about')
            .then((res) => {
                if (res.status === 200) {
                    // console.log(res.data[res.data.length - 1]);
                    setAbout(res.data[res.data.length - 1])
                }
                setIsLoading(false)
            }).catch(err => {
                console.log(err)
            })
        api.get('link')
            .then((res) => {
                if (res.status === 200) {
                    // console.log(res.data);
                    setLinks(res.data)
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
        <Container fluid="md" className='section mt-5 pt-5' id="about">
            {isLoading && <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
            {(about && !isLoading) && <Row>
                <Col xs={12} md={8}>
                    <Card border="secondary" style={{ border: '0' }}>
                        <Card.Body>
                            <Card.Title as="h5" className="section-title">{about.title}</Card.Title>
                            <div className="border mb-3"></div>
                            <Card.Text as="div">
                                <div style={{ wordWrap: 'break-word', display: 'block' }}>
                                    <div className="editor" dangerouslySetInnerHTML={{ __html: about.description }} />
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Stack gap={3}>
                        <Row>
                            <Col sm={12} className='d-flex justify-content-center my-3'>
                                <Image src={about.photo} fluid rounded style={{ maxHeight: "250px" }} />
                            </Col>
                            {links && <Col sm={12} className='d-flex justify-content-center mb-2'>
                                <div className="links" style={{ display: 'flex', alignItems: 'baseline' }}>
                                    {links.map((link) => getLinkContent(link))}
                                    {/* <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="cornflowerblue" className="mx-1" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                        </svg>
                                    </a>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="cornflowerblue" className="mx-1" viewBox="0 0 50 50">
                                            <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 21 11 L 11 20 L 17.78125 20 C 17.80125 22.847 19.967531 25.730469 23.769531 25.730469 C 24.129531 25.730469 24.529688 25.690391 24.929688 25.650391 C 24.749688 26.100391 24.560547 26.470078 24.560547 27.080078 C 24.560547 28.230078 25.140391 28.920078 25.650391 29.580078 C 24.020391 29.690078 20.989766 29.879531 18.759766 31.269531 C 16.629766 32.559531 15.980469 34.43 15.980469 35.75 C 15.980469 38.47 18.500469 41 23.730469 41 C 29.930469 41 33.220703 37.510547 33.220703 34.060547 C 33.220703 31.530547 31.779453 30.279922 30.189453 28.919922 L 28.900391 27.890625 C 28.500391 27.570625 27.949219 27.120312 27.949219 26.320312 C 27.949219 25.510313 28.500703 24.989766 28.970703 24.509766 C 30.480703 23.309766 32 21.960234 32 19.240234 C 32 18.197234 31.756203 17.348391 31.408203 16.650391 L 35 13.570312 L 35 17.277344 C 34.405 17.623344 34 18.261 34 19 L 34 25 C 34 26.104 34.896 27 36 27 C 37.104 27 38 26.104 38 25 L 38 19 C 38 18.262 37.595 17.624344 37 17.277344 L 37 12 C 37 11.957 36.980609 11.920906 36.974609 11.878906 L 38 11 L 21 11 z M 24.269531 14.240234 C 27.269531 14.240234 28.820312 18.35 28.820312 21 C 28.820312 21.65 28.739922 22.819922 27.919922 23.669922 C 27.339922 24.259922 26.370938 24.699219 25.460938 24.699219 C 22.370938 24.699219 20.949219 20.620156 20.949219 18.160156 C 20.949219 17.210156 21.14 16.220938 21.75 15.460938 C 22.33 14.710938 23.339531 14.240234 24.269531 14.240234 z M 26.039062 30.609375 C 26.409063 30.609375 26.590859 30.610391 26.880859 30.650391 C 29.620859 32.630391 30.800781 33.620234 30.800781 35.490234 C 30.800781 37.760234 28.97 39.460938 25.5 39.460938 C 21.64 39.460938 19.160156 37.590469 19.160156 34.980469 C 19.160156 32.370469 21.459766 31.499219 22.259766 31.199219 C 23.769766 30.679219 25.719062 30.609375 26.039062 30.609375 z"></path>
                                        </svg>
                                    </a>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="cornflowerblue" className="mx-1 bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                        </svg>
                                    </a>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="cornflowerblue" className="mx-1 bi bi-twitter-x" viewBox="0 0 16 16">
                                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                        </svg>
                                    </a> */}
                                </div>
                            </Col>}
                        </Row>
                    </Stack>
                </Col>
            </Row>}
        </Container>
    )
}

export default About