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

import { Data } from '../../types/Data';
import { Colors, Days, Months } from '../../types/Enums';
import UserContext from '../../utils/config';
import InputForm from './InputForm';

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  currentData: Data;
};

const EditModal = ({ open, setOpen, currentData }: Props) => {
  const { dispatch } = useContext(UserContext);
  const [blessing, setBlessing] = useState(currentData.blessing);
  const [color, setColor] = useState(currentData.color);
  const [day, setDay] = useState(currentData.day as number);
  const [month, setMonth] = useState(currentData.month as number);
  const [year, setYear] = useState(currentData.year);
  const toast = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newData: Data = {
      id: currentData.id,
      blessing,
      color,
      day: day as Days,
      month: month as Months,
      year,
    };

    dispatch({ type: 'editData', payload: { currentId: currentData.id, data: newData } });
    setOpen(false);

    toast({
      title: 'Data edited!',
      description: 'Your current data has been edited!',
      status: 'success',
      isClosable: true,
      duration: 5000,
    });
  };

  const handleDelete = (e: FormEvent) => {
    e.preventDefault();

    dispatch({ type: 'deleteData', payload: currentData.id });
    setOpen(false);

    toast({
      title: 'Data deleted!',
      description: 'Your current data has been deleted!',
      status: 'success',
      isClosable: true,
      duration: 5000,
    });
  };

  return (
    <Modal isOpen={open} onClose={() => setOpen(false)} size="lg">
      <ModalOverlay />
      <ModalContent as="form" onSubmit={handleSubmit}>
        <ModalHeader>Edit Data</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <VStack align="stretch" spacing={4}>
            <Alert status="warning">
              <AlertIcon />
              Input is not sanitized. Corrupted input could make the application crash! Delete the
              local storage to fix the problem!
            </Alert>

            <chakra.div>
              <chakra.p>Edit your data here!</chakra.p>
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
            <Button colorScheme="green" type="submit">
              Edit Data
            </Button>
            <Button colorScheme="red" onClick={handleDelete}>
              Delete Data
            </Button>
            <Button colorScheme="blue" onClick={() => setOpen(false)}>
              Close
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default memo(EditModal);
