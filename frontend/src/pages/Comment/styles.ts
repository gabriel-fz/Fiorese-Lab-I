import styled from 'styled-components';

export const TextArea = styled.div`
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
`;
