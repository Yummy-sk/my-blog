import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '@/styles';
import StyledComponentsRegistry from '@/provider/StyledProvider';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
