import {
  Image,
  Flex,
  CardBody,
  CardFooter,
  Button,
  Text,
  Divider,
  Stack,
  Heading,
  Icon,
} from '@chakra-ui/react';
import { TfiShoppingCartFull } from 'react-icons/tfi';

function Product({ product }) {
  return (
    <>
      <CardBody textAlign="center">
        <Flex align="center" justify="center" h="240px">
          <Image
            src={product.image}
            alt={product.title}
            borderRadius="lg"
            objectFit="cover"
            maxH="100%"
            maxW="100%"
          />
        </Flex>
        <Stack mt="6" spacing="3">
          <Heading size="lg" color="brand.600">
            {product.title}
          </Heading>
          <Text color="brand.400">{product.description}</Text>
          <Text color="brand.500" fontSize="2xl">
            {product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider color="brand.500" />
      <CardFooter display="flex" flexDirection={{ base: 'column', md: 'row' }}>
        <Button
          variant="solid"
          bg="brand.600"
          color="brand.800"
          _hover={{ bg: 'brand.700', color: 'brand.500' }}
          mb={{ base: '4', md: '0' }}
          mr={{ md: '4' }}
          flexGrow="1"
        >
          Buy now
        </Button>
        <Button
          variant="ghost"
          color="brand.400"
          _hover={{ bg: 'brand.700', color: 'brand.500' }}
          flexGrow="1"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Flex justifyContent='center' align='center'>
            <Icon
              as={TfiShoppingCartFull}
              color="brand.500"
              w={4}
              h={4}
              mr={1}
              display={{ base: 'none', md: 'inline-block' }}
            />
            <Text
              display={{ base: 'none', md: 'inline-block' }}
              whiteSpace="nowrap"
              mr={1}
            >
              Add to cart
            </Text>
            <Icon
              as={TfiShoppingCartFull}
              color="brand.500"
              w={4}
              h={4}
              display={{ base: 'inline-block', md: 'none' }}
            />
          </Flex>
        </Button>
      </CardFooter>
    </>
  );
}

export default Product;
