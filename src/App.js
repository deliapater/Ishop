import { ChakraProvider } from '@chakra-ui/react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CartProvider>
        <Header />
        <ProductList />
      </CartProvider>
    </ChakraProvider>
  );
}

export default App;
