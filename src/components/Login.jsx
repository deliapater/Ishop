import React, { useState } from 'react';
import { Box, Button, Input, Text } from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(username);
    navigate('/');
  };

  return (
    <Box p={5}>
      <Text fontSize="2xl" mb={4}>Login</Text>
      <Input
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        mb={4}
      />
      <Button onClick={handleLogin} colorScheme="blue">Login</Button>
    </Box>
  );
};

export default Login; 