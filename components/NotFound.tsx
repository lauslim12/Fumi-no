import { VStack, Heading, Text, Button } from '@chakra-ui/react';
import { memo } from 'react';
import NextLink from 'next/link';
import routes from '../utils/routes';
import { FaHome } from 'react-icons/fa';

const NotFound = () => (
  <VStack spacing={3}>
    <Heading as="h1" size="4xl">
      Fumi-no
    </Heading>

    <Text as="h2">Sorry, but the page you are looking for cannot be found!</Text>

    <Button colorScheme="green" variant="outline" leftIcon={<FaHome />}>
      <NextLink href={routes.home.path} as={routes.home.path}>
        Back to Home
      </NextLink>
    </Button>
  </VStack>
);

export default memo(NotFound);
