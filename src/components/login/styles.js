
import { makeStyles } from '@mui/styles';
import colors from '../../constants/colors';


const useStyles = makeStyles((theme) => ({
  textField: {
    width: '200px',
    fontFamily: 'Muli',
    color: colors.primary,
    marginTop: '25px',
    fontSize: '0.875rem',
    '&:placeholder': {
      fontSize: '1px',
      color: colors.fourth,
      fontFamily: 'Muli',
    },
    '@media (max-width: 400px)': {
      width: '100%',
    },
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 200,
    margin: 'auto'
  },
  loginBtn: {
    marginTop: "10px",
    flexGrow: 4
  },
  header: {
    textAlign: 'center',
    background: '#d3d3d3',
    color: '#fff'
  },
  card: {
    marginTop: "50px",
    padding: '20px'
  }
}));

export default useStyles;
