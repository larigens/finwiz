import React from "react"
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function Login() {

    return (
        <Container className="small-container">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <h1 className="my-5">Login</h1>
            <Form>
                <Form.Group className="mb-4" controlId="email">
                    <Form.Control type="email" placeholder="Email" required />
                </Form.Group>
                <Form.Group className="mb-5" controlId="password">
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <div className="mb-3 text-center d-grid">
                    <Button type="submit">LOGIN</Button>
                </div>
                <div className="mb-3">
                    <Link to={`/signup`}>Don't have an account? Sign Up here</Link>
                </div>
            </Form>
        </Container>
    );
}

export default Login;