import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  useToast,
  IconButton,
  Badge,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../data/products';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const toast = useToast();

  const product = products.find(p => p.id === parseInt(productId));
  const bgColor = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.200');

  if (!product) {
    return (
      <Container maxW="container.xl" py={10}>
        <Text>Product not found</Text>
        <Button leftIcon={<ArrowBackIcon />} onClick={() => navigate('/')} mt={4}>
          Back to Catalogue
        </Button>
      </Container>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart`,
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" py={10}>
      <IconButton
        icon={<ArrowBackIcon />}
        onClick={() => navigate('/')}
        mb={6}
        variant="ghost"
      />
      <Flex
        direction={{ base: 'column', md: 'row' }}
        gap={8}
        bg={bgColor}
        p={8}
        borderRadius="lg"
        boxShadow="md"
      >
        <Box flex={1}>
          <Image
            src={product.image}
            alt={product.name}
            borderRadius="lg"
            objectFit="cover"
            width="100%"
            height="500px"
          />
        </Box>
        <Stack flex={1} spacing={6}>
          <Box>
            <Heading size="xl" mb={2}>
              {product.name}
            </Heading>
            <Badge colorScheme="green" fontSize="md" mb={4}>
              In Stock
            </Badge>
          </Box>
          
          <Text fontSize="2xl" fontWeight="bold" color={textColor}>
            {product.price}
          </Text>

          <Text color={textColor} fontSize="lg">
            {product.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
          </Text>

          <Box>
            <Heading size="sm" mb={2}>
              Product Features:
            </Heading>
            <Stack spacing={2}>
              {(product.features || [
                'High-quality materials',
                'Durable construction',
                'Modern design',
                'Easy to maintain'
              ]).map((feature, index) => (
                <Text key={index} color={textColor}>
                  • {feature}
                </Text>
              ))}
            </Stack>
          </Box>

          <Button
            colorScheme="blue"
            size="lg"
            onClick={handleAddToCart}
            mt={4}
          >
            Add to Cart
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default ProductDetails; 