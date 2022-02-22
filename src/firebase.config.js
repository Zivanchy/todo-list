// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC5LbeLMVq2q5oUZukBpMolxHFIAsAu2e0',
  authDomain: 'todo-list-df8fd.firebaseapp.com',
  projectId: 'todo-list-df8fd',
  storageBucket: 'todo-list-df8fd.appspot.com',
  messagingSenderId: '91625571708',
  appId: '1:91625571708:web:9787be2caede23d3e390f9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore();
