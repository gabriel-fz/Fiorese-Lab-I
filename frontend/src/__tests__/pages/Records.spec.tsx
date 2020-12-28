import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import { render, waitFor } from '@testing-library/react';

import Records from '../../pages/Records';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children, ...rest }: { children: React.ReactNode }) => (
      <a {...rest}>{children}</a>
    ),
  };
});

describe('Records Page', () => {
  it('Espero que a página de Records seja renderizada', async () => {
    apiMock.onGet('/entidade-texto').reply(200, [
      {
        id: 1,
        texto: 'Eu odiei a pizza portuguesa.',
        entidades: [
          {
            item: 'Portuguesa',
            sentimento: 'negative',
          },
        ],
      },
      {
        id: 2,
        texto: 'Eu odiei o suco, muito ruim',
        entidades: [
          {
            item: 'Suco',
            sentimento: 'negative',
          },
        ],
      },
    ]);

    const { getByText } = render(<Records />);

    await waitFor(() => {
      expect(getByText('Eu odiei a pizza portuguesa.')).toBeTruthy();
      expect(getByText('Eu odiei o suco, muito ruim')).toBeTruthy();
    });
  });
});
