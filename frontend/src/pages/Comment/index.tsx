import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';

import Header from '../../Components/Header';

const Comment: React.FC = () => {
  return (
    <Header title="Comentar" path="/">
      <FiChevronLeft size={20} />
      Voltar
    </Header>
  );
};

export default Comment;
