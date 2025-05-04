import React, { useContext } from 'react';
import { ChakraProvider, Box, Flex, Button, Grid, Text, Stack, useBreakpointValue } from '@chakra-ui/react';
import { AuthContext } from './AuthContext';
import { ThemeContext } from './ThemeContext';
import { AuthContextProvider } from './AuthContext';
import { ThemeContextProvider } from './ThemeContext';
import Sidebar from './Sidebar';
import Footer from './Footer';

function App() {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const sidebarVisible = useBreakpointValue({ base: false, md: true });

  return (
    <ChakraProvider>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Flex direction="column" minHeight="100vh" bg={theme === 'light' ? 'gray.100' : 'gray.800'}>
            <Flex as="nav" p="4" bg={theme === 'light' ? 'gray.200' : 'gray.700'} justifyContent="space-between">
              <Button onClick={toggleAuth}>
                {isLoggedIn ? 'Log Out' : 'Log In'}
              </Button>
              <Button onClick={toggleTheme}>
                Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
              </Button>
            </Flex>

            <Flex direction="row" flex="1">
              {sidebarVisible && (
                <Sidebar isLoggedIn={isLoggedIn} theme={theme} />
              )}

              <Box flex="1" p="4">
                <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
                  {['Product 1', 'Product 2', 'Product 3', 'Product 4'].map((product) => (
                    <Box
                      key={product}
                      p="6"
                      shadow="md"
                      bg={theme === 'light' ? 'white' : 'gray.600'}
                      borderRadius="md"
                    >
                      <Text fontSize="lg">{product}</Text>
                    </Box>
                  ))}
                </Grid>
              </Box>
            </Flex>

            <Footer theme={theme} />
          </Flex>
        </ThemeContextProvider>
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default App;
