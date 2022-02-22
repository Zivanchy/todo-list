import React from 'react';

import Header from './components/Header';
import TodoCollection from './components/TodoCollection';
import AddTodo from './components/AddTodo';

const App = () => {
  return (
    <>
      <Header />
      <TodoCollection />
      {/* <AddTodo /> */}
    </>
  );
};

export default App;
