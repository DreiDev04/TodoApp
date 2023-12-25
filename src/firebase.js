// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGrAuNEu5DeWnYrkpKPEGdI5rxQR0gMfk",
  authDomain: "todo-app-sample-c0833.firebaseapp.com",
  projectId: "todo-app-sample-c0833",
  storageBucket: "todo-app-sample-c0833.appspot.com",
  messagingSenderId: "343222131051",
  appId: "1:343222131051:web:556e45b282be49a344d42e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
