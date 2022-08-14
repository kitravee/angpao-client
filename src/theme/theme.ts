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

export default theme;

export type Theme = typeof theme;
