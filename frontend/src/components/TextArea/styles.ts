import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  background: #fff;
  padding: 20px 30px;
  height: 150px;
  border-radius: 5px;

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
