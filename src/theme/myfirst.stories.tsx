import { Button } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'System/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      options: ['outlined', 'text'],
      control: { type: 'radio' },
    },
    size: {
      options: ['outlined', 'text'],
      control: { type: '' },
    },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <>
    <Button {...args}>Button</Button>
    <Button {...args}>Button</Button>
    <Button {...args}>Button</Button>
  </>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: 'primary',
  variant: 'outlined',
  size: 'large',
};
