import {
  Box,
  Heading,
  SimpleGrid,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Product from './Product';
import products from "../data/products";
import { useState } from "react";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box p={5}>
      <Heading mb={6} textAlign="center">
        Catalogue
      </Heading>
      <InputGroup mb={6} size={{ base: "md", md: "sm" }}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            variant="card"
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductList;
