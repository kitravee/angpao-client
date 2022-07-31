import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: ['Prompt'].join(','),
  },
  palette: {
    primary: {
      main: '#FFBB16',
    },
    secondary: {
      main: '#FFBB16',
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
