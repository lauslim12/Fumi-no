import {
  Box,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Select,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { Dispatch, memo, SetStateAction, useContext, useState } from 'react';
import { Colors } from '../../types/Enums';
import UserContext from '../../utils/config';
import { radioValues } from '../../utils/constants';
import { numberToMonth } from '../../utils/date';
import { isStringTrue } from '../../utils/json';

type Props = {
  blessing: string;
  color: Colors;
  day: number;
  month: number;
  year: number;
  setBlessing: Dispatch<SetStateAction<string>>;
  setColor: Dispatch<SetStateAction<Colors | string>>;
  setDay: Dispatch<SetStateAction<number>>;
  setMonth: Dispatch<SetStateAction<number>>;
  setYear: Dispatch<SetStateAction<number>>;
};

const AdditionForm = ({
  blessing,
  color,
  day,
  month,
  year,
  setBlessing,
  setColor,
  setDay,
  setMonth,
  setYear,
}: Props) => {
  const [isToday, setIsToday] = useState(true);
  const {
    state: { customDateWidget },
  } = useContext(UserContext);

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
    <VStack spacing={4}>
      {isStringTrue(customDateWidget) ? (
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
      ) : null}

      <FormControl id="blessing" isRequired>
        <FormLabel>Good thing that happened today.</FormLabel>
        <Input
          type="text"
          name="blessing"
          placeholder="I helped my co-worker with computer problems!"
          focusBorderColor="green.300"
          errorBorderColor="red.300"
          autoComplete="off"
          value={blessing}
          onChange={({ currentTarget: { value } }) => setBlessing(value)}
        />
        <FormHelperText>Write one good thing that happened to you today!</FormHelperText>
      </FormControl>

      <FormControl id="color" isRequired>
        <FormLabel>Your color for your good thing.</FormLabel>

        <RadioGroup value={color} onChange={(value) => setColor(value)} name="color">
          <Wrap>
            {radioValues.map((value) => (
              <WrapItem key={value}>
                <Radio id={value} value={value} colorScheme="red">
                  <Box bg={`${value}.300`} p={1} borderRadius="md" color="black">
                    {value}
                  </Box>
                </Radio>
              </WrapItem>
            ))}
          </Wrap>
        </RadioGroup>

        <FormHelperText>Choose one of the colors that represents this blessing!</FormHelperText>
      </FormControl>
    </VStack>
  );
};

export default memo(AdditionForm);
