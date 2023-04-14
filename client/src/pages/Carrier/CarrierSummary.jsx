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
import { TfiShoppingCartFull } from 'react-icons/tfi';
import { useQuery } from '@apollo/client';
import { GET_ALL_CARRIERS } from '../../utils/queries';

function CarrierSummary() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCarrier, setSelectedCarrier] = useState(null);
  const { loading, data } = useQuery(GET_ALL_CARRIERS);
  const carriers = data?.carriers;

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleOpen = (carrier) => {
    setSelectedCarrier(carrier);
    setIsOpen(true);
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
                <Stack mt="6" spacing="3">
                  <Heading size="lg" color="brand.600">
                    {carrier.company}
                  </Heading>
                  <Text mx={4} fontSize="lg" color="brand.600">
                    MC Number:{' '}
                    <Text as="span" color="brand.500">
                      {' '}
                      {carrier.mcNumber}
                    </Text>
                  </Text>
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
                  onClick={() => handleOpen(carrier)}
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
                >
                  <HStack justifyContent="center" align="center">
                    <Icon
                      as={TfiShoppingCartFull}
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
                      as={TfiShoppingCartFull}
                      color="brand.500"
                      w={4}
                      h={4}
                      display={{
                        base: 'inline-block',
                        md: 'inline-block',
                        lg: 'none',
                      }}
                    />
                  </HStack>
                </Button>
              </CardFooter>
            </Card>
          ))}
      </SimpleGrid>
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
  );
}

export default CarrierSummary;
