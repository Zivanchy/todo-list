import React from 'react';
import { useNavigate } from 'react-router-dom';

import TodoCollection from './TodoCollection';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="mt-32 mx-auto text-center flex flex-col justify-center items-center">
      <h1 className="text-3xl text-bold">Todo App</h1>
      <button
        className="w-32 max-h-12 text-white mt-1 rounded-md bg-[#81B622] hover:bg-[#ECF87F] hover:text-black transition-colors"
        onClick={() => navigate('/addTodo')}
      >
        Add New Todo
      </button>

      <TodoCollection />
    </header>
  );
};

export default Header;
