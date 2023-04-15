import { Box, Text, Flex } from '@chakra-ui/react';
import { Stats } from '../../components/Stats/Stats.jsx';
import { Contact } from '../Contact/Contact.jsx';

export const Home = () => {
  return (
    <Box p={2} my={2} minHeight={{ base: 'auto', md: '300px' }}>
      <Flex mt={{ base: 2, md: 4 }} flexDir={{ base: 'column', md: 'row' }}>
        <Box flex={{ base: 1, md: 1 }} mb={{ base: 4, md: 0 }}>
          <Stats />
        </Box>
        <Box
          flex={{ base: 1, lg: 3 }}
          textAlign="center"
          rounded="md"
          bg="brand.800"
          p={2}
          my={{ base: 10, lg: 0 }}
          ms={{ base: 0, lg: 4 }}
        >
          <Text
            color="brand.400"
            textAlign="justify"
            my={5}
            mx={4}
            fontSize={{ base: 'md', md: 'lg' }}
          >
            FinWiz is a web-based factoring software designed specifically for
            transportation companies to help them manage their cash flow more
            efficiently. With FinWiz, transportation companies can easily
            convert their accounts receivable into immediate cash, enabling them
            to meet their daily expenses, pay their drivers and vendors, and
            grow their business.
          </Text>
          <Text
            color="brand.400"
            textAlign="justify"
            my={5}
            mx={4}
            fontSize={{ base: 'md', md: 'lg' }}
          >
            FinWiz provides a user-friendly interface and powerful reporting
            tools that allow businesses to gain valuable insights into their
            financial health and make informed decisions. With its advanced
            security features and customizable settings, FinWiz ensures that all
            data is protected and managed securely. Whether you are a small
            business owner or a large transportation company, FinWiz is the
            perfect solution to help you manage your finances and grow your
            business.
          </Text>
          <Contact />
        </Box>
      </Flex>
    </Box>
  );
};
