import React from 'react';
import { Heading, Box, Text, Link, Collapse } from '@chakra-ui/react';
import CarrierSummary from './CarrierSummary';

export const CarrierMenu = ({ handleShowClick, showCarrierSummary }) => {
  return (
    <Box>
      <Heading size="md" textTransform="uppercase">
        Carriers
      </Heading>
      <Box pt={2}>
        <Link
          id="carrierSummary"
          onClick={(event) => handleShowClick(event, 'carrierSummary')}
          color="brand.500"
          _hover={{
            color: 'brand.600',
          }}
        >
          <Text size="xs"> View a summary of all carriers.</Text>
        </Link>
        <Collapse in={showCarrierSummary}>
          <Box mx={4} px={5} my={5}>
            <CarrierSummary />
          </Box>
        </Collapse>
      </Box>

      <Text pt="2" fontSize="sm">
        Search Carrier.
      </Text>
      <Text pt="2" fontSize="sm">
        New Carrier
      </Text>
      <Text pt="2" fontSize="sm">
        Update Carrier's Profile.
      </Text>
      <Text pt="2" fontSize="sm">
        Delete Carrier.
      </Text>
    </Box>
  );
};
