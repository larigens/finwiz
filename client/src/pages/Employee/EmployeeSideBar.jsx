import React from 'react';
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Link,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  RiArrowDownSLine,
  RiArrowRightSLine,
  RiMenuLine,
} from 'react-icons/ri';
import { Link as RouterLink } from 'react-router-dom';
import { Image, Heading } from '@chakra-ui/react';
import logo from '../../assets/logo.png';

const SidebarSublink = ({ children, href }) => {
  return (
    <Link
      href={href}
      display="block"
      px={3}
      py={2}
      fontSize="sm"
      _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}
    >
      {children}
    </Link>
  );
};

const SidebarHeading = ({ children }) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Link
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={3}
        py={2}
        fontWeight="bold"
        _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}
        onClick={onToggle}
      >
        <Text textTransform="uppercase">{children}</Text>
        <IconButton as={isOpen ? RiArrowDownSLine : RiArrowRightSLine} />
      </Link>
      <Collapse in={isOpen} animateOpacity>
        <Box pl={4} py={2}>
          <SidebarSublink href="#">Sublink 1</SidebarSublink>
          <SidebarSublink href="#">Sublink 2</SidebarSublink>
        </Box>
      </Collapse>
    </>
  );
};

export const EmployeeSideBar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box
        as="nav"
        pos="fixed"
        top={0}
        left={0}
        w="60"
        h="full"
        bg="brand.800"
        boxShadow="md"
        zIndex="sticky"
        className="sidebar"
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      >
        <Box display={{ base: 'block', md: 'none' }}>
          <IconButton
            aria-label="Open menu"
            icon={<RiMenuLine />}
            onClick={onToggle}
            color="brand.500"
            bg="transparent"
            _active={{ bg: 'transparent' }}
            size="lg"
          />
        </Box>
        <Flex
          direction="column"
          h="full"
          justify="space-between"
          overflowY="auto"
          py={2}
        >
          <Flex align="center" pb={5}>
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
          <Box>
            <SidebarHeading>Carriers</SidebarHeading>
            <SidebarSublink href="#">
              View a summary of all carriers
            </SidebarSublink>
            <SidebarSublink href="#">New Carrier</SidebarSublink>
            <SidebarSublink href="#">Update Carrier's Profile</SidebarSublink>
            <SidebarSublink href="#">Delete Carrier</SidebarSublink>
            <SidebarHeading>Brokers</SidebarHeading>
            <SidebarSublink href="#">
              View a summary of all brokers
            </SidebarSublink>
            <SidebarSublink href="#">New Broker</SidebarSublink>
            <SidebarSublink href="#">Update Broker's Profile</SidebarSublink>
            <SidebarSublink href="#">Delete Broker</SidebarSublink>
            <SidebarHeading>Invoices</SidebarHeading>
            <SidebarSublink href="#">Search Invoice</SidebarSublink>
            <SidebarSublink href="#">New Invoice</SidebarSublink>
            <SidebarSublink href="#">Update Invoice</SidebarSublink>
          </Box>
          <Box>
            <SidebarSublink href="#">More Options...</SidebarSublink>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
