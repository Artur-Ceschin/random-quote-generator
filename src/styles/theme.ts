import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Raleway',
    body: 'Raleway',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.900',
      },
    },
  },
  shadows: {
    outline: '0',
  },
});
