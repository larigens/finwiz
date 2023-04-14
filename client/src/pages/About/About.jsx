import { Box, Text, Flex } from '@chakra-ui/react';
import { Stats } from '../../components/Stats/Stats.jsx';

export const About = () => {
  return (
    <Box p={4} my={4} minHeight="300px">
      <Flex mt={{ base: 2, md: 4 }} flexDir="row">
        <Flex flexDir="column" justifyContent="start" mr={10} flex={1}>
          <Stats />
        </Flex>
        <Flex flexDir="column" justifyContent="end" flex={3}>
          <Box textAlign="center" rounded="md" bg="brand.800" p={4}>
            <Text
              className="body-font fs-5 light"
              mb="4"
              textAlign="justify"
              my={12}
              mx={4}
            >
              FinWiz is a web-based factoring software designed specifically for
              transportation companies to help them manage their cash flow more
              efficiently. With FinWiz, transportation companies can easily
              convert their accounts receivable into immediate cash, enabling
              them to meet their daily expenses, pay their drivers and vendors,
              and grow their business. The software streamlines the factoring
              process, allowing businesses to upload their invoices, track their
              payments, and manage their cash flow in real-time
            </Text>
            <Text
              className="body-font fs-5 light"
              mb="4"
              textAlign="justify"
              my={12}
              mx={4}
            >
              FinWiz provides a user-friendly interface and powerful reporting
              tools that allow businesses to gain valuable insights into their
              financial health and make informed decisions. With its advanced
              security features and customizable settings, FinWiz ensures that
              all data is protected and managed securely. Whether you are a
              small business owner or a large transportation company, FinWiz is
              the perfect solution to help you manage your finances and grow
              your business.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
