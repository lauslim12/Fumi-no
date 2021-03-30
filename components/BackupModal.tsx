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
import UserContext from '../utils/config';
import { jsonValidate } from '../utils/json';

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const BackupModal = ({ open, setOpen }: Props) => {
  const { data, setData } = useContext(UserContext);
  const stringifiedData = useMemo(() => JSON.stringify(data, null, 2), [data]);
  const { hasCopied, onCopy } = useClipboard(stringifiedData);
  const [textData, setTextData] = useState('');
  const toast = useToast();

  useEffect(() => {
    setTextData(() => JSON.stringify(data, null, 2));
  }, [data]);

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

    setData(() => JSON.parse(textData));
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
              <chakra.p as="strong" fontWeight="bold">
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
            <Button colorScheme="red" onClick={() => overwriteData()}>
              Overwrite
            </Button>
            <Button colorScheme="green" onClick={onCopy}>
              {hasCopied ? 'Copied!' : 'Copy'}
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

export default memo(BackupModal);