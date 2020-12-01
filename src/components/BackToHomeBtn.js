import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function BackToHomeBtn() {
  const history = useHistory();
  const classes = useStyles();

  return(
    <Box>
      <span
        className={classes.root}
        onClick={( ) => history.push(`/`) }
      >
        <ArrowBackIosIcon/>View Posts
      </span>
    </Box>        
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    padding: '1.5em',
    cursor: 'pointer'
  }
}));