import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import { render, waitFor } from '@testing-library/react';

import Dashboard from '../../pages/Dashboard';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children, ...rest }: { children: React.ReactNode }) => (
      <a {...rest}>{children}</a>
    ),
  };
});

describe('Dashboard Page', () => {
  it('Espero que a página de dashboard seja renderizada', async () => {
    apiMock.onGet('/apenas-entidade').reply(200, [
      {
        id: 1,
        nome: 'Pizza de Calabresa',
        tipo: 'pizza',
        positivos: 2,
        negativos: 2,
      },
      {
        id: 2,
        nome: 'Pizza de Frango com Catupiry',
        tipo: 'pizza',
        positivos: 2,
        negativos: 2,
      },
    ]);

    const { getByText } = render(<Dashboard />);

    expect(getByText('Fazer um comentário')).toHaveAttribute('to', '/comment');

    await waitFor(() => {
      expect(getByText('Pizza de Calabresa')).toBeTruthy();
      expect(getByText('Pizza de Frango com Catupiry')).toBeTruthy();
    });
  });
});
