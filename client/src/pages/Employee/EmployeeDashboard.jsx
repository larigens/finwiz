import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';

function EmployeeDashboard() {
  return (
    <Stack
      bg="brand.800"
      p={10}
      spacing={6}
      borderRadius="lg"
      boxShadow="lg"
      mt={5}
      mx={4}
    >
      <Stack spacing={4}>
        <FormControl>
          <FormLabel color="brand.500" fontSize="xl">
            Search Invoices, Brokers and Carriers
          </FormLabel>
          <Input
            type="search"
            size="lg"
            borderRadius="full"
            bg="brand.800"
            color="brand.500"
          />
        </FormControl>
        <Button
          bg="brand.600"
          color="brand.500"
          _hover={{ bg: 'brand.700', color: 'brand.500' }}
          borderRadius="full"
        >
          Search
        </Button>
      </Stack>

      <Stack spacing={6}>
        <FormControl>
          <FormLabel color="white" fontSize="xl">
            Add new Invoice
          </FormLabel>
          <Input
            type="text"
            size="lg"
            borderRadius="full"
            bg="brand.800"
            borderWidth="1px"
            borderColor="brand.700"
            color="brand.500"
          />
        </FormControl>
        <Button
          bg="brand.600"
          color="brand.500"
          _hover={{ bg: 'brand.700', color: 'brand.500' }}
          borderRadius="full"
        >
          {' '}
          Add
        </Button>
      </Stack>

      <Stack spacing={6}>
        <FormControl>
          <FormLabel color="white" fontSize="xl">
            Update/Delete Invoice
          </FormLabel>
          <Input
            type="text"
            size="lg"
            borderRadius="full"
            bg="brand.800"
            borderWidth="1px"
            borderColor="brand.700"
            color="brand.500"
          />
        </FormControl>
        <Stack direction={['column', 'row']} spacing={4}>
          <Button
            bg="brand.600"
            color="brand.500"
            _hover={{ bg: 'brand.700', color: 'brand.500' }}
            borderRadius="full"
          >
            Update
          </Button>
          <Button
            bg="brand.600"
            color="brand.500"
            _hover={{ bg: 'brand.700', color: 'brand.500' }}
            borderRadius="full"
          >
            Delete
          </Button>
        </Stack>
      </Stack>

      <Stack spacing={6}>
        <FormControl>
          <FormLabel color="white" fontSize="xl">
            Add new Broker
          </FormLabel>
          <Input
            type="text"
            size="lg"
            borderRadius="full"
            bg="brand.800"
            borderWidth="1px"
            borderColor="brand.700"
            color="brand.500"
          />
        </FormControl>
        <Button
          bg="brand.600"
          color="brand.500"
          _hover={{ bg: 'brand.700', color: 'brand.500' }}
          borderRadius="full"
        >
          {' '}
          Add
        </Button>
      </Stack>
    </Stack>
  );
}

export default EmployeeDashboard;
