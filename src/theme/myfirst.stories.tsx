import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'SystemButton',
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
  <Box>
    <Box sx={{ '& > button': { mx: 0.5 } }}>
      <Button size="small" {...args}>
        small
      </Button>
      <Button size="medium" {...args}>
        medium
      </Button>
      <Button size="large" {...args}>
        large
      </Button>
    </Box>
    <Box sx={{ '& > button': { mx: 0.5 } }}>
      <Button size="small" variant="outlined" {...args}>
        small
      </Button>
      <Button size="medium" variant="outlined" {...args}>
        medium
      </Button>
      <Button size="large" variant="outlined" {...args}>
        large
      </Button>
    </Box>
    <Box sx={{ '& > button': { mx: 0.5 } }}>
      <Button size="small" variant="contained" {...args}>
        small
      </Button>
      <Button size="medium" variant="contained" {...args}>
        medium
      </Button>
      <Button size="large" variant="contained" {...args}>
        large
      </Button>
    </Box>
  </Box>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
