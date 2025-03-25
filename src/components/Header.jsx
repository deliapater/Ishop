import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  useDisclosure,
  Text,
  Circle,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartItemsCount } = useCart();

  return (
    <>
      <Box px={4} py={4} shadow="md">
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto">
          <Text fontSize="2xl" fontWeight="bold">
            My Shop
          </Text>
          <Flex align="center" gap={4}>
            <IconButton
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
            />
            <Box position="relative">
              <IconButton
                icon={<FaShoppingCart />}
                onClick={onOpen}
                variant="ghost"
                fontSize="20px"
              />
              {cartItemsCount > 0 && (
                <Circle
                  size="20px"
                  bg="blue.500"
                  color="white"
                  position="absolute"
                  top="-8px"
                  right="-8px"
                  fontSize="xs"
                >
                  {cartItemsCount}
                </Circle>
              )}
            </Box>
          </Flex>
        </Flex>
      </Box>
      <CartDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header; 