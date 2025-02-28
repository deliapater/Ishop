import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  Image,
  Stack,
} from "@chakra-ui/react";

const products = [
  { id: 1, name: "Laptop", price: "$999", image: "/images/Laptop.jpg" },
  {
    id: 2,
    name: "Smartphone",
    price: "$699",
    image: "/images/Smartphone.webp",
  },
  { id: 3, name: "Headphones", price: "$199", image: "/images/Headphones.jpg" },
];

function App() {
  return (
    <Box p={5}>
      <Heading mb={6} textAlign="center">
        Product List
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {products.map((product) => (
          <Box
            key={product.id}
            p={5}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
          >
            <Image src={product.image} alt={product.name} borderRadius="md" />
            <Stack spacing={3} mt={3}>
              <Text fontWeight="bold" fontSize="xl">
                {product.name}
              </Text>
              <Text color="gray.500">{product.price}</Text>
              <Button colorScheme="blue" variand="solid">
                Buy Now
              </Button>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default App;
