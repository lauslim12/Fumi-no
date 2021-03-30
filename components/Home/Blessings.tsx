import { Flex, Grid, Heading, HStack, Spacer, VStack } from '@chakra-ui/layout';
import { memo, useContext, useMemo, useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight, FaChevronCircleDown } from 'react-icons/fa';
import UserContext from '../../utils/config';
import { numberToMonth } from '../../utils/date';
import CustomIconBtn from '../CustomIconBtn';
import BlessingCard from './BlessingCard';

const Blessings = () => {
  const { data: allBlessings } = useContext(UserContext);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const allData = useMemo(
    () =>
      allBlessings
        .filter((blessing) => blessing.month === currentMonth && blessing.year === currentYear)
        .sort((a, b) => a.day - b.day),
    [allBlessings, currentMonth, currentYear]
  );

  const handleDateChange = (actionType: 'current' | 'next' | 'prev') => {
    if (actionType === 'prev') {
      setCurrentMonth((prevState) => prevState - 1);

      if (currentMonth === 0) {
        setCurrentYear((prevState) => prevState - 1);
        setCurrentMonth(() => 11);
      }

      return;
    }

    if (actionType === 'next') {
      setCurrentMonth((prevState) => prevState + 1);

      if (currentMonth === 11) {
        setCurrentYear((prevState) => prevState + 1);
        setCurrentMonth(() => 0);
      }

      return;
    }

    setCurrentYear(() => new Date().getFullYear());
    setCurrentMonth(() => new Date().getMonth());
  };

  return (
    <VStack mt={5} textAlign="center">
      <Heading as="h3" size="md" mb={5}>
        Hello! Tell me about your day! Write your stories here!
      </Heading>

      <Flex align={['center', 'flex-start']} justify={['center', 'flex-start']} w="full" px={2}>
        <Heading as="h2" size="lg" fontWeight="600">
          Blessings
        </Heading>
      </Flex>

      <Flex w="full" p={2}>
        <Heading as="h3" size="lg">{`${numberToMonth(currentMonth)}, ${currentYear}`}</Heading>

        <Spacer />

        <HStack spacing={3}>
          <div onClick={() => handleDateChange('prev')}>
            <CustomIconBtn ariaLabel="Previous month" customIcon={<FaChevronCircleLeft />} />
          </div>

          <div onClick={() => handleDateChange('current')}>
            <CustomIconBtn ariaLabel="Current month" customIcon={<FaChevronCircleDown />} />
          </div>

          <div onClick={() => handleDateChange('next')}>
            <CustomIconBtn ariaLabel="Next month" customIcon={<FaChevronCircleRight />} />
          </div>
        </HStack>
      </Flex>

      {allData.length ? (
        <Grid
          templateColumns={['1fr', 'repeat(3, 1fr)', 'repeat(5, 1fr)', 'repeat(7, 1fr)']}
          gap={3}
        >
          {allData.map((blessing) => (
            <BlessingCard key={blessing.id} data={blessing} />
          ))}
        </Grid>
      ) : (
        <Heading as="h5" size="md">
          No data found for this month! Maybe add one?
        </Heading>
      )}
    </VStack>
  );
};

export default memo(Blessings);
