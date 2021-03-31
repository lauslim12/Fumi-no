import { Heading, VStack } from '@chakra-ui/layout';
import { memo, useContext } from 'react';
import UserContext from '../../utils/config';

const Greetings = () => {
  const { name } = useContext(UserContext);

  return (
    <VStack textAlign="center">
      <Heading as="h1" size="2xl">
        {`Welcome back, ${name}!`}
      </Heading>
    </VStack>
  );
};

export default memo(Greetings);
