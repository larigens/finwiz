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
  InputLeftAddon,
  FormHelperText,
  FormErrorMessage,
  Button,
  Heading,
  Flex,
  Select,
} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { ADD_INVOICE } from '../../utils/mutations';
import { getAllCarriesAndBroker } from '../../utils/helper';

function NewInvoice() {
  const [invoiceFormData, setinvoiceFormData] = useState({
    invoiceNumber: '',
    loadNumber: '',
    amount: '',
    carrier: '',
    broker: '',
  });
  const carriers = getAllCarriesAndBroker().carriers;
  const brokers = getAllCarriesAndBroker().brokers;

  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [addInvoice, { error }] = useMutation(ADD_INVOICE);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setinvoiceFormData({ ...invoiceFormData, [name]: value });
  };

  // TODO: DO SOMETHING WITH THE FILE.
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log(selectedFile);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const parsedFormData = {
        ...invoiceFormData,
        invoiceNumber: parseInt(invoiceFormData.invoiceNumber, 10),
        amount: parseInt(invoiceFormData.amount, 10),
      };
      const { data } = await addInvoice({
        variables: parsedFormData,
      });
      console.log(data);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setinvoiceFormData({
      invoiceNumber: '',
      loadNumber: '',
      amount: '',
      carrier: '',
      broker: '',
    });
  };

  return (
    <Box py={5} bg="brand.800" textAlign="center">
      <Box
        as="form"
        noValidate
        validated={validated.toString()} // convert validated state to a string
        onSubmit={handleFormSubmit}
        p={{ base: 3, md: 8 }}
        rounded="2xl"
        boxShadow="lg"
        bg="brand.800"
        border="0.5px solid #98B5FF"
      >
        {/* show alert if server response is bad */}
        <Heading as="h1" size="xl" color="brand.500" mb={8}>
          Invoice Entry
        </Heading>
        {showAlert && (
          <Box mb={4} px={3} py={2} bg="red.50" color="red.500" rounded="md">
            Something went wrong adding your invoice!
          </Box>
        )}
        <FormControl mb={4}>
          <FormLabel htmlFor="invoiceDate" color="brand.500">
            Invoice Date
          </FormLabel>
          <Input
            type="text"
            name="invoiceDate"
            value={new Date().toLocaleDateString('en-US')}
            isDisabled
            bg="brand.600"
            className="no-border"
          />
        </FormControl>
        {/* TODO: autogenarate the invoicenumber: get the carrier's mcnumber and increment */}
        <FormControl isRequired mb={4}>
          <FormLabel htmlFor="invoiceNumber" color="brand.500">
            Invoice Number
          </FormLabel>
          <Input
            type="number"
            name="invoiceNumber"
            onChange={handleInputChange}
            value={invoiceFormData.invoiceNumber}
            bg="brand.600"
            className="no-border"
          />
          <FormErrorMessage>Invoice Number is required!</FormErrorMessage>
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel htmlFor="loadNumber" color="brand.500">
            Load Number
          </FormLabel>
          <Input
            type="text"
            name="loadNumber"
            onChange={handleInputChange}
            value={invoiceFormData.loadNumber}
            bg="brand.600"
            className="no-border"
          />
          <FormErrorMessage>Load Number is required!</FormErrorMessage>
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel htmlFor="amount" color="brand.500">
            Amount
          </FormLabel>
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
              onChange={handleInputChange}
              value={invoiceFormData.amount}
              bg="brand.600"
              className="no-border"
            />
          </InputGroup>
          <FormErrorMessage>Amount is required!</FormErrorMessage>
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel htmlFor="carrier" color="brand.500">
            Carrier
          </FormLabel>
          <Select
            id="carrier"
            onChange={handleInputChange}
            name="carrier"
            value={invoiceFormData.carrier}
            isRequired
            cursor="pointer"
            color="brand.500"
            bg="brand.600"
            className="no-border"
          >
            <option></option>
            {carriers &&
              carriers.map((singleCarrier) => (
                <option key={singleCarrier._id} value={singleCarrier._id}>
                  {singleCarrier.company}
                </option>
              ))}
          </Select>
          <FormErrorMessage>Carrier is required!</FormErrorMessage>
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel htmlFor="broker" color="brand.500">
            Broker
          </FormLabel>
          <Select
            id="broker"
            onChange={handleInputChange}
            name="broker"
            value={invoiceFormData.broker}
            isRequired
            cursor="pointer"
            color="brand.500"
            bg="brand.600"
            className="no-border"
          >
            <option></option>
            {brokers &&
              brokers.map((singleBroker) => (
                <option key={singleBroker._id} value={singleBroker._id}>
                  {singleBroker.name}
                </option>
              ))}
          </Select>
          <FormErrorMessage>Broker is required!</FormErrorMessage>
        </FormControl>
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
        <Container className="text-center" mt={10} mb={3}>
          <Button
            bg="brand.600"
            color="brand.500"
            _hover={{ bg: 'brand.700', color: 'brand.500' }}
            onClick={handleFormSubmit}
          >
            Submit
          </Button>
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

export default NewInvoice;
