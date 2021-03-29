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
import { Dispatch, FormEvent, memo, SetStateAction, useState } from 'react';
import { Data } from '../types/Data';
import { Colors, Days, Months } from '../types/Enums';
import AdditionForm from './AdditionForm';

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  data: Data[];
  setData: Dispatch<SetStateAction<Data[]>>;
  index: number;
};

const AdditionModal = ({ open, setOpen, data, setData, index }: Props) => {
  const [blessing, setBlessing] = useState(data[index].blessing);
  const [color, setColor] = useState(data[index].color);
  const toast = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const currentDate = new Date();
    const newData: Data = {
      id: `${currentDate.getMonth()}-${currentDate.getFullYear()}-${color}-${currentDate.getTime()}`,
      blessing,
      color,
      day: currentDate.getDate() as Days,
      month: currentDate.getMonth() as Months,
      year: currentDate.getFullYear(),
    };
    const newState = [...data.slice(0, index), newData, ...data.slice(index + 1)];

    setData(() => newState);
    setOpen(false);

    toast({
      title: 'Data edited!',
      description: 'Your current data has been edited!',
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
              <chakra.p>Input your data here!</chakra.p>
            </chakra.div>

            <AdditionForm
              blessing={blessing}
              color={color}
              setBlessing={setBlessing}
              setColor={setColor as Dispatch<SetStateAction<Colors | string>>}
            />
          </VStack>
        </ModalBody>

        <ModalFooter>
          <ButtonGroup>
            <Button colorScheme="green" type="submit">
              Edit Data
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

export default memo(AdditionModal);
