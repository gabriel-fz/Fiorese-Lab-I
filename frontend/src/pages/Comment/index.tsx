import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';

import Header from '../../Components/Header';

import { TextArea, Button } from './styles';

const Comment: React.FC = () => {
  return (
    <>
      <Header title="Comentar" path="/">
        <FiChevronLeft size={20} />
        Voltar
      </Header>

      <TextArea>
        <textarea placeholder="Digite seu comentário" />
      </TextArea>

      <Button type="submit">Enviar</Button>
    </>
  );
};

export default Comment;
