import React from "react"
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import { Helmet } from "react-helmet-async";
import { Link, } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";


function SignUp() {



    return (
        <div>
            <header>
                <Navbar bg="secondary" variant="dark">
                    <Container>
                        <LinkContainer to="/">
                            <Navbar.Brand>Name</Navbar.Brand>
                        </LinkContainer>
                        <Nav className="me-auto">
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
            <Container className="small-container">
                <Helmet>
                    <title>Sign Up</title>
                </Helmet>
                <h1 className="my-5">Sign Up</h1>
                <Form>
                    <Form.Group className="mb-4" controlId="username">
                        <Form.Control type="text" placeholder="Username" required />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="location">
                        <Form.Control type="text" placeholder="Location" required />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="occupaiom">
                        <Form.Control type="text" placeholder="Occupaion" required />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="email">
                        <Form.Control type="email" placeholder="Email" required />
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="password">
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <div className="mb-3 text-center d-grid">
                        <Button type="submit">Sign Up</Button>
                    </div>
                    <div className="mb-3">
                        <Link to={`/login`}>Already have an account? Login here</Link>
                    </div>
                </Form>
            </Container>
            <footer className="text-center">All rights reserved</footer>
        </div>
    );
}

export default SignUp;