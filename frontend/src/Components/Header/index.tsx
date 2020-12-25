import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface HeaderProps {
  title: string;
  path: string;
}

const Header: React.FC<HeaderProps> = ({ title, path, children }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <Link to={path}>{children}</Link>
    </Container>
  );
};

export default Header;
