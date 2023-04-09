import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { GET_INVOICE_BY_NUMBER } from '../../utils/queries';

function Invoice({ invoiceNumberData }) {
  const { loading, data } = useQuery(GET_INVOICE_BY_NUMBER, {
    variables: { invoiceNumber: invoiceNumberData },
  });

  console.log(invoiceNumberData);
  console.log(data);
  const invoice = data?.invoiceByNumber;
  const [isEditing, setIsEditing] = useState(false);
  const [editedInvoice, setEditedInvoice] = useState(invoice);

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

  return (
    <Box p={4} borderWidth="1px" rounded="md" bg="brand.800" textAlign="center">
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
              value={editedInvoice.invoiceDate}
              onChange={handleInputChange}
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
            <Input
              type="text"
              name="carrier"
              value={editedInvoice.carrier}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl mb={2}>
            <FormLabel>Broker</FormLabel>
            <Input
              type="text"
              name="broker"
              value={editedInvoice.broker}
              onChange={handleInputChange}
            />
          </FormControl>
          <Button mr={2} onClick={handleSaveClick}>
            Save
          </Button>
          <Button variant="outline" onClick={handleCancelClick}>
            Cancel
          </Button>
        </>
      ) : (
        <>
          <Text mb={2}>Invoice date: {invoice.invoiceDate}</Text>
          <Text mb={2}>Load number: {invoice.loadNumber}</Text>
          <Text mb={2}>Amount: {invoice.amount}</Text>
          <Text mb={2}>Carrier: {invoice.carrier}</Text>
          <Text mb={2}>Broker: {invoice.broker}</Text>
          <Button variant="outline" onClick={handleEditClick}>
            Edit
          </Button>
        </>
      )}
    </Box>
  );
}

export default Invoice;
