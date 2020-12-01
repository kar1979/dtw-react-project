import React, { createContext, useReducer } from 'react';

export const PostContext = createContext();

const initialState = {
  posts: [
    { id: 1, title: 'A cold and starry night', description: 'Lorem ipsum', category: 'travel', img: 'https://wallpapercave.com/wp/wp2532971.jpg' },
    { id: 2, title: 'At the beach in winter', description: 'Lorem ipsum', category: 'travel', img: 'https://wallpapercave.com/wp/JYodMo6.jpg' },
    { id: 3, title: 'Knowing a new land ', description: 'Lorem ipsum', category: 'travel', img: 'https://wallpaperaccess.com/full/760289.jpg' },
    { id: 4, title: 'Afternoon at Santorini', description: 'Lorem ipsum', category: 'travel', img: 'https://images.alphacoders.com/905/905325.jpg' },
    { id: 5, title: 'Keepink healthy', description: 'Lorem ipsum', category: 'lifestyle', img: 'https://wallpaperaccess.com/full/139118.jpg' },
    { id: 6, title: 'A good place for meeting', description: 'Lorem ipsum', category: 'business', img: 'https://wallpapercave.com/wp/wp1874155.jpg' },
    { id: 7, title: 'Fast and complete', description: 'Lorem ipsum', category: 'food', img: 'https://img5.goodfon.com/wallpaper/nbig/e/37/interieur-restaurant-view.jpg' },
    { id: 8, title: 'Something sweet', description: 'Lorem ipsum', category: 'food', img: 'https://c1.wallpaperflare.com/preview/552/308/997/restaurant-cake-food-coffee.jpg' },
    { id: 9, title: 'A good place for meeting', description: 'Lorem ipsum', category: 'work', img: 'https://c0.wallpaperflare.com/preview/579/508/968/coffee-cup-cup-of-coffee-cafe.jpg' }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_POST":
      return { ...state, posts: deletePost(action.payload) }
    default:
      return initialState
  }
}

function deletePost(postToDel) {
  let tempPost = [];
  tempPost = initialState.posts.filter(
    post => post.id !== postToDel.idPost
  );
  return tempPost;
}

export const PostContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PostContext.Provider value={[state, dispatch]}>
      {props.children}
    </PostContext.Provider>
  );
}
