import { Box, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export const LoggedOutNavBar = ({ currentPage, setCurrentPage }) => {
  return (
    <>
      <Box m={2} mx={3}>
        <RouterLink to="/login">
          <Text
            fontSize="xl"
            fontWeight="semibold"
            bgGradient="linear(to-r, brand.500, brand.600)"
            bgClip="text"
            color={currentPage === 'Login' ? 'brand.500' : 'transparent'}
            _hover={{
              bgGradient: 'linear(to-r, brand.600, brand.500, brand.600)',
            }}
            onClick={() => setCurrentPage('Login')}
          >
            Login
          </Text>
        </RouterLink>
      </Box>
    </>
  );
};
