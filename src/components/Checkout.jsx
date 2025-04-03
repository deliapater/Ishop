import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const bgColor = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.200');

  const handleCheckout = () => {
    // Here you can implement the logic to process the payment
    alert('Checkout process initiated!');
    clearCart();
    navigate('/');
  };

  return (
    <Container maxW="container.xl" py={10}>
      <Heading mb={6}>Checkout</Heading>
      <Box bg={bgColor} p={8} borderRadius="lg" boxShadow="md">
        {cart.length === 0 ? (
          <Text>Your cart is empty</Text>
        ) : (
          <Stack spacing={4}>
            {cart.map((item) => (
              <Flex key={item.id} justify="space-between">
                <Text>{item.name}</Text>
                <Text>{item.price} x {item.quantity}</Text>
              </Flex>
            ))}
            <Flex justify="space-between" fontWeight="bold">
              <Text>Total:</Text>
              <Text>${cartTotal.toFixed(2)}</Text>
            </Flex>
            <Button colorScheme="blue" onClick={handleCheckout}>
              Confirm Order
            </Button>
          </Stack>
        )}
      </Box>
    </Container>
  );
};

export default Checkout; 