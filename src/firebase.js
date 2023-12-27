// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnutwW7YNo2up8SPilcEEKHy17NBDip8Y",
  authDomain: "todos-4cc76.firebaseapp.com",
  projectId: "todos-4cc76",
  storageBucket: "todos-4cc76.appspot.com",
  messagingSenderId: "227429020727",
  appId: "1:227429020727:web:d9383af3f708dbd1047bb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
