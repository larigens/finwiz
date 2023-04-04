import React from 'react';
import { Container, Form, Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faBell } from '@fortawesome/free-solid-svg-icons';
import imgPlaceholder from '../assets/placeholder.png';

function Home() {
    return (
        // Fluid prop to the outer Container component to allow it to take up the full width of the screen.
        <Container fluid>
            <Row className='h-100 overflow-auto'>
                {/* Replaced the left-container and right-container elements with Col components and added the appropriate sm and xs props to make them responsive. */}
                <Col xs={12} sm={6} className="left-container p-1 ms-2">
                    <img className="mt-5 pt-3" src={imgPlaceholder} alt='bag of money' width="320px" />
                    {/* <Link to='/login'><button>LOGIN</button></Link> */}
                </Col>
                <Col xs={12} sm={6} className="right-container me-1">
                    <Row className="top-container">
                        <Container className="d-flex align-items-center mb-3">
                            <Col sm={8}>
                                <Form.Control type='text' placeholder="search" className='search-bar' />
                            </Col>
                            <Col sm={4} className="d-flex justify-content-end">
                                <Container className="icon">
                                    <FontAwesomeIcon icon={faEllipsis} className='ms-1 main-brand'></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faBell} className='ms-1 main-brand'></FontAwesomeIcon>
                                </Container>
                            </Col>
                        </Container>
                        <Container className="main-page-content"><h2>Main Page Content</h2></Container>
                    </Row>
                    <Row className="bottom-container">
                        <Col xs={12} md={6} className="left-text-container">dummy text</Col>
                        <Col xs={12} md={6} className="form-container h-100 overflow-auto">
                            <Form action="" className='m-2'>
                                <h3>Contact Us</h3>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type='text' placeholder="John Doe" required className='mb-1' />
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="jdoe@example.com" required className='mb-1' />
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={6} required className='mb-1' />
                                <Container className="mb-3 mt-4 text-center d-grid">
                                    <Button type="submit">Submit</Button>
                                </Container>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
