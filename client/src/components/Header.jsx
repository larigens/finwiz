import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Flex, Image, Heading } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import NavBar from './NavBar';

export default function Header() {
  return (
    <header>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        py={1}
        px={3}
        wrap="wrap"
        bg="brand.800"
        color="white"
      >
        <Flex align="center">
          <Image
            src={logo}
            alt="finwiz logo"
            width={['35%', '28%']}
            maxWidth={120}
            p={0}
            mr={4}
          />
          <RouterLink to="/">
            <Heading
              as="h1"
              fontWeight="medium"
              mt={[4, 3]}
              textAlign={['center', 'left']}
              className="fs-heading ls-sm gradient-heading"
              fontSize={['2xl', '4xl']}
            >
              FinWiz
            </Heading>
          </RouterLink>
        </Flex>
        <NavBar />
      </Flex>
    </header>
  );
}
