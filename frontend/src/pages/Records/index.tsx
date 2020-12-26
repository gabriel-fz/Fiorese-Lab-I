import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';

import Header from '../../Components/Header';

import { Card, Entity } from './styles';

const Records: React.FC = () => {
  return (
    <>
      <Header title="Comentários" path="/">
        <FiChevronLeft size={20} />
        Voltar
      </Header>

      <Card>
        <p>
          Eu odiei o refrigerante que veio amassado. Porém, a pizza de frango
          com catupiry estava muito gostosa
        </p>

        <hr />

        <div>
          <Entity isPositive>
            <div />
            <span>Refrigerante</span>
          </Entity>

          <Entity isPositive={false}>
            <div />
            <span>Suco</span>
          </Entity>
        </div>
      </Card>

      <Card>
        <p>
          Eu odiei o refrigerante que veio amassado. Porém, a pizza de frango
          com catupiry estava muito gostosa
        </p>

        <hr />

        <div>
          <Entity isPositive>
            <div />
            <span>Refrigerante</span>
          </Entity>

          <Entity isPositive={false}>
            <div />
            <span>Suco</span>
          </Entity>
        </div>
      </Card>

      <Card>
        <p>
          Eu odiei o refrigerante que veio amassado. Porém, a pizza de frango
          com catupiry estava muito gostosa
        </p>

        <hr />

        <div>
          <Entity isPositive>
            <div />
            <span>Refrigerante</span>
          </Entity>

          <Entity isPositive={false}>
            <div />
            <span>Suco</span>
          </Entity>

          <Entity isPositive={false}>
            <div />
            <span>Pizza de calabresa</span>
          </Entity>
        </div>
      </Card>
    </>
  );
};

export default Records;
