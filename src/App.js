import {
  Box,
  useColorMode,
} from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box p={4} bg={colorMode === "dark" ? "gray.900" : "gray.100"} minH="100vh">
      <Navbar />
      <ProductList />
    </Box>
  );
}

export default App;
