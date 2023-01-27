import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2rem;
    font-weight: 500;
  }

  span {
    height: 100%;

    border: 1px solid ${({ theme }) => theme.colors.gray};
    margin: 0 20px;
  }
`;
