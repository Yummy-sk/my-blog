import { setConfig } from 'cloudinary-build-url';
import { ChakraProvider, VStack, extendTheme } from '@chakra-ui/react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '@/styles';

export default function Provider({ children }: { children: React.ReactNode }) {
  setConfig({
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  });

  const ctheme = extendTheme({
    styles: {
      global: {
        body: {
          transitionProperty: 'all',
          transitionDuration: '0.8s',
        },
      },
    },
    config: {
      disableTransitionOnChange: false,
    },
  });

  return (
    <VStack h='100vh' justifyContent='center'>
      <ChakraProvider theme={ctheme}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </ChakraProvider>
    </VStack>
  );
}
