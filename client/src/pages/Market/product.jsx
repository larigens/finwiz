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
} from '@chakra-ui/react';

function Product({ product }) {
  return (
    <>
      <CardBody h="320px">
        <Image
          src={product.image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          h="240px"
          objectFit="cover"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.title}</Heading>
          <Text>{product.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            {product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
      <Divider />
    </>
  );
}

export default Product;
