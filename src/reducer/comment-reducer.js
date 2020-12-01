import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return {
        contacts: [...state.contacts, action.payload]
      };
    default:
      throw new Error();
  }
}