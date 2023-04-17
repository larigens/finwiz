import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  FormErrorMessage,
  InputLeftElement,
  InputRightElement,
  FormHelperText,
} from '@chakra-ui/react';
import {
  MdOutlineDriveFileRenameOutline,
  MdPassword,
  MdVisibility,
  MdVisibilityOff,
} from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { WarningTwoIcon } from '@chakra-ui/icons';

export const FormControlNames = ({ formData, handleInputChange }) => {
  return (
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
            color="brand.500"
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
            name="lastName"
            onChange={handleInputChange}
            value={formData.lastName}
            size="md"
            color="brand.500"
          />
        </InputGroup>
        <FormErrorMessage>
          <WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon> Last
          Name is required!
        </FormErrorMessage>
      </FormControl>
    </>
  );
};

export const FormControlFullName = ({ formData, handleInputChange }) => {
  return (
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
        color="brand.500"
      />
      <FormErrorMessage>
        <WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon> Name is
        required!
      </FormErrorMessage>
    </FormControl>
  );
};

export const FormControlUsername = ({
  formRequest,
  formData,
  handleInputChange,
}) => {
  return (
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
          color="brand.500"
        />
      </InputGroup>
      {formRequest === 'SignUp' && (
        <FormHelperText color="brand.600" size="sm" textAlign="start">
          Username must be at least 6 characters long.
        </FormHelperText>
      )}
      <FormErrorMessage>
        <WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon> Username
        is required!
      </FormErrorMessage>
    </FormControl>
  );
};

export const FormControlEmail = ({ formData, handleInputChange }) => {
  return (
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
          color="brand.500"
        />
      </InputGroup>
      <FormErrorMessage>
        <WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon> Email is
        required!
      </FormErrorMessage>
    </FormControl>
  );
};

export const FormControlPassword = ({
  formRequest,
  formData,
  handleInputChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
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
          color="brand.500"
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
          Must contain at least 1 digit, 1 lowercase letter, 1 uppercase letter,
          and 1 special character!
        </FormHelperText>
      )}
      <FormErrorMessage>
        <WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon> Password
        is required!
      </FormErrorMessage>
    </FormControl>
  );
};