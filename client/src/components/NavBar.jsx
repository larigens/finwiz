import { useState } from 'react';
import { Box, Flex, Text, IconButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { AiOutlineLogout } from 'react-icons/ai';
import { Link as RouterLink } from 'react-router-dom';
import Auth from '../utils/auth';

function NavBar() {
  const [currentPage, setCurrentPage] = useState('Home');
  const { isOpen, onToggle } = useDisclosure();
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Flex alignItems="center" justifyContent="space-between" mt={4}>
      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          onClick={onToggle}
          color="brand.500"
          bg="transparent"
          _active={{ bg: 'transparent' }}
          size="lg"
        />
      </Box>
      <Box
        display={{
          base: isOpen ? 'block' : 'none',
          md: 'flex',
        }}
        alignItems="center"
        flexGrow={1}
      >
        <Flex
          direction={{
            base: 'column',
            md: 'row',
          }}
          alignItems="center"
          justifyContent={{
            base: 'center',
            md: 'flex-end',
          }}
          mt={{ base: 4, md: 0 }}
        >
          <Box m={2} mx={3}>
            <RouterLink to="/market">
              <Text
                fontSize="xl"
                fontWeight="semibold"
                bgGradient="linear(to-r, brand.500, brand.600)"
                bgClip="text"
                color={currentPage === 'Market' ? 'brand.500' : 'transparent'}
                _hover={{
                  bgGradient: 'linear(to-r, brand.600, brand.500, brand.600)',
                }}
                onClick={() => setCurrentPage('Market')}
              >
                WizMarket
              </Text>
            </RouterLink>
          </Box>
          {Auth.loggedIn() ? (
            <>
              <Box m={2} mx={3}>
                <RouterLink to="/dashboard">
                  <Text
                    fontSize="xl"
                    fontWeight="semibold"
                    bgGradient="linear(to-r, brand.500, brand.600)"
                    bgClip="text"
                    color={
                      currentPage === 'Dashboard' ? 'brand.500' : 'transparent'
                    }
                    _hover={{
                      bgGradient:
                        'linear(to-r, brand.600, brand.500, brand.600)',
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
                  mb={4}
                />
              </Box>
            </>
          ) : (
            <>
              <Box m={2} mx={3}>
                <RouterLink to="/">
                  <Text
                    fontSize="xl"
                    fontWeight="semibold"
                    bgGradient="linear(to-r, brand.500, brand.600)"
                    bgClip="text"
                    color={
                      currentPage === 'About' ? 'brand.500' : 'transparent'
                    }
                    _hover={{
                      bgGradient:
                        'linear(to-r, brand.600, brand.500, brand.600)',
                    }}
                    onClick={() => setCurrentPage('About')}
                  >
                    About us
                  </Text>
                </RouterLink>
              </Box>
              <Box m={2} mx={3}>
                <RouterLink to="/login">
                  <Text
                    fontSize="xl"
                    fontWeight="semibold"
                    bgGradient="linear(to-r, brand.500, brand.600)"
                    bgClip="text"
                    color={
                      currentPage === 'Login' ? 'brand.500' : 'transparent'
                    }
                    _hover={{
                      bgGradient:
                        'linear(to-r, brand.600, brand.500, brand.600)',
                    }}
                    onClick={() => setCurrentPage('Login')}
                  >
                    Login
                  </Text>
                </RouterLink>
              </Box>
            </>
          )}
        </Flex>
      </Box>
    </Flex>
  );
}

export default NavBar;
