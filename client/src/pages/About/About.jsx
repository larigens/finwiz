import { Container, Box, Text } from '@chakra-ui/react';
import './About.css';

function About() {
  return (
    <Container
      maxW="container.lg"
      bg="brand.800"
      p={4}
      className="radius-15"
      mb={4}
    >
      <Box
        textAlign="center"
        rounded="md"
        bg="brand.800"
        p={4}
        className="radius-15"
      >
        <Box py="4" px="4" bg="brand.800" p={4} className="radius-15">
          <Text className="ddetails body-font fs-6 light" mb="4">
            FinWiz is a web-based factoring software designed specifically for
            transportation companies to help them manage their cash flow more
            efficiently. With FinWiz, transportation companies can easily
            convert their accounts receivable into immediate cash, enabling them
            to meet their daily expenses, pay their drivers and vendors, and
            grow their business. The software streamlines the factoring process,
            allowing businesses to upload their invoices, track their payments,
            and manage their cash flow in real-time
          </Text>
          <Text className="ddetails body-font fs-6 light" mb="4">
            FinWiz provides a user-friendly interface and powerful reporting
            tools that allow businesses to gain valuable insights into their
            financial health and make informed decisions. With its advanced
            security features and customizable settings, FinWiz ensures that all
            data is protected and managed securely. Whether you are a small
            business owner or a large transportation company, FinWiz is the
            perfect solution to help you manage your finances and grow your
            business.
          </Text>
        </Box>
      </Box>
    </Container>
  );
}

export default About;
