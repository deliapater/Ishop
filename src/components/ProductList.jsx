import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import products from "./data/products";

const ProductList = () => {
  const bgColor = useColorModeValue("white, gray.700");
  const textColor = useColorModeValue("black", "white");

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
            bg={bgColor}
            color={textColor}
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
};

export default ProductList;
