import { Box, Container } from '@chakra-ui/react';
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
        <Container mt={3} p={3} bg="red.500" color="white">
          {error.message}
        </Container>
      )}
    </Box>
  );
};
