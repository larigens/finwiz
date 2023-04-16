import { Box, Alert, AlertIcon } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { Form } from '../components/Form/Form';

export const Login = () => {
  const [loginUser, { error }] = useMutation(LOGIN_USER);

  return (
    <Box px={{ base: 2, md: 10 }} py={{ base: 5, md: 10 }} bg="brand.600">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Form formRequest={'Login'} formMutation={loginUser} />
      {error && (
        <Alert status="error" mt={5} rounded="2xl" boxShadow="md">
          <AlertIcon />
          {error.message}
        </Alert>
      )}
    </Box>
  );
};
