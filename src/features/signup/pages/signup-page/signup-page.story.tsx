// Button.stories.ts|tsx

import { Button } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'asdasd/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => (
  <Button>Button</Button>
);
