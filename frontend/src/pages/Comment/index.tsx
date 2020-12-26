import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiChevronLeft } from 'react-icons/fi';

import Header from '../../components/Header';
import TextArea from '../../components/TextArea';

import { Button } from './styles';

interface DataProps {
  comentario: string;
}

const Comment: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data: DataProps) => {
    console.log(data);
  }, []);

  return (
    <>
      <Header title="Comentar" path="/">
        <FiChevronLeft size={20} />
        Voltar
      </Header>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <TextArea name="comentario" placeholder="Digite seu comentário" />

        <Button type="submit">Enviar</Button>
      </Form>
    </>
  );
};

export default Comment;
