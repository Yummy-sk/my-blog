import 'styled-components';

interface IColor {
  white: string;
  dark: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColor;
  }
}

declare global {
  interface ITheme {
    theme: DefaultTheme;
  }
}