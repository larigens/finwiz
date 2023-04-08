import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Grid,
  GridItem,
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
  Text,
  Button,
  Heading,
  Image,
} from '@chakra-ui/react';
import money from '../assets/money.gif';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import About from './About/About';
import { Helmet } from 'react-helmet-async';

function Home() {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => setInput(e.target.value);

  return (
    <>
      <Helmet>
        <title>FinWiz</title>
      </Helmet>
      <Grid
        mt={{ base: 2, md: 4 }}
        templateRows={{ base: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)' }}
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(6, 1fr)' }}
        gap={2}
      >
        <GridItem
          colSpan={{ base: 1, md: 1 }}
          bg="brand.600"
          align="center"
          m={5}
        >
          <Image
            m={{ base: 2, md: 10 }}
            src={money}
            alt="bag of money"
            width="100%"
            maxWidth={{ base: '150px', md: '320px' }}
            borderRadius="full"
          />
          <StatGroup
            mt={{ base: 10, md: 15 }}
            ms={{ base: 0, md: 8 }}
            p={2}
            alignItems="baseline"
          >
            <Stat mt={10}>
              <StatLabel color="brand.800">Income</StatLabel>
              <StatNumber color="brand.500">$145,670</StatNumber>
              <StatHelpText color="brand.500">
                <StatArrow type="increase" color="brand.800" />
                23.36%
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel color="brand.800">Short-Payments</StatLabel>
              <StatNumber color="brand.500">15</StatNumber>
              <StatHelpText color="brand.500">
                <StatArrow type="decrease" color="brand.800" />
                9.05%
              </StatHelpText>
            </Stat>
          </StatGroup>
        </GridItem>
        <GridItem
          colSpan={{ base: 1, md: 5 }}
          colStart={{ base: 1, md: 2 }}
          rowSpan={{ base: 1, md: 1 }}
          bg="brand.600"
          p={{ base: 2, md: 7 }}
          ms={{ base: 2, md: 8 }}
        >
          <Accordion defaultIndex={[0]} allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton
                  color='brand.800'
                  _expanded={{ bg: 'brand.600', color: 'white' }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    <Heading as="h2" size="md" mb={{ base: 2, md: 0 }} py={2}>
                      About Us
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <About />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  color='brand.800'
                  _expanded={{ bg: 'brand.600', color: 'white' }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    <Heading as="h2" size="md" mb={{ base: 2, md: 0 }} py={2} >
                      Contact Us
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Heading as="h2" size="md" mb={{ base: 2, md: 4 }} py={2} color='brand.800'>
                  FAQ
                </Heading>
                <Accordion
                  defaultIndex={[0]}
                  allowMultiple
                  py={{ base: 2, md: 5 }}
                >
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          color='brand.800'
                          fontWeight='bold'
                          mt={2}
                        >
                          General Questions
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} className="light" fontWeight='bold'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          color='brand.800'
                          fontWeight='bold'
                          mt={2}
                        >
                          <Text display='inline-flex'> Join the </Text>
                          <RouterLink to="/signup" >
                            <Text display='inline-flex' ms={1} color="brand.800" _hover={{ bgGradient: 'linear(to-r, brand.800, brand.700, brand.800)', bgClip: 'text' }}> FinWiz Squad </Text>
                          </RouterLink>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} className="light" fontWeight='bold'>
                      Let's get this money party started! Register now and let the wiz work its magic on your finances!
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Box as="form" bg="brand.800" p={4} className="radius-15">
                  <FormControl id="name" mb={{ base: 3, md: 3 }} isRequired>
                    <FormLabel className="light">Name</FormLabel>
                    <Input type="text" placeholder="John Doe" size="sm" />
                  </FormControl>
                  <FormControl id="email" mb={{ base: 3, md: 3 }} isRequired>
                    <FormLabel className="light">Email</FormLabel>
                    <Input
                      type="email"
                      placeholder="jdoe@example.com"
                      size="sm"
                      value={input}
                      onChange={handleInputChange}
                    />
                    <FormHelperText color="brand.600">
                      Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                  </FormControl>
                  <FormControl id="message" isRequired>
                    <FormLabel className="light">Message</FormLabel>
                    <Textarea
                      rows={6}
                      placeholder="Type your message here"
                      size="sm"
                    />
                  </FormControl>
                  <Container mt={{ base: 2, md: 4 }} textAlign="center">
                    <Button
                      type="submit"
                      size="sm"
                      color="brand.500"
                      bg="brand.600"
                      _hover={{ bg: 'brand.700', color: 'brand.500' }}
                    >
                      Submit
                    </Button>
                  </Container>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </GridItem>
      </Grid>
    </>
  );
}

export default Home;
