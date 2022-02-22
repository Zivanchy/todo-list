import React from 'react';

const Header = () => {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <header className="mt-32 mx-auto text-center flex flex-col justify-center items-center">
      <h1 className="text-3xl text-bold">Todo App</h1>
      <button
        className="w-32 max-h-12 text-white mt-1 rounded-md bg-[#81B622] hover:bg-[#ECF87F] hover:text-black transition-colors"
        onClick={handleClick}
      >
        Add New Todo
      </button>
    </header>
  );
};

export default Header;
