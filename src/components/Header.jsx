import React, { useState } from 'react';

import AddTodo from './AddTodo';
import TodoCollection from './TodoCollection';

const Header = () => {
  const [activeForm, setActiveForm] = useState({
    active: false,
    buttonText: 'Add New Todo',
  });

  return (
    <header className="mt-32 mx-auto text-center flex flex-col justify-center items-center">
      <h1 className="text-3xl text-bold">Todo App</h1>
      <button
        className="w-32 max-h-12 text-white mt-1 rounded-md bg-[#81B622] hover:bg-[#ECF87F] hover:text-black transition-colors"
        onClick={() =>
          setActiveForm({
            active: !activeForm.active,
            buttonText: !activeForm.active ? 'Close popup' : 'Add New Todo',
          })
        }
      >
        {activeForm.buttonText}
      </button>

      {activeForm.active && <AddTodo />}
      {!activeForm.active && <TodoCollection />}
    </header>
  );
};

export default Header;
