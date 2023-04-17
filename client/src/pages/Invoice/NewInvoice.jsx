import React, { useState } from 'react';
import {
  Container,
  Box,
  Alert,
  AlertIcon,
  Button,
  Heading,
} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { ADD_INVOICE } from '../../utils/mutations';
import {
  FormControlCarriers,
  FormControlBrokers,
} from '../../components/Form/Selects/InvoiceSelects';
import {
  FormControlAmount,
  FormControlInvoiceDate,
  FormControlInvoiceNumber,
  FormControlLoadNumber,
  FormControlPdf,
} from '../../components/Form/Inputs/InvoiceInputs';

function NewInvoice() {
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setinvoiceFormData({ ...invoiceFormData, [name]: value });
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
        <FormControlInvoiceDate />
        {/* TODO: autogenarate the invoicenumber: get the carrier's mcnumber and increment */}
        <FormControlInvoiceNumber
          formData={invoiceFormData}
          handleInputChange={handleInputChange}
        />
        <FormControlLoadNumber
          formData={invoiceFormData}
          handleInputChange={handleInputChange}
        />
        <FormControlAmount
          formData={invoiceFormData}
          handleInputChange={handleInputChange}
        />
        <FormControlCarriers
          formData={invoiceFormData}
          handleInputChange={handleInputChange}
        />
        <FormControlBrokers
          formData={invoiceFormData}
          handleInputChange={handleInputChange}
        />
        <FormControlPdf />
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
