import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Flex,
  FormHelperText,
  Button,
} from '@chakra-ui/react';

export const FormControlInvoiceDate = ({ formData }) => {
  return (
    <FormControl mb={2}>
      <FormLabel htmlFor="invoiceDate">Invoice date</FormLabel>
      {formData ? (
        <Input
          type="text"
          name="invoiceDate"
          value={new Date(formData.invoiceDate).toLocaleDateString('en-US')}
          readOnly
          bg="brand.600"
          color="brand.800"
          fontWeight="semibold"
          className="no-border"
        />
      ) : (
        <Input
          type="text"
          name="invoiceDate"
          value={new Date().toLocaleDateString('en-US')}
          readOnly
          bg="brand.600"
          color="brand.800"
          fontWeight="semibold"
          className="no-border"
        />
      )}
    </FormControl>
  );
};

export const FormControlInvoiceNumber = ({ formData, handleInputChange }) => {
  return (
    <FormControl mb={2}>
      <FormLabel htmlFor="invoiceNumber">Invoice Number</FormLabel>
      <Input
        type="number"
        name="invoiceNumber"
        value={formData.invoiceNumber || ''}
        onChange={handleInputChange}
        bg="brand.600"
        className="no-border"
        color="brand.800"
        fontWeight="semibold"
      />
    </FormControl>
  );
};

export const FormControlLoadNumber = ({ formData, handleInputChange }) => {
  return (
    <FormControl mb={2}>
      <FormLabel htmlFor="loadNumber">Load number</FormLabel>
      <Input
        type="text"
        name="loadNumber"
        value={formData.loadNumber || ''}
        onChange={handleInputChange}
        bg="brand.600"
        className="no-border"
        color="brand.800"
        fontWeight="semibold"
      />
    </FormControl>
  );
};

export const FormControlAmount = ({ formData, handleInputChange }) => {
  return (
    <FormControl mb={2}>
      <FormLabel htmlFor="amount">Amount</FormLabel>
      <InputGroup>
        <InputLeftAddon
          children="$"
          color="brand.500"
          bg="transparent"
          border="none"
          size="lg"
        />
        <Input
          type="number"
          name="amount"
          value={formData.amount || ''}
          onChange={handleInputChange}
          bg="brand.600"
          className="no-border"
          color="brand.800"
          fontWeight="semibold"
        />
      </InputGroup>
    </FormControl>
  );
};

export const FormControlPdf = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  // TODO: DO SOMETHING WITH THE FILE.
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log(selectedFile);
  };
  return (
    <FormControl my={3}>
      <FormLabel htmlFor="pdf" color="brand.500">
        Upload Paperwork
      </FormLabel>
      <Flex alignItems="center" direction={{ base: 'column', sm: 'row' }}>
        <Button
          as="label"
          htmlFor="pdf"
          cursor="pointer"
          bg="brand.600"
          color="brand.500"
          _hover={{ bg: 'brand.700', color: 'brand.500' }}
          mr={{ base: 0, sm: 3 }}
          mb={{ base: 2, sm: 0 }}
          w={{ base: '100%', sm: 'auto' }}
        >
          Choose file
        </Button>
        <Input
          type="file"
          id="pdf"
          name="pdf"
          accept=".pdf"
          onChange={handleFileInputChange}
          display="none"
        />
        <Button
          size="sm"
          ml={{ base: 0, sm: 2 }}
          colorScheme="brand.600"
          onClick={() => document.getElementById('pdf').click()}
          w={{ base: '100%', sm: 'auto' }}
        >
          {selectedFile ? selectedFile.name : 'Choose file'}
        </Button>
      </Flex>
      <Flex mt={1} justifyContent="flex-start">
        <FormHelperText color="brand.600" size="sm">
          Only PDF files are allowed.
        </FormHelperText>
      </Flex>
    </FormControl>
  );
};
