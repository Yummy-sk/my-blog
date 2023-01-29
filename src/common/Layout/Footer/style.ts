import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  padding: 1.875rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 16.875rem;
  height: fit-content;

  border-top: 2px solid #e2e2e2;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    margin-top: 0.75rem;
    font-size: 0.875rem;
  }
`;

export const List = styled.ul`
  width: fit-content;

  margin-top: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin: 0 0.5rem;
  }
`;
