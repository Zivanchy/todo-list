import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { TodoProvider } from './context/TodoContext';

import Header from './components/Header';
import AddTodo from './components/AddTodo';
import UpdateTodo from './components/UpdateTodo';

const App = () => {
  return (
    <>
      <TodoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/addTodo" element={<AddTodo />} />
            <Route path="/updateTodo/:id" element={<UpdateTodo />} />
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </>
  );
};

export default App;
