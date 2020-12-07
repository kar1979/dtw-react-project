import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { PostContext } from '../context/post-context';
import BackToHomeBtn from '../components/BackToHomeBtn';
import PostsTitle from '../components/PostTitle';
import PostsComments from '../components/PostComments';

import { useDispatch, useSelector } from 'react-redux';

export default function PostsDetails() {
  const classes = useStyles();
  // const [posts] = useContext(PostContext);
  const posts = useSelector( state => state.post);
  const location = useLocation();
  const actualRoute = location.pathname;
  const postId = Number(actualRoute.slice(actualRoute.lastIndexOf('/') +1, actualRoute.length));
  let actualPost = {};

  posts.posts.forEach(post => {
    if (post.id === postId) {
      actualPost = post;
    }
  });

  return (
    <div className={classes.root}>
      <div className="heder_post" style={{backgroundImage: `url(${actualPost.img})`}}>
        <BackToHomeBtn />
        <PostsTitle title={actualPost.title}/>
      </div>
      <p className="description">{actualPost.description}</p>
      <PostsComments idPost={postId}/>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f2f2f2',
    paddingBottom: '1em',
    marginBottom: '2em',
    '& .heder_post': {
      backgroundSize: 'cover',
      background: 'round',
      color: '#fff',
      textShadow: '1px 1px 5px black',
    },
    '& .description': {
      padding: '2em 4em',
      fontSize: '22px',
      fontWeight: 500
    }
  }
}));