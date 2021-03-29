import { useColorModeValue } from '@chakra-ui/color-mode';
import { Divider, Heading, Spacer, Text, VStack } from '@chakra-ui/layout';
import { memo } from 'react';
import { Data } from '../../types/Data';
import { numberToDay, numberToMonth } from '../../utils/date';

type Props = {
  data: Data;
};

const BlessingCard = ({ data }: Props) => (
  <VStack
    align="stretch"
    borderWidth={1}
    borderColor={useColorModeValue('gray.200', 'gray.500')}
    spacing={4}
    textAlign="center"
    bg={useColorModeValue(`${data.color}.300`, `${data.color}.500`)}
    color={useColorModeValue('black', 'white')}
    p={4}
    rounded="1rem"
    w="full"
    cursor="pointer"
  >
    <Heading as="h5" size="md" fontWeight="500">{`${numberToMonth(data.month)} ${
      data.day
    }`}</Heading>

    <Divider borderColor={useColorModeValue('black', 'white')} />

    <VStack>
      <Text>This day, I am blessed because...</Text>
      <Text>{`"${data.blessing}"`}</Text>
    </VStack>

    <Spacer />
    <Divider borderColor={useColorModeValue('black', 'white')} />

    <Heading as="h5" size="sm" fontWeight="500">
      {numberToDay(new Date(data.year, data.month, data.day).getDay())}
    </Heading>
  </VStack>
);

export default memo(BlessingCard);
