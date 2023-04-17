import React, { useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { GET_INVOICE_BY_NUMBER } from '../../utils/queries';
import EditInvoice from './EditInvoice';
import DeleteInvoice from './DeleteInvoice';
import SettleInvoice from './SettleInvoice';

function ViewInvoice({ invoiceNumberData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [deleteInvoice, setDeleteInvoice] = useState(false);
  const [settleInvoice, setSettleInvoice] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { loading, data } = useQuery(GET_INVOICE_BY_NUMBER, {
    variables: { invoiceNumber: invoiceNumberData },
  });

  if (loading) {
    return <div>Loading...</div>;
  } else if (!loading && !data) {
    return <div>No invoice found!</div>;
  }

  const invoice = data?.invoiceByNumber;
  const carrierName = invoice?.carrier?.company || 'N/A';
  const brokerName = invoice?.broker?.name || 'N/A';
  console.log(data);

  const handleClick = (event, id) => {
    event.preventDefault();
    if (id === 'editBtn') {
      setIsEditing(true);
    } else if (id === 'deleteBtn') {
      onOpen();
      setDeleteInvoice(true);
    } else if (id === 'settleBtn') {
      setSettleInvoice(true);
    }
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
            <ButtonGroup mx={{ base: 0, md: 5 }}>
              <Button
                id="editBtn"
                onClick={(event) => handleClick(event, 'editBtn')}
                size={{ base: 'sm', md: 'md' }}
                bg="brand.600"
                color="brand.500"
                _hover={{ bg: 'brand.500', color: 'brand.700' }}
              >
                Edit
              </Button>
              <Button
                id="deleteBtn"
                onClick={(event) => handleClick(event, 'deleteBtn')}
                size={{ base: 'sm', md: 'md' }}
                bg="brand.600"
                color="brand.500"
                _hover={{ bg: 'brand.500', color: 'brand.700' }}
              >
                Delete
              </Button>
              <Button
                id="settleBtn"
                onClick={(event) => handleClick(event, 'settleBtn')}
                size={{ base: 'sm', md: 'md' }}
                bg="brand.600"
                color="brand.500"
                _hover={{ bg: 'brand.500', color: 'brand.700' }}
              >
                Settle
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
          <>
            {settleInvoice ? (
              <SettleInvoice
                invoice={invoice}
                settleInvoice={settleInvoice}
                setSettleInvoice={setSettleInvoice}
              />
            ) : null}
          </>
        </>
      )}
    </>
  );
}

export default ViewInvoice;
