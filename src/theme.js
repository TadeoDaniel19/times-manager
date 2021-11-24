import { createTheme } from '@mui/material/styles'
import colors from './constants/colors';
// Create a theme instance.
const theme = createTheme({
  palette: {
    text: {
      primary: colors.fourth,
      secondary: colors.fourth,
      third: colors.fourth,
      fourth: colors.fourth,
    },
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
  typography: {
    fontFamily: [
      '"Muli"',
      'Roboto',
    ].join(','),
  },
});

export default theme;
