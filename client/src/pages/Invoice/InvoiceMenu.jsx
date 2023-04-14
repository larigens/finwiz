import React from 'react';
import { Heading, Box, Text, Collapse, Link } from '@chakra-ui/react';
import NewInvoice from './NewInvoice';
import SearchInvoice from './SearchInvoice';

export const InvoiceMenu = ({
  handleShowClick,
  showInvoiceSummary,
  showInvoiceEntry,
}) => {
  return (
    <Box>
      <Heading size="md" textTransform="uppercase">
        Invoices
      </Heading>
      <Box pt={2}>
        <Link
          id="invoiceSummary"
          onClick={(event) => handleShowClick(event, 'invoiceSummary')}
          color="brand.500"
          _hover={{
            color: 'brand.600',
          }}
        >
          <Text size="xs">Search Invoice</Text>
        </Link>
        <Collapse in={showInvoiceSummary}>
          <Box mx={4} px={5} my={5}>
            <SearchInvoice />
          </Box>
        </Collapse>
      </Box>
      <Box pt={2}>
        <Link
          id="invoiceEntry"
          onClick={(event) => handleShowClick(event, 'invoiceEntry')}
          color="brand.500"
          _hover={{
            color: 'brand.600',
          }}
        >
          <Text size="xs">New Invoice</Text>
        </Link>
        <Collapse in={showInvoiceEntry}>
          <Box mx={4} px={5} my={5}>
            <NewInvoice />
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};
