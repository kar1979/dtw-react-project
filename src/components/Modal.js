import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import { InputAdornment, MenuItem } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import Button from '@material-ui/core/Button';
// import { PostContext } from '../context/post-context';

import { useDispatch } from 'react-redux';
import { addNewPost, editPost } from '../redux/actions';

export default function Modal(props) {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [ postTitle, setPostTitle ] = useState('');
  const [ postDescription, setPostDescription ] = useState('');
  const [ catego, setCategory ] = useState('travel');
  const [ postImg, setPostImg ] = useState('');
  // const [ state, dispatch ] = useContext(PostContext);

  const [ isOpen, setIsOpen ] = useState(false);

  const newIdPost = props.totalPost.length + 1;
  let modalState = isOpen === false ? props.modalState : !isOpen;
  
  /*function onSubmit() {
    if (props.isEdit) {
      dispatch({
        type: 'EDIT_POST',
        payload: {
          id: 2,
          title: postTitle,
          description: postDescription,
          category: catego,
          img: postImg
        }
      });
    } else {
      dispatch({
        type: "ADD_POST",
        payload: {
          id: newIdPost,
          title: postTitle,
          description: postDescription,
          category: catego,
          img: postImg
        }
      });
    }
  }*/

  const onSubmit = () => {
    if (props.isEdit) {
      dispatch(editPost(
        {
          id: 2,
          title: postTitle,
          description: postDescription,
          category: catego,
          img: postImg
        }
      ));
    } else {
      dispatch(addNewPost(
        {
          id: newIdPost,
          title: postTitle,
          description: postDescription,
          category: catego,
          img: postImg
        }
      ));
    }
    handleCloseModal();
  }

  const handleCloseModal = () => {
    setIsOpen(true);
  };

  const handleChangeTitle = (event) => {
    setPostTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setPostDescription(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeImg = (event) => {
    setPostImg(event.target.value);
  };
  
  return (
    <div>
      <Dialog open={modalState} onClose={handleCloseModal} aria-labelledby="form-dialog-title" className={classes.modal}>
        <DialogTitle id="form-dialog-title">{ props.isEdit ? 'Edit Post' : 'Create Post' }</DialogTitle>
        <DialogContent>
          <form>
            <TextField autoFocus id="title" label="Title" fullWidth onChange={handleChangeTitle}/>
            <TextField id="description" label="Description" fullWidth onChange={handleChangeDescription} />
            <TextField id="category" select label="Category" fullWidth value={catego} onChange={handleChangeCategory}>
              {categories.map((category) => (
                <MenuItem key={category.value} value={category.value}>
                  {category.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField id="url" label="URL of the image" type="url" fullWidth onChange={handleChangeImg}
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
          <Button onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={onSubmit}>
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
