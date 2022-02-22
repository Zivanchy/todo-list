import React from 'react';

const AddTodo = () => {
  const handleForm = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };

  return (
    <form className="artboard phone-1 artobard-demo absolute m-auto top-0 left-0 right-0 bottom-0 flex flex-col justify-around items-center">
      <h1 className="text-3xl">Add Todo</h1>
      <div className="w-full">
        <label className="label label-text">Todo title:</label>
        <input
          type="text"
          className="input input-bordered input-info w-full max-w-xs"
        />
      </div>

      <div className="w-full">
        <label className="label label-text">Todo Description:</label>
        <textarea className="input input-bordered input-info w-full max-w-xs"></textarea>
      </div>

      <div className="w-full">
        <label className="label label-text">Due date:</label>
        <input
          type="date"
          className="w-full max-w-xs bg-transparent border rounded-[5px] border-white"
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
