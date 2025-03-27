import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Product = ({ 
  product, 
  variant = "card", // can be "card" or "detail"
  showAddToCart = true,
  imageHeight = "400px",
}) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const toast = useToast();
  
  const bgColor = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("black", "white");

  const handleAddToCart = (e) => {
    if (e) {
      e.stopPropagation();
    }
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  if (variant === "card") {
    return (
      <Box
        p={5}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="md"
        bg={bgColor}
        color={textColor}
        display="flex"
        flexDirection="column"
        height="100%"
        cursor="pointer"
        onClick={() => navigate(`/product/${product.id}`)}
        _hover={{
          transform: 'translateY(-4px)',
          boxShadow: 'lg',
          transition: 'all 0.2s ease-in-out'
        }}
      >
        <Box display="flex" justifyContent="center">
          <Image
            src={product.image}
            alt={product.name}
            borderRadius="md"
            objectFit="cover"
            height={imageHeight}
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

          {showAddToCart && (
            <Button
              colorScheme="blue"
              variant="solid"
              mt={3}
              onClick={(e) => handleAddToCart(e)}
            >
              Add to Cart
            </Button>
          )}
        </Flex>
      </Box>
    );
  }

  return (
    <Box>
      <Image
        src={product.image}
        alt={product.name}
        borderRadius="lg"
        objectFit="cover"
        width="100%"
        height={imageHeight}
      />
      {showAddToCart && (
        <Button
          colorScheme="blue"
          size="lg"
          onClick={handleAddToCart}
          mt={4}
          width="100%"
        >
          Add to Cart
        </Button>
      )}
    </Box>
  );
};

export default Product; 