import React, { useState, useEffect } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

import api from '../../services/api';

import Header from '../../components/Header';

import { Card, Entity } from './styles';

interface EntidadesProps {
  item: string;
  sentimento: string;
}

interface ComentariosProps {
  id: number;
  texto: string;
  entidades: EntidadesProps[];
}

const Records: React.FC = () => {
  const [comentarios, setComentarios] = useState<ComentariosProps[]>([]);

  useEffect(() => {
    api.get(`/entidade-texto`).then(response => {
      setComentarios(response.data);
    });

    console.log(comentarios);
  }, []);

  return (
    <>
      <Header title="Comentários" path="/">
        <FiChevronLeft size={20} />
        Voltar
      </Header>

      {comentarios.map(comentario => (
        <Card key={comentario.id}>
          <p>{comentario.texto}</p>

          <hr />

          <div>
            {comentario.entidades.map(entidade => (
              <Entity sentiment={entidade.sentimento}>
                <div />
                <span>{entidade.item}</span>
              </Entity>
            ))}
          </div>
        </Card>
      ))}
    </>
  );
};

export default Records;
