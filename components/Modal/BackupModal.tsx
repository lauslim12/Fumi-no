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
  Textarea,
  useClipboard,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { Dispatch, memo, SetStateAction, useContext, useEffect, useMemo, useState } from 'react';
import { IoBagCheck, IoClipboard, IoClose, IoPencil } from 'react-icons/io5';
import UserContext from '../../utils/config';
import { jsonValidate } from '../../utils/json';

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const BackupModal = ({ open, setOpen }: Props) => {
  const { state, dispatch } = useContext(UserContext);
  const stringifiedData = useMemo(() => JSON.stringify(state.data, null, 2), [state.data]);
  const { hasCopied, onCopy } = useClipboard(stringifiedData);
  const [textData, setTextData] = useState('');
  const toast = useToast();

  useEffect(() => {
    setTextData(JSON.stringify(state.data, null, 2));
  }, [state.data]);

  const overwriteData = () => {
    const isDataValid = jsonValidate(textData);

    if (!isDataValid) {
      return toast({
        title: 'Failed to edit data!',
        description: 'Your data is in an invalid format!',
        status: 'error',
        isClosable: true,
        duration: 5000,
      });
    }

    dispatch({ type: 'overwriteData', payload: JSON.parse(textData) });
    setOpen(false);

    toast({
      title: 'Data overwritten!',
      description: 'Your data has been successfully replaced!',
      status: 'success',
      isClosable: true,
      duration: 5000,
    });
  };

  return (
    <Modal isOpen={open} onClose={() => setOpen(false)} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Manage data</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <VStack align="stretch" spacing={4}>
            <Alert status="warning">
              <AlertIcon />
              Input is not sanitized. Corrupted input could make data recovery impossible!
            </Alert>

            <chakra.div>
              <chakra.p>You can export your account data for backup and restore.</chakra.p>
              <chakra.p as="strong" fontWeight="700">
                This action cannot be undone.
              </chakra.p>
            </chakra.div>

            <code>
              <Textarea
                value={textData}
                onChange={({ currentTarget: { value } }) => setTextData(value)}
                h="lg"
              />
            </code>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <ButtonGroup>
            <Button colorScheme="red" onClick={() => overwriteData()} leftIcon={<IoPencil />}>
              Overwrite
            </Button>
            <Button
              colorScheme="green"
              onClick={onCopy}
              leftIcon={hasCopied ? <IoBagCheck /> : <IoClipboard />}
            >
              {hasCopied ? 'Copied!' : 'Copy'}
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

export default memo(BackupModal);
