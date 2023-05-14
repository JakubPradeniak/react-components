import type { Meta, StoryObj } from '@storybook/react';

import OneTimePassword from './one-time-password';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'One Time Password',
  component: OneTimePassword,
  tags: ['autodocs'],
  argTypes: {
    numberOfFields: {
      control: 'number',
      description: 'Number of text inputs to build out OTP.',
    },
    setValue: {
      control: 'none',
      description: "React's set state action.",
    },
  },
} satisfies Meta<typeof OneTimePassword>;

export default meta;

export const SimpleOTPInput: Story = {
  args: {
    numberOfFields: 6,
    setValue: () => null,
  },
};
