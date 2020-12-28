import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import pizzaImg from '../../assets/pizza.svg';
import sucoImg from '../../assets/suco.svg';
import refrigeranteImg from '../../assets/refrigerante.svg';
import Header from '../../components/Header';

import { Card, Badge, LinkComment } from './styles';

interface EntidadesProps {
  id: number;
  tipo: 'pizza' | 'suco' | 'refrigerante';
  nome: string;
  positivos: string;
  negativos: string;
}

const imagesCards = {
  pizza: pizzaImg,
  refrigerante: refrigeranteImg,
  suco: sucoImg,
};

const Dashboard: React.FC = () => {
  const [entidades, setEntidades] = useState<EntidadesProps[]>([]);

  useEffect(() => {
    api.get(`/apenas-entidade`).then(response => {
      setEntidades(response.data);
    });
  }, []);

  return (
    <>
      <Header
        title="Itens analizados"
        path="/records"
        textLink="Ver comentários"
        icon="right"
      />

      {entidades.map(entidade => (
        <Card key={entidade.id}>
          <img src={imagesCards[entidade.tipo]} alt={entidade.tipo} />
          <strong>{entidade.nome}</strong>

          <div>
            <Badge isPositive>
              <div>
                <strong>{entidade.positivos}</strong>
              </div>
              <strong>Positivos</strong>
            </Badge>

            <Badge isPositive={false}>
              <div>
                <strong>{entidade.negativos}</strong>
              </div>
              <strong>Negativos</strong>
            </Badge>
          </div>
        </Card>
      ))}

      <LinkComment to="/comment">Fazer um comentário</LinkComment>
    </>
  );
};

export default Dashboard;
