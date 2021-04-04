import {
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Heading,
  HStack,
  Icon,
  Switch,
  Text,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import { memo, useContext, useState } from 'react';
import { FaCodeBranch, FaBookOpen, FaBarcode, FaMoon, FaTable } from 'react-icons/fa';
import BackupModal from '../Modal/BackupModal';
import AdditionModal from '../Modal/AdditionModal';
import UserContext from '../../utils/config';

const Configurations = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { state, dispatch } = useContext(UserContext);
  const [openAdditionModal, setOpenAdditionModal] = useState(false);
  const [openBackupModal, setOpenBackupModal] = useState(false);

  return (
    <>
      <AdditionModal open={openAdditionModal} setOpen={setOpenAdditionModal} />

      <BackupModal open={openBackupModal} setOpen={setOpenBackupModal} />

      <VStack align="start" spacing={4} px={2}>
        <Flex align={['center', 'flex-start']} justify={['center', 'flex-start']} w="full" mt={10}>
          <Heading as="h2" size="lg" fontWeight="600">
            Configurations
          </Heading>
        </Flex>

        <VStack spacing={4} align="start">
          <HStack spacing={4}>
            <Icon as={FaBarcode} boxSize={5} />
            <Text fontSize="lg">Your name</Text>
            <Editable
              value={state.name}
              fontSize="lg"
              onChange={(value) => dispatch({ type: 'editName', payload: value })}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </HStack>

          <HStack spacing={4}>
            <Icon as={FaMoon} boxSize={5} />
            <Text fontSize="lg">Dark mode</Text>
            <Switch
              colorScheme="green"
              isChecked={colorMode === 'dark'}
              onChange={() => toggleColorMode()}
            />
          </HStack>

          <HStack spacing={4}>
            <Icon as={FaTable} boxSize={5} />
            <Text fontSize="lg">Hidden date settings</Text>
            <Switch
              colorScheme="green"
              isChecked={!JSON.parse(state.customDateWidget) as boolean}
              onChange={() => {
                if (state.customDateWidget === 'true') {
                  return dispatch({ type: 'editCustomDateWidget', payload: 'false' });
                }

                return dispatch({ type: 'editCustomDateWidget', payload: 'true' });
              }}
            />
          </HStack>

          <HStack spacing={4}>
            <Button
              colorScheme="green"
              onClick={() => setOpenBackupModal(true)}
              leftIcon={<FaCodeBranch />}
            >
              Manage data
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => setOpenAdditionModal(true)}
              leftIcon={<FaBookOpen />}
            >
              Add data
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </>
  );
};

export default memo(Configurations);
