import { Box, Alert, AlertIcon } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Form } from '../components/Form/Form';

export const SignUp = () => {
  const [addUser, { error }] = useMutation(ADD_USER);

  return (
    <Box px={{ base: 2, md: 10 }} py={{ base: 5, md: 10 }} bg="brand.600">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <Form formRequest={'SignUp'} formMutation={addUser} />
      {error && (
        <Alert status="error" mt={5} rounded="2xl" boxShadow="md">
          <AlertIcon />
          {error.message}
        </Alert>
      )}
    </Box>
  );
};
