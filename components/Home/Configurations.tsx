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
import { Dispatch, memo, SetStateAction, useContext, useState } from 'react';
import { FaCodeBranch, FaBookOpen, FaBarcode, FaMoon } from 'react-icons/fa';
import BackupModal from '../BackupModal';
import { Data } from '../../types/Data';
import AdditionModal from '../AdditionModal';
import UserContext from '../../utils/config';

type Props = {
  data: Data[];
  setData: Dispatch<SetStateAction<Data[]>>;
};

const Configurations = ({ data, setData }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [openAdditionModal, setOpenAdditionModal] = useState(false);
  const [openBackupModal, setOpenBackupModal] = useState(false);
  const { name, setName } = useContext(UserContext);

  return (
    <>
      <AdditionModal
        open={openAdditionModal}
        setOpen={setOpenAdditionModal}
        data={data}
        setData={setData}
      />

      <BackupModal
        open={openBackupModal}
        setOpen={setOpenBackupModal}
        data={JSON.stringify(data, null, 2)}
        setData={setData}
      />

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
            <Editable value={name} fontSize="lg" onChange={(value) => setName(value)}>
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
