import { Heading, Text, VStack } from '@chakra-ui/react';
import { memo } from 'react';

const Luck = () => (
  <VStack spacing={3}>
    <Heading as="h1" size="4xl">
      I know you can do it.
    </Heading>

    <Text as="h2">Life is too short to be worrying about something you cannot control.</Text>
    <Text as="h2">You have survived 100% of your bad days!</Text>
    <Text as="h3">Come back tommorow for another quote!</Text>
  </VStack>
);

export default memo(Luck);
