import { Link } from "react-router-dom";
import { Box, Heading, VStack, Link as ChakraLink } from "@chakra-ui/react";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

function Users() {
  return (
    <Box p={4}>
      <Heading mb={4}>Users Page</Heading>
      <VStack spacing={3} align="start">
        {users.map((user) => (
          <ChakraLink
            key={user.id}
            as={Link}
            to={`/users/${user.id}`} // ✅ FIX: correct path
            _hover={{ color: "blue.500" }}
          >
            {user.name}
          </ChakraLink>
        ))}
      </VStack>
    </Box>
  );
}

export default Users;
