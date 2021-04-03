import { Button, Stack, useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';
import { memo, useState } from 'react';
import { FaMoon, FaQuestion, FaRocket } from 'react-icons/fa';
import routes from '../../utils/routes';
import GuideModal from '../Modal/GuideModal';

const Actions = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [open, setOpen] = useState(false);

  return (
    <>
      <GuideModal open={open} setOpen={setOpen} />

      <Stack direction={['column', 'column', 'row']} spacing={3}>
        <NextLink as={routes.main.path} href={routes.main.path} passHref>
          <Button colorScheme="green" leftIcon={<FaRocket />}>
            Get started
          </Button>
        </NextLink>

        <Button
          colorScheme="linkedin"
          leftIcon={<FaQuestion />}
          variant="outline"
          onClick={() => setOpen(true)}
        >
          What is this?
        </Button>

        <Button colorScheme="orange" leftIcon={<FaMoon />} onClick={toggleColorMode}>
          {colorMode === 'dark' ? 'Light mode' : 'Dark mode'}
        </Button>
      </Stack>
    </>
  );
};

export default memo(Actions);
