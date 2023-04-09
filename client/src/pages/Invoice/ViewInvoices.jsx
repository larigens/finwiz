import React, { useState } from 'react';
import {
  Box,
  Text,
  Heading,
  Card,
  Grid,
  Link,
  Collapse,
  Flex,
} from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { GET_ALL_INVOICES } from '../../utils/queries';
import Invoice from './Invoice';

function ViewInvoices() {
  const { loading, data } = useQuery(GET_ALL_INVOICES);
  const showAlert = !loading && !data;
  const [selectedInvoiceId, setSelectedInvoiceId] = useState(null);

  const handleInvoiceClick = (event, invoiceId) => {
    event.preventDefault();
    setSelectedInvoiceId(invoiceId);
  };

  const invoices = data ? data.invoices : [];
  console.log(invoices);
  return (
    <Box py={5} bg="brand.800" textAlign="center">
      {showAlert && (
        <Box mb={4} px={3} py={2} bg="red.50" color="red.500" rounded="md">
          Something went wrong fetching the invoices!
        </Box>
      )}

      <Heading as="h1" size="xl" color="brand.500" mb={8}>
        Invoices Summary
      </Heading>
      <Card
        px={{ base: 2, md: 8 }}
        py={{ base: 2, md: 6 }}
        alignItems="start"
        rounded="2xl"
        boxShadow="lg"
        bg="brand.800"
        border="0.5px solid #98B5FF"
      >
        {invoices.length ? (
          <Grid
            templateColumns="repeat(7, 1fr)"
            gap={2}
            alignItems="center"
            mb={4}
          >
            <Text
              gridColumn="1 / span 1"
              fontSize="lg"
              textAlign="center"
              color="brand.500"
              fontWeight="bold"
              p={1}
              borderBottom="0.5px solid #98B5FF"
            >
              *
            </Text>
            <Text
              gridColumn="2 / span 1"
              fontSize="lg"
              textAlign="center"
              color="brand.500"
              fontWeight="bold"
              p={1}
              borderBottom="0.5px solid #98B5FF"
            >
              Invoice Date
            </Text>
            <Text
              gridColumn="3 / span 1"
              fontSize="lg"
              textAlign="center"
              color="brand.500"
              fontWeight="bold"
              p={1}
              borderBottom="0.5px solid #98B5FF"
            >
              Invoice Number
            </Text>
            <Text
              gridColumn="4 / span 1"
              fontSize="lg"
              textAlign="center"
              color="brand.500"
              fontWeight="bold"
              p={1}
              borderBottom="0.5px solid #98B5FF"
            >
              Load Number
            </Text>
            <Text
              gridColumn="5 / span 1"
              fontSize="lg"
              textAlign="center"
              color="brand.500"
              fontWeight="bold"
              p={1}
              borderBottom="0.5px solid #98B5FF"
            >
              Amount
            </Text>
            <Text
              gridColumn="6 / span 1"
              fontSize="lg"
              textAlign="center"
              color="brand.500"
              fontWeight="bold"
              p={1}
              borderBottom="0.5px solid #98B5FF"
            >
              Carrier
            </Text>
            <Text
              gridColumn="7 / span 1"
              fontSize="lg"
              textAlign="center"
              color="brand.500"
              fontWeight="bold"
              p={1}
              borderBottom="0.5px solid #98B5FF"
            >
              Broker
            </Text>
            {invoices.slice(0, 20).map((singleInvoice) => (
              <Flex key={singleInvoice._id}>
                <Link
                  onClick={(event) =>
                    handleInvoiceClick(event, singleInvoice._id)
                  }
                  color="brand.500"
                  _hover={{
                    color: 'brand.600',
                  }}
                >
                  View
                </Link>
                <Text textAlign="center" color="brand.500">
                  {new Date(singleInvoice.invoiceDate).toLocaleDateString(
                    'en-US',
                  )}
                </Text>
                <Text textAlign="center" color="brand.500">
                  {singleInvoice.invoiceNumber}
                </Text>
                <Text textAlign="center" color="brand.500">
                  {singleInvoice.loadNumber}
                </Text>
                <Text textAlign="center" color="brand.500">
                  {singleInvoice.amount.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </Text>
                <Text textAlign="center" color="brand.500">
                  {singleInvoice.carrier}
                </Text>
                <Text textAlign="center" color="brand.500">
                  {singleInvoice.broker}
                </Text>
                <Collapse in={selectedInvoiceId === singleInvoice._id}>
                  <Box mx={4} px={5} my={5}>
                    <Invoice invoiceId={singleInvoice._id} />
                  </Box>
                </Collapse>
              </Flex>
            ))}
          </Grid>
        ) : (
          <Text>No invoices found.</Text>
        )}
      </Card>
    </Box>
  );
}

export default ViewInvoices;
