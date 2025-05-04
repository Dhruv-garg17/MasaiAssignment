import { useParams, Link } from "react-router-dom";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

function UserDetails() {
  const { id } = useParams();
  const user = users.find((u) => u.id.toString() === id); // ✅ check if user exists

  return (
    <Box p={4}>
      {user ? (
        <>
          <Heading mb={4}>User Details</Heading>
          <Text fontSize="lg">Name: {user.name}</Text>
        </>
      ) : (
        <>
          <Heading mb={4}>User not found</Heading>
          <Text>The user ID "{id}" does not exist.</Text>
        </>
      )}
      <Button mt={4} as={Link} to="/users" colorScheme="blue">
        Back to Users
      </Button>
    </Box>
  );
}

export default UserDetails;
