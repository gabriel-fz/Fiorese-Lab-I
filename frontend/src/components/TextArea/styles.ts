import styled, { css } from 'styled-components';

interface ContainerProps {
  error: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;

  background: #fff;
  padding: 20px 30px;
  height: 150px;
  border-radius: 5px;

  ${props =>
    props.error &&
    css`
      border: 3px solid #eb5757;
    `}

  textarea {
    display: flex;
    flex: 1;

    resize: none;
    border: none;

    ::-webkit-input-placeholder {
      font: bold 16px Roboto, sans-serif;
      color: #a8a8b3;
    }
  }
`;
