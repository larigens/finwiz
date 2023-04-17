import React, { useState } from 'react';
import {
  CardBody,
  CardFooter,
  Button,
  Text,
  Divider,
  Stack,
  Heading,
  Icon,
  HStack,
  SimpleGrid,
  Card,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { useQuery } from '@apollo/client';
import { GET_ALL_CARRIERS } from '../../utils/queries';
import CarrierInvoices from './CarrierInvoices';

function CarrierSummary() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCarrier, setSelectedCarrier] = useState(null);
  const [viewInvoices, setViewInvoices] = useState(false);

  const { loading, data } = useQuery(GET_ALL_CARRIERS);
  const carriers = data?.carriers;

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleOpen = (carrier, id) => {
    if (id === 'contactInfo') {
      setSelectedCarrier(carrier);
      setIsOpen(true);
    } else if (id === 'carrierInvoices') {
      setSelectedCarrier(carrier);
      setViewInvoices(true);
    }
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 2, xl: 4 }} spacing={6}>
        {carriers &&
          carriers.map((carrier) => (
            <Card
              key={carrier._id}
              value={carrier._id}
              textAlign="center"
              p={{ base: 2, md: 6, lg: 8 }}
              rounded="2xl"
              boxShadow="lg"
              bg="brand.800"
              border="0.5px solid #98B5FF"
            >
              <CardBody textAlign="center">
                <Stack
                  spacing={{ base: 2, lg: 4 }}
                  alignItems="center"
                  justifyContent="center"
                  direction="column"
                >
                  <Heading
                    size={{ base: 'md', md: 'lg', lg: 'xl' }}
                    color="brand.600"
                  >
                    {carrier.company}
                  </Heading>
                  <Text
                    mx={4}
                    fontSize="sm"
                    color="brand.600"
                    fontWeight="semibold"
                  >
                    MC Number:{' '}
                    <Text as="span" color="brand.500">
                      {carrier.mcNumber}
                    </Text>
                  </Text>
                  <Flex flexDir="column">
                    <Text mx={4} color="brand.500" fontSize="sm">
                      {carrier.fullName}
                    </Text>
                    <Text
                      as="span"
                      color="brand.500"
                      fontWeight="semibold"
                      fontSize="xs"
                    >
                      Owner
                    </Text>
                  </Flex>
                </Stack>
              </CardBody>
              <Divider color="brand.500" />
              <CardFooter
                display="flex"
                flexDirection={{ base: 'column' }}
                justifyContent={{ base: 'center' }}
                alignItems={{ base: 'center' }}
                p={{ base: 2, md: 4 }}
              >
                <Button
                  variant="solid"
                  bg="brand.600"
                  color="brand.800"
                  _hover={{ bg: 'brand.700', color: 'brand.500' }}
                  my={{ base: '2' }}
                  mr={{ md: '2' }}
                  width={{ base: '100%', md: 'auto' }}
                  onClick={() => handleOpen(carrier, 'contactInfo')}
                >
                  Contact Info
                </Button>
                <Button
                  variant="ghost"
                  color="brand.400"
                  _hover={{ bg: 'brand.700', color: 'brand.500' }}
                  flexGrow={1}
                  display="flex"
                  justifyContent={{ base: 'center' }}
                  alignItems="center"
                  width={{ base: '100%', md: 'auto' }}
                  mt={{ base: '2' }}
                  onClick={() => handleOpen(carrier, 'carrierInvoices')}
                >
                  <HStack justifyContent="center" align="center">
                    <Icon
                      as={FaFileInvoiceDollar}
                      color="brand.500"
                      w={4}
                      h={4}
                    />
                    <Text whiteSpace="nowrap" mr={1} fontSize="sm">
                      Check Invoices
                    </Text>
                  </HStack>
                </Button>
              </CardFooter>
            </Card>
          ))}
      </SimpleGrid>
      {viewInvoices && (
        <CarrierInvoices
          selectedCarrier={selectedCarrier}
          viewInvoices={viewInvoices}
          setViewInvoices={setViewInvoices}
        />
      )}
      <>
        {selectedCarrier && (
          <Modal isOpen={isOpen} onClose={handleClose}>
            <ModalOverlay className="bg-trans" />
            <ModalContent bg="brand.800">
              <ModalHeader color="brand.500" borderRadius="sm">
                Contact Info
              </ModalHeader>
              <ModalCloseButton color="brand.500" />
              <ModalBody mt={1} color="brand.900">
                <Flex flexDir="row">
                  <Text
                    mx={4}
                    color="brand.500"
                    fontWeight="semibold"
                    fontSize="lg"
                  >
                    Email:
                  </Text>
                  <Text as="span" color="brand.500" fontSize="md">
                    {selectedCarrier.email}
                  </Text>
                </Flex>
                <Flex flexDir="row">
                  <Text
                    mx={4}
                    color="brand.500"
                    fontWeight="semibold"
                    fontSize="lg"
                  >
                    Phone:
                  </Text>
                  <Text as="span" color="brand.500" fontSize="md">
                    {selectedCarrier.phoneNumber}
                  </Text>
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </>
    </>
  );
}

export default CarrierSummary;
