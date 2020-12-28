import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 55px;

  h1 {
    font-size: 45px;
    color: #3d3d4d;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
  }

  @media (max-width: 520px) {
    flex-direction: column;

    margin-bottom: 30px;

    h1 {
      font-size: 30px;
      margin-bottom: 10px;
    }
  }
`;
