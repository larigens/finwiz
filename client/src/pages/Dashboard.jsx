import { Helmet } from 'react-helmet-async';
import {
  Card,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
} from '@chakra-ui/react';

function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Stack spacing="6" bg="brand.600" mt={8}>
        <Card bg='brand.800' color='brand.500' p={1} m={3} borderRadius='2xl'>
          <CardHeader>
            <Heading size="md">Client Report</Heading>
          </CardHeader>

          <Stack divider={<StackDivider />} spacing="4" p="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Summary
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Overview
              </Heading>
              <Text pt="2" fontSize="sm">
                Check out the overview of your clients.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Analysis
              </Heading>
              <Text pt="2" fontSize="sm">
                See a detailed analysis of all your business clients.
              </Text>
            </Box>
          </Stack>
        </Card>
        {/* Add more cards or sections here as needed */}
      </Stack>
    </>
  );
}

export default Dashboard;
