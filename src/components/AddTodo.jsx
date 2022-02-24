import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { addTodos } from '../context/TodoActions';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    if (!title || !description || !date) return;

    addTodos(title, description, date);
    setTitle('');
    setDescription('');
    setDate('');

    navigate('/');
  };

  return (
    <form className="artboard phone-1 artobard-demo absolute m-auto top-0 left-0 right-0 bottom-0 flex flex-col justify-around items-center">
      <h1 className="text-3xl">Add Todo</h1>
      <div className="w-full">
        <label className="label label-text">Todo title:</label>
        <input
          type="text"
          className="input input-bordered input-info w-full max-w-xs"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="w-full">
        <label className="label label-text">Todo Description:</label>
        <textarea
          className="input input-bordered input-info w-full max-w-xs"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div className="w-full">
        <label className="label label-text">Due date:</label>
        <input
          type="date"
          className="w-full max-w-xs bg-transparent border rounded-[5px] border-white"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button
        className="btn-success btn-md rounded-[5px] text-xl ml-auto"
        type="submit"
        onClick={handleForm}
      >
        Add todo
      </button>
    </form>
  );
};

export default AddTodo;
