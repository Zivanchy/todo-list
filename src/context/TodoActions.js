import { getDocs, collection, addDoc } from 'firebase/firestore';
import { database } from '../firebase.config';

export const getTodos = async () => {
  let todosArray = [];
  const response = await getDocs(collection(database, 'todos'));
  response.forEach((todo) => {
    todosArray.push(todo.data());
  });

  return todosArray;
};

export const addTodos = async (title, desc, dueDate) => {
  await addDoc(collection(database, 'todos'), {
    title: title,
    desc: desc,
    dueDate: dueDate,
  });
};
