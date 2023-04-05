import { Helmet } from 'react-helmet-async';
import React from 'react';
import {
  Card,
  Box,
  FormControl,
  Input,
  Heading,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { SearchIcon, BellIcon } from '@chakra-ui/icons';
import { products } from './data/products';
import Product from './product';

function Market() {
  return (
    <>
      <Helmet>
        <title>WizMarket</title>
      </Helmet>
      <Heading as="h1" textAlign="center" mt={7} mb={2} color="brand.700">
        WizMarket
      </Heading>
      <Box>
        <Flex align="center" justify="space-between" p={7} mb={2}>
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
      </Box>
      <Flex align="center" justify="space-between" wrap="wrap">
        {products.map((product, index) => (
          <Card key={index} maxW="sm" mx={5} p={1} flex="1">
            <Product product={product} />
          </Card>
        ))}
      </Flex>
    </>
  );
}

export default Market;
