import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import Header from '../../Components/Header';

const Dashboard: React.FC = () => {
  return (
    <Header title="Itens analizados" path="/records">
      Ver comentários
      <FiChevronRight size={20} />
    </Header>
  );
};

export default Dashboard;
