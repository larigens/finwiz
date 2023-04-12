import React from 'react';
import {
  Button,
  Alert,
  AlertIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { REMOVE_INVOICE } from '../../utils/mutations';

export default function DeleteInvoice({
  invoice,
  deleteInvoice,
  setDeleteInvoice,
  onClose,
  isOpen,
}) {
  const [removeInvoice, { error }] = useMutation(REMOVE_INVOICE, {
    variables: { invoiceId: invoice._id }
  });

  const handleDelete = async () => {
    try {
      await removeInvoice();
      onClose();
      setDeleteInvoice(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {deleteInvoice ? (
        <>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg="brand.600">
              <ModalHeader color="brand.500" borderRadius="sm">
                Delete Invoice
              </ModalHeader>
              <ModalCloseButton color="brand.500" />
              <ModalBody mt={1} color="brand.900">
                Are you sure you want to delete this invoice?
              </ModalBody>
              <ModalFooter>
                <Button
                  size="md"
                  bg="brand.600"
                  color="brand.500"
                  _hover={{ bg: 'brand.500', color: 'brand.700' }}
                  onClick={() => setDeleteInvoice(false)}
                >
                  Cancel
                </Button>
                <Button
                  size="md"
                  bg="brand.600"
                  color="brand.500"
                  _hover={{ bg: 'red', color: 'brand.500' }}
                  ml={3}
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          {error && (
            <Alert status="error" mt={5}>
              <AlertIcon />
              {error.message}
            </Alert>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
