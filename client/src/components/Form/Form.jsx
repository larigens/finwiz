import React, { useState } from 'react';
import {
  Container,
  Box,
  Divider,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  InputLeftElement,
  Button,
  Heading,
  Select,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPassword,
  MdVisibility,
  MdVisibilityOff,
  MdOutlineDriveFileRenameOutline,
  MdOutlineAdminPanelSettings,
} from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { WarningTwoIcon } from '@chakra-ui/icons';
import { BiUserCircle } from 'react-icons/bi';
import Auth from '../../utils/auth';

export const Form = ({ formRequest, formMutation, handleShowModal }) => {
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
  const [showPassword, setShowPassword] = useState(false);
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

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
        <Box mt={2} px={3} py={2} bg="red.50" color="red.500" rounded="md">
          Something went wrong with your ${formRequest}!
        </Box>
      )}
      {formRequest === 'SignUp' && (
        <>
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
                value={formData.firstName}
                onChange={handleInputChange}
                size="md"
              />
            </InputGroup>
            <FormErrorMessage>
              <WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon>{' '}
              First Name is required!
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
                name="lastName"
                onChange={handleInputChange}
                value={formData.lastName}
                size="md"
              />
            </InputGroup>
            <FormErrorMessage>
              <WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon> Last
              Name is required!
            </FormErrorMessage>
          </FormControl>
        </>
      )}
      {formRequest === 'Contact' && (
        <FormControl isRequired mb={5}>
          <FormLabel htmlFor="fullName" color="brand.500">
            Name
          </FormLabel>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            size="md"
          />
          <FormErrorMessage>
            <WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon> Name
            is required!
          </FormErrorMessage>
        </FormControl>
      )}
      {formRequest === 'SignUp' ||
        (formRequest === 'Contact' && (
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
                name="email"
                onChange={handleInputChange}
                value={formData.email}
                size="md"
              />
            </InputGroup>
            <FormErrorMessage>
              <WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon>{' '}
              Email is required!
            </FormErrorMessage>
          </FormControl>
        ))}
      {formRequest === 'Login' ||
        (formRequest === 'SignUp' && (
          <>
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
                  value={formData.username}
                  size="md"
                />
              </InputGroup>
              {formRequest === 'SignUp' && (
                <FormHelperText color="brand.600" size="sm" textAlign="start">
                  Username must be at least 6 characters long.
                </FormHelperText>
              )}
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
                  value={formData.password}
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
              {formRequest === 'SignUp' && (
                <FormHelperText color="brand.600" size="sm" textAlign="start">
                  Must contain at least 1 digit, 1 lowercase letter, 1 uppercase
                  letter, and 1 special character!
                </FormHelperText>
              )}
              <FormErrorMessage>
                <WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon>{' '}
                Password is required!
              </FormErrorMessage>
            </FormControl>
          </>
        ))}
      {formRequest === 'SignUp' && (
        <FormControl isRequired mb={5}>
          <FormLabel htmlFor="role" color="brand.500">
            Role
          </FormLabel>
          <Select
            id="role"
            placeholder="Select role"
            onChange={handleInputChange}
            name="role"
            value={formData.role}
            isRequired
            mb={5}
            icon={<MdOutlineAdminPanelSettings />}
            cursor="pointer"
            color="brand.500"
            size="md"
          >
            <option value="Admin">Admin</option>
            <option value="Employee">Employee</option>
            <option value="Carrier">Carrier</option>
          </Select>
          <FormErrorMessage>
            <WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon> Role
            is required!
          </FormErrorMessage>
        </FormControl>
      )}
      {formRequest === 'Contact' && (
        <>
          <FormControl isRequired mb={5}>
            <FormLabel htmlFor="role" color="brand.500">
              Reason
            </FormLabel>
            <Select
              id="reason"
              placeholder="Select reason"
              name="reason"
              isRequired
              onChange={handleInputChange}
              value={formData.reason}
              mb={5}
              cursor="pointer"
              color="brand.500"
              size="md"
              fontSize="sm"
            >
              <option value="feedback">Feedback</option>
              <option value="question">General Question</option>
              <option value="signup">Sign Up</option>
            </Select>
            <FormErrorMessage>
              <WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon>{' '}
              Reason is required!
            </FormErrorMessage>
          </FormControl>
          <FormControl isRequired>
            <FormLabel className="light">Message</FormLabel>
            <Textarea
              id="message"
              name="message"
              rows={6}
              size="sm"
              onChange={handleInputChange}
              value={formData.message}
            />
            <FormErrorMessage>
              <WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon>{' '}
              Message is required!
            </FormErrorMessage>
          </FormControl>
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
  );
};
