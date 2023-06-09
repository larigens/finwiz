import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { getAllCarriesAndBroker } from '../../utils/helper';
import { UPDATE_INVOICE } from '../../utils/mutations';

function EditInvoice({
  invoice,
  carrierName,
  brokerName,
  isEditing,
  setIsEditing,
}) {
  const carriersAndBrokers = getAllCarriesAndBroker();
  const carriers = carriersAndBrokers.carriers;
  const brokers = carriersAndBrokers.brokers;
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
          <FormControl mb={2}>
            <FormLabel htmlFor="invoiceDate">Invoice date</FormLabel>
            <Input
              type="text"
              name="invoiceDate"
              value={new Date(editedInvoice.invoiceDate).toLocaleDateString(
                'en-US',
              )}
              readOnly
              bg="brand.600"
              color="brand.800"
              fontWeight="semibold"
              className="no-border"
            />
          </FormControl>
          <FormControl mb={2}>
            <FormLabel htmlFor="invoiceNumber">Invoice Number</FormLabel>
            <Input
              type="number"
              name="invoiceNumber"
              value={editedInvoice.invoiceNumber || ''}
              onChange={handleInputChange}
              bg="brand.600"
              color="brand.800"
              fontWeight="semibold"
              className="no-border"
            />
          </FormControl>
          <FormControl mb={2}>
            <FormLabel htmlFor="loadNumber">Load number</FormLabel>
            <Input
              type="text"
              name="loadNumber"
              value={editedInvoice.loadNumber || ''}
              onChange={handleInputChange}
              bg="brand.600"
              color="brand.800"
              fontWeight="semibold"
              className="no-border"
            />
          </FormControl>
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
                value={editedInvoice.amount || ''}
                onChange={handleInputChange}
                bg="brand.600"
                color="brand.800"
                fontWeight="semibold"
                className="no-border"
              />
            </InputGroup>
          </FormControl>
          <FormControl mb={2}>
            <FormLabel htmlFor="carrier">Carrier</FormLabel>
            <Select
              id="carrier"
              onChange={handleInputChange}
              name="carrier"
              value={editedInvoice.carrier}
              isRequired
              cursor="pointer"
              color="brand.800"
              fontWeight="semibold"
              bg="brand.600"
              className="no-border"
            >
              <option value={invoice.carrier}>{carrierName}</option>
              {carriers &&
                carriers.map((singleCarrier) => (
                  <option key={singleCarrier._id} value={singleCarrier._id}>
                    {singleCarrier.company}
                  </option>
                ))}
            </Select>
          </FormControl>
          <FormControl mb={2}>
            <FormLabel htmlFor="broker">Broker</FormLabel>
            <Select
              id="broker"
              onChange={handleInputChange}
              name="broker"
              value={editedInvoice.broker}
              isRequired
              cursor="pointer"
              color="brand.800"
              fontWeight="semibold"
              bg="brand.600"
              className="no-border"
            >
              <option value={invoice.broker}>{brokerName}</option>
              {brokers &&
                brokers.map((singleBroker) => (
                  <option key={singleBroker._id} value={singleBroker._id}>
                    {singleBroker.name}
                  </option>
                ))}
            </Select>
          </FormControl>
          <FormControl mb={2}>
            <FormLabel htmlFor="paid">Paid</FormLabel>
            <Select
              id="paid"
              onChange={handleInputChange}
              name="paid"
              value={editedInvoice.paid}
              isRequired
              cursor="pointer"
              color="brand.800"
              fontWeight="semibold"
              bg="brand.600"
              className="no-border"
            >
              <option value="false"> No </option>
              <option value="true"> Yes </option>
            </Select>
          </FormControl>
          <FormControl mb={2}>
            <FormLabel htmlFor="shortPaid">Short-Paid</FormLabel>
            <Select
              id="shortPaid"
              onChange={handleInputChange}
              name="shortPaid"
              value={editedInvoice.shortPaid}
              isRequired
              cursor="pointer"
              color="brand.800"
              fontWeight="semibold"
              bg="brand.600"
              className="no-border"
            >
              <option value="false"> No </option>
              <option value="true"> Yes </option>{' '}
            </Select>
          </FormControl>
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
            <Alert status="error" mt={5} rounded="2xl" boxShadow="md">
              <AlertIcon />
              {error.message}
            </Alert>
          )}
        </Box>
      ) : (
        <></>
      )}
    </>
  );
}

export default EditInvoice;
