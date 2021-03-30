import { Text, VStack } from '@chakra-ui/layout';
import axios from 'axios';
import { memo, useEffect, useState } from 'react';
import defaultQuote from '../../db/defaultQuote';

const Quotes = () => {
  const [quote, setQuote] = useState(defaultQuote);

  useEffect(() => {
    axios.get('https://quotes.rest/qod?language=en').then(({ data: { contents: { quotes } } }) =>
      setQuote(quotes[0])
    );
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
