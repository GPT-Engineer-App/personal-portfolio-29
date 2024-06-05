import { Container, VStack, Heading, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { email, password };
    console.log(formData);
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
