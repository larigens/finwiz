import React, { useState } from 'react';
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
  Button,
  Heading,
  Image,
} from '@chakra-ui/react';
import imgPlaceholder from '../assets/placeholder.png';
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
    <Container bg="brand.600" maxW="100%" h="100%">
      <Helmet>
        <title>FinWiz</title>
      </Helmet>
      <Grid
        mt={4}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem colSpan={1} bg="brand.600">
          <Image
            m={10}
            src={imgPlaceholder}
            alt="bag of money"
            width="100%"
            maxWidth="320px"
            borderRadius="full"
          />
        </GridItem>
        <GridItem colStart={1} colSpan={2} rowStart={2} bg="brand.600">
          <StatGroup mt={15} ms={8} p={6}>
            <Stat>
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
        <GridItem colSpan={4} colStart={3} rowSpan={2} bg="brand.600" p={7}>
          <Accordion defaultIndex={[0]} allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: 'brand.600', color: 'white' }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    <Heading as="h2" size="md" mb={2} py={2}>
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
                  _expanded={{ bg: 'brand.600', color: 'white' }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    <Heading as="h2" size="md" mb={2} py={2}>
                      Contact Us
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Box as="form" bg="brand.800" p={4} className="radius-15">
                  <FormControl id="name" mb={3} isRequired>
                    <FormLabel className="light">Name</FormLabel>
                    <Input type="text" placeholder="John Doe" size="sm" />
                  </FormControl>
                  <FormControl id="email" mb={3} isRequired>
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
                  <Container mt={4} textAlign="center">
                    <Button
                      type="submit"
                      size="sm"
                      color="brand.800"
                      bg="brand.500"
                      _hover={{ bg: 'brand.600', color: 'brand.500' }}
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
    </Container>
  );
}

export default Home;
