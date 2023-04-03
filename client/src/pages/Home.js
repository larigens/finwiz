import React from 'react';
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom"

function Home() {
    return (
        <Container className="home-container">
            <Container className="left-container">
                <Container className="logo"><h2>Logo</h2></Container>
                <Link to='/login'><button>LOGIN</button></Link>
            </Container>
            <Container className="right-container">
                <Container className="top-container">
                    <Container className="navbar-container">
                        <Form.Control type='text' placeholder="search" />
                        <Container className="icon">
                            <i class="fa-solid fa-ellipsis"></i>
                            <i class="fa-regular fa-bell"></i>
                        </Container>
                    </Container>
                    <Container className="main-page-content"><h2>Main Page Content</h2></Container>
                </Container>
                <Container className="bottom-container">
                    <Container className="left-text-container">dummy text</Container>
                    <Container className="Form-container">
                        <Form action="">
                            <h3>Contact Us</h3>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' placeholder="John Doe" />
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="John Doe" />
                            <Form.Label>Message</Form.Label>
                            <textarea></textarea>
                        </Form>
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}

export default Home
