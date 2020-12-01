import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

export default function PostsTitle(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className="title_post">
      <Typography variant="h2">{props.title}</Typography>
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .title_post': {
      height: '45vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    '& .title_post > h2': {
      fontWeight: 'bold'
    }
  }
}));