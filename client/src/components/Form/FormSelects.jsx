import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
} from '@chakra-ui/react';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { WarningTwoIcon } from '@chakra-ui/icons';

export const FormControlRole = ({ formData, handleInputChange }) => {
  return (
    <FormControl isRequired mb={5}>
      <FormLabel htmlFor="role" color="brand.500">
        Role
      </FormLabel>
      <Select
        id="role"
        placeholder="Select role"
        onChange={handleInputChange}
        name="role"
        value={formData.role}
        isRequired
        mb={5}
        icon={<MdOutlineAdminPanelSettings />}
        cursor="pointer"
        color="brand.500"
        size="md"
      >
        <option value="Admin">Admin</option>
        <option value="Employee">Employee</option>
        <option value="Carrier">Carrier</option>
      </Select>
      <FormErrorMessage>
        <WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon> Role is
        required!
      </FormErrorMessage>
    </FormControl>
  );
};

export const FormControlReason = ({ formData, handleInputChange }) => {
  return (
    <FormControl isRequired mb={5}>
      <FormLabel htmlFor="role" color="brand.500">
        Reason
      </FormLabel>
      <Select
        id="reason"
        placeholder="Select reason"
        name="reason"
        isRequired
        onChange={handleInputChange}
        value={formData.reason}
        mb={5}
        cursor="pointer"
        color="brand.500"
        size="md"
        fontSize="sm"
      >
        <option value="feedback">Feedback</option>
        <option value="question">General Question</option>
        <option value="signup">Sign Up</option>
      </Select>
      <FormErrorMessage>
        <WarningTwoIcon w={6} h={6} color="red.500"></WarningTwoIcon> Reason is
        required!
      </FormErrorMessage>
    </FormControl>
  );
};
