import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const SignUp = () => {
    // set initial form state
    const [userFormData, setUserFormData] = useState({ firstName: '', lastName: '', username: '', email: '', password: '', role: '' });
    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);
    const [addUser, { error }] = useMutation(ADD_USER);

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
            console.log(userFormData);
            const { data } = await addUser({
                variables: { ...userFormData },
            });
            Auth.login(data.addUser.token);
        } catch (error) {
            console.error(error);
            setShowAlert(true);
        }

        setUserFormData({
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            role: ''
        });
    };

    return (
        <Container className="small-container card">
            <Helmet>
                <title>Sign Up</title>
            </Helmet>
            {/* This is needed for the validation functionality above */}
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                {/* show alert if server response is bad */}
                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                    Something went wrong with your signup!
                </Alert>
                <h1 className="my-5 text-center dark-accent">Sign Up</h1>
                <Form.Group className="mb-4" controlId="firstName">
                    <Form.Control
                        type="text"
                        placeholder="First Name"
                        required
                        name='firstName'
                        onChange={handleInputChange}
                        value={userFormData.firstName}
                    />
                    <Form.Control.Feedback type='invalid'>First Name is required!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-4" controlId="lastName">
                    <Form.Control
                        type="text"
                        placeholder="Last Name"
                        required
                        name='lastName'
                        onChange={handleInputChange}
                        value={userFormData.lastName}
                    />
                    <Form.Control.Feedback type='invalid'>Last Name is required!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-4" controlId="username">
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        required
                        name='username'
                        onChange={handleInputChange}
                        value={userFormData.username}
                    />
                    <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
                </Form.Group>
                {/* Need to add code on the server side for this part */}
                {/* <Form.Group className="mb-4" controlId="location">
                    <Form.Control type="text" placeholder="Location" required />
                </Form.Group> */}
                <Form.Group className="mb-4" controlId="email">
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        required
                        name='email'
                        onChange={handleInputChange}
                        value={userFormData.email}
                    />
                    <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-4" controlId="password">
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
                <Form.Group className="mb-4" controlId="role">
                    <Form.Control
                        type="text"
                        placeholder="Admin, Employee or Carrier"
                        required
                        name='role'
                        onChange={handleInputChange}
                        value={userFormData.role}
                    />
                    <Form.Control.Feedback type='invalid'>Role is required!</Form.Control.Feedback>
                </Form.Group>
                <Button
                    disabled={!(userFormData.firstName && userFormData.lastName && userFormData.username && userFormData.email && userFormData.password && userFormData.role)}
                    type='submit'
                    variant='info'
                    className='mt-4'>
                    Submit
                </Button>
                <div className="m-3">
                    <Link to={`/login`}>Already have an account? Login here</Link>
                </div>
            </Form>
            {error && (
                <Container className="my-3 p-3 bg-danger text-white">
                    {error.message}
                </Container>
            )}
        </Container>
    );
}

export default SignUp;