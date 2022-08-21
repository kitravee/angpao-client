import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { FC } from 'react';

import theme from './theme';

type Props = {
  children: React.ReactNode;
};

export const MainThemeProvider: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
