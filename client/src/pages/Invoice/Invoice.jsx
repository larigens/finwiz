import React, { useState } from 'react';
import {
  Container,
  Box,
  Alert,
  AlertIcon,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Heading,
  Select,
} from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_INVOICE } from '../../utils/mutations';
import { GET_ALL_CARRIERS_BROKERS } from '../../utils/queries';

function Invoice() {
  const [invoiceFormData, setinvoiceFormData] = useState({
    invoiceNumber: '',
    loadNumber: '',
    amount: '',
    carrier: '',
    broker: '',
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [addInvoice, { error }] = useMutation(ADD_INVOICE);
  const { loading, data } = useQuery(GET_ALL_CARRIERS_BROKERS);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setinvoiceFormData({ ...invoiceFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(invoiceFormData);
    // check if form has everything (as per react-bootstrap docs)
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

  if (loading) {
    return <div>Loading...</div>;
  }

  const brokers = data?.brokers || [];
  const carriers = data?.carriers || [];

  return (
    <Box px={10} mx={10} py={5} bg="brand.800">
      <Helmet>
        <title>Invoice Entry</title>
      </Helmet>
      <Box
        as="form"
        noValidate
        validated={validated.toString()} // convert validated state to a string
        onSubmit={handleFormSubmit}
        py={{ base: 6, md: 10 }}
        px={{ base: 2, md: 6 }}
        rounded="2xl"
        boxShadow="lg"
        bg="brand.800"
        textAlign="center"
        border="0.5px solid #98B5FF"
      >
        {/* show alert if server response is bad */}
        <Heading as="h1" size="xl" textAlign="center" color="brand.500">
          Invoice Entry
        </Heading>
        {showAlert && (
          <Box mt={2} px={3} py={2} bg="red.50" color="red.500" rounded="md">
            Something went wrong adding your invoice!
          </Box>
        )}
        <FormControl isRequired my={3}>
          <FormLabel htmlFor="invoiceNumber" color="brand.500">
            Invoice Number
          </FormLabel>
          <Input
            type="number"
            name="invoiceNumber"
            onChange={handleInputChange}
            value={invoiceFormData.invoiceNumber}
            bg="brand.600"
            className='no-border'
          />
          <FormErrorMessage>Invoice Number is required!</FormErrorMessage>
        </FormControl>
        <FormControl isRequired my={3}>
          <FormLabel htmlFor="loadNumber" color="brand.500">
            Load Number
          </FormLabel>
          <Input
            type="text"
            name="loadNumber"
            onChange={handleInputChange}
            value={invoiceFormData.loadNumber}
            bg="brand.600"
            className='no-border'
          />
          <FormErrorMessage>Load Number is required!</FormErrorMessage>
        </FormControl>
        <FormControl isRequired my={3}>
          <FormLabel htmlFor="amount" color="brand.500">
            Amount
          </FormLabel>
          <Input
            type="number"
            name="amount"
            onChange={handleInputChange}
            value={invoiceFormData.amount}
            bg="brand.600"
            className='no-border'
          />
          <FormErrorMessage>Amount is required!</FormErrorMessage>
        </FormControl>
        <FormControl isRequired my={3}>
          <FormLabel htmlFor="carrier" color="brand.500">
            Carrier
          </FormLabel>
          <Select
            id="carrier"
            onChange={handleInputChange}
            name="carrier"
            value={invoiceFormData.carrier}
            isRequired
            mb={5}
            cursor="pointer"
            color="brand.500"
            bg="brand.600"
            className='no-border'
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
        <FormControl isRequired my={3}>
          <FormLabel htmlFor="broker" color="brand.500">
            Broker
          </FormLabel>
          <Select
            id="broker"
            onChange={handleInputChange}
            name="broker"
            value={invoiceFormData.broker}
            isRequired
            mb={5}
            cursor="pointer"
            color="brand.500"
            bg="brand.600"
            className='no-border'
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
        <Container className="text-center" mt={10} mb={3}>
          <Button
            bg="brand.600"
            color="brand.500"
            _hover={{ bg: 'brand.500', color: 'brand.600' }}
            onClick={handleFormSubmit}
          >
            Submit
          </Button>
        </Container>
        {/* TODO: ADD SECTION TO UPLOAD PAPERWORK */}
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

export default Invoice;