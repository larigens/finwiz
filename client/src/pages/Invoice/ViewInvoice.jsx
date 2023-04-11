import React, { useState } from 'react';
import { Box, Button, ButtonGroup, Text } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { GET_INVOICE_BY_NUMBER } from '../../utils/queries';
import EditInvoice from './EditInvoice';

function ViewInvoice({ invoiceNumberData }) {
  const { loading, data } = useQuery(GET_INVOICE_BY_NUMBER, {
    variables: { invoiceNumber: invoiceNumberData },
  });
  const invoice = data?.invoiceByNumber || [];
  const [edit, setEdit] = useState(false);

  const handleEditClick = () => {
    setEdit(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!invoice) {
    return <div>No invoice found!</div>;
  }

  return (
    <>
      {edit ? (
        <EditInvoice invoice={invoice} />
      ) : (
        <Box
          p={4}
          rounded="md"
          boxShadow="md"
          bg="brand.800"
          borderWidth="1px"
          borderColor="brand.700"
          textAlign="center"
        >
          <Text mb={2} color="brand.600" fontWeight="bold">
            Invoice Date:{' '}
            <Text as="span" mx={1} color="brand.500" fontWeight="normal">
              {new Date(invoice.invoiceDate).toLocaleDateString('en-US')}
            </Text>
          </Text>
          <Text mb={2} color="brand.600" fontWeight="bold">
            Load Number:
            <Text as="span" mx={1} color="brand.500" fontWeight="normal">
              {invoice.loadNumber}
            </Text>
          </Text>
          <Text mb={2} color="brand.600" fontWeight="bold">
            Amount:{' '}
            <Text as="span" mx={1} color="brand.500" fontWeight="normal">
              {invoice.amount.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </Text>
          </Text>
          {/* TODO: GET CARRIER AND BROKER BY ID TO RENDER NAME */}
          <Text mb={2} color="brand.600" fontWeight="bold">
            Carrier:
            <Text as="span" mx={1} color="brand.500" fontWeight="normal">
              {invoice.carrier}
            </Text>
          </Text>
          <Text mb={2} color="brand.600" fontWeight="bold">
            Broker:
            <Text as="span" mx={1} color="brand.500" fontWeight="normal">
              {invoice.broker}
            </Text>
          </Text>
          <Text mb={2} color="brand.600" fontWeight="bold">
            Paid:
            <Text as="span" mx={1} color="brand.500" fontWeight="normal">
              {invoice.paid ? 'Yes' : 'No'}
            </Text>
          </Text>
          <Text mb={2} color="brand.600" fontWeight="bold">
            Short-Paid:
            <Text as="span" mx={1} color="brand.500" fontWeight="normal">
              {invoice.shortPaid ? 'Yes' : 'No'}
            </Text>
          </Text>
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
        </Box>
      )}
    </>
  );
}

export default ViewInvoice;
