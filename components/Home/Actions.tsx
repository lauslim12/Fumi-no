import { Button, Stack, useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';
import { memo } from 'react';
import { FaMoon, FaQuestion, FaRocket } from 'react-icons/fa';
import routes from '../../utils/routes';

const Actions = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack direction={['column', 'column', 'row']} spacing={3}>
      <NextLink as={routes.main.path} href={routes.main.path} passHref>
        <Button colorScheme="green" leftIcon={<FaRocket />}>
          Get started
        </Button>
      </NextLink>

      <Button colorScheme="linkedin" leftIcon={<FaQuestion />} variant="outline">
        What is this?
      </Button>

      <Button colorScheme="orange" leftIcon={<FaMoon />} onClick={toggleColorMode}>
        {colorMode === 'dark' ? 'Light mode' : 'Dark mode'}
      </Button>
    </Stack>
  );
};

export default memo(Actions);
