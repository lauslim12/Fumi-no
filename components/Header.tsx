import { Box, HStack, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { memo } from 'react';
import routes from '../utils/routes';

type Props = {
  href: string;
  text: string;
};

const HeaderLink = ({ href, text }: Props) => {
  const router = useRouter();

  return (
    <Box
      cursor="pointer"
      color={href === router.pathname ? '#2ecc71' : 'inherit'}
      _hover={{ textColor: '#2ecc71', textDecor: 'underline' }}
      _focus={{ textColor: '#2ecc71', textDecor: 'underline' }}
    >
      <NextLink as={href} href={href} passHref>
        {text}
      </NextLink>
    </Box>
  );
};

const Header = () => (
  <HStack as="nav" p={3} spacing={2}>
    <HeaderLink href={routes.home.path} text={routes.home.name} />

    <Spacer />

    <HStack spacing={4}>
      <HeaderLink href={routes.main.path} text={routes.main.name} />
      <HeaderLink href={routes.motivation.path} text={routes.motivation.name} />
    </HStack>
  </HStack>
);
export default memo(Header);
