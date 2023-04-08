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
import { useQuery } from '@apollo/client';
import { GET_ME } from '../../utils/queries';
import NewInvoice from '../Invoice/NewInvoice';
import ViewInvoices from '../Invoice/ViewInvoices';

function Employee() {
  const { loading, data } = useQuery(GET_ME);
  const [showInvoiceSummary, setShowInvoiceSummary] = useState(false);
  const [showInvoiceEntry, setShowInvoiceEntry] = useState(false);

  const handleInvoiceSummaryClick = () => {
    setShowInvoiceSummary(!showInvoiceSummary);
  };

  const handleInvoiceEntryClick = () => {
    setShowInvoiceEntry(!showInvoiceEntry);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(data.me.role);

  return (
    <>
      <Stack divider={<StackDivider />} spacing="4" p="4">
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Carriers
          </Heading>
          <Text pt="2" fontSize="sm">
            View a summary of all carriers.
          </Text>
          <Text pt="2" fontSize="sm">
            New Carrier
          </Text>
          <Text pt="2" fontSize="sm">
            Update Carrier's Profile.
          </Text>
          <Text pt="2" fontSize="sm">
            Delete Carrier.
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Brokers
          </Heading>
          <Text pt="2" fontSize="sm">
            View a summary of all brokers.
          </Text>
          <Text pt="2" fontSize="sm">
            New Broker.
          </Text>
          <Text pt="2" fontSize="sm">
            Update Broker's Profile.
          </Text>
          <Text pt="2" fontSize="sm">
            Delete Broker.
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Invoices
          </Heading>
          <Box>
            <Link
              onClick={handleInvoiceSummaryClick}
              color="brand.500"
              _hover={{
                color: 'brand.600',
              }}
            >
              <Heading size="xs">Invoice Summary</Heading>
            </Link>
            <Collapse in={showInvoiceSummary}>
              <Box mx={4} px={5} my={5}>
                <ViewInvoices />
              </Box>
            </Collapse>
          </Box>
          <Box>
            <Link
              onClick={handleInvoiceEntryClick}
              color="brand.500"
              _hover={{
                color: 'brand.600',
              }}
            >
              <Heading size="xs">New Invoice</Heading>
            </Link>
            <Collapse in={showInvoiceEntry}>
              <Box mx={4} px={5} my={5}>
                <NewInvoice />
              </Box>
            </Collapse>
          </Box>
        </Box>
      </Stack>
    </>
  );
}

export default Employee;
