import { Flex, Heading, Text, VStack } from '@chakra-ui/layout';
import { memo } from 'react';

const Fumino = () => (
  <Flex textAlign="center" minH="100vh" align="center" justify="center">
    <VStack spacing={3}>
      <Heading as="h1" size="4xl">
        Fumi-no
      </Heading>
      <Text as="h2">If written 史乃, it means 'Your History'.</Text>
      <Text as="h2">So, the question is, what is the good thing that happened to you today?</Text>
    </VStack>
  </Flex>
);

export default memo(Fumino);
