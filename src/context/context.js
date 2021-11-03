// create dispatch functions
// passing dispatch functions into the context

import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = [];
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

  console.log(inputs);

  return (
    <StrengthProgressContext.Provider value={{
      addInput,
      removeInput
    }}>
      {children}
    </StrengthProgressContext.Provider>
  );
};
