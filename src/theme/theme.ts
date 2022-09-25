import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        style: {
          borderRadius: '8px',
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        style: {
          borderRadius: '8px',
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        style: {
          fontSize: '20px',
        },
      },
    },
  },
  typography: {
    fontFamily: ['Prompt'].join(','),
  },

  palette: {
    mode: 'light',
    primary: {
      main: '#FFBB16',
    },
    secondary: {
      main: '#DB5229',
    },
    error: {
      main: red.A400,
    },
    angpao: {
      ag1: '#DB5229',
      ag2: '#FFBB16',
      ag3: '#E3D645',
      ag4: '#53A86F',
      ag5: '#1F685C',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffed55',
    },
    secondary: {
      main: '#ff8355',
    },
    error: {
      main: red.A400,
    },
    angpao: {
      ag1: '#ff8355',
      ag2: '#ffed55',
      ag3: '#ffff78',
      ag4: '#84da9e',
      ag5: '#519689',
    },
  },
});

theme.shadows[1] = '0px 1px 10px rgba(0, 0, 0, 0.25)';
theme.shadows[2] = '0px 2px 10px rgba(0, 0, 0, 0.25)';
theme.shadows[3] = '0px 5px 10px rgba(0, 0, 0, 0.25)';
theme.shadows[4] = '0px 10px 10px rgba(0, 0, 0, 0.25)';

export default theme;

export type Theme = typeof theme;
