import React, { useEffect, useContext } from 'react';

import { TodoContext } from '../context/TodoContext';
import { getTodos } from '../context/TodoActions';

import Todo from './Todo';

const TodoCollection = () => {
  const { todos, dispatch, loading } = useContext(TodoContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodos();
      dispatch({
        type: 'GET_TODOS',
        payload: {
          todos: data,
          loading: false,
        },
      });
    };
    fetchData();
  }, [dispatch]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="flex flex-col gap-y-5 justify-center items-center mt-[5rem]">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          title={todo.title}
          description={todo.description}
          dueDate={todo.dueDate.seconds}
        />
      ))}
    </div>
  );
};

export default TodoCollection;
