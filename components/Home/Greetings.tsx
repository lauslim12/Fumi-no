import { Heading, VStack } from '@chakra-ui/layout';
import { memo } from 'react';

const Greetings = () => (
  <VStack textAlign="center">
    <Heading as="h1" size="2xl">
      Welcome back, Nicholas!
    </Heading>
  </VStack>
);

export default memo(Greetings);
