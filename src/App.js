import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
          </Routes>
        </Router>
      </CartProvider>
    </ChakraProvider>
  );
}

export default App;
