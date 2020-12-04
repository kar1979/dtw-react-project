import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import { CommentContext } from '../context/comment-context';
import { PostContext } from '../context/post-context';

export default function CardPost(props) {
  const classes = useStyles();
  const history = useHistory();
  const [comments] = useContext(CommentContext);
  const [state, dispatch] = useContext(PostContext);
  let totalComments = comments.comments;
  let commentsByPost = [];

  function toDelete() {
    dispatch({
      type: 'DELETE_POST',
      payload: {
        idPost: props.postInfo.id
      }
    });
  }
  
  totalComments.forEach(comment => {
    if (comment.idPost === props.postInfo.id) {
      commentsByPost.push(comment);
    }
  });
  
  return (
    <Box className={classes.root}>
      <div
        className="post_info"
        onClick={( ) => history.push(`details/${props.postInfo.id}`)}
      >
        <h3>{props.postInfo.title}</h3>
        <p>{commentsByPost.length} Comments <ForumIcon /></p>
        <p>{props.postInfo.description}</p>
      </div>
      
      <div className="post_bottom">
        <p><strong>{props.postInfo.category}</strong></p>
        <div>
          <IconButton aria-label="picture" component="span" onClick={props.onClick}>
            <EditIcon />
          </IconButton>
          <IconButton component="span" onClick={toDelete}>
            <Delete />
          </IconButton>
        </div>
      </div>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& .post_info': {
      width: '100%',
      padding: '1em',
      height: '39vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      cursor: 'pointer'
    },
    '& .post_bottom': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      textTransform: 'uppercase',
      padding: '1em'
    },
    '& span': {
      color: '#fff',
      textShadow: '1px 1px 5px black'
    }
  }
}));