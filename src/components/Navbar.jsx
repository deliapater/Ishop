import {
  Box,
  Flex,
  Spacer,
  Link,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={6} py={3} boxShadow="sm">
      <Flex align="center">
        <Link href="/" fontSize="2xl" fontWeight="bold" _hover={{ textDecoration: "none" }}>
            ShopEase
        </Link>
        <Spacer />

        <Flex display={{ base: "none", md: "flex" }} gap={5} align="center">
          <Link href="/" _hover={{ textDecoration: "none" }}>Home</Link>
          <Link href="/products" _hover={{ textDecoration: "none" }}>Products</Link>
          <Link href="/about" _hover={{ textDecoration: "none"}}>About</Link>
          <Link href="/contact" _hover={{textDecoration: "none"}}Contact></Link>
          <IconButton onClick={toggleColorMode} icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} aria-label="Toggle Dark Mode" />
        </Flex>

        <IconButton
            ref={btnRef}
            icon={<HamburgerIcon />}
            display={{ base: "flex", md: "none"}}
            onClick={onOpen}
            aria-label="Open Menu"
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
      <DrawerOverlay />
      <DrawerContent bg={useColorModeValue("gray.100", "gray.900")}>
        <DrawerCloseButton />
        <VStack spacing={6} mt={10}>
            <Link href="/" _hover={{ textDecoration: "none" }}>Home</Link>
            <Link href="/products" _hover={{ textDecoration: "none" }}>Products</Link>
            <Link href="/about" _hover={{ textDecoration: "none" }}>About</Link>
            <Link href="/contact" _hover={{ textDecoration: "none" }}>Contact</Link>
            <Button onClick={toggleColorMode} leftIcon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}>
                { colorMode === "light" ? "Dark Mode" : "Light Mode"}
            </Button>
        </VStack>
      </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
