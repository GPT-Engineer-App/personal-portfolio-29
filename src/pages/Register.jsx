import { Container, VStack, Heading, Input, Button } from "@chakra-ui/react";

const Register = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">
          Register
        </Heading>
        <Input placeholder="Username" size="lg" />
        <Input placeholder="Email" size="lg" type="email" />
        <Input placeholder="Password" size="lg" type="password" />
        <Button colorScheme="teal" size="lg">
          Register
        </Button>
      </VStack>
    </Container>
  );
};

export default Register;
