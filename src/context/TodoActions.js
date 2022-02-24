import {
  getDocs,
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { database } from '../firebase.config';

export const getTodos = async () => {
  let todosArray = [];
  const response = await getDocs(collection(database, 'todos'));
  response.forEach((todo) => {
    todosArray.push({
      id: todo.id,
      data: todo.data(),
    });
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

export const deleteTodo = async (todoId) => {
  await deleteDoc(doc(database, 'todos', todoId));
};

export const updateTodo = async (todoId, title, description, dueDate) => {
  await updateDoc(doc(database, 'todos', todoId), {
    title: title,
    desc: description,
    dueDate: dueDate,
  });
};
