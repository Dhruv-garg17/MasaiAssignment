import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function Footer({ theme }) {
  return (
    <Box
      as="footer"
      position="fixed"
      bottom="0"
      width="100%"
      p="4"
      bg={theme === 'light' ? 'gray.200' : 'gray.700'}
    >
      <Text color={theme === 'light' ? 'black' : 'white'} textAlign="center">
        Footer Content
      </Text>
    </Box>
  );
}

export default Footer;
