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
import { Dispatch, memo, SetStateAction } from 'react';
import { Colors } from '../types/Enums';
import { radioValues } from '../utils/constants';

type Props = {
  blessing: string;
  color: Colors;
  setBlessing: Dispatch<SetStateAction<string>>;
  setColor: Dispatch<SetStateAction<Colors | string>>;
};

const AdditionForm = ({ blessing, color, setBlessing, setColor }: Props) => (
  <VStack spacing={4}>
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

      <RadioGroup value={color} onChange={setColor} name="color">
        <Wrap>
          {radioValues.map((value) => (
            <WrapItem key={value}>
              <Radio id={value} value={value} colorScheme="red">
                <Box bg={`${value}.300`} p={1} borderRadius="md">
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

export default memo(AdditionForm);
