import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

export default function FloatActionBtn(props) {
  const classes = useStyles();
  
  return (
    <Fab
      id="edit"
      color="primary"
      aria-label="edit"
      className={classes.root}
      onClick={props.onClick}
    >
      <EditIcon/>
    </Fab>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '10px 30px',
    backgroundColor: '#fc7c52'
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));