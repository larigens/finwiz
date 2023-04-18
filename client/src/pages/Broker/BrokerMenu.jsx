import React from 'react';
import { Heading, Box, Text, Link, Collapse } from '@chakra-ui/react';
import BrokerSummary from './BrokerSummary';

export const BrokerMenu = ({ handleShowClick, showBrokerSummary }) => {
  return (
    <Box>
      <Heading size="md" textTransform="uppercase">
        Brokers
      </Heading>
      <Box pt={2}>
        <Link
          id="carrierSummary"
          onClick={(event) => handleShowClick(event, 'brokerSummary')}
          color="brand.500"
          _hover={{
            color: 'brand.600',
          }}
        >
          <Text size="xs"> View a summary of all brokers.</Text>
        </Link>
        <Collapse in={showBrokerSummary}>
          <Box mx={4} px={5} my={5}>
            <BrokerSummary />
          </Box>
        </Collapse>
      </Box>
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
