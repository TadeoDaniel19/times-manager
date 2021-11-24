import React from 'react';
import { useTheme } from '@mui/styles';
import { Dialog, DialogContent, DialogTitle, IconButton, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import { Close } from '@mui/icons-material';
import useStyles from './styles';

const ModalDetail = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const {
    open,
    handleClose,
    children,
    title,
    scroll,
  } = props;

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        scroll={scroll}
        disableEscapeKeyDown
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" style={{ color: 'black', fontSize: '20px' }}>
          <center>
            {title}
          </center>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
};

ModalDetail.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  handleClose: PropTypes.func.isRequired,
  scroll: PropTypes.string.isRequired,
};
ModalDetail.defaultProps = {
  maxWidth: 'sm',
};

export default ModalDetail;
