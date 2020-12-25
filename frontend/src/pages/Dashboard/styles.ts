import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const LinkComment = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 60px;
  width: 300px;
  background: #3d3d4c;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
  margin: 50px auto 0;
`;
