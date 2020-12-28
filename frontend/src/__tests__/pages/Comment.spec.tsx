import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react';

import Comment from '../../pages/Comment';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children, ...rest }: { children: React.ReactNode }) => (
      <a {...rest}>{children}</a>
    ),
  };
});

// apiMock.onGet('/entidade-texto').reply(200);

describe('Comment Page', () => {
  afterEach(cleanup);

  it('Espero que a página de Comment seja renderizada', () => {
    const { getByText, getByPlaceholderText } = render(<Comment />);

    expect(getByPlaceholderText('Digite seu comentário')).toBeTruthy();
    expect(getByText('Enviar')).toBeTruthy();
  });

  it('Espero que dê erro ao clicar em enviar sem preencher o textarea', async () => {
    const { getByText } = render(<Comment />);

    const buttonEnviarElement = getByText('Enviar');

    fireEvent.click(buttonEnviarElement);

    await waitFor(() => {
      expect(getByText('Erro ao enviar o comentário!')).toBeTruthy();
    });
  });

  it('Espero que dê sucesso ao preencher o textarea e clicar em enviar', async () => {
    apiMock.onPost('/comentar').reply(200);

    const { getByText, getByPlaceholderText } = render(<Comment />);

    const buttonEnviarElement = getByText('Enviar');
    const textareaComentarElement = getByPlaceholderText(
      'Digite seu comentário',
    );

    fireEvent.change(textareaComentarElement, {
      target: { value: 'O suco estava muito bom, amei!' },
    });
    fireEvent.click(buttonEnviarElement);

    await waitFor(() => {
      expect(getByText('Comentário enviado com sucesso!')).toBeTruthy();
    });
  });
});
