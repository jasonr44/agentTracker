import React from 'react';
import { ThemeProvider, Theme } from '@material-ui/core/styles';
import AgentTheme from 'styles/theme';
import CssBaseline from '@material-ui/core/CssBaseline';

interface PartialThemeProviderProps {
  children: React.ReactNode;
  theme?: Partial<Theme> | ((outerTheme: Theme) => Theme);
}

const ThemeWrapper = ({
  children,
  theme = AgentTheme,
}: PartialThemeProviderProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
