import { ColorMode } from '@chakra-ui/react';
import Image from 'next/image';
import styled from 'styled-components';

type Props = {
  currentTheme: ColorMode;
  hoverColor: string;
};

export const Container = styled.div`
  width: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  ul {
    display: flex;

    li {
      margin: 0 1rem;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NextImage = styled(Image)`
  border-radius: 50%;
  overflow: hidden;
  width: clamp(9.375rem, 50%, 11.25rem);
  height: clamp(9.375rem, 50%, 11.25rem);
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 600;
`;

export const Paragraph = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
`;

export const IconLink = styled.a<Props>`
  transition: color 0.3s ease-in-out;

  color: ${({ theme, currentTheme }) =>
    currentTheme === 'light' ? theme.colors.gray : theme.colors.lightGray};

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }
`;
