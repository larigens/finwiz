import { Card, CardHeader, Heading, Stack, StackDivider, Box, Text } from '@chakra-ui/react';

function Dashboard() {
  return (
    <Stack spacing='6'>
      <Card>
        <CardHeader>
          <Heading size='md'>Client Report</Heading>
        </CardHeader>

        <Stack divider={<StackDivider />} spacing='4' p='4'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Summary
            </Heading>
            <Text pt='2' fontSize='sm'>
              View a summary of all your clients over the last month.
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Overview
            </Heading>
            <Text pt='2' fontSize='sm'>
              Check out the overview of your clients.
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Analysis
            </Heading>
            <Text pt='2' fontSize='sm'>
              See a detailed analysis of all your business clients.
            </Text>
          </Box>
        </Stack>
      </Card>

      {/* Add more cards or sections here as needed */}
    </Stack>
  );
}

export default Dashboard;