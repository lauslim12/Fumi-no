import { Heading, VStack } from '@chakra-ui/react';
import { memo, useContext, useEffect, useState } from 'react';

import UserContext from '../../utils/config';

const Greetings = () => {
  const {
    state: { name },
  } = useContext(UserContext);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    return () => clearInterval(timer);
  });

  return (
    <VStack textAlign="center" spacing={3}>
      <Heading as="h1" size="2xl">
        {`Welcome back, ${name}!`}
      </Heading>

      <Heading as="h2" size="md">
        Write your stories here!
      </Heading>

      <Heading as="h3" size="sm" mb={5}>
        {`Time: ${currentTime.toLocaleDateString()} — ${currentTime.toLocaleTimeString('en-GB')}`}
      </Heading>
    </VStack>
  );
};

export default memo(Greetings);
