import { Heading, Text, VStack } from '@chakra-ui/react';
import { memo } from 'react';

const Fumino = () => (
  <VStack spacing={3}>
    <Heading as="h1" size="4xl">
      Fumi-no
    </Heading>

    <Text as="h2">If written 史乃, it means &lsquo;Your History&rsquo;.</Text>
    <Text as="h2">So, the question is, what is the good thing that happened to you today?</Text>
  </VStack>
);

export default memo(Fumino);
