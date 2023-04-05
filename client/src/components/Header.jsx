import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Flex,
  Button,
  Heading,
  IconButton,
  Link,
  useColorModeValue,
  Tabs,
  Tab,
  TabList,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Auth from '../utils/auth';

export default function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        py={3}
        px={4}
        borderBottom="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Link as={RouterLink} to="/">
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            m={0}
            color="brand.800"
            _hover={{ color: 'brand.600' }}
          >
            FinWiz
          </Heading>
        </Link>

        <IconButton
          aria-label="Menu"
          icon={<HamburgerIcon />}
          variant="ghost"
          display={{ base: 'flex', lg: 'none' }}
        />

        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align={{ base: 'start', lg: 'center' }}
          mt={{ base: 2, lg: 0 }}
          w={{ base: 'full', lg: 'auto' }}
        >
          <Tabs variant="unstyled">
            <TabList>
              <Tab
                _selected={{
                  color: 'brand.900',
                  bg: 'brand.400',
                  borderRadius: '2xl',
                }}
                _active={{
                  color: 'brand.900',
                  bg: 'brand.400',
                  borderRadius: '2xl',
                }}
              >
                <Link
                  as={RouterLink}
                  to="/about"
                  mr={{ base: 0, lg: 6 }}
                  mb={{ base: 2, lg: 0 }}
                  color={useColorModeValue('brand.800', 'brand.900')}
                >
                  About us
                </Link>
              </Tab>
              <Tab
                _selected={{
                  color: 'brand.900',
                  bg: 'brand.400',
                  borderRadius: '2xl',
                }}
                _active={{
                  color: 'brand.900',
                  bg: 'brand.400',
                  borderRadius: '2xl',
                }}
              >
                <Link
                  as={RouterLink}
                  to="/market"
                  mr={{ base: 0, lg: 6 }}
                  mb={{ base: 2, lg: 0 }}
                  color={useColorModeValue('brand.800', 'brand.900')}
                >
                  WizMarket
                </Link>
              </Tab>
              {Auth.loggedIn() ? (
                <Button
                  onClick={logout}
                  color={useColorModeValue('brand.600', 'brand.700')}
                  bg="white"
                  _hover={{ color: 'brand.800' }}
                  borderRadius="2xl"
                >
                  Logout
                </Button>
              ) : (
                <Tab
                  _selected={{
                    color: 'brand.900',
                    bg: 'brand.400',
                    borderRadius: '2xl',
                  }}
                  _active={{
                    color: 'brand.900',
                    bg: 'brand.400',
                    borderRadius: '2xl',
                  }}
                >
                  <Link
                    as={RouterLink}
                    to="/login"
                    color={useColorModeValue('brand.800', 'brand.900')}
                  >
                    Login
                  </Link>
                </Tab>
              )}
            </TabList>
          </Tabs>
        </Flex>
      </Flex>
    </header>
  );
}
