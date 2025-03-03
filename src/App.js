import {
  Box,
  Button,
  useColorMode,
} from "@chakra-ui/react";

import ProductList from "./components/ProductList";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box p={4} bg={colorMode === "dark" ? "gray.900" : "gray.100"} minH="100vh">
      <Button onClick={toggleColorMode} mb={4}>
        {colorMode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </Button>
      <ProductList />
    </Box>
  );
}

export default App;
