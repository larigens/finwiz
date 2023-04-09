import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  FormErrorMessage,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';
import Invoice from './Invoice';

function SearchInvoice() {
  const [invoiceNumberData, setInvoiceNumberData] = useState('');
  const [showInvoice, setShowInvoice] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    if (invoiceNumberData) {
      setShowInvoice(true);
    }
  };

  const handleInputChange = (event) => {
    setInvoiceNumberData(parseInt(event.target.value));
  };

  return (
    <Box
      as="form"
      rounded="2xl"
      boxShadow="md"
      bg="brand.800"
      textAlign="center"
      px={{ base: 3, md: 10 }}
      py={{ base: 5, md: 10 }}
    >
      <FormControl isRequired mt={4}>
        <FormLabel htmlFor="password" color="brand.500">
          Invoice Number
        </FormLabel>
        <InputGroup size="md">
          <Input
            type="number"
            name="invoiceNumber"
            value={invoiceNumberData}
            onChange={handleInputChange}
          />
          <InputRightElement width="5rem">
            <Button
              mx={2}
              size="sm"
              onClick={handleClick}
              bg="brand.600"
              color="brand.500"
              _hover={{ bg: 'brand.500', color: 'brand.700' }}
            >
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>
          <WarningTwoIcon w={6} h={6} color="red.500" /> Invoice Number is
          required!
        </FormErrorMessage>
      </FormControl>
      {showInvoice ? (
        <Box my={4}>
          <Invoice invoiceNumberData={invoiceNumberData} />
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
}

export default SearchInvoice;
