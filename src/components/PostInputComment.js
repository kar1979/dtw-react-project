import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { CommentContext } from '../context/comment-context';

import { useDispatch } from 'react-redux';
import { addNewComment } from '../redux/actions'

export default function PostInputComment(props) {
  const classes = useStyles();
  // const [ state, dispatch ] = useContext(CommentContext);
  const dispatch = useDispatch();
  const [ newComment, setNewComment ] = useState('');

  /*function onSubmit() {
    dispatch({
      type: "ADD_COMMENT",
      payload: {
        idPost: Number(props.idPost),
        idCom: Date.now(),
        user: 'Karla Dávalos',
        comment: newComment
      }
    });
    onReset();
  }*/

  const onSubmit = () => {
    dispatch(addNewComment(
      {
        idPost: Number(props.idPost),
        idCom: Date.now(),
        user: 'Karla Dávalos',
        comment: newComment
      }
    ));
    onReset();
  }

  function onReset() {
    setNewComment('');
  }

  function handleChangeComment(e) {
    setNewComment(e.target.value);
  }

  return(
    <form className={classes.root} autoComplete="off">
      <TextField
        id="standard-textarea"
        label="Write a comment"
        multiline
        onChange={event => handleChangeComment(event)}
        value={newComment}
      />
      <Button variant="contained" color="primary" onClick={onSubmit}>
        Add
      </Button>
    </form>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& div': {
      marginBottom: '.5em'
    },
    '& button': {
      maxWidth: '15px',
      textTransform: 'none'
    }
  }
}));