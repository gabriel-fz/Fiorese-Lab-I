import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiChevronLeft } from 'react-icons/fi';

import api from '../../services/api';

import Header from '../../components/Header';
import TextArea from '../../components/TextArea';

import { Button } from './styles';

interface DataProps {
  comentario: string;
}

const Comment: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: DataProps) => {
    try {
      if (data.comentario === '') {
        throw new Error();
      }

      await api.post('/comentar', data);
    } catch {
      console.log('Erro ao enviar o arquivo');
    }
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
