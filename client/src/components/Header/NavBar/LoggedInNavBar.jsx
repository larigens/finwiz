import { Box, Text, IconButton } from '@chakra-ui/react';
import { AiOutlineLogout } from 'react-icons/ai';
import { Link as RouterLink } from 'react-router-dom';
import Auth from '../../../utils/auth';

export const LoggedInNavBar = ({ currentPage, setCurrentPage }) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
      <Box m={2} mx={3}>
        <RouterLink to="/dashboard">
          <Text
            fontSize="xl"
            fontWeight="semibold"
            bgGradient="linear(to-r, brand.500, brand.600)"
            bgClip="text"
            color={currentPage === 'Dashboard' ? 'brand.500' : 'transparent'}
            _hover={{
              bgGradient: 'linear(to-r, brand.600, brand.500, brand.600)',
            }}
            onClick={() => setCurrentPage('Dashboard')}
          >
            Dashboard
          </Text>
        </RouterLink>
      </Box>
      <Box m={2} mx={3}>
        <IconButton
          icon={<AiOutlineLogout />}
          onClick={logout}
          variant="ghost"
          color="brand.600"
          _hover={{ color: 'brand.500' }}
          borderRadius="2xl"
          fontSize="2xl"
          fontWeight="normal"
          mb={1}
        />
      </Box>
    </>
  );
};
