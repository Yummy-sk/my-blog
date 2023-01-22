import { setConfig } from 'cloudinary-build-url';
import { ChakraProvider, VStack } from '@chakra-ui/react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '@/styles';

export default function Provider({ children }: { children: React.ReactNode }) {
  setConfig({
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  });

  return (
    <VStack h='100vh' justifyContent='center'>
      <ChakraProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </ChakraProvider>
    </VStack>
  );
}
