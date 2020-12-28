import React, { useRef, useCallback, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiChevronLeft } from 'react-icons/fi';

import api from '../../services/api';

import Header from '../../components/Header';
import TextArea from '../../components/TextArea';

import { Button, Badge } from './styles';

interface DataProps {
  comentario: string;
}

const Comment: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = useCallback(async (data: DataProps) => {
    setDisabled(true);
    setError(false);
    setSuccess(false);

    try {
      if (data.comentario === '') {
        throw new Error();
      }

      await api.post('/comentar', data);

      setSuccess(true);
    } catch {
      console.log('Erro ao enviar o arquivo');
      setError(true);
    }
    setDisabled(false);
  }, []);

  return (
    <>
      <Header title="Comentar" path="/">
        <FiChevronLeft size={20} />
        Voltar
      </Header>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <TextArea
          name="comentario"
          placeholder="Digite seu comentário"
          error={error}
        />

        <Button type="submit" disabled={disabled}>
          {disabled ? 'Enviando' : 'Enviar'}
        </Button>

        {error && (
          <Badge error={error}>
            <strong>Erro ao enviar o comentário!</strong>
          </Badge>
        )}

        {success && (
          <Badge success={success}>
            <strong>Comentário enviado com sucesso!</strong>
          </Badge>
        )}
      </Form>
    </>
  );
};

export default Comment;
