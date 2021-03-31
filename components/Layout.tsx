import { chakra, Flex, Spacer } from '@chakra-ui/react';
import { GoogleFonts } from 'next-google-fonts';
import Head from 'next/head';
import { memo } from 'react';
import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

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
      <meta name="theme-color" content="#2ecc71" />
      <meta name="msapplication-navbutton-color" content="#2ecc71" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#2ecc71" />

      <link rel="icon" href="./favicon.png" type="image/png" />
      <title>{[...title.map((x) => x?.trim()).filter((x) => x), 'Fumino'].join(' · ')}</title>
    </Head>

    <Flex minH="100vh" direction="column" maxW="1200px" mx="auto">
      <Header />

      <chakra.div p={4}>{children}</chakra.div>
      <Spacer />

      <Footer />
    </Flex>
  </>
);

export default memo(Layout);
