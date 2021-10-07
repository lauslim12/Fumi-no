import { chakra, HStack, Icon, Link, Text, Tooltip, VStack } from '@chakra-ui/react';
import { memo } from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => (
  <VStack as="footer" align="stretch" p={3} spacing={1} color="gray.500">
    <chakra.div fontSize="xs" textAlign="center">
      <Text>{`Fumino (${process.env.NEXT_PUBLIC_APP_VERSION_NAME}) - OSS for your happiness.`}</Text>
      <Text>{`Copyright © ${new Date().getFullYear()} — Fumi-no Developers`}</Text>
    </chakra.div>

    <HStack spacing={4} justify="center">
      <Tooltip label="GitHub">
        <Link href="https://github.com/lauslim12/Fumi-no" aria-label="GitHub" isExternal>
          <Icon as={FaGithub} />
        </Link>
      </Tooltip>
    </HStack>
  </VStack>
);

export default memo(Footer);
