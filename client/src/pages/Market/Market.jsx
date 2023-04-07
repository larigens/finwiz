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
  ButtonGroup,
  Button,
  Icon,
} from '@chakra-ui/react';
import { SearchIcon, BellIcon } from '@chakra-ui/icons';
import { TfiReceipt, TfiShoppingCartFull } from 'react-icons/tfi';
import { products } from './products/product-data';
import Product from './products/product-card';

function Market() {
  return (
    <>
      <Helmet>
        <title>WizMarket</title>
      </Helmet>
      <Heading
        as="h1"
        className="fs-heading gradient-dark"
        textAlign="center"
        mt={7}
        mb={2}
        // color="brand.800"
        // bg="brand.600"
      >
        WizMarket
      </Heading>
      <Box bg="brand.600">
        <Flex justifyContent="space-between" alignItems="center" p={10}>
          <FormControl id="search" mr={2} textAlign="center" w="50%">
            <Flex>
              <Input
                type="text"
                placeholder="Search"
                size="sm"
                className="search-bar"
                rounded="2xl"
              />
              <HStack spacing={2} ms={2}>
                <BellIcon w={5} h={5} color="brand.800"></BellIcon>
                <SearchIcon w={5} h={5} color="brand.800"></SearchIcon>
              </HStack>
            </Flex>
          </FormControl>
          <ButtonGroup spacing="2">
            <Button
              variant="ghost"
              color="brand.600"
              _hover={{ bg: 'brand.800', color: 'brand.500' }}
            >
              <Icon as={TfiReceipt} color="brand.800" w={6} h={6} m={1} />
              Orders
            </Button>
            <Button
              variant="ghost"
              color="brand.600"
              _hover={{ bg: 'brand.800', color: 'brand.500' }}
            >
              <Icon
                as={TfiShoppingCartFull}
                color="brand.800"
                w={6}
                h={6}
                m={1}
              />
              Cart
            </Button>
          </ButtonGroup>
        </Flex>
      </Box>
      <Flex align="center" justify="space-between" wrap="wrap">
        {products.map((product, index) => (
          <Card
            key={index}
            maxW="sm"
            mx={5}
            p={1}
            flex="1"
            rounded="2xl"
            bg="brand.800"
            textAlign="center"
          >
            <Product product={product} />
          </Card>
        ))}
      </Flex>
    </>
  );
}

export default Market;
