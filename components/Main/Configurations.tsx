import {
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Switch,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import { memo, useContext, useState } from 'react';
import { FaBarcode, FaBookOpen, FaCodeBranch, FaMoon, FaTable } from 'react-icons/fa';

import UserContext from '../../utils/config';
import { isStringTrue } from '../../utils/json';
import AdditionModal from '../Modal/AdditionModal';
import BackupModal from '../Modal/BackupModal';

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
            <FormLabel htmlFor="your-name" fontSize="lg">
              Your name
            </FormLabel>
            <Editable
              id="your-name"
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
            <FormLabel htmlFor="dark-mode" fontSize="lg">
              Dark mode
            </FormLabel>
            <Switch
              id="dark-mode"
              colorScheme="green"
              isChecked={colorMode === 'dark'}
              onChange={() => toggleColorMode()}
            />
          </HStack>

          <HStack spacing={4}>
            <Icon as={FaTable} boxSize={5} />
            <FormLabel htmlFor="custom-date-widget" fontSize="lg">
              Hide date in &lsquo;Add Data&rsquo;
            </FormLabel>
            <Switch
              id="custom-date-widget"
              colorScheme="green"
              isChecked={!isStringTrue(state.customDateWidget)}
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
