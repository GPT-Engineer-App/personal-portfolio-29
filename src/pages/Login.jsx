import { Container, VStack, Heading, Input, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login(email, password);
      toast({
        title: "Login Successful",
        description: "You have successfully logged in.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Login Failed",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%" as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">
          Log In
        </Heading>
        <Input placeholder="Email" size="lg" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Password" size="lg" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button colorScheme="teal" size="lg" type="submit">
          Log In
        </Button>
      </VStack>
    </Container>
  );
};

export default Login;
