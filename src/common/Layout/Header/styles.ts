import styled, { DefaultTheme } from 'styled-components';

type CurrentThemeTypes = 'light' | 'dark';
interface NavLinkProps {
  isActive: boolean;
  currentTheme: CurrentThemeTypes;
}

interface NavColorProps {
  theme: DefaultTheme;
  condition: [boolean, CurrentThemeTypes];
}

const getNavColor = ({ theme, condition }: NavColorProps) => {
  const [isActive, currentTheme] = condition;
  const { white, dark, gray, lightGray } = theme.colors;

  if (isActive) {
    return currentTheme === 'light' ? dark : white;
  }

  return currentTheme === 'light' ? gray : lightGray;
};

export const Container = styled.header`
  width: 100%;

  padding-top: 1.875rem;
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.5em;

  button {
    font-size: 1.8em !important;
    font-weight: 800;
  }
`;

export const Nav = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: row-reverse;

  padding-bottom: 2rem;

  ul {
    display: flex;
  }

  @media (max-width: 600px) {
    align-items: center;
    justify-content: center;
  }
`;

export const Anchor = styled.p<NavLinkProps>`
  text-decoration: ${({ isActive }) =>
    isActive ? 'none' : 'underline'} !important;
  margin-left: 1em;

  color: ${({ theme, isActive, currentTheme }) =>
    getNavColor({ theme, condition: [isActive, currentTheme] })};
  font-size: 1em !important;
  font-weight: ${({ isActive }) => (isActive ? '800' : '400')};
`;
