import { chakra, HStack, Icon, Link, Text, Tooltip, VStack } from '@chakra-ui/react';
import { memo } from 'react';
import { FaGithub, FaHeart, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

const Footer = () => (
  <VStack as="footer" align="stretch" p={3} spacing={1} color="gray.500">
    <chakra.div fontSize="xs" textAlign="center">
      <Text>{`Fumino (${process.env.NEXT_PUBLIC_APP_VERSION_NAME}) - OSS for your happiness.`}</Text>
      <Text>{`Copyright © ${new Date().getFullYear()} — Nicholas Dwiarto W.`}</Text>
    </chakra.div>

    <HStack spacing={4} justify="center">
      <Tooltip label="GitHub">
        <Link href="https://github.com/lauslim12/Fumi-no" aria-label="GitHub" isExternal>
          <Icon as={FaGithub} />
        </Link>
      </Tooltip>

      <Tooltip label="StackOverflow">
        <Link
          href="https://stackoverflow.com/users/13980107/nicholas-d"
          aria-label="StackOverflow"
          isExternal
        >
          <Icon as={FaStackOverflow} />
        </Link>
      </Tooltip>

      <Tooltip label="LinkedIn">
        <Link href="https://www.linkedin.com/in/nicholasdwiarto/" aria-label="LinkedIn" isExternal>
          <Icon as={FaLinkedin} />
        </Link>
      </Tooltip>

      <Tooltip label="nicholasdw.com">
        <Link href="https://nicholasdw.com" aria-label="Website" isExternal>
          <Icon as={FaHeart} />
        </Link>
      </Tooltip>
    </HStack>
  </VStack>
);

export default memo(Footer);
