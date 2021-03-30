import { chakra, HStack, Icon, Link, Text, Tooltip, VStack } from '@chakra-ui/react';
import { memo } from 'react';
import { FaGithub, FaHeart, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

const Footer = () => (
  <VStack as="footer" align="stretch" p={3} spacing={1} color="gray.500">
    <chakra.div fontSize="xs" textAlign="center">
      <Text>Fumino is an open source web application that acts as your Happiness Jar.</Text>
      <Text>Happiness Jar idea by Elizabeth Gilbert.</Text>
      <Text>{`Copyright © ${new Date().getFullYear()} — Nicholas Dwiarto W.`}</Text>
    </chakra.div>

    <HStack spacing={4} justify="center">
      <Tooltip label="GitHub">
        <Link href="https://github.com/lauslim12/Fumi-no" isExternal>
          <Icon as={FaGithub} />
        </Link>
      </Tooltip>

      <Tooltip label="StackOverflow">
        <Link href="https://stackoverflow.com/users/13980107/nicholas-d" isExternal>
          <Icon as={FaStackOverflow} />
        </Link>
      </Tooltip>

      <Tooltip label="LinkedIn">
        <Link href="https://www.linkedin.com/in/nicholasdwiarto/" isExternal>
          <Icon as={FaLinkedin} />
        </Link>
      </Tooltip>

      <Tooltip label="nicholasdw.com">
        <Link href="https://nicholasdw.com" isExternal>
          <Icon as={FaHeart} />
        </Link>
      </Tooltip>
    </HStack>
  </VStack>
);

export default memo(Footer);
