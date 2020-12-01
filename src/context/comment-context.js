import React, { createContext, useReducer } from 'react';

export const CommentContext = createContext();

const initialState = {
  comments: [
    { idPost: 1, idCom: 1, user: 'Joe Doe', comment: 'Libero ultrices eros pretium tempor molestie facilisi ac accumsan dapibus' },
    { idPost: 2, idCom: 1, user: 'Max', comment: 'Diam class mattis eget cubilia mus imperdiet bibendum, varius urna lacinia hac quisque cras dis quam.' },
    { idPost: 1, idCom: 2, user: 'Emily Thomson', comment: 'Eros pretium tempor molestie' },
    { idPost: 3, idCom: 1, user: 'Steffy Smith', comment: 'Ad dis mollis vel tincidunt pharetra, sagittis ut risus taciti, neque aptent maecenas euismod.' },
    { idPost: 2, idCom: 2, user: 'Zoey', comment: 'Sagittis ut risus taciti.' },
    { idPost: 4, idCom: 1, user: 'Mike Taylor', comment: 'Neque aptent maecenas euismod.' },
    { idPost: 7, idCom: 1, user: 'Tommy', comment: 'Eros pretium tempor molestie' },
    { idPost: 8, idCom: 1, user: 'Corey Boyd', comment: 'Sagittis ut risus taciti.' },
    { idPost: 5, idCom: 1, user: 'Mary', comment: 'Neque aptent maecenas euismod.' },
    { idPost: 8, idCom: 2, user: 'Andrea Donner', comment: 'Libero ultrices eros pretium tempor molestie facilisi ac accumsan dapibus' },
    { idPost: 7, idCom: 1, user: 'Eli', comment: 'Diam class mattis eget cubilia mus imperdiet bibendum,' },
    { idPost: 9, idCom: 1, user: 'Louis Bradley', comment: 'Libero ultrices eros pretium tempor molestie facilisi ac accumsan dapibus' }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      let newComment = state.comments;
      newComment.push({
        idPost: action.payload.idPost,
        idCom: action.payload.idCom,
        user: action.payload.user,
        comment: action.payload.comment
      })
      return {...state, comments: newComment }
      // return { ...state, comments: newComment(action.payload) }
    default:
      return initialState
  }
}

export const CommentContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CommentContext.Provider value={[state, dispatch]}>
      {props.children}
    </CommentContext.Provider>
  );
}
