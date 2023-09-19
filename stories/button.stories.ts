import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../src';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['none', 'primary', 'warning', 'danger'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Exmaple: Story = {
  args: {
    children: 'Button',
  },
};
