import '@fontsource/quicksand/300.css';
import '@fontsource/quicksand/500.css';
import '@fontsource/quicksand/600.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/700.css';
import 'focus-visible/dist/focus-visible';
import '../styles/NProgress.scss';
import '../styles/Selection.scss';

import { ChakraProvider, extendTheme, ThemeOverride } from '@chakra-ui/react';
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
      } as ThemeOverride)}
    >
      <DefaultSeo {...SEO} />
      <NProgress />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
