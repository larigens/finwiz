import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  FormLabel,
  Box,
  Container,
  FormControl,
  Input,
  Textarea,
  Select,
  Button,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

export const Contact = () => {
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    reason: '',
    message: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalBody, setModalBody] = useState('');

  const handleShowModal = (title, body) => {
    setModalTitle(title);
    setModalBody(body);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactFormData({ ...contactFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    handleShowModal(
      `Thank you ${contactFormData.name}!`,
      'I received your message and will respond within 24 hours!',
    );
    setContactFormData({
      name: '',
      email: '',
      reason: '',
      message: '',
    });
  };

  return (
    <>
      <Accordion allowToggle my={12} mx={3}>
        <AccordionItem>
          <AccordionButton
            color="brand.600"
            _expanded={{ bg: 'brand.600', color: 'brand.400' }}
          >
            <Box as="span" flex="1" textAlign="left">
              <Heading as="h2" size="md" mb={{ base: 2, md: 0 }} py={2}>
                Contact Us
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Box
              as="form"
              onSubmit={handleFormSubmit}
              rounded="md"
              boxShadow="md"
              bg="brand.800"
              textAlign="center"
              px={{ base: 3, md: 8 }}
              py={{ base: 5, md: 10 }}
            >
              {' '}
              <FormControl isRequired mb={5}>
                <FormLabel htmlFor="name" color="brand.500">
                  Name
                </FormLabel>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={contactFormData.name}
                  onChange={handleInputChange}
                  size="md"
                />
              </FormControl>
              <FormControl isRequired mb={5}>
                <FormLabel htmlFor="email" color="brand.500">
                  Email
                </FormLabel>
                <Input
                  type="email"
                  id="email"
                  placeholder="jdoe@example.com"
                  name="email"
                  onChange={handleInputChange}
                  value={contactFormData.email}
                  size="md"
                />
              </FormControl>
              <FormControl isRequired mb={5}>
                <FormLabel htmlFor="role" color="brand.500">
                  Reason
                </FormLabel>
                <Select
                  id="reason"
                  placeholder="Select reason"
                  name="reason"
                  isRequired
                  onChange={handleInputChange}
                  value={contactFormData.reason}
                  mb={5}
                  cursor="pointer"
                  color="brand.500"
                  size="md"
                  fontSize="sm"
                >
                  <option value="feedback">Feedback</option>
                  <option value="question">General Question</option>
                  <option value="signup">Sign Up</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel className="light">Message</FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="I am contacting you because..."
                  size="sm"
                  onChange={handleInputChange}
                  value={contactFormData.message}
                />
              </FormControl>
              <Container mt={{ base: 2, md: 4 }} textAlign="center">
                <Button
                  type="submit"
                  bg="brand.600"
                  color="brand.500"
                  _hover={{ bg: 'brand.700', color: 'brand.500' }}
                  mt={5}
                  ms={1}
                  isDisabled={
                    !(
                      contactFormData.name &&
                      contactFormData.email &&
                      contactFormData.reason &&
                      contactFormData.message
                    )
                  }
                  size="md"
                  width={{ base: 'full', md: 'auto' }}
                >
                  Submit
                </Button>
              </Container>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
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
    </>
  );
};
