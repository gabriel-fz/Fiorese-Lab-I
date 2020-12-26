import React, { TextareaHTMLAttributes, useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import { Container } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

const TextArea: React.FC<TextAreaProps> = ({ name, ...rest }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <textarea value={defaultValue} ref={textareaRef} {...rest} />
    </Container>
  );
};

export default TextArea;
