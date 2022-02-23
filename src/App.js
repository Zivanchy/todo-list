import React from 'react';

import Header from './components/Header';
import { TodoProvider } from './context/TodoContext';

const App = () => {
  return (
    <>
      <TodoProvider>
        <Header />
      </TodoProvider>
    </>
  );
};

export default App;
