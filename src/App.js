import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import Login from './components/Login';
import theme from './theme';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <CartProvider>
          <Router>
            <Box display="flex" flexDirection="column" minHeight="100vh">
              <Header />
              <Box flex="1">
                <Routes>
                  <Route path="/" element={<ProductList />} />
                  <Route path="/product/:productId" element={<ProductDetails />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </Box>
              <Footer />
            </Box>
          </Router>
        </CartProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
