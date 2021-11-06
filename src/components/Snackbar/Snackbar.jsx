import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from './styles';

const SnackbarComp = ({open, setOpen}) => { //provide notification
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return; //notificaton stays there till time ends
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{vertical: 'top', horizontal: 'right'}} // positon appeared
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <MuiAlert onClose={handleClose} severity='success' elevation={6} variant='filled' style={{fontColor: 'black', borderRadius: '6rem'}}>
          CREATED
        </MuiAlert>
      </Snackbar>
    </div>
  )
}

export default SnackbarComp;
