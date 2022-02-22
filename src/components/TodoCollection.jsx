import React from 'react';

import Todo from './Todo';

const TodoCollection = () => {
  return (
    <div className="flex flex-col gap-y-5 justify-center items-center mt-[5rem]">
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
};

export default TodoCollection;
