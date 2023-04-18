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
import { AgingChart } from '../../components/Charts/AgingChart';
import Doughnutchart from '../../components/Charts/Doughnutchart';
import NewInvoice from '../Invoice/NewInvoice';
import BrokerSummary from '../Broker/BrokerSummary';

function CarrierDashboard({ showInvoiceEntry, setShowInvoiceEntry }) {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [showBrokers, setShowBrokers] = useState(false);

  const handleBrokerSummaryClick = () => {
    setShowBrokers(!showBrokers);
  };

  const handleOverviewClick = () => {
    setShowOverview(!showOverview);
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
        <Link
          onClick={handleBrokerSummaryClick}
          color="brand.500"
          _hover={{
            color: 'brand.600',
          }}
        >
          <Heading size="md" textTransform="uppercase">
            Brokers
          </Heading>
        </Link>
        <Text pt="2" fontSize="sm">
          View a summary of all brokers.
        </Text>
        <Box my={3} mx={{ base: 1, md: 10 }} px={{ base: 4, md: 10 }}>
          <Collapse in={showBrokers}>
            <Box mx="auto" my="auto" align="center">
              <BrokerSummary />
            </Box>
          </Collapse>
        </Box>
      </Box>
      <Box>
        <Link
          onClick={handleOverviewClick}
          color="brand.500"
          _hover={{
            color: 'brand.600',
          }}
        >
          <Heading size="md" textTransform="uppercase">
            Overview
          </Heading>
        </Link>
        <Text pt="2" fontSize="sm">
          Check out the overview of your favorite brokers.
        </Text>
        <Box mt={1} mx={{ base: 1, md: 10 }} px={{ base: 4, md: 10 }}>
          <Collapse in={showOverview}>
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
          <Heading size="md" textTransform="uppercase">
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
        <Heading size="md" textTransform="uppercase">
          Invoices
        </Heading>
      </Box>
      <Box>
        <Link
          onClick={handleInvoiceEntryClick}
          color="brand.500"
          _hover={{
            color: 'brand.600',
          }}
        >
          <Heading size="md" textTransform="uppercase">
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
