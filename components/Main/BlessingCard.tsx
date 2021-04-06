import { Divider, Heading, Spacer, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { memo, useState } from 'react';
import { Data } from '../../types/Data';
import { numberToDay, numberToMonth } from '../../utils/date';
import EditModal from '../Modal/EditModal';

type Props = {
  data: Data;
};

const BlessingCard = ({ data }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <EditModal open={open} setOpen={setOpen} currentData={data} />

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
        _hover={{ opacity: 0.7, transform: 'scale(1.05)', transition: 'all 0.5s ease' }}
        onClick={() => setOpen(true)}
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
    </>
  );
};
export default memo(BlessingCard);
