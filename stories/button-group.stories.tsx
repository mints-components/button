import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ButtonGroup, Button } from '../src';

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['none', 'top', 'bottom'],
    },
    align: {
      control: 'select',
      options: ['none', 'left', 'center', 'right'],
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Exmaple: Story = {
  render: ({ position, align }) => (
    <div style={{ width: 400 }}>
      <div>Top</div>
      <ButtonGroup position={position} align={align}>
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button>Button3</Button>
      </ButtonGroup>
      <div>Bottom</div>
    </div>
  ),
};
