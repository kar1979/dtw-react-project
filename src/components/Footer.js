import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default function Footer() {
  const classes = styleFoot();
  return (
    <footer className={classes.root}>
      <p>© 2020 Accenture todos los derechos reservados</p>
    </footer>
  );
}

const styleFoot = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '150px',
    backgroundColor: '#000',
    color: '#fff'
  }
});