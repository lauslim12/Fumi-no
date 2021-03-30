import { Flex, Heading, Text, VStack } from '@chakra-ui/layout';
import { memo } from 'react';
import Quotes from './Quotes';

const Luck = () => (
  <Flex textAlign="center" minH="100vh" align="center" justify="center">
    <VStack spacing={3}>
      <Heading as="h1" size="4xl">
        I know you can do it.
      </Heading>

      <Text as="h2">Life is too short to be worrying about something you cannot control.</Text>
      <Text as="h2">Remember that you have survived 100% of your bad days!</Text>

      <Quotes />
    </VStack>
  </Flex>
);

export default memo(Luck);
