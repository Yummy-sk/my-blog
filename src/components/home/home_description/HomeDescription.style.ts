import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    margin-top: 1rem;
  }
`;

export const Inner = styled.div`
  width: 100%;

  li {
    margin: 0.5rem 0;
  }
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;

  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  font-size: 0.8rem;
  font-weight: 400;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
