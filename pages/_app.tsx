import 'focus-visible/dist/focus-visible';
import '../styles/NProgress.scss';
import '../styles/Selection.scss';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import NProgress from '../components/NProgress';
import useScrollPreserver from '../utils/scrollPreserver';
import { SEO } from '../utils/seo';

const fallbackFonts =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const App = ({ Component, pageProps }: AppProps) => {
  useScrollPreserver();

  return (
    <ChakraProvider
      resetCSS
      theme={extendTheme({
        fonts: {
          body: `Quicksand, ${fallbackFonts}`,
          heading: `Raleway, ${fallbackFonts}`,
        },
        components: {
          Heading: {
            baseStyle: {
              fontWeight: 200,
            },
          },
        },
      })}
    >
      <DefaultSeo {...SEO} />
      <NProgress />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
