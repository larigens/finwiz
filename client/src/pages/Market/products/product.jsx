import {
  Image,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
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
      <CardBody h="320px" textAlign="center">
        <Image
          src={product.image}
          alt={product.title}
          borderRadius="lg"
          h="240px"
          objectFit="cover"
          textAlign="center"
          ms={3}
        />
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
      <CardFooter>
        <ButtonGroup spacing="14">
          <Button
            variant="solid"
            bg="brand.600"
            color="brand.800"
            _hover={{ bg: 'brand.700', color: 'brand.500' }}
          >
            Buy now
          </Button>
          <Button
            variant="ghost"
            color="brand.400"
            _hover={{ bg: 'brand.700', color: 'brand.500' }}
          >
            <Icon
              as={TfiShoppingCartFull}
              color="brand.500"
              w={4}
              h={4}
              m={1}
            />
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </>
  );
}

export default Product;
