import { Text, VStack } from '@chakra-ui/react';
import { memo, useEffect, useState } from 'react';

import defaultQuote from '../../db/defaultQuote';

const Quotes = () => {
  const [quote, setQuote] = useState(defaultQuote);

  useEffect(() => {
    fetch('https://quotes.rest/qod?language=en')
      .then((raw) => raw.json())
      .then((res) => setQuote(res.contents.quotes[0]));
  }, []);

  return (
    <VStack mt={5} textAlign="center">
      <VStack>
        <Text fontWeight="700" fontStyle="italic">{`"${quote.quote}"`}</Text>
        <Text fontWeight="700">{`— ${quote.author}`}</Text>
      </VStack>
    </VStack>
  );
};

export default memo(Quotes);
