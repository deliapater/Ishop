import {
  Box,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import Product from './Product';
import products from "../data/products";

const ProductList = () => {
  return (
    <Box p={5}>
      <Heading mb={6} textAlign="center">
        Catalogue
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {products.map((product) => (
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
