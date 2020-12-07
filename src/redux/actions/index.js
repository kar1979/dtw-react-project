import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT
} from '../types';

export const addNewPost = (newPost) => {
  return { type: ADD_POST, payload: newPost };
}

export const editPost = (post) => {
  console.log(post);
  return { type: EDIT_POST, payload: post };
}

export const deletePost = (post) => {
  return { type: DELETE_POST, payload: post };
}

export const addNewComment = (comment) => {
  return { type: ADD_COMMENT, payload: comment };
}