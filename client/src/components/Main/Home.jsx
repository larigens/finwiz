import React, { useState } from 'react';
import {
  FormLabel,
  Box,
  Container,
  FormControl,
  Input,
  Textarea,
  Select,
  Button,
  Heading,
} from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { About } from '../../pages/About/About';
import { Helmet } from 'react-helmet-async';
function Home() {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => setInput(e.target.value);

  return (
    <>
      <Helmet>
        <title>FinWiz</title>
      </Helmet>

      <Box mx={3} bg="brand.800" minHeight="600px" borderRadius="md">
        <About />
      </Box>
      <Accordion allowToggle my={12} mx={3}>
        <AccordionItem>
          <h2>
            <AccordionButton
              color="brand.800"
              _expanded={{ bg: 'brand.600', color: 'white' }}
            >
              <Box as="span" flex="1" textAlign="left">
                <Heading as="h2" size="md" mb={{ base: 2, md: 0 }} py={2}>
                  Contact Us
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Box as="form" bg="brand.800" className="radius-15" p={6}>
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
                  mb={5}
                  cursor="pointer"
                  color="brand.500"
                  size="md"
                >
                  <option value="feedback">Feedback</option>
                  <option value="question">General Question</option>
                  <option value="signup">Sign Up</option>
                </Select>
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
    </>
  );
}

export default Home;
