import React from 'react';
import { addDecorator } from '@storybook/react';
import theme from '../src/theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import { createEmotionCache, EmotionCacheProvider } from '../src/lib/emotion';
import { CssBaseline } from '@mui/material';

const clientSideEmotionCache = createEmotionCache();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withThemeProvider = (Story, context) => (
  <EmotionCacheProvider emotionCache={clientSideEmotionCache}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story {...context} />
    </ThemeProvider>
  </EmotionCacheProvider>
);

export const decorators = [withThemeProvider];
