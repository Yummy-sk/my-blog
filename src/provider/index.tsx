import { ChakraProvider, VStack } from '@chakra-ui/react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '@/styles';
import StyledComponentsRegistry from '@/provider/StyledProvider';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <VStack h='100vh' justifyContent='center'>
      <ChakraProvider>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </ChakraProvider>
    </VStack>
  );
}
