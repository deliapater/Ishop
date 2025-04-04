import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  IconButton,
  Badge,
  Textarea,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products';
import Product from './Product';
import { useState } from 'react';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const bgColor = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.200');

  const product = products.find(p => p.id === parseInt(productId));

  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0); // State for rating

  const handleReviewSubmit = () => {
    if (reviewText && rating) {
      const newReview = { text: reviewText, rating };
      setReviews([...reviews, newReview]);
      setReviewText('');
      setRating(0);
    }
  };

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
          <Product
            product={product}
            variant="detail"
            imageHeight="500px"
            showAddToCart={false}
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

          <Product
            product={product}
            variant="detail"
            showAddToCart={true}
            imageHeight="0"
          />
        </Stack>
      </Flex>

      <Box mt={10}>
        <Heading size="lg" mb={4}>Reviews</Heading>
        <Stack spacing={4}>
          {reviews.length === 0 ? (
            <Text>No reviews yet.</Text>
          ) : (
            reviews.map((review, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
                <Text fontWeight="bold">Rating: {review.rating}</Text>
                <Text>{review.text}</Text>
              </Box>
            ))
          )}
        </Stack>

        <Box mt={6}>
          <Heading size="md" mb={2}>Leave a Review</Heading>
          <Textarea
            placeholder="Write your review here..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            mb={2}
          />
          <Stack spacing={2}>
            <Text>Rating:</Text>
            <Stack direction="row">
              {[1, 2, 3, 4, 5].map((star) => (
                <Button
                  key={star}
                  onClick={() => setRating(star)}
                  colorScheme={star <= rating ? 'yellow' : 'gray'}
                >
                  {star}
                </Button>
              ))}
            </Stack>
            <Button onClick={handleReviewSubmit} colorScheme="blue" mt={2}>
              Submit Review
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetails; 