import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { Dispatch, memo, SetStateAction, useContext } from 'react';

import { Colors } from '../../types/Enums';
import UserContext from '../../utils/config';
import { radioValues } from '../../utils/constants';
import { isStringTrue } from '../../utils/json';
import CustomDateInput from './CustomDateInput';

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
  const {
    state: { customDateWidget },
  } = useContext(UserContext);

  return (
    <VStack spacing={4}>
      {isStringTrue(customDateWidget) ? (
        <CustomDateInput
          day={day}
          month={month}
          year={year}
          setDay={setDay}
          setMonth={setMonth}
          setYear={setYear}
        />
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
