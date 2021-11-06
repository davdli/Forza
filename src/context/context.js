// create dispatch functions
// passing dispatch functions into the context

import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('inputs')) || [{"category":"Current","exercise":"Bench","weight":225,"date":"2021-11-06","id":"4a75704c-20e9-47ae-8f86-b2dbedb54f74"},{"category":"Start","exercise":"Bench","weight":135,"date":"2021-11-06","id":"227541a8-b44f-4400-a974-aa41b178413a"}]; //pull inputs immedicately from local storage
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
