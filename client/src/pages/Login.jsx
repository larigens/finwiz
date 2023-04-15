import React, { useState } from 'react';
import {
  Container,
  Box,
  Alert,
  AlertIcon,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  InputLeftElement,
  Button,
  Heading,
} from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import { MdPassword, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { WarningTwoIcon } from '@chakra-ui/icons';
import { BiUserCircle } from 'react-icons/bi';

import Auth from '../utils/auth';

function Login() {
  const [userFormData, setUserFormData] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loginUser, { error }] = useMutation(LOGIN_USER);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
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
    <Box px={{ base: 2, md: 10 }} py={{ base: 5, md: 10 }} bg="brand.600">
      <Helmet>
        <title>Login</title>
      </Helmet>
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
        {/* show alert if server response is bad */}
        <Heading
          as="h1"
          size={{ base: 'xl', md: '2xl' }}
          textAlign="center"
          color="brand.500"
          mb={5}
        >
          Login
        </Heading>
        {showAlert && (
          <Box mt={2} px={3} py={2} bg="red.50" color="red.500" rounded="md">
            Something went wrong with your signup!
          </Box>
        )}
        <FormControl isRequired mb={5}>
          <FormLabel htmlFor="username" color="brand.500">
            Username
          </FormLabel>
          <InputGroup>
            <InputLeftElement
              color="brand.500"
              pointerEvents="none"
              children={<BiUserCircle color="brand.500" />}
            />
            <Input
              type="text"
              name="username"
              onChange={handleInputChange}
              value={userFormData.username}
              size="md"
            />
          </InputGroup>
          <FormErrorMessage>
            <WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon>{' '}
            Username is required!
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired my={5}>
          <FormLabel htmlFor="password" color="brand.500">
            Password
          </FormLabel>
          <InputGroup size="md">
            <InputLeftElement
              color="brand.500"
              pointerEvents="none"
              children={<MdPassword color="brand.500" />}
            />
            <Input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
              size="md"
            />
            <InputRightElement>
              <Button
                size="sm"
                onClick={handlePasswordVisibility}
                bg="transparent"
                _hover={{ bg: 'transparent' }}
                _focus={{ boxShadow: 'none' }}
                color="brand.500"
              >
                {showPassword ? (
                  <MdVisibilityOff color="brand.500" size="20px" />
                ) : (
                  <MdVisibility color="brand.500" size="20px" />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            <WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon>{' '}
            Password is required!
          </FormErrorMessage>
        </FormControl>
        <Container className="text-center" mt={10} mb={3}>
          <Button
            bg="brand.600"
            color="brand.500"
            _hover={{ bg: 'brand.700', color: 'brand.500' }}
            onClick={handleFormSubmit}
            w={{ base: '100%', md: 'auto' }}
          >
            Submit
          </Button>
        </Container>
        <Container className="text-center" mb={3} color="brand.600">
          <Link to="/signup" color="brand.600" className="gradient-hv">
            Don't have an account? Sign Up here
          </Link>
        </Container>
      </Box>
      {error && (
        <Alert status="error" mt={5}>
          <AlertIcon />
          {error.message}
        </Alert>
      )}
    </Box>
  );
}

export default Login;
