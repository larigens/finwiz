import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Text,
  Select,
} from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { GET_INVOICE_BY_NUMBER } from '../../utils/queries';
import { getAllCarriesAndBroker } from '../../utils/helper';

function Invoice({ invoiceNumberData }) {
  const { loading, data } = useQuery(GET_INVOICE_BY_NUMBER, {
    variables: { invoiceNumber: invoiceNumberData },
  });

  const carriers = getAllCarriesAndBroker().carriers;
  const brokers = getAllCarriesAndBroker().brokers;

  const invoice = data?.invoiceByNumber;
  const [isEditing, setIsEditing] = useState(false);
  const [editedInvoice, setEditedInvoice] = useState({});

  useEffect(() => {
    if (invoice) {
      setEditedInvoice(invoice);
    }
  }, [invoice]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedInvoice(invoice);
  };

  const handleSaveClick = () => {
    // Update invoice with editedInvoice data
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedInvoice({ ...editedInvoice, [name]: value });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!invoice) {
    return <div>No invoice found!</div>;
  }

  return (
    <Box
      p={4}
      rounded="md"
      boxShadow="md"
      bg="brand.800"
      borderWidth="1px"
      borderColor="brand.700"
      textAlign="center"
    >
      <Text mb={4} fontWeight="bold" fontSize="xl">
        Invoice {invoice.invoiceNumber}
      </Text>
      {isEditing ? (
        <>
          <FormControl mb={2}>
            <FormLabel>Invoice date</FormLabel>
            <Input
              type="date"
              name="invoiceDate"
              value={new Date(invoice.invoiceDate).toLocaleDateString('en-US')}
              readOnly
            />
          </FormControl>
          <FormControl mb={2}>
            <FormLabel>Load number</FormLabel>
            <Input
              type="text"
              name="loadNumber"
              value={editedInvoice.loadNumber}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl mb={2}>
            <FormLabel>Amount</FormLabel>
            <Input
              type="number"
              name="amount"
              value={editedInvoice.amount}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl mb={2}>
            <FormLabel>Carrier</FormLabel>
            <Select
              id="carrier"
              onChange={handleInputChange}
              name="carrier"
              value={editedInvoice.carrier}
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
          </FormControl>
          <FormControl mb={2}>
            <FormLabel>Broker</FormLabel>
            <Select
              id="broker"
              onChange={handleInputChange}
              name="broker"
              value={editedInvoice.broker}
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
        </>
      ) : (
        <>
          <Text mb={2}>
            Invoice date:{' '}
            {new Date(invoice.invoiceDate).toLocaleDateString('en-US')}
          </Text>
          <Text mb={2}>Load number: {invoice.loadNumber}</Text>
          <Text mb={2}>
            Amount:{' '}
            {invoice.amount.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </Text>
          <Text mb={2}>Carrier: {invoice.carrier}</Text>
          <Text mb={2}>Broker: {invoice.broker}</Text>
          <ButtonGroup mx={{ base: 2, md: 5 }}>
            <Button
              onClick={handleEditClick}
              size="md"
              bg="brand.600"
              color="brand.500"
              _hover={{ bg: 'brand.500', color: 'brand.700' }}
            >
              Edit
            </Button>
            <Button
              size="md"
              bg="brand.600"
              color="brand.500"
              _hover={{ bg: 'brand.500', color: 'brand.700' }}
            >
              Delete
            </Button>
          </ButtonGroup>
        </>
      )}
    </Box>
  );
}

export default Invoice;
