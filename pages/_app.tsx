import 'focus-visible/dist/focus-visible';

import { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const fallbackFonts =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const App = ({ Component, pageProps }: AppProps) => (
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
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
