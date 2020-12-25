import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';

import Header from '../../Components/Header';

const Records: React.FC = () => {
  return (
    <Header title="Comentários" path="/">
      <FiChevronLeft size={20} />
      Voltar
    </Header>
  );
};

export default Records;
