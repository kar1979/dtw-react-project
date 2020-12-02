import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PostInputComment from './PostInputComment';
import { CommentContext } from '../context/comment-context';

export default function PostsComments(props) {
  const classes = useStyles();
  const [comments] = useContext(CommentContext);

  const postId = props.idPost;
  let postComments = {  };

  const selectComments = (idCurrent) => {
    let tempComments = [];
    tempComments = comments.comments.filter(comment => (
      comment.idPost === idCurrent
    ));
    return tempComments;
  };

  postComments = selectComments(postId);

  return (
    <div className={classes.root}>
      <Typography variant="h3">Comments</Typography>
      <div>
        {postComments.map(comment => (
          <Card key={comment.idCom} className="comment">
            <AccountCircleRoundedIcon className="icon" />
            <div className="content_com">
            <Typography variant="h4">{comment.user}</Typography>
            <p>{comment.comment}</p>
            </div>
          </Card>
        ))}
      </div>
      <PostInputComment idPost={postId} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '40%',
    margin: '0 auto 2em',
    '& h3': {
      fontSize: '20px',
      fontWeight: 'bold',
      margin: '1em 0'
    },
    '& .comment': {
      display: 'flex',
      marginBottom: '1.5em',
      padding: '1em'
    },
    '& .icon': {
      fontSize: '2em'
    },
    '& .content_com': {
      paddingLeft: '.5em'
    },
    '& h4': {
      fontSize: '20px',
      fontWeight: 'bold'
    },
    '& p': {
      margin: '0'
    }
  }
}));