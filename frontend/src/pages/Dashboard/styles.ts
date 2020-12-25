import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;

  background: #fff;
  padding: 20px 30px;

  img {
    height: 60px;
    margin-right: 30px;
  }

  > strong {
    font-size: 25px;
    color: #3d3d4d;
  }

  > div {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }

  & + div {
    margin-top: 20px;
  }
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;

  width: 140px;
  padding: 2px 2px;
  border-radius: 50px;
  background: #27ae60;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 35px;
    width: 35px;
    background: #fff;
    border-radius: 50%;
    margin-right: 10px;

    strong {
      font-weight: bold;
    }
  }

  & + div {
    margin-left: 20px;
    background: #eb5757;
  }
`;
