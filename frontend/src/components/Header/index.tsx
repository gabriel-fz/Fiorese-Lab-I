import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import { Container } from './styles';

interface HeaderProps {
  title: string;
  path: string;
  textLink: string;
  icon: 'left' | 'right';
}

const LinkIcon = {
  left: <FiChevronLeft size={20} />,
  right: <FiChevronRight size={20} />,
};

const Header: React.FC<HeaderProps> = ({ title, path, textLink, icon }) => {
  return (
    <Container>
      <h1>{title}</h1>

      {icon === 'left' ? (
        <Link to={path}>
          {LinkIcon[icon]}
          {textLink}
        </Link>
      ) : (
        <Link to={path}>
          {textLink}
          {LinkIcon[icon]}
        </Link>
      )}
    </Container>
  );
};

export default Header;
