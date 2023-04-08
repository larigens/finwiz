import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Card,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Link,
  Collapse,
} from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { AgingChart } from './Charts/AgingChart';
import Invoice from './Invoice/Invoice';

function Dashboard() {
  const { loading, data } = useQuery(GET_ME);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [showInvoiceEntry, setShowInvoiceEntry] = useState(false);

  const handleAnalysisClick = () => {
    setShowAnalysis(!showAnalysis);
  };

  const handleInvoiceEntryClick = () => {
    setShowInvoiceEntry(!showInvoiceEntry);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Stack spacing="6" bg="brand.600" mt={8}>
        <Card bg="brand.800" color="brand.500" p={1} m={3} borderRadius="2xl">
          <CardHeader>
            <Heading size="md">
              {data ? `${data.me.fullName}'s Report` : 'Reports'}
            </Heading>
          </CardHeader>

          <Stack divider={<StackDivider />} spacing="4" p="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Summary
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your invoices over the last month.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Overview
              </Heading>
              <Text pt="2" fontSize="sm">
                Check out the overview of your favorite brokers.
              </Text>
            </Box>
            <Box>
              <Link
                onClick={handleAnalysisClick}
                color="brand.500"
                _hover={{
                  color: 'brand.600',
                }}
              >
                <Heading size="xs" textTransform="uppercase">
                  Analysis
                </Heading>
              </Link>
              <Text pt="2" fontSize="sm">
                See a detailed analysis of all your invoices.
              </Text>
              <Box mt={1} mx={{ base: 1, md: 10 }} px={{ base: 4, md: 10 }}>
                <Collapse in={showAnalysis}>
                  <Box mx='auto' style={{ height: '300px'}}>
                    <AgingChart />
                  </Box>
                </Collapse>
              </Box>
            </Box>
            <Box>
              <Link
                onClick={handleInvoiceEntryClick}
                color="brand.500"
                _hover={{
                  color: 'brand.600',
                }}
              >
                <Heading size="xs" textTransform="uppercase">
                  Invoice Entry
                </Heading>
              </Link>
              <Text pt="2" fontSize="sm">
                Add a new invoice to your list.
              </Text>
              <Collapse in={showInvoiceEntry}>
                <Box mx={4} px={5} my={5}>
                  <Invoice />
                </Box>
              </Collapse>
            </Box>
          </Stack>
        </Card>
        {/* Add more cards or sections here as needed */}
      </Stack>
    </>
  );
}

export default Dashboard;
