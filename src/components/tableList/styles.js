import { makeStyles } from '@mui/material';
import colors from '../../constants/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      overflow: 'hidden',
    },
    '& .MuiButton-label': {
      pointerEvents: 'none',
    },
  },
  headerTable: {
    background: '#d3d3d3',
    fontWeight: 'bold',
    fontSize: '14px',
    color: colors.sixth,
  },
  row0: {
    paddingTop: '10px',
    paddingBottom: '10px',
    background: '#d3d3d3',
    fontSize: '13px',
    color: 'black',
  },
  row1: {
    paddingTop: '10px',
    paddingBottom: '10px',
    background: '#B6B5B5',
    fontSize: '13px',
    color: 'black',
  },
  title: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  rowPadding: {
    paddingLeft: '0px',
  },
  tablePagination: {
    boxShadow: 'none',
  },
  header: {
    position: 'sticky',
  },
  pagination: {
    paddingTop: '20px',
  },
}));

export default useStyles;
