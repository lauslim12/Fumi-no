import {
  Alert,
  AlertIcon,
  Button,
  ButtonGroup,
  chakra,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { Dispatch, FormEvent, memo, SetStateAction, useContext, useState } from 'react';
import { IoClose, IoPencil } from 'react-icons/io5';

import { Data } from '../../types/Data';
import { Colors, Days, Months } from '../../types/Enums';
import UserContext from '../../utils/config';
import InputForm from './InputForm';

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const AdditionModal = ({ open, setOpen }: Props) => {
  const { dispatch } = useContext(UserContext);
  const [blessing, setBlessing] = useState('');
  const [color, setColor] = useState('red' as Colors);
  const [day, setDay] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const toast = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const currentDate = new Date();
    const newData: Data = {
      id: currentDate.getTime().toString(),
      blessing,
      color,
      day: day as Days,
      month: month as Months,
      year,
    };

    dispatch({ type: 'addData', payload: newData });
    setOpen(false);
    setBlessing('');
    setColor('red');
    setDay(new Date().getDate());
    setMonth(new Date().getMonth());
    setYear(new Date().getFullYear());

    toast({
      title: 'Data added!',
      description: 'Your data has been added!',
      status: 'success',
      isClosable: true,
      duration: 5000,
    });
  };

  return (
    <Modal isOpen={open} onClose={() => setOpen(false)} size="lg">
      <ModalOverlay />
      <ModalContent as="form" onSubmit={handleSubmit}>
        <ModalHeader>Add Data</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <VStack align="stretch" spacing={4}>
            <Alert status="warning">
              <AlertIcon />
              Input is not sanitized. Corrupted input could make the application crash! Delete the
              local storage to fix the problem!
            </Alert>

            <chakra.div>
              <chakra.p>Input your data here!</chakra.p>
            </chakra.div>

            <InputForm
              blessing={blessing}
              color={color}
              day={day}
              month={month}
              year={year}
              setBlessing={setBlessing}
              setColor={setColor as Dispatch<SetStateAction<Colors | string>>}
              setDay={setDay}
              setMonth={setMonth}
              setYear={setYear}
            />
          </VStack>
        </ModalBody>

        <ModalFooter>
          <ButtonGroup>
            <Button colorScheme="green" type="submit" leftIcon={<IoPencil />}>
              Add Data
            </Button>
            <Button colorScheme="blue" onClick={() => setOpen(false)} leftIcon={<IoClose />}>
              Close
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default memo(AdditionModal);
