import React, { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import pizzaImg from '../../assets/pizza.svg';
import Header from '../../components/Header';

import { Card, Badge, LinkComment } from './styles';

interface EntidadesProps {
  id: number;
  nome: string;
  positivos: string;
  negativos: string;
}

const Dashboard: React.FC = () => {
  const [entidades, setEntidades] = useState<EntidadesProps[]>([]);

  useEffect(() => {
    api.get(`/apenas-entidade`).then(response => {
      setEntidades(response.data);
    });
  }, []);

  return (
    <>
      <Header title="Itens analizados" path="/records">
        Ver comentários
        <FiChevronRight size={20} />
      </Header>

      {entidades.map(entidade => (
        <Card key={entidade.id}>
          <img src={pizzaImg} alt="pizza" />
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
