import { useState } from 'react';
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Textarea,
} from '@chakra-ui/react';

function UpdateInvoice() {
  const [showCheckInputs, setShowCheckInputs] = useState(false);
  const [showReasonTextarea, setShowReasonTextarea] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (name === 'yes') {
      setShowCheckInputs(checked);
    } else if (name === 'right') {
      setShowReasonTextarea(checked);
    }
  };

  return (
    <Stack
      spacing={6}
      p={4}
      mt={5}
      mx={8}
      bg="#3658A7"
      color="white"
      borderRadius="lg"
      boxShadow="lg"
    >
      <h2 className="text-center fw-bold">Update Invoice</h2>
      <Stack spacing={6} direction={['column', 'row']}>
        <FormControl>
          <FormLabel fontSize="xl">Brokers</FormLabel>
          <Select size="lg">
            <option className="fs-4">Broker</option>
            <option className="fs-4" value="1">
              Able Broker
            </option>
            <option className="fs-4" value="2">
              Little Home Broker
            </option>
            <option className="fs-4" value="3">
              The Smart Broker
            </option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="xl">Carries</FormLabel>
          <Select size="lg">
            <option className="fs-4">Carries</option>
            <option className="fs-4" value="1">
              Carries 1
            </option>
            <option className="fs-4" value="2">
              Carries 2
            </option>
            <option className="fs-4" value="3">
              Carries 3
            </option>
          </Select>
        </FormControl>
      </Stack>
      <FormControl>
        <FormLabel fontSize="xl">Invoice price</FormLabel>
        <Input type="text" placeholder="Write Invoice price" size="lg" />
      </FormControl>
      <Button
        bg="brand.600"
        color="brand.500"
        _hover={{ bg: 'brand.700', color: 'brand.500' }}
        borderRadius="full"
        className='no-border'
      >
        Update
      </Button>

      <Stack spacing={6}>
        <FormControl>
          <FormLabel fontSize="xl">Invoice Date</FormLabel>
          <Input type="date" size="lg" />
        </FormControl>
        <FormControl>
          <FormLabel fontSize="xl">Invoice Due Date</FormLabel>
          <Input type="date" size="lg" />
        </FormControl>
      </Stack>
      <Stack spacing={6}>
        <Checkbox
          name="yes"
          onChange={handleCheckboxChange}
          size="lg"
          colorScheme="blue"
        >
          Paid
        </Checkbox>
        {showCheckInputs && (
          <Stack direction={['column', 'row']} spacing={4}>
            <FormControl>
              <FormLabel fontSize="xl">Check Number:</FormLabel>
              <Input type="text" placeholder="" size="lg" />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="xl">Paid Amount:</FormLabel>
              <Input type="text" placeholder="" size="lg" />
            </FormControl>
          </Stack>
        )}
      </Stack>
      <Stack spacing={6}>
        <Checkbox
          name="right"
          onChange={handleCheckboxChange}
          size="lg"
          colorScheme="blue"
        >
          Short Paid
        </Checkbox>
        {showReasonTextarea && (
          <FormControl>
            <FormLabel fontSize="xl">Reason:</FormLabel>
            <Textarea placeholder="Write Reason" size="lg" borderRadius="md" />
          </FormControl>
        )}
      </Stack>
    </Stack>
  );
}

export default UpdateInvoice;
