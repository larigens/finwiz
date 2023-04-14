import React from 'react';
import { Heading, Box, Text } from '@chakra-ui/react';

export const BrokerMenu = () => {
  return (
    <Box>
      <Heading size="md" textTransform="uppercase">
        Brokers
      </Heading>
      <Text pt="2" fontSize="sm">
        View a summary of all brokers.
      </Text>
      <Text pt="2" fontSize="sm">
        New Broker.
      </Text>
      <Text pt="2" fontSize="sm">
        Update Broker's Profile.
      </Text>
      <Text pt="2" fontSize="sm">
        Delete Broker.
      </Text>
    </Box>
  );
};
