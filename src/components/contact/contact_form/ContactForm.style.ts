import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: inherit;
`;

export const Wrapper = styled.div`
  width: clamp(18.75rem, 80%, 37.5rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
