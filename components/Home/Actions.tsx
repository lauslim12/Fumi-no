import { Button, Stack, Tooltip, useColorMode } from '@chakra-ui/react';
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
        <Tooltip
          label="Get started now!"
          aria-label="Tooltip that tells to get started now"
          hasArrow
        >
          <Button colorScheme="green" leftIcon={<FaRocket />}>
            <NextLink as={routes.main.path} href={routes.main.path} passHref>
              Get started
            </NextLink>
          </Button>
        </Tooltip>

        <Tooltip
          label="Learn how to use this!"
          aria-label="Tooltip that points to a button to spawn a popup"
          hasArrow
        >
          <Button
            colorScheme="linkedin"
            leftIcon={<FaQuestion />}
            variant="outline"
            onClick={() => setOpen(true)}
          >
            What is this?
          </Button>
        </Tooltip>

        <Tooltip
          label="Activate dark mode"
          aria-label="Tooltip that points to a button to activate dark mode"
          hasArrow
        >
          <Button colorScheme="orange" leftIcon={<FaMoon />} onClick={toggleColorMode}>
            {colorMode === 'dark' ? 'Light mode' : 'Dark mode'}
          </Button>
        </Tooltip>
      </Stack>
    </>
  );
};

export default memo(Actions);
