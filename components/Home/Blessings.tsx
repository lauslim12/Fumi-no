import { Flex, Grid, Heading, HStack, Spacer, VStack } from '@chakra-ui/layout';
import { memo, useMemo, useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight, FaChevronCircleDown } from 'react-icons/fa';
import sampleData from '../../db/sampleData';
import { numberToMonth } from '../../utils/date';
import CustomIconBtn from '../CustomIconBtn';
import BlessingCard from './BlessingCard';

const Blessings = () => {
  const [allBlessings, setAllBlessings] = useState(sampleData);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const allData = useMemo(
    () =>
      allBlessings.filter(
        (blessing) => blessing.month === currentMonth && blessing.year === currentYear
      ),
    [currentMonth, currentYear]
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
    <VStack spacing={2} mt={10}>
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
        <Grid templateColumns={{ lg: 'repeat(7, 1fr)' }} gap={3}>
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
