import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import { InputAdornment, MenuItem } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import Button from '@material-ui/core/Button';

export default function Modal(props) {
  const classes = useStyles();
  const [ modalState, setClose ] = useState(props.open);
  const [ catego, setCategory ] = useState('travel');

  const handleClose = () => {
    setClose(false);
  };
  console.log('Desde props: ', props.open);
  console.log('Estado del hook: ', modalState);


  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div>
      <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.modal}>
        <DialogTitle id="form-dialog-title">Create Post</DialogTitle>
        <DialogContent>
          <form>
            <TextField autoFocus id="title" label="Title" fullWidth/>
            <TextField id="description" label="Description" fullWidth/>
            <TextField id="category" select label="Category" fullWidth value={catego} onChange={handleChangeCategory}>
              {categories.map((category) => (
                <MenuItem key={category.value} value={category.value}>
                  {category.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField id="url" label="URL of the image" type="url" fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LinkIcon />
                  </InputAdornment>
                )
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: 'rgb(255 255 255 / 0%)'
  },
  modal: {
    '& h2': {
      fontWeight: 'bold',
      textAlign: 'center'
    },
    '& form > div': {
      marginBottom: '1.5em'
    },
    '& button': {
      textTransform: 'none'
    }
  }
});

const categories = [
  { value: 'travel', label: 'Travel' },
  { value: 'lifestyle', label: 'Lifestyle' },
  { value: 'business', label: 'Business' },
  { value: 'food', label: 'Food' },
  { value: 'work', label: 'Work' }
];
