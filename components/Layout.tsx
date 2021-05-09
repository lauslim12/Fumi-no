import { chakra, Flex, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import { memo, ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

type Props = {
  children: ReactNode;
  title: string[];
  isFullPage?: boolean;
};

const Layout = ({ children, title, isFullPage = false }: Props) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2ecc71" />
      <meta name="msapplication-navbutton-color" content="#2ecc71" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#2ecc71" />

      <link rel="icon" href="./favicon.png" type="image/png" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;500;600&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap"
      />
      <title>{[...title.map((x) => x?.trim()).filter((x) => x), 'Fumino'].join(' · ')}</title>
    </Head>

    <Flex minH="100vh" direction="column" maxW="1200px" mx="auto">
      <Header />

      {isFullPage ? (
        <chakra.div p={4} flex={1} display="flex">
          <VStack spacing={4} flex={1} justify="center" textAlign="center">
            {children}
          </VStack>
        </chakra.div>
      ) : (
        <chakra.div p={4} flex={1}>
          {children}
        </chakra.div>
      )}

      <Footer />
    </Flex>
  </>
);

export default memo(Layout);
