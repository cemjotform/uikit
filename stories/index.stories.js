import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';

import Button from '../packages/Button';
import Dropdown from '../packages/Dropdown/index';
import DropdownItem from '../packages/Dropdown/DropdownItem';

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


storiesOf('Dropdown', module)
  .add('with default theme', () => (
    <Dropdown
      name="test"
      className="omer"
      // update={this.handleChange}
      current={[{ value: 'fruit_2', label: 'Orange' }]}
      isMultiple={false}
    >
      <DropdownItem value="fruit_1">Apples</DropdownItem>
      <DropdownItem value="fruit_2">Orange</DropdownItem>
      <DropdownItem value="fruit_3">Banana</DropdownItem>
      <DropdownItem value="fruit_4">Grapes</DropdownItem>
    </Dropdown>
  ));
