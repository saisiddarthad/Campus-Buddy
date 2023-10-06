// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd1lAGmfBOgxi5pPpjDSG3KyHpA7fJwT4",
  authDomain: "campus-buddy-40c67.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://campus-buddy-40c67-default-rtdb.firebaseio.com/",
  projectId: "campus-buddy-40c67",
  storageBucket: "campus-buddy-40c67.appspot.com",
  messagingSenderId: "1080443345740",
  appId: "1:1080443345740:web:bea8ca822104c86aafcde9"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

// Get a reference to the database service
const database = getDatabase(app);




