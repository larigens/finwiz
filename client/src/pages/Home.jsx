import React, { useState } from 'react';
import {
  FormLabel,
  Box,
  Container,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  FormHelperText,
  FormControl,
  Input,
  Textarea,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
} from '@chakra-ui/react';
import imgPlaceholder from '../assets/placeholder.png';
import { SearchIcon, BellIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

function Home() {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => setInput(e.target.value);

  return (
    <Container bg="brand.900" h="100%" maxW="100%" px={0}>
      <Flex h="100%">
        <Flex
          direction="column"
          align="center"
          justify="center"
          bg="white"
          w={{ base: '100%', sm: '20%' }}
          p={{ base: 4, sm: 8 }}
        >
          <Image
            src={imgPlaceholder}
            alt="bag of money"
            width="100%"
            maxWidth="320px"
            borderRadius='full'
          />
        </Flex>
        <Flex
          direction="column"
          bg="brand.900"
          w={{ base: '80%', sm: '80%' }}
          p={{ base: 4, sm: 3 }}
        >
          <Flex align="center" justify="space-between" p={2} mb={2}>
            <FormControl id="search" flex={1} mr={2}>
              <Input
                type="text"
                placeholder="Search"
                size="sm"
                className="search-bar"
              />
            </FormControl>
            <HStack spacing={2}>
              <BellIcon w={5} h={5} color="brand.600"></BellIcon>
              <SearchIcon w={5} h={5} color="brand.600"></SearchIcon>
            </HStack>
          </Flex>
          <Flex
            direction="column"
            align="center"
            justify="center"
            flex={1}
          >
            <Container className="main-page-content">
              <StatGroup>
                <Stat>
                  <StatLabel color="brand.600">Income</StatLabel>
                  <StatNumber color="brand.500">145,670</StatNumber>
                  <StatHelpText color="brand.500">
                    <StatArrow type='increase' color="brand.600" />
                    23.36%
                  </StatHelpText>
                </Stat>
                <Stat>
                  <StatLabel color="brand.600">Short-Payments</StatLabel>
                  <StatNumber color="brand.500">15</StatNumber>
                  <StatHelpText color="brand.500">
                    <StatArrow type='decrease' color="brand.600" />
                    9.05%
                  </StatHelpText>
                </Stat>
              </StatGroup>
            </Container>
          </Flex>

          <Flex direction="column" color='brand.500' p={2} flex={1} mt={2}>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'brand.800', color: 'white' }}>
                    <Box as="span" flex='1' textAlign='left'>
                      <Heading as="h3" size="md" mb={2}>
                        Contact Us
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel >
                  <Box as='form'>
                    <FormControl id="name" mb={3} isRequired>
                      <FormLabel>Name</FormLabel>
                      <Input type="text" placeholder="John Doe" size="sm" />
                    </FormControl>
                    <FormControl id="email" mb={3} isRequired>
                      <FormLabel>Email</FormLabel>
                      <Input
                        type="email"
                        placeholder="jdoe@example.com"
                        size="sm"
                        value={input}
                        onChange={handleInputChange}
                      />
                      <FormHelperText color='brand.600'>
                        Enter the email you'd like to receive the newsletter on.
                      </FormHelperText>
                    </FormControl>
                    <FormControl id="message" isRequired>
                      <FormLabel>Message</FormLabel>
                      <Textarea rows={6} placeholder="Type your message here" size="sm" />
                    </FormControl>
                    <Container mt={4} textAlign="center">
                      <Button type="submit" size="sm" color='brand.500' bg='brand.800' _hover={{ bg: 'brand.500', color: 'brand.800' }} >
                        Submit
                      </Button>
                    </Container>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Flex>
        </Flex>
      </Flex>
    </Container >
  );
}

export default Home;
