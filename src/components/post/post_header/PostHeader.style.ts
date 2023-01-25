import { ColorMode } from '@chakra-ui/react';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const ImgWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;

  width: 100%;

  & .autoImage {
    object-fit: contain !important;
    position: relative !important;
    height: auto !important;
  }import { ColorMode } from '@chakra-ui/react';

`;

export const Title = styled.h1`
  font-size: 2.2em;
  font-weight: 900;

  margin: 0.1em 0 0.5em 0;
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Inner = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.p<{
  currentTheme: ColorMode;
}>`
  font-size: 1rem;

  color: ${({ theme, currentTheme }) =>
    currentTheme === 'light' ? theme.colors.gray : theme.colors.lightGray};
`;

export const Tag = styled.button<{
  currentTheme: ColorMode;
}>`
  transition: color 0.3s ease-in-out;
  font-size: 0.9rem;

  color: ${({ theme, currentTheme }) =>
    currentTheme === 'light' ? theme.colors.gray : theme.colors.lightGray};

  &:hover {
    color: ${({ theme, currentTheme }) =>
      currentTheme === 'light' ? theme.colors.lightGray : theme.colors.gray};
  }
`;

export const UlWrapper = styled.ul`
  display: flex;

  li {
    margin-right: 0.5em;
  }

  margin: 0.5em 0;
`;

export const BackButton = styled.button<{
  currentTheme: ColorMode;
}>`
  transition: color 0.3s ease-in-out;
  text-decoration: underline;

  color: ${({ theme, currentTheme }) =>
    currentTheme === 'light' ? theme.colors.gray : theme.colors.lightGray};

  &:hover {
    color: ${({ theme, currentTheme }) =>
      currentTheme === 'light' ? theme.colors.lightGray : theme.colors.gray};
  }
`;
