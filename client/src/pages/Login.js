import React, { useState } from 'react';
import { Container, Form, Button, Alert } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

function Login() {
    const [userFormData, setUserFormData] = useState({ username: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [loginUser, { error }] = useMutation(LOGIN_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await loginUser({
                variables: { ...userFormData },
            });

            Auth.login(data.loginUser.token);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            username: '',
            password: '',
        });
    };

    return (
        <Container className="card mt-5">
            <Container className="small-container">
                <Helmet>
                    <title>Login</title>
                </Helmet>
                <h1 className="my-5 text-center dark-accent">Login</h1>
                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                        Something went wrong with your login credentials!
                    </Alert>
                    <Form.Group className="mb-4" controlId="username">
                        <Form.Control
                            type="username"
                            placeholder="Username"
                            required
                            name='username'
                            onChange={handleInputChange}
                            value={userFormData.username}
                        />
                        <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="password">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            required
                            name='password'
                            onChange={handleInputChange}
                            value={userFormData.password}
                        />
                        <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                    </Form.Group>
                    <Container className="mb-3 text-center d-grid">
                        <Button type="submit">Submit</Button>
                    </Container>
                    <Container className="mb-3">
                        <Link to={`/signup`}>Don't have an account? Sign Up here</Link>
                    </Container>
                </Form>
                {error && (
                    <Container className="my-3 p-3 bg-danger text-white">
                        {error.message}
                    </Container>
                )}
            </Container>
        </Container>
    );
}

export default Login;