import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: clamp(18.75rem, 80%, 37.5rem);

  h1 {
    font-size: 2rem;
    font-weight: 700;

    margin-bottom: 1.5rem;

    @media (max-width: 600px) {
      display: none;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;

    margin-bottom: 1.5rem;
  }
`;
