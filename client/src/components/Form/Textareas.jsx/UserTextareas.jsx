import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
} from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';

export const FormControlMessage = ({ formData, handleInputChange }) => {
  return (
    <FormControl isRequired>
      <FormLabel className="light">Message</FormLabel>
      <Textarea
        id="message"
        name="message"
        rows={6}
        size="sm"
        onChange={handleInputChange}
        value={formData.message}
        color="brand.500"
      />
      <FormErrorMessage>
        <WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon> Message is
        required!
      </FormErrorMessage>
    </FormControl>
  );
};
