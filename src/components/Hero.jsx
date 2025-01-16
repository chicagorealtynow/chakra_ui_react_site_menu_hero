import React from 'react';
    import {
      Box,
      Flex,
      Heading,
      Text,
      Button,
      Container,
    } from '@chakra-ui/react';
    
    function Hero() {
      return (
        <Box
          bgImage="url('https://images.unsplash.com/photo-1493246572136-d749b29ef131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          bgSize="cover"
          bgPosition="center"
          minH="60vh"
          position="relative"
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="rgba(0,0,0,0.5)"
          />
          <Container
            maxW="container.xl"
            position="relative"
            zIndex={1}
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Flex direction="column" color="white">
              <Heading as="h1" size="2xl" mb={4}>
                Welcome to My Awesome Site
              </Heading>
              <Text fontSize="xl" mb={8}>
                This is a hero section with a background image and a call to action.
              </Text>
              <Button colorScheme="teal" size="lg">
                Get Started
              </Button>
            </Flex>
          </Container>
        </Box>
      );
    }
    
    export default Hero;
