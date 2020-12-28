import React from 'react';
import { render } from '@testing-library/react';

import TextArea from '../../components/TextArea';

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'comentario',
        defaultValue: '',
        registerField: jest.fn(),
      };
    },
  };
});

describe('TextArea Component', () => {
  it('Espero que component TextArea seja renderizado normalmente', () => {
    const { getByPlaceholderText } = render(
      <TextArea
        name="comentario"
        placeholder="Digite seu comentário"
        error={false}
      />,
    );

    expect(getByPlaceholderText('Digite seu comentário')).toBeTruthy();
  });

  it('Espero que component TextArea seja renderizado com erro', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <TextArea name="comentario" placeholder="Digite seu comentário" error />,
    );

    expect(getByTestId('textarea-container')).toHaveStyle(
      'border: 3px solid #eb5757;',
    );
    expect(getByPlaceholderText('Digite seu comentário')).toBeTruthy();
  });
});
