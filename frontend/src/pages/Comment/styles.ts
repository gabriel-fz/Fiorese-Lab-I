import styled, { css } from 'styled-components';

interface BadgeProps {
  error?: boolean;
  success?: boolean;
}

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 60px;
  width: 300px;
  background: #3d3d4c;
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  margin: 50px auto 0;

  &:disabled {
    background: #c4c4c4;
  }
`;

export const Badge = styled.div<BadgeProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;
  width: 300px;
  margin: 30px auto 0;
  border-radius: 50px;

  ${props =>
    props.success &&
    css`
      background: #27ae60;
    `}

  ${props =>
    props.error &&
    css`
      background: #eb5757;
    `}

  strong {
    color: #fff;
    font-size: 14px;
  }
`;
