import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
} from '@chakra-ui/react';
import { Form } from '../../components/Form/Form';
import { ModalComp } from '../../components/Modal/Modal';

export const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalBody, setModalBody] = useState('');

  const handleShowModal = (title, body) => {
    setModalTitle(title);
    setModalBody(body);
    setShowModal(true);
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
            <Form formRequest={'Contact'} handleShowModal={handleShowModal} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <ModalComp
        showModal={showModal}
        setShowModal={setShowModal}
        modalTitle={modalTitle}
        modalBody={modalBody}
      />
    </>
  );
};
