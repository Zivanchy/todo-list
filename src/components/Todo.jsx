import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext } from '../context/TodoContext';

import { deleteTodo } from '../context/TodoActions';

import { BiTrash, BiPencil, BiInfoCircle } from 'react-icons/bi';

const Todo = ({ title, dueDate, todoId }) => {
  const [trashColor, setTrashColor] = useState('black');
  const [pencilColor, setPencilColor] = useState('black');
  const [infoColor, setInfoColor] = useState('black');

  const { loading } = useContext(TodoContext);

  if (loading) return;

  const handleDelete = () => {
    deleteTodo(todoId);
  };

  return (
    <div className="flex flex-row justify-between items-center px-3 py-3 min-w-[32rem] border-[#B9B7BD] border rounded-md">
      <h1 className="text-xl text-white">
        {title.length > 10 ? `${title.slice(0, 10)}...` : title}
      </h1>
      <p className="text-sm text-[#868B8E]">{dueDate}</p>

      <div className="flex flex-row justify-between items-center">
        <BiInfoCircle
          className="w-7 h-7 hover:cursor-pointer mr-5"
          fill={infoColor}
          onMouseEnter={() => setInfoColor('#7EC8E3')}
          onMouseLeave={() => setInfoColor('black')}
        />
        <Link to={`/updateTodo/${todoId}`}>
          <BiPencil
            className="w-7 h-7 hover:cursor-pointer mr-5"
            fill={pencilColor}
            onMouseEnter={() => setPencilColor('#B9B7BD')}
            onMouseLeave={() => setPencilColor('black')}
          />
        </Link>
        <BiTrash
          fill={trashColor}
          onMouseEnter={() => setTrashColor('#F51720')}
          onMouseLeave={() => setTrashColor('black')}
          className="w-7 h-7 hover:cursor-pointer"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default Todo;
