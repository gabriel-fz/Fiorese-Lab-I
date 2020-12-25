import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import pizzaImg from '../../assets/pizza.svg';
import Header from '../../Components/Header';

import { Card, Badge } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header title="Itens analizados" path="/records">
        Ver comentários
        <FiChevronRight size={20} />
      </Header>

      <Card>
        <img src={pizzaImg} alt="pizza" />
        <strong>Pizza de Frango com Catupiry</strong>

        <div>
          <Badge>
            <div>
              <strong>10</strong>
            </div>
            <strong>Positivos</strong>
          </Badge>

          <Badge>
            <div>
              <strong>10</strong>
            </div>
            <strong>Negativos</strong>
          </Badge>
        </div>
      </Card>

      <Card>
        <img src={pizzaImg} alt="pizza" />
        <strong>Pizza de Calabresa</strong>

        <div>
          <Badge>
            <div>
              <strong>10</strong>
            </div>
            <strong>Positivos</strong>
          </Badge>

          <Badge>
            <div>
              <strong>10</strong>
            </div>
            <strong>Negativos</strong>
          </Badge>
        </div>
      </Card>

      <Card>
        <img src={pizzaImg} alt="pizza" />
        <strong>Pizza de Portuguesa</strong>

        <div>
          <Badge>
            <div>
              <strong>10</strong>
            </div>
            <strong>Positivos</strong>
          </Badge>

          <Badge>
            <div>
              <strong>10</strong>
            </div>
            <strong>Negativos</strong>
          </Badge>
        </div>
      </Card>
    </>
  );
};

export default Dashboard;
