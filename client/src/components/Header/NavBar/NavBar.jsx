import { useState } from 'react';
import { Box, Flex, Text, IconButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import Auth from '../../../utils/auth';
import { LoggedOutNavBar } from './LoggedOutNavBar';
import { LoggedInNavBar } from './LoggedInNavBar';

export const NavBar = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const { isOpen, onToggle } = useDisclosure();

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
            <LoggedInNavBar
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ) : (
            <LoggedOutNavBar
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </Flex>
      </Box>
    </Flex>
  );
};
