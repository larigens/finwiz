import React, { useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import {
  GET_INVOICE_BY_NUMBER,
  GET_BROKER_BY_ID,
  GET_CARRIER_BY_ID,
} from '../../utils/queries';
import EditInvoice from './EditInvoice';
import DeleteInvoice from './DeleteInvoice';

function ViewInvoice({ invoiceNumberData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [deleteInvoice, setDeleteInvoice] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { loading, data: invoiceData } = useQuery(GET_INVOICE_BY_NUMBER, {
    variables: { invoiceNumber: invoiceNumberData },
  });

  const { loading: carrierLoading, data: carrierData } = useQuery(
    GET_CARRIER_BY_ID,
    {
      skip: !invoiceData?.invoiceByNumber?.carrier._id,
      variables: { carrierId: invoiceData?.invoiceByNumber?.carrier?._id },
    },
  );

  const { loading: brokerLoading, data: brokerData } = useQuery(
    GET_BROKER_BY_ID,
    {
      skip: !invoiceData?.invoiceByNumber?.broker._id,
      variables: { brokerId: invoiceData?.invoiceByNumber?.broker?._id },
    },
  );

  if (loading || brokerLoading || carrierLoading) {
    return <div>Loading...</div>;
  }

  if (!invoiceData?.invoiceByNumber) {
    return <div>No invoice found!</div>;
  }

  const invoice = invoiceData.invoiceByNumber;
  const carrierName = carrierData?.carrier?.company || 'N/A';
  const brokerName = brokerData?.broker?.name || 'N/A';

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    onOpen();
    setDeleteInvoice(true);
  };

  return (
    <>
      {isEditing ? (
        <EditInvoice
          invoice={invoice}
          carrierName={carrierName}
          brokerName={brokerName}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      ) : (
        <>
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
            <Text mb={2} color="brand.600" fontWeight="bold">
              Carrier:
              <Text as="span" mx={1} color="brand.500" fontWeight="normal">
                {carrierName}
              </Text>
            </Text>
            <Text mb={2} color="brand.600" fontWeight="bold">
              Broker:
              <Text as="span" mx={1} color="brand.500" fontWeight="normal">
                {brokerName}
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
                onClick={handleDeleteClick}
                size="md"
                bg="brand.600"
                color="brand.500"
                _hover={{ bg: 'brand.500', color: 'brand.700' }}
              >
                Delete
              </Button>
            </ButtonGroup>
          </Box>
          {deleteInvoice ? (
            <DeleteInvoice
              invoice={invoice}
              deleteInvoice={deleteInvoice}
              setDeleteInvoice={setDeleteInvoice}
              onClose={onClose}
              isOpen={isOpen}
            />
          ) : null}
        </>
      )}
    </>
  );
}

export default ViewInvoice;
