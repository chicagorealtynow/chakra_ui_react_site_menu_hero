import React from 'react';
    import {
      Box,
      Flex,
      HStack,
      Link,
      IconButton,
      useDisclosure,
      Stack,
    } from '@chakra-ui/react';
    import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
    import { Link as RouterLink } from 'react-router-dom';
    
    const navItems = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Testimonials', path: '/testimonials' },
      { name: 'Contact', path: '/contact' },
    ];
    
    function Navbar() {
      const { isOpen, onOpen, onClose } = useDisclosure();
    
      return (
        <Box bg="gray.100" px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Box fontWeight="bold">My Site</Box>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    as={RouterLink}
                    to={item.path}
                    px={2}
                    py={1}
                    rounded={'md'}
                    _hover={{
                      textDecoration: 'none',
                      bg: 'gray.200',
                    }}>
                    {item.name}
                  </Link>
                ))}
              </HStack>
            </HStack>
            
          </Flex>
    
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    as={RouterLink}
                    to={item.path}
                    onClick={onClose}
                    px={2}
                    py={1}
                    rounded={'md'}
                    _hover={{
                      textDecoration: 'none',
                      bg: 'gray.200',
                    }}>
                    {item.name}
                  </Link>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      );
    }
    
    export default Navbar;
