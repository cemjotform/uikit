import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.clean.color};
  border: 2px solid ${props => props.theme.clean.color};
`;

Button.defaultProps = {
  theme: {
    clean: {
      color: 'palevioletred'
    }
  }
};

export default Button;
