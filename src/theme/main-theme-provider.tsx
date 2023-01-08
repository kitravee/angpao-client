import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React, { FC, useCallback, useState } from 'react';
import { useEffect, useMemo } from 'react';
import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts';

import { createContext } from '@/utils/create-context';

import lightTheme, { darkTheme } from './theme';
type Props = {
  children: React.ReactNode;
};

type AgTheme = 'dark' | 'light' | null;

type ContextValue = {
  setTheme?: (mode: AgTheme) => void;
};

const [Provider, useContext] = createContext<ContextValue>();

export const useThemeSetting = useContext;

export const MainThemeProvider: FC<Props> = ({ children }) => {
  const [state, setState] = useState<AgTheme>(null);

  const mode = useReadLocalStorage<AgTheme>('ag-theme-mode');

  const [mainTheme, setMainTheme] = useLocalStorage<AgTheme>(
    'ag-theme-mode',
    mode || 'light',
  );

  useEffect(() => {
    setState(mode);
  }, []);

  const setTheme = useCallback((theme: AgTheme) => {
    setMainTheme(theme);
  }, []);

  const theme = state === 'dark' ? darkTheme : lightTheme;

  const contextValue = useMemo(() => {
    return {
      mainTheme: theme,
      setTheme,
    };
  }, [mainTheme, setTheme]);

  return (
    <Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Provider>
  );
};
