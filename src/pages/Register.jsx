import { Container, VStack, Heading, Input, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      register(username, email, password);
      toast({
        title: "Registration Successful",
        description: "You have successfully registered.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/login");
    } catch (error) {
      toast({
        title: "Registration Failed",
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
          Register
        </Heading>
        <Input placeholder="Username" size="lg" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input placeholder="Email" size="lg" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Password" size="lg" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button colorScheme="teal" size="lg" type="submit">
          Register
        </Button>
      </VStack>
    </Container>
  );
};

export default Register;
