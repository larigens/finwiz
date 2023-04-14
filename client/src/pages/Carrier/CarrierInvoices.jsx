import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Box,
  Text,
} from '@chakra-ui/react';

export default function CarrierInvoices({
  selectedCarrier,
  viewInvoices,
  setViewInvoices,
}) {
  const handleClose = () => {
    setViewInvoices(false);
  };

  console.log(selectedCarrier);

  return (
    <Drawer isOpen={viewInvoices} placement="right" onClose={handleClose}>
      <DrawerOverlay />
      <DrawerContent bg="brand.800">
        <DrawerCloseButton color="brand.500" />
        <DrawerHeader>
          <Text size="md" color="brand.500" pt={2}>
            {' '}
            {selectedCarrier.company} Invoices
          </Text>
        </DrawerHeader>

        <DrawerBody bg="brand.800">
          <Stack spacing="24px">
            {selectedCarrier.invoices.map((invoice) => (
              <Box
                key={invoice._id}
                value={invoice._id}
                p={{ base: 3, md: 4 }}
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
              </Box>
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
