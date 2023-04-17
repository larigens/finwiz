import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Select,
  Heading,
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Payment() {
  const [expiryDate, setExpiryDate] = useState(null);

  const handleDateChange = (date) => {
    setExpiryDate(date);
  };
  return (
    <Box
      px={{ base: 3, md: 10 }}
      mx={{ base: 3, md: 10 }}
      py={5}
      bg="brand.600"
      textAlign="center"
    >
      <Box
        as="form"
        py={{ base: 6, md: 10 }}
        px={{ base: 3, md: 6 }}
        rounded="2xl"
        boxShadow="md"
        bg="brand.800"
      >
        <Heading
          as="h1"
          size={{ base: 'lg', md: '2xl' }}
          color="brand.500"
          mb={8}
        >
          Pay With Card
        </Heading>
        <FormControl isRequired mb={{ base: 2, md: 5 }}>
          <FormLabel htmlFor="email" color="brand.500">
            Email
          </FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="example@email.com"
            name="email"
            py={2}
          />
        </FormControl>
        <FormControl isRequired mb={{ base: 2, md: 5 }}>
          <FormLabel htmlFor="cardholderName" color="brand.500">
            Cardholder Name
          </FormLabel>
          <Input
            type="text"
            id="cardholderName"
            name="cardholderName"
            placeholder="John Doe"
            py={2}
            size="md"
          />
        </FormControl>
        <FormControl isRequired mb={{ base: 2, md: 5 }}>
          <FormLabel htmlFor="cardNumber" color="brand.500">
            Card Number
          </FormLabel>
          <Input
            type="number"
            id="cardNumber"
            name="cardNumber"
            placeholder="1234 1234 1234 1234"
            py={2}
            size="md"
          />
        </FormControl>
        <FormControl isRequired mr={{ base: 0, md: 2 }} mb={{ base: 2, md: 5 }}>
          <FormLabel htmlFor="expiryDate" color="brand.500">
            Expiration Date
          </FormLabel>
          <DatePicker
            selected={expiryDate}
            onChange={handleDateChange}
            dateFormat="MM/YY"
            showMonthYearPicker
            className="background-dark light"
          />
        </FormControl>
        <FormControl isRequired mb={{ base: 2, md: 5 }}>
          <FormLabel htmlFor="cvc" color="brand.500">
            CVC
          </FormLabel>
          <Input type="number" id="cvc" name="cvc" py={2} max={4} size="md" />
        </FormControl>
        <FormControl isRequired mb={{ base: 2, md: 5 }}>
          <FormLabel htmlFor="country" color="brand.500">
            Country or region
          </FormLabel>
          <Select
            id="country"
            name="country"
            isRequired
            py={2}
            size="md"
            color="brand.500"
          >
            <option value="usa">USA</option>
            <option value="other1">Other 1</option>
            <option value="other2">Other 2</option>
            <option value="other3">Other 3</option>
            <option value="other3">Other 3</option>
          </Select>
        </FormControl>
        <Container className="text-center" mt={10} mb={3}>
          <Button
            bg="brand.600"
            color="brand.500"
            _hover={{ bg: 'brand.700', color: 'brand.500' }}
          // onClick={handleFormSubmit}
          >
            Submit
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

export default Payment;

