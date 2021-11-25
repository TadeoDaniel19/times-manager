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
      main: "#F99D07",
    },
    secondary: {
      main: "#35D461",
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
