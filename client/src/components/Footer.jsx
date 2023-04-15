import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <footer style={{ marginTop: '150px' }}>
      <Flex justify="center" bg="brand.600" py={5}>
        <Text fontSize={{ base: 'sm', md: 'lg' }} className="gradient-text">
          &copy; FinWiz. All rights reserved.
        </Text>
      </Flex>
    </footer>
  );
};
