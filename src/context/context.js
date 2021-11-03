import React, { useReducer, createContext } from 'react'
import contextReducer from './contextReducer'

const initialState = [];

export const StrengthProgressContext = createContext(initialState)

export const Provider = ({children}) => {
  const [inputs, dispatch] = useReducer(contextReducer, initialState)

  const removeInput = (id) => {
    dispatch({
      type: 'REMOVE_INPUT',
      payload: id
    })
  }

  const addInput = (input) => {
    dispatch({
      type: 'ADD_INPUT',
      padyload: input
    })
  }

  return (
    <StrengthProgressContext.Provider value={{
      removeInput,
      addInput
    }}>
      {children}
    </StrengthProgressContext.Provider>
  )
}
