import { Button, Stack } from '@chakra-ui/react';
import { Dispatch, memo, SetStateAction, useState } from 'react';
import { FaCodeBranch, FaBookOpen } from 'react-icons/fa';
import BackupModal from '../BackupModal';
import { Data } from '../../types/Data';
import AdditionModal from '../AdditionModal';

type Props = {
  data: Data[];
  setData: Dispatch<SetStateAction<Data[]>>;
};

const Configurations = ({ data, setData }: Props) => {
  const [openAdditionModal, setOpenAdditionModal] = useState(false);
  const [openBackupModal, setOpenBackupModal] = useState(false);

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

      <Stack direction={['column', 'row']} mt={5}>
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
      </Stack>
    </>
  );
};

export default memo(Configurations);
