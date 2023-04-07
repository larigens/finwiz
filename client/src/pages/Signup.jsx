import React, { useState } from 'react';
import {
  Container,
  Box,
  Button,
  FormControl,
  Select,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Divider,
} from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { WarningTwoIcon } from '@chakra-ui/icons';
import {
  MdOutlineDriveFileRenameOutline,
  MdPassword,
  MdOutlineAdminPanelSettings,
} from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';

import Auth from '../utils/auth';

const SignUp = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    role: '',
  });
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
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
      role: '',
    });
  };

  return (
    <Box px={10} mx={10} py={5} bg="brand.600">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      {/* This is needed for the validation functionality above */}
      <Box
        as="form"
        noValidate
        validated={validated.toString()} // convert validated state to a string
        onSubmit={handleFormSubmit}
        py={{ base: 6, md: 10 }}
        px={{ base: 2, md: 6 }}
        rounded="2xl"
        boxShadow="md"
        bg="brand.800"
      >
        {/* show alert if server response is bad */}
        <Heading as="h1" size="xl" textAlign="center" color="brand.500">
          Sign Up
        </Heading>
        {showAlert && (
          <Box mt={2} px={3} py={2} bg="red.50" color="red.500" rounded="md">
            Something went wrong with your signup!
          </Box>
        )}
        <FormControl isRequired mb={5}>
          <FormLabel htmlFor="firstName" color="brand.500">
            First Name
          </FormLabel>
          <InputGroup>
            <InputLeftElement
              color="brand.500"
              pointerEvents="none"
              children={<MdOutlineDriveFileRenameOutline color="brand.500" />}
            />
            <Input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={userFormData.firstName}
              onChange={handleInputChange}
            />
          </InputGroup>
          <FormErrorMessage>
            <WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon> First
            Name is required!
          </FormErrorMessage>
        </FormControl>

        <FormControl isRequired mb={5}>
          <FormLabel htmlFor="lastName" color="brand.500">
            Last Name
          </FormLabel>
          <InputGroup>
            <InputLeftElement
              color="brand.500"
              pointerEvents="none"
              children={<MdOutlineDriveFileRenameOutline color="brand.500" />}
            />
            <Input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleInputChange}
              value={userFormData.lastName}
            />
          </InputGroup>
          <FormErrorMessage>
            <WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon> Last
            Name is required!
          </FormErrorMessage>
        </FormControl>

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
              placeholder="Username"
              name="username"
              onChange={handleInputChange}
              value={userFormData.username}
            />
          </InputGroup>
          <FormErrorMessage>
            <WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon>{' '}
            Username is required!
          </FormErrorMessage>
        </FormControl>

        <FormControl isRequired mb={5}>
          <FormLabel htmlFor="email" color="brand.500">
            Email
          </FormLabel>
          <InputGroup>
            <InputLeftElement
              color="brand.500"
              pointerEvents="none"
              children={<AiOutlineMail color="brand.500" />}
            />
            <Input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
              value={userFormData.email}
            />
          </InputGroup>
          <FormErrorMessage>
            <WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon> Email
            is required!
          </FormErrorMessage>
        </FormControl>

        <FormControl isRequired mb={5}>
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
              type={show ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={handleClick}
                bg="brand.600"
                color="brand.500"
                _hover={{ bg: 'brand.700', color: '800' }}
              >
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormHelperText color="brand.600" size="sm">
            Must contain at least 1 digit, 1 lowercase letter, 1 uppercase
            letter, and 1 special character!
          </FormHelperText>
          <FormErrorMessage>
            <WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon>{' '}
            Password is required!
          </FormErrorMessage>
        </FormControl>

        <FormControl isRequired mb={5}>
          <FormLabel htmlFor="role" color="brand.500">
            Role
          </FormLabel>
          <Select
            id="role"
            placeholder="Select role"
            onChange={handleInputChange}
            name="role"
            value={userFormData.role}
            isRequired mb={5}
            icon={<MdOutlineAdminPanelSettings />}
            cursor="pointer"
            color="brand.500"
          >
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
            <option value="carrier">Carrier</option>
          </Select>
        </FormControl>

        <FormControl mb={5} pb={5}>
          <Button
            type="submit"
            bg="brand.600"
            color="brand.500"
            _hover={{ bg: 'brand.500', color: 'brand.700' }}
            mt={5}
            ms={1}
            isDisabled={
              !(
                userFormData.firstName &&
                userFormData.lastName &&
                userFormData.username &&
                userFormData.email &&
                userFormData.password &&
                userFormData.role
              )
            }
          >
            Submit
          </Button>
        </FormControl>
        <Divider orientation="horizontal" />
        <Container className="text-center" mb={3} color="brand.600">
          <Link to="/login" color="brand.600" className="gradient-hv">
            Already have an account? Login here
          </Link>
        </Container>
      </Box>
      {error && (
        <Container mt={3} p={3} bg="red.500" color="white">
          {error.message}
        </Container>
      )}
    </Box>
  );
};

export default SignUp;

