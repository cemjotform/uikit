import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';

import Button from '../packages/Button';

storiesOf('Button', module)
  .add('with default theme', () => (
    <Button onClick={action('clicked')}>
      Hello Button
    </Button>
  ))
  .add('with mediumseagreen', () => (
    <ThemeProvider theme={{ main: 'mediumseagreen' }}>
      <Button onClick={action('clicked')}>
        Hello Button
      </Button>
    </ThemeProvider>
  ));
