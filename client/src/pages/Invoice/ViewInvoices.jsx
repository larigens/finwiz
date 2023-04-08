import React from 'react';
import { Box, Text, Heading, Flex, Card, Grid } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { GET_ALL_INVOICES } from '../../utils/queries';
// import Invoice from './Invoice';
// import { BrowserRouter as Router } from 'react-router-dom';

function ViewInvoices() {
  const { loading, data } = useQuery(GET_ALL_INVOICES);
  const showAlert = !loading && !data;

  //   const getSingleInvoice = (invoiceId) => {
  //     return (
  //       <Router>
  //         <Invoice path="/invoices/:invoiceId" invoiceId={invoiceId} />
  //       </Router>
  //     );
  //   };

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
          <Flex direction="column">
            <Grid
              templateColumns={{ base: '1fr', md: 'repeat(6, 1fr)' }}
              alignItems="center"
              my={4}
            >
              <Heading
                as="h6"
                fontSize="lg"
                textAlign="center"
                px={2}
                color="brand.500"
              >
                Invoice Date
              </Heading>
              <Heading
                as="h6"
                fontSize="lg"
                textAlign="center"
                px={2}
                color="brand.500"
              >
                Invoice Number
              </Heading>
              <Heading
                as="h6"
                fontSize="lg"
                textAlign="center"
                px={2}
                color="brand.500"
              >
                Load Number
              </Heading>
              <Heading
                as="h6"
                fontSize="lg"
                textAlign="center"
                px={2}
                color="brand.500"
              >
                Amount
              </Heading>
              <Heading
                as="h6"
                fontSize="lg"
                textAlign="center"
                px={2}
                color="brand.500"
              >
                Carrier
              </Heading>
              <Heading
                as="h6"
                fontSize="lg"
                textAlign="center"
                px={2}
                color="brand.500"
              >
                Broker
              </Heading>
              {invoices.slice(0, 20).map((singleInvoice) => (
                <>
                  {/* <Link onClick={() => getSingleInvoice(singleInvoice._id)}>
                    {' '}
                    View{' '}
                  </Link> */}
                  <Text
                    textAlign="center"
                    key={singleInvoice._id}
                    value={singleInvoice._id}
                    color="brand.500"
                  >
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
                </>
              ))}
            </Grid>
          </Flex>
        ) : (
          <Text>No invoices found.</Text>
        )}
      </Card>
    </Box>
  );
}

export default ViewInvoices;
