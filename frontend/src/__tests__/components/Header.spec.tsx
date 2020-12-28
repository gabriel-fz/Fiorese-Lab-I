import React from 'react';
import { render } from '@testing-library/react';

import Header from '../../components/Header';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children, ...rest }: { children: React.ReactNode }) => (
      <a {...rest}>{children}</a>
    ),
  };
});

describe('Header Component', () => {
  it('Espero que component Header seja renderizado', () => {
    const { getByText } = render(
      <Header
        title="Itens analizados"
        path="/records"
        textLink="Ver comentários"
        icon="right"
      />,
    );

    expect(getByText('Itens analizados')).toBeTruthy();
    expect(getByText('Ver comentários')).toHaveAttribute('to', '/records');
  });
});
