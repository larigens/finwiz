import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Link,
  Collapse,
} from '@chakra-ui/react';
import { AgingChart } from '../Charts/AgingChart';
import Doughnutchart from '../Charts/Doughnutchart';
import NewInvoice from '../Invoice/NewInvoice';

function CarrierDashboard({ showInvoiceEntry, setShowInvoiceEntry }) {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const handleSummaryClick = () => {
    setShowSummary(!showSummary);
  };

  const handleAnalysisClick = () => {
    setShowAnalysis(!showAnalysis);
  };

  const handleInvoiceEntryClick = () => {
    setShowInvoiceEntry(!showInvoiceEntry);
  };

  return (
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
        <Link
          onClick={handleSummaryClick}
          color="brand.500"
          _hover={{
            color: 'brand.600',
          }}
        >
          <Heading size="xs" textTransform="uppercase">
            Overview
          </Heading>
        </Link>
        <Text pt="2" fontSize="sm">
          Check out the overview of your favorite brokers.
        </Text>
        <Box mt={1} mx={{ base: 1, md: 10 }} px={{ base: 4, md: 10 }}>
          <Collapse in={showSummary}>
            <Box mx="auto" style={{ height: '400px' }} align="center">
              <Doughnutchart />
            </Box>
          </Collapse>
        </Box>
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
            <Box mx="auto" style={{ height: '400px' }}>
              <AgingChart />
            </Box>
          </Collapse>
        </Box>
      </Box>
      <Box>
        <Link
          as={RouterLink}
          to="/payment "
          color="brand.500"
          _hover={{
            color: 'brand.600',
          }}
        >
          <Heading size="xs" textTransform="uppercase">
            Payment
          </Heading>
        </Link>
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
            <NewInvoice />
          </Box>
        </Collapse>
      </Box>
    </Stack>
  );
}

export default CarrierDashboard;
