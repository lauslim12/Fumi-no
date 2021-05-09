import { Flex, Grid, Heading, HStack, Spacer, VStack } from '@chakra-ui/react';
import { memo, useContext, useMemo, useState } from 'react';
import { FaChevronCircleDown, FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

import UserContext from '../../utils/config';
import { numberToMonth } from '../../utils/date';
import BlessingCard from './BlessingCard';
import CustomIconBtn from './CustomIconBtn';

const Blessings = () => {
  const {
    state: { data: allBlessings },
  } = useContext(UserContext);
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
        setCurrentMonth(11);
      }

      return;
    }

    if (actionType === 'next') {
      setCurrentMonth((prevState) => prevState + 1);

      if (currentMonth === 11) {
        setCurrentYear((prevState) => prevState + 1);
        setCurrentMonth(0);
      }

      return;
    }

    setCurrentYear(new Date().getFullYear());
    setCurrentMonth(new Date().getMonth());
  };

  return (
    <VStack mt={5} textAlign="center">
      <Flex align={['center', 'flex-start']} justify={['center', 'flex-start']} w="full" px={2}>
        <Heading as="h2" size="lg" fontWeight="600">
          Blessings
        </Heading>
      </Flex>

      <Flex w="full" p={2}>
        <Heading as="h3" size="lg">{`${numberToMonth(currentMonth)}, ${currentYear}`}</Heading>

        <Spacer />

        <HStack spacing={3}>
          <button type="button" onClick={() => handleDateChange('prev')}>
            <CustomIconBtn ariaLabel="Previous month" customIcon={<FaChevronCircleLeft />} />
          </button>

          <button type="button" onClick={() => handleDateChange('current')}>
            <CustomIconBtn ariaLabel="Current month" customIcon={<FaChevronCircleDown />} />
          </button>

          <button type="button" onClick={() => handleDateChange('next')}>
            <CustomIconBtn ariaLabel="Next month" customIcon={<FaChevronCircleRight />} />
          </button>
        </HStack>
      </Flex>

      <VStack minH="75vh">
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
          <VStack minH="75vh" justify="center">
            <Heading as="h4" size="sm">
              No data found for this month!
            </Heading>
          </VStack>
        )}
      </VStack>
    </VStack>
  );
};

export default memo(Blessings);
