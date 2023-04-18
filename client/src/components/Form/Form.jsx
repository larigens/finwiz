import React, { useState } from 'react';
import {
  Container,
  Box,
  Divider,
  FormControl,
  Button,
  Heading,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import {
  FormControlNames,
  FormControlFullName,
  FormControlUsername,
  FormControlEmail,
  FormControlPassword,
} from './Inputs/UserInputs';
import { FormControlReason, FormControlRole } from './Selects/UserSelects';
import { FormControlMessage } from './Textareas.jsx/UserTextareas';
import { emailRegex } from '../../utils/helper';
import { ModalComp } from '../../components/Modal/Modal';

export const Form = ({ formRequest, formMutation }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    role: '',
    fullName: '',
    reason: '',
    message: '',
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalBody, setModalBody] = useState('');

  const handleShowModal = (title, body) => {
    setModalTitle(title);
    setModalBody(body);
    setShowModal(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (formRequest === 'Login' || formRequest === 'SignUp') {
      try {
        const { data } = await formMutation({
          variables: { ...formData },
        });
        if (formRequest === 'Login') {
          Auth.login(data.loginUser.token);
        } else if (formRequest === 'SignUp') {
          Auth.login(data.addUser.token);
        }
      } catch (err) {
        console.error(err);
        setShowAlert(true);
      }
    }
    if (formRequest === 'Contact') {
      if (!emailRegex.test(formData.email)) {
        handleShowModal('Error', 'Please enter a valid email address!');
        return;
      } else if (
        !formData.fullName ||
        !formData.email ||
        !formData.reason ||
        !formData.message
      ) {
        handleShowModal('Error', 'Please fill in all required fields!');
        return;
      } else {
        handleShowModal(
          `Thank you ${formData.fullName}!`,
          'I received your message and will respond within 24 hours!',
        );
        setFormData({
          fullName: '',
          email: '',
          reason: '',
          message: '',
        });
      }
    }
  };

  return (
    <>
      <Box
        as="form"
        noValidate
        validated={validated.toString()} // convert validated state to a string
        onSubmit={handleFormSubmit}
        rounded="2xl"
        boxShadow="md"
        bg="brand.800"
        textAlign="center"
        px={{ base: 3, md: 10 }}
        py={{ base: 5, md: 10 }}
      >
        <Heading
          as="h1"
          size={{ base: 'xl', md: '2xl' }}
          textAlign="center"
          color="brand.500"
          mb={5}
        >
          {formRequest === 'Login' && 'Login'}
          {formRequest === 'SignUp' && 'SignUp'}
        </Heading>
        {showAlert && (
          <Box my={4} px={3} py={2} bg="red.50" color="red.500" rounded="md">
            Something went wrong with your {formRequest}!
          </Box>
        )}
        {formRequest === 'SignUp' && (
          <FormControlNames
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}
        {formRequest === 'Contact' && (
          <FormControlFullName
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}
        {formRequest === 'SignUp' || formRequest === 'Contact' ? (
          <FormControlEmail
            formData={formData}
            handleInputChange={handleInputChange}
          />
        ) : null}{' '}
        {formRequest === 'Login' || formRequest === 'SignUp' ? (
          <>
            <FormControlUsername
              formRequest={formRequest}
              formData={formData}
              handleInputChange={handleInputChange}
            />
            <FormControlPassword
              formRequest={formRequest}
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </>
        ) : null}{' '}
        {formRequest === 'SignUp' && (
          <FormControlRole
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}
        {formRequest === 'Contact' && (
          <>
            <FormControlReason
              formData={formData}
              handleInputChange={handleInputChange}
            />
            <FormControlMessage
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </>
        )}
        <FormControl my={5} py={5}>
          <Button
            bg="brand.600"
            color="brand.500"
            _hover={{ bg: 'brand.700', color: 'brand.500' }}
            onClick={handleFormSubmit}
            w={{ base: '100%', md: 'auto' }}
          >
            Submit
          </Button>
        </FormControl>
        <Divider orientation="horizontal" my={5} />
        {formRequest === 'Login' && (
          <Container className="text-center" mb={1} color="brand.600">
            <Link to="/signup" color="brand.600" className="gradient-hv">
              Don't have an account? Sign Up here
            </Link>
          </Container>
        )}
        {formRequest === 'SignUp' && (
          <Container className="text-center" mb={3} color="brand.600">
            <Link to="/login" color="brand.600" className="gradient-hv">
              Already have an account? Login here
            </Link>
          </Container>
        )}
      </Box>
      <ModalComp
        showModal={showModal}
        setShowModal={setShowModal}
        modalTitle={modalTitle}
        modalBody={modalBody}
      />
    </>
  );
};
