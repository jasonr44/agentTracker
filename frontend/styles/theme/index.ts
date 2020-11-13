import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5e35b1',
    },
    background: {
      // default: '#bdbdbd',
    },
  },
  status: {
    danger: orange[500],
  },
});

export default responsiveFontSizes(theme);
