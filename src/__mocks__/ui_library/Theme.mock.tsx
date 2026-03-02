/* eslint-disable react-refresh/only-export-components */
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
} from '@mui/material';
import type { ReactNode } from 'react';

export const theme = createTheme();

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);
