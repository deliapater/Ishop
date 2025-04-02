import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  useDisclosure,
  Text,
  Circle,
  HStack,
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import CartDrawer from './CartDrawer';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen: isCartOpen, onOpen: onCartOpen, onClose: onCartClose } = useDisclosure();
  const { isOpen: isMenuOpen, onOpen: onMenuOpen, onClose: onMenuClose } = useDisclosure();
  const { cartItemsCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    onMenuClose();
  };

  return (
    <>
      <Box px={4} py={4} shadow="md" position="sticky" top={0} bg={colorMode === 'light' ? 'white' : 'gray.800'} zIndex={1000}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto">
          <HStack spacing={4}>
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              icon={<HamburgerIcon />}
              onClick={onMenuOpen}
              variant="ghost"
              aria-label="Open menu"
            />
            <Text fontSize="2xl" fontWeight="bold" cursor="pointer" onClick={() => navigate('/')}>
              IShop
            </Text>
          </HStack>

          <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
            {menuItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                onClick={() => handleNavigation(item.path)}
              >
                {item.name}
              </Button>
            ))}
          </HStack>

          <HStack spacing={4}>
            <IconButton
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
            />
            <Box position="relative">
              <IconButton
                icon={<FaShoppingCart />}
                onClick={onCartOpen}
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
            {user ? (
              <Button onClick={handleLogout} colorScheme="red">Logout</Button>
            ) : (
              <Button onClick={() => navigate('/login')} colorScheme="blue">Login</Button>
            )}
          </HStack>
        </Flex>
      </Box>

      {/* Mobile Menu Drawer */}
      <Drawer
        isOpen={isMenuOpen}
        placement="left"
        onClose={onMenuClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  justifyContent="flex-start"
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.name}
                </Button>
              ))}
              {user ? (
                <Button onClick={handleLogout} colorScheme="red">Logout</Button>
              ) : (
                <Button onClick={() => navigate('/login')} colorScheme="blue">Login</Button>
              )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={onCartClose} />
    </>
  );
};

export default Header; 