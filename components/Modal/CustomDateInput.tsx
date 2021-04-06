import {
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from '@chakra-ui/react';
import { Dispatch, memo, SetStateAction, useState } from 'react';
import { numberToMonth } from '../../utils/date';

type Props = {
  day: number;
  month: number;
  year: number;
  setDay: Dispatch<SetStateAction<number>>;
  setMonth: Dispatch<SetStateAction<number>>;
  setYear: Dispatch<SetStateAction<number>>;
};

const CustomDateInput = ({ day, month, year, setDay, setMonth, setYear }: Props) => {
  const [isToday, setIsToday] = useState(true);

  const checkboxHandler = () => {
    if (!isToday) {
      const currentDate = new Date();

      setDay(currentDate.getDate());
      setMonth(currentDate.getMonth());
      setYear(currentDate.getFullYear());

      return setIsToday(true);
    }

    return setIsToday(false);
  };

  return (
    <>
      <FormControl id="day" isRequired isDisabled={isToday}>
        <FormLabel>Day of the good thing.</FormLabel>
        <NumberInput
          value={day}
          min={1}
          max={31}
          onChange={(value) => setDay(parseInt(value.toString(), 10))}
          isDisabled={isToday}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormHelperText>In case you want to fill in the other days!</FormHelperText>
      </FormControl>

      <FormControl id="month" isRequired isDisabled={isToday}>
        <FormLabel>Month of the good thing.</FormLabel>
        <Select
          value={month}
          variant="filled"
          onChange={({ currentTarget: { value } }) => setMonth(parseInt(value.toString(), 10))}
        >
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <option key={i} value={i}>
                {numberToMonth(i)}
              </option>
            ))}
        </Select>
        <FormHelperText>In case you want to fill in the other days!</FormHelperText>
      </FormControl>

      <FormControl id="year" isRequired isDisabled={isToday}>
        <FormLabel>Year of the good thing.</FormLabel>
        <NumberInput
          value={year}
          min={new Date().getFullYear() - 5}
          max={new Date().getFullYear() + 5}
          onChange={(value) => setYear(parseInt(value.toString(), 10))}
          isDisabled={isToday}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormHelperText>Minimum/maximum year is five years from now!</FormHelperText>
      </FormControl>

      <Checkbox colorScheme="green" isChecked={isToday} onChange={checkboxHandler}>
        Today date.
      </Checkbox>
    </>
  );
};

export default memo(CustomDateInput);
