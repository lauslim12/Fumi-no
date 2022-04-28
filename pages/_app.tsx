import '@fontsource/quicksand/300.css';
import '@fontsource/quicksand/500.css';
import '@fontsource/quicksand/600.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/700.css';
import 'focus-visible/dist/focus-visible';

import { ChakraProvider, extendTheme, ThemeOverride } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Router from 'next/router';
import { DefaultSeo } from 'next-seo';
import NProgress from 'nprogress';

import useScrollPreserver from '../utils/scrollPreserver';
import { SEO } from '../utils/seo';

/**
 * Default listeners for router events.
 */
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const fallbackFonts =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const App = ({ Component, pageProps }: AppProps) => {
  useScrollPreserver();

  return (
    <ChakraProvider
      resetCSS
      theme={extendTheme({
        styles: {
          global: () => ({
            // Global selection.
            '::selection': {
              backgroundColor: '#79ffe1',
              color: '#000000',
            },

            // NProgress.
            '#nprogress': {
              pointerEvents: 'none',
            },
            '#nprogress .bar': {
              color: '#79ffe1',
              h: '2px',
              left: 0,
              pos: 'fixed',
              top: 0,
              w: 'full',
              zIndex: 2000,
            },
            '.nprogress-custom-parent': {
              overflow: 'hidden',
              position: 'absolute',
            },
          }),
        },

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
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
