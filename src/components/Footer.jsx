import {
  Box,
  Text,
  Stack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.600", "gray.200")}
      py={4}
      textAlign="center"
    >
      <Stack spacing={2}>
        <Text>© {new Date().getFullYear()} IShop. All rights reserved.</Text>
        <Stack direction={{ base: "column", md: "row" }} spacing={4} justify="center">
          <Link href="/" color="blue.500">Home</Link>
          <Link href="/products" color="blue.500">Products</Link>
          <Link href="/about" color="blue.500">About</Link>
          <Link href="/contact" color="blue.500">Contact</Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer; 