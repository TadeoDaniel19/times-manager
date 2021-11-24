import { makeStyles } from '@mui/styles';
import colors from '../../constants/colors';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    color: colors.primary,
  },
  detail: {
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

export default useStyles;
