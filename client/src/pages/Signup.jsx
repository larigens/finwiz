import React, { useState } from 'react';
import {
  Container,
  Box,
  Button,
  FormControl,
  Select,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Stack,
  Text,
  useColorModeValue,
  Divider
} from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { WarningTwoIcon } from '@chakra-ui/icons';
import { MdOutlineDriveFileRenameOutline, MdPassword, MdOutlineAdminPanelSettings } from 'react-icons/md';
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
    <Box px={10} mx={10} py={5}>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      {/* This is needed for the validation functionality above */}
      <Box
        as='form'
        noValidate
        validated={validated.toString()} // convert validated state to a string
        onSubmit={handleFormSubmit}
        py={{ base: 8, md: 16 }}
        px={{ base: 2, md: 4 }}
        bg={useColorModeValue('white', 'gray.900')}
        rounded='md'
        boxShadow='md'
      >
        <Stack spacing={{ base: 4, md: 6 }} >
          {/* show alert if server response is bad */}
          <Heading as="h1" size="xl" textAlign="center" color='brand.800'>
            Sign Up
          </Heading>
          {showAlert && (
            <Box
              mt={2}
              px={3}
              py={2}
              bg="red.50"
              color="red.500"
              rounded="md"
            >
              Something went wrong with your signup!
            </Box>
          )}
          <FormControl isRequired>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<MdOutlineDriveFileRenameOutline color='gray.300' />}
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
            <FormErrorMessage><WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon> First Name is required!</FormErrorMessage>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Last Name</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<MdOutlineDriveFileRenameOutline color='gray.300' />}
              />
              <Input
                type='text'
                placeholder='Last Name'
                name='lastName'
                onChange={handleInputChange}
                value={userFormData.lastName}
              />
            </InputGroup>
            <FormErrorMessage><WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon> Last Name is required!</FormErrorMessage>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<BiUserCircle color='gray.300' />}
              />
              <Input
                type='text'
                placeholder='Username'
                name='username'
                onChange={handleInputChange}
                value={userFormData.username}
              />
            </InputGroup>
            <FormErrorMessage><WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon> Username is required!</FormErrorMessage>
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<AiOutlineMail color='gray.300' />}
              />
              <Input
                type='email'
                id='email'
                placeholder='Email'
                name='email'
                onChange={handleInputChange}
                value={userFormData.email}
              />
            </InputGroup>
            <FormErrorMessage><WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon> Email is required!</FormErrorMessage>
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <InputGroup size='md'>
              <InputLeftElement
                pointerEvents='none'
                children={<MdPassword color='gray.300' />}
              />
              <Input
                type={show ? 'text' : 'password'}
                id='password'
                placeholder='Password'
                name='password'
                onChange={handleInputChange}
                value={userFormData.password}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick} bg="brand.600">
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage><WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon> Password is required!</FormErrorMessage>
          </FormControl>

          <FormControl isRequired mb={5} pb={5}>
            <FormLabel htmlFor="role">Role</FormLabel>
            <Select
              id="role"
              placeholder="Select role"
              onChange={handleInputChange}
              name="role"
              value={userFormData.role}
              isRequired
              icon={<MdOutlineAdminPanelSettings />}
              cursor='pointer'
            >
              <option value="admin">Admin</option>
              <option value="employee">Employee</option>
              <option value="carrier">Carrier</option>
            </Select>
          </FormControl>

          <FormControl mb={5} pb={5}>
            <Button
              type='submit'
              variant='solid'
              bg="brand.600"
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
          <Divider orientation='horizontal' />
          <Text mt={3}>
            <Link to='/login' color='brand.600'>Already have an account? Login here</Link>
          </Text>
        </Stack>
      </Box>
      {error && (
        <Container mt={3} p={3} bg='red.500' color='white'>
          {error.message}
        </Container>
      )}
    </Box>
  );
};

export default SignUp;
