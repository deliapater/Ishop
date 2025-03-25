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
  useToast,
} from "@chakra-ui/react";
import { useCart } from '../context/CartContext';
import products from "../data/products";

const ProductList = () => {
  const bgColor = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("black", "white");
  const { addToCart } = useCart();
  const toast = useToast();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p={5}>
      <Heading mb={6} textAlign="center">
        Catalogue
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
                variant="solid"
                mt={3}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductList;
