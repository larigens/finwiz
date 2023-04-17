import React, { useState, useEffect } from 'react';
import { Box, Button, ButtonGroup, Container } from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { UPDATE_INVOICE } from '../../utils/mutations';
import {
  FormControlInvoiceDate,
  FormControlInvoiceNumber,
  FormControlLoadNumber,
  FormControlAmount,
} from '../../components/Form/Inputs/InvoiceInputs';
import {
  FormControlCarriers,
  FormControlBrokers,
  FormControlPaid,
  FormControlShortPaid,
} from '../../components/Form/Selects/InvoiceSelects';

function EditInvoice({
  invoice,
  carrierName,
  brokerName,
  isEditing,
  setIsEditing,
}) {
  const [editedInvoice, setEditedInvoice] = useState({});
  const [updateInvoice, { error }] = useMutation(UPDATE_INVOICE);

  useEffect(() => {
    if (invoice) {
      setEditedInvoice({ ...invoice, invoiceId: invoice._id });
    }
  }, [invoice]);

  // Cancel editing and reset edited invoice to original invoice
  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedInvoice(invoice);
  };

  // Helper function to parse form data
  const parseFormData = (formData) => {
    let isPaid;
    let isShortPaid;
    let carrierId = formData.carrier;
    let brokerId = formData.broker;
    if (formData.paid === 'true') {
      isPaid = true;
    } else {
      isPaid = false;
    }
    if (formData.shortPaid === 'true') {
      isShortPaid = true;
    } else {
      isShortPaid = false;
    }
    if (typeof carrierId === 'object') {
      carrierId = formData.carrier._id;
    }
    if (typeof brokerId === 'object') {
      brokerId = formData.broker._id;
    }
    return {
      ...formData,
      invoiceNumber: parseInt(formData.invoiceNumber, 10),
      amount: parseInt(formData.amount, 10),
      paid: isPaid,
      shortPaid: isShortPaid,
      carrier: carrierId,
      broker: brokerId,
    };
  };
  // Save edited invoice data
  const handleSaveClick = async (event) => {
    event.preventDefault();
    try {
      console.log(editedInvoice);
      const parsedFormData = parseFormData(editedInvoice);
      console.log(parsedFormData);
      const { data } = await updateInvoice({
        variables: { ...parsedFormData },
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    setIsEditing(false);
  };

  // Update edited invoice state when form inputs change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedInvoice({ ...editedInvoice, [name]: value });
  };

  return (
    <>
      {isEditing ? (
        <Box
          p={4}
          rounded="md"
          boxShadow="md"
          bg="brand.800"
          borderWidth="1px"
          borderColor="brand.700"
          textAlign="center"
        >
          <FormControlInvoiceDate formData={editedInvoice} />
          <FormControlInvoiceNumber
            formData={editedInvoice}
            handleInputChange={handleInputChange}
          />
          <FormControlLoadNumber
            formData={editedInvoice}
            handleInputChange={handleInputChange}
          />
          <FormControlAmount
            formData={editedInvoice}
            handleInputChange={handleInputChange}
          />

          <FormControlCarriers
            carrierName={carrierName}
            formData={editedInvoice}
            handleInputChange={handleInputChange}
          />
          <FormControlBrokers
            brokerName={brokerName}
            formData={editedInvoice}
            handleInputChange={handleInputChange}
          />
          <FormControlPaid
            brokerName={brokerName}
            formData={editedInvoice}
            handleInputChange={handleInputChange}
          />
          <FormControlShortPaid
            brokerName={brokerName}
            formData={editedInvoice}
            handleInputChange={handleInputChange}
          />
          <ButtonGroup mx={{ base: 2, md: 5 }} my={4}>
            <Button
              onClick={handleSaveClick}
              size="md"
              bg="brand.600"
              color="brand.500"
              _hover={{ bg: 'brand.500', color: 'brand.700' }}
            >
              Save
            </Button>
            <Button
              onClick={handleCancelClick}
              size="md"
              bg="brand.600"
              color="brand.500"
              _hover={{ bg: 'brand.500', color: 'brand.700' }}
            >
              Cancel
            </Button>
          </ButtonGroup>
          {error && (
            <Container mt={3} p={3} bg="red.500" color="white">
              {error.message}
            </Container>
          )}
        </Box>
      ) : null}
    </>
  );
}

export default EditInvoice;
