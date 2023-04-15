import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

export const ModalComp = ({
  showModal,
  setShowModal,
  modalTitle,
  modalBody,
}) => {
  const handleCloseModal = () => setShowModal(false);

  return (
    <Modal isOpen={showModal} onClose={handleCloseModal} size="sm">
      <ModalOverlay />
      <ModalContent bg="brand.600">
        <ModalHeader color="brand.500" borderRadius="sm" fontSize="lg">
          {modalTitle}
        </ModalHeader>
        <ModalCloseButton color="brand.500" size="sm" />
        <ModalBody mt={1} color="brand.900" fontSize="sm">
          {modalBody}
        </ModalBody>
        <ModalFooter flexDirection="column">
          <Button
            size="sm"
            bg="brand.600"
            color="brand.500"
            _hover={{ bg: 'brand.500', color: 'brand.700' }}
            onClick={handleCloseModal}
            mt={2}
            width="100%"
          >
            Ok
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
