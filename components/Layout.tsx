import { chakra, Flex } from '@chakra-ui/react';
import { GoogleFonts } from 'next-google-fonts';
import Head from 'next/head';
import { memo } from 'react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string[];
};

const Layout = ({ children, title }: Props) => (
  <>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" />

    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{[...title.map((x) => x?.trim()).filter((x) => x), 'Fumino'].join(' · ')}</title>
    </Head>

    <Flex minH="100vh" direction="column" maxW="1400px" mx="auto">
      <chakra.div p={4}>{children}</chakra.div>
    </Flex>
  </>
);

export default memo(Layout);
