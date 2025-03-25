import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  VStack,
  HStack,
  Text,
  Image,
  IconButton,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon, DeleteIcon } from '@chakra-ui/icons';
import { useCart } from '../context/CartContext';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const bgColor = useColorModeValue('white', 'gray.800');

  const handleUpdateQuantity = (productId, currentQuantity, change) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerContent bg={bgColor}>
        <DrawerCloseButton />
        <DrawerHeader>Your Shopping Cart</DrawerHeader>

        <DrawerBody>
          <VStack spacing={4} align="stretch">
            {cart.length === 0 ? (
              <Text>Your cart is empty</Text>
            ) : (
              cart.map((item) => (
                <Box
                  key={item.id}
                  p={4}
                  borderWidth="1px"
                  borderRadius="lg"
                  position="relative"
                >
                  <HStack spacing={4}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      boxSize="100px"
                      objectFit="cover"
                      borderRadius="md"
                    />
                    <VStack align="start" flex={1}>
                      <Text fontWeight="bold">{item.name}</Text>
                      <Text color="gray.500">{item.price}</Text>
                      <HStack>
                        <IconButton
                          icon={<MinusIcon />}
                          size="sm"
                          onClick={() => handleUpdateQuantity(item.id, item.quantity, -1)}
                        />
                        <Text>{item.quantity}</Text>
                        <IconButton
                          icon={<AddIcon />}
                          size="sm"
                          onClick={() => handleUpdateQuantity(item.id, item.quantity, 1)}
                        />
                      </HStack>
                    </VStack>
                    <IconButton
                      icon={<DeleteIcon />}
                      variant="ghost"
                      colorScheme="red"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </HStack>
                </Box>
              ))
            )}
          </VStack>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <VStack width="100%" spacing={4}>
            <HStack justify="space-between" width="100%">
              <Text fontWeight="bold">Total:</Text>
              <Text fontWeight="bold">${cartTotal.toFixed(2)}</Text>
            </HStack>
            <Button
              colorScheme="blue"
              width="100%"
              isDisabled={cart.length === 0}
            >
              Checkout
            </Button>
          </VStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer; 