import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Users from "./Users";
import UserDetails from "./UserDetails";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          {/* Route for Users list */}
          <Route path="/users" element={<Users />} />
          {/* Route for User details */}
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
