import React, { useState, useContext, useEffect } from 'react';
import CardPost from '../components/CardPost';
import FiltersCatego from '../components/FiltersCatego';
import Modal from '../components/Modal';
import { makeStyles } from '@material-ui/core/styles';
import FloatActionBtn from '../components/FloatActionBtn';
import Grid from '@material-ui/core/Grid';
// import { PostContext } from '../context/post-context';

import { useSelector } from 'react-redux';

export default function Home() {
  const postFromStore = useSelector( state => state.post.posts);

  const classes = useStyles();
  // const [infoPost] = useContext(PostContext);
  const [ filter, setFilter ] = useState('all');
  // const [ selectedPost, setPosts ] = useState(infoPost.posts);
  
  const [ selectedPost, setPosts ] = useState(postFromStore);
  const [ open, setOpen ] = useState(false);
  const [ isEdit, setIsEdit ] = useState(false);

  // const initialPosts = infoPost.posts;
  const initialPosts = postFromStore;

  /*useEffect( () => {
    setPosts(infoPost.posts);
  }, [infoPost.posts])*/
  useEffect( () => {
    setPosts(postFromStore);
  }, [postFromStore])
  
  const handleFilter = (event, newFilter) => {
    let tempPosts;

    setFilter(newFilter);
    if (newFilter) {
      tempPosts = performFilter(newFilter);
    } else if (filter === 'all' || null || 'null') {
      tempPosts = initialPosts;
    }
    setPosts(tempPosts);
  };
  
  const performFilter = (newFilter) => {
    /*return infoPost.posts.filter(post =>
      post.category.indexOf(newFilter) !== -1
    );*/
    return postFromStore.filter(post =>
      post.category.indexOf(newFilter) !== -1
    );
  };
  
  const handleModalAddPost = () => {
    setOpen(true);
  };

  const handleModalEditPost = () => {
    setOpen(true);
    setIsEdit(true);
  };
  
  return (
    <div className={classes.root}>
      <div className="btn_add_post">
        <FloatActionBtn onClick={handleModalAddPost} />
        <Modal modalState={open} totalPost={selectedPost} isEdit={isEdit}/>
      </div>
      <FiltersCatego onChange={handleFilter} />
      <Grid container className="posts">
        {selectedPost.map((post) => (
          <Grid
            key={post.id}
            item
            className="post"
            style={{
              backgroundImage: `url(${post.img})`
            }}
          >
            <CardPost postInfo={post} onClick={handleModalEditPost} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .title_container': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    '& #edit:hover': {
      backgroundColor: '#e36d46'
    },
    '& .posts':{
      display: 'flex'
    },
    '& .post': {
      width: '50%',
      height: '50vh',
      backgroundSize: 'cover',
      color: '#fff',
      textShadow: '1px 1px 5px black'
    }
  }
}));