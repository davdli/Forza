// create dispatch functions
// passing dispatch functions into the context

import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('inputs')) || []; //pull inputs immedicately from local storage
export const StrengthProgressContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [inputs, dispatch] = useReducer(contextReducer, initialState);

  const addInput = (input) => {
    dispatch({
      type: 'ADD_INPUT',
      payload: input
    })
  };
  const removeInput = (id) => {
    dispatch({
      type: 'REMOVE_INPUT',
      payload: id
    })
  };
  return (
    <StrengthProgressContext.Provider value={{
      addInput,
      removeInput,
      inputs
    }}>
      {children}
    </StrengthProgressContext.Provider>
  );
};
