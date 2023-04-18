import React, { useState } from 'react';
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
          <Text pt="2" fontSize="sm">
            View a summary of all brokers.
          </Text>
        </Link>
        <Collapse in={showBrokers}>
          <Box mx={4} px={5} my={5} align="center">
            <BrokerSummary />
          </Box>
        </Collapse>
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
          <Text pt="2" fontSize="sm">
            Check out the overview of your favorite brokers.
          </Text>
        </Link>
        <Box mx={4} px={5} my={5}>
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
          <Text pt="2" fontSize="sm">
            See a detailed analysis of all your invoices.
          </Text>
        </Link>
        <Box mx={4} px={5} my={5}>
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
          <Text pt="2" fontSize="sm">
            Add a new invoice to your list.
          </Text>
        </Link>
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
