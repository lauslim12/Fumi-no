import { Heading, VStack } from '@chakra-ui/react';
import { memo } from 'react';

const Greetings = () => (
  <VStack textAlign="center">
    <Heading as="h1">Welcome back, Nicholas!</Heading>
  </VStack>
);

export default memo(Greetings);
