import React, { createContext, useReducer } from 'react';
import todoReducer from './TodoReducers';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const initialState = {
    todos: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
