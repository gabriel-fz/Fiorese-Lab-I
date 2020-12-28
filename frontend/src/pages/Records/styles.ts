import styled from 'styled-components';

interface EntityProps {
  sentiment: string;
}

export const Card = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  background: #fff;
  padding: 20px 30px;
  border-radius: 5px;

  & + div {
    margin-top: 20px;
  }

  p {
    color: #3d3d4c;
  }

  hr {
    width: 100%;
    margin: 20px 0;
    border: 0;
    border: 1px solid #c4c4c4;
  }

  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const Entity = styled.div<EntityProps>`
  & + div {
    margin-left: 30px;
  }

  div {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin-right: 8px;
    background: ${props =>
      props.sentiment === 'positive' ? '#27ae60' : '#eb5757'};
  }

  span {
    color: #c4c4c4;
  }
`;
