import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

export default function SiteTitle() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Box className="title_container">
        <Box {...bracket} borderRight={0}/>
        <Typography variant="h2">Making your Life Easier</Typography>
        <Box {...bracket} borderLeft={0}/>
      </Box>
      <Typography variant="h1">Discovering the World</Typography>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    '& .title_container': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    '& h2': {
      color: '#fc7c52',
      fontFamily: 'Calibri',
      fontSize: '1.2em',
      fontWeight: 'bold'
    },
    '& h1': {
      fontFamily: 'Calibri',
      fontSize: '4em',
      fontWeight: 'bold',
      textAlign: 'center'
    }
  }
}));

const bracket = {
  border: 4,
  m: 1,
  borderColor: '#fc7c52',
  margin: 0,
  style: { width: "1rem", height: "2.5rem" }
};