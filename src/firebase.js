// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAWOKBbfVOxa4pJHFGUgDqmgfbr0WPqODc",
  authDomain: "stomexproject.firebaseapp.com",
  projectId: "stomexproject",
  storageBucket: "stomexproject.appspot.com",
  messagingSenderId: "520693917919",
  appId: "1:520693917919:web:91a2bdd87db72eaf64a16a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);