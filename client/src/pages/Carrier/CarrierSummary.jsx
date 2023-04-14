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
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
        {carriers &&
          carriers.map((carrier) => (
            <Card
              key={carrier._id}
              value={carrier._id}
              textAlign="center"
              p={{ base: 3, md: 8 }}
              rounded="2xl"
              boxShadow="lg"
              bg="brand.800"
              border="0.5px solid #98B5FF"
            >
              <CardBody textAlign="center">
                <Stack
                  spacing={{ base: 6, md: 12 }}
                  alignItems="center"
                  justifyContent="space-between"
                  direction={['column', 'row']}
                >
                  <Heading size="lg" color="brand.600">
                    {carrier.company}
                  </Heading>
                  <Text
                    mx={4}
                    fontSize="lg"
                    color="brand.600"
                    fontWeight="semibold"
                  >
                    MC Number:{' '}
                    <Text as="span" color="brand.500">
                      {' '}
                      {carrier.mcNumber}
                    </Text>
                  </Text>
                </Stack>
                <Stack spacing={4} mt={{ base: 4, md: 8 }}>
                  <Flex flexDir="column">
                    <Text mx={4} color="brand.500" fontSize="lg">
                      {carrier.fullName}
                    </Text>
                    <Text
                      as="span"
                      color="brand.500"
                      fontWeight="semibold"
                      fontSize="md"
                    >
                      Owner
                    </Text>
                  </Flex>
                </Stack>
              </CardBody>
              <Divider color="brand.500" />
              <CardFooter
                display="flex"
                flexDirection={{ base: 'column', md: 'row' }}
              >
                <Button
                  variant="solid"
                  bg="brand.600"
                  color="brand.800"
                  _hover={{ bg: 'brand.700', color: 'brand.500' }}
                  mb={{ base: '4', md: '0' }}
                  mr={{ md: '4' }}
                  flexGrow={{ base: '1', md: '0' }}
                  width={{ base: '100%', md: 'auto' }}
                  onClick={() => handleOpen(carrier, 'contactInfo')}
                >
                  Contact Info
                </Button>
                <Button
                  variant="ghost"
                  color="brand.400"
                  _hover={{ bg: 'brand.700', color: 'brand.500' }}
                  flexGrow={{ base: '1', md: '1' }}
                  display="flex"
                  justifyContent={{ base: 'center', md: 'flex-end' }}
                  alignItems="center"
                  width={{ base: '100%', md: 'auto' }}
                  mt={{ base: '4', md: '0' }}
                  onClick={() => handleOpen(carrier, 'carrierInvoices')}
                >
                  <HStack justifyContent="center" align="center">
                    <Icon
                      as={FaFileInvoiceDollar}
                      color="brand.500"
                      w={4}
                      h={4}
                      mr={1}
                      display={{ base: 'none', lg: 'inline-block' }}
                    />
                    <Text
                      display={{ base: 'none', lg: 'inline-block' }}
                      whiteSpace="nowrap"
                      mr={1}
                    >
                      Check Invoices
                    </Text>
                    <Icon
                      as={FaFileInvoiceDollar}
                      color="brand.500"
                      w={4}
                      h={4}
                      display={{
                        base: 'inline-block',
                        md: 'inline-block',
                        lg: 'none',
                      }}
                    />
                    <Text
                      display={{ base: 'inline-block', lg: 'none' }}
                      whiteSpace="nowrap"
                      mr={1}
                    >
                      Invoices
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
