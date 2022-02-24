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
        },
      });
    };
    fetchData();
  }, [dispatch, todos]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="flex flex-col gap-y-5 justify-center items-center mt-[5rem]">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todoId={todo.id}
            title={todo.data.title}
            dueDate={todo.data.dueDate}
          />
        ))
      ) : (
        <h1>No more todos, congrats!</h1>
      )}
    </div>
  );
};

export default TodoCollection;
