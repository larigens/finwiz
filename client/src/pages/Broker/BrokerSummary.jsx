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
} from '@chakra-ui/react';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { useQuery } from '@apollo/client';
import { GET_ALL_BROKERS } from '../../utils/queries';

function BrokerSummary() {
  const { loading, data } = useQuery(GET_ALL_BROKERS);
  const brokers = data?.brokers;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 2, xl: 4 }} spacing={6}>
        {brokers &&
          brokers.map((broker) => (
            <Card
              key={broker._id}
              value={broker._id}
              textAlign="center"
              p={{ base: 2, md: 4 }}
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
                    {broker.name}
                  </Heading>
                  <Text
                    mx={4}
                    fontSize="sm"
                    color="brand.600"
                    fontWeight="semibold"
                  >
                    MC Number:{' '}
                    <Text as="span" color="brand.500">
                      {broker.mcNumber}
                    </Text>
                  </Text>
                  <Flex flexDir="column">
                    <Text mx={4} color="brand.500" fontSize="lg">
                      Credit Score:
                      <Text as="span" fontWeight="semibold" color="brand.600">
                        {' '}
                        {broker.creditScore}
                      </Text>
                    </Text>
                    <Text
                      as="span"
                      color="brand.500"
                      fontWeight="semibold"
                      fontSize="sm"
                    >
                      {broker.buy ? 'Buy' : 'No Buy'}
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
    </>
  );
}

export default BrokerSummary;
