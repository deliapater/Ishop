import {
  Box,
  Button,
  Heading,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import products from "../data/products";

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
            display="flex"
            flexDirection="column"
            height="100%"
          >
            <Box display="flex" justifyContent="center">
              <Image
                src={product.image}
                alt={product.name}
                borderRadius="md"
                objectFit="cover"
                height="400px"
                width="100%"
              />
            </Box>
            <Flex
              direction="column"
              flexGrow={1}
              justify="space-between"
              mt={3}
            >
              <Stack spacing={3} flexGrow={1}>
                <Text fontWeight="bold" fontSize="xl">
                  {product.name}
                </Text>
                <Text color="gray.500">{product.price}</Text>
              </Stack>

              <Button
                colorScheme="blue"
                variand="solid"
                mt={3}
                alignSelf="strech"
              >
                Buy Now
              </Button>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductList;
