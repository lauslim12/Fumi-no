import { Heading, Text, VStack } from '@chakra-ui/react';
import { memo } from 'react';

const Fumino = () => (
  <VStack textAlign="center" minH="30vh">
    <Heading as="h1">Fumi-no</Heading>
    <Text as="h2">If written 史乃, it means 'Your History'.</Text>
    <Text as="h2">So, the question is, what is the good thing that happened to you today?</Text>
  </VStack>
);

export default memo(Fumino);
