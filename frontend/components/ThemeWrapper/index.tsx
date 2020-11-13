import React from 'react';
import { ThemeProvider, ThemeProviderProps } from '@material-ui/core/styles';
import AgentTheme from 'styles/theme';
import CssBaseline from '@material-ui/core/CssBaseline';

const ThemeWrapper = ({
  children,
  theme = AgentTheme,
}: ThemeProviderProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
