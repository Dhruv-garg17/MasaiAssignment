import React from 'react';
import { Box, Text, Button, VStack, useBreakpointValue } from '@chakra-ui/react';

function Sidebar({ isLoggedIn, theme }) {
  const isCollapsed = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      width={{ base: '100%', md: '250px' }}
      display={isCollapsed ? 'none' : 'block'}
      bg={theme === 'light' ? 'gray.200' : 'gray.700'}
      p="4"
      boxShadow="md"
    >
      {isLoggedIn ? (
        <VStack align="start">
          <Text fontSize="lg" color={theme === 'light' ? 'black' : 'white'}>
            Welcome, User
          </Text>
        </VStack>
      ) : (
        <Text fontSize="lg" color={theme === 'light' ? 'black' : 'white'}>
          Please log in
        </Text>
      )}
    </Box>
  );
}

export default Sidebar;
