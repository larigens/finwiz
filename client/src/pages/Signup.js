import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const SignUp = () => {
    // set initial form state
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
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
            username: '',
            email: '',
            password: '',
        });
    };
    
    return (
        <Container className="small-container">
            <Helmet>
                <title>Sign Up</title>
            </Helmet>
            <h1 className="my-5">Sign Up</h1>
            <Form>
                <Form.Group className="mb-4" controlId="firstName">
                    <Form.Control type="text" placeholder="First Name" required />
                </Form.Group>
                <Form.Group className="mb-4" controlId="lastName">
                    <Form.Control type="text" placeholder="Last Name" required />
                </Form.Group>
                <Form.Group className="mb-4" controlId="username">
                    <Form.Control type="text" placeholder="Username" required />
                </Form.Group>
                {/* Need to add code on the server side for this part */}
                {/* <Form.Group className="mb-4" controlId="location">
                    <Form.Control type="text" placeholder="Location" required />
                </Form.Group> */}
                <Form.Group className="mb-4" controlId="email">
                    <Form.Control type="email" placeholder="Email" required />
                </Form.Group>
                <Form.Group className="mb-5" controlId="password">
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-4" controlId="role">
                    <Form.Control type="text" placeholder="Role" required />
                </Form.Group>
                <div className="mb-3 text-center d-grid">
                    <Button type="submit">Sign Up</Button>
                </div>
                <div className="mb-3">
                    <Link to={`/login`}>Already have an account? Login here</Link>
                </div>
            </Form>
        </Container>
    );
}

export default SignUp;