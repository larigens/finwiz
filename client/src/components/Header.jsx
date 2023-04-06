import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Flex,
  Button,
  Heading,
  IconButton,
  Link,
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
      <Flex as="nav" align="center" justify="space-between" py={3} px={4}>
        <Link as={RouterLink} to="/">
          <Heading as="h1" size="xl" fontWeight="bold" m={1} color="brand.500">
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
            <TabList justifyContent="space-between" mx={4}>
              <Tab
                textAlign="center"
                borderRadius="full"
                me={4}
                _selected={{
                  bg: 'brand.700',
                  borderRadius: 'full',
                  px: 2,
                }}
                _active={{
                  bg: 'brand.700',
                  borderRadius: 'full',
                  px: 2,
                }}
                _hover={{
                  bg: 'brand.700',
                  borderRadius: 'full',
                  px: 2,
                }}
              >
                <Link
                  as={RouterLink}
                  to="/"
                  color="brand.500"
                  className="fs-medium"
                  px="2"
                  _hover={{
                    color: 'brand.400',
                    bg: 'brand.700',
                    borderRadius: 'full',
                    px: '2',
                  }}
                >
                  About us
                </Link>
              </Tab>
              <Tab
                textAlign="center"
                borderRadius="full"
                me={4}
                _selected={{
                  bg: 'brand.700',
                  borderRadius: 'full',
                  px: 2,
                }}
                _active={{
                  bg: 'brand.700',
                  borderRadius: 'full',
                  px: 2,
                }}
                _hover={{
                  bg: 'brand.700',
                  borderRadius: 'full',
                  px: 2,
                }}
              >
                <Link
                  as={RouterLink}
                  to="/market"
                  color="brand.500"
                  className="fs-medium"
                  px="2"
                  _hover={{
                    color: 'brand.400',
                    bg: 'brand.700',
                    borderRadius: 'full',
                    px: '2',
                  }}
                >
                  WizMarket
                </Link>
              </Tab>
              {Auth.loggedIn() ? (
                <Button
                  onClick={logout}
                  variant="ghost"
                  color="brand.500"
                  _hover={{ bg: 'brand.700', color: 'brand.400' }}
                  bg="brand.800"
                  borderRadius="full"
                >
                  Logout
                </Button>
              ) : (
                <Tab
                  textAlign="center"
                  borderRadius="full"
                  me={4}
                  _selected={{
                    color: 'brand.800',
                    bg: 'brand.700',
                    borderRadius: 'full',
                    px: 2,
                  }}
                  _active={{
                    color: 'brand.800',
                    bg: 'brand.700',
                    borderRadius: 'full',
                    px: 2,
                  }}
                  _hover={{
                    color: 'brand.800',
                    bg: 'brand.700',
                    borderRadius: 'full',
                    px: 2,
                  }}
                >
                  <Link
                    as={RouterLink}
                    to="/login"
                    color="brand.500"
                    className="fs-medium"
                    px="2"
                    _hover={{
                      color: 'brand.400',
                      bg: 'brand.700',
                      borderRadius: 'full',
                      px: '2',
                    }}
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
