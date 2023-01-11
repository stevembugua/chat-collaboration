// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRJi7Zf54Qb7cOjpxEGIk22RNUnHP9CYE",
  authDomain: "chat-collaboration.firebaseapp.com",
  projectId: "chat-collaboration",
  storageBucket: "chat-collaboration.appspot.com",
  messagingSenderId: "536934890031",
  appId: "1:536934890031:web:43a9f572b300a822f224da",
  measurementId: "G-Y8Q1KPFE14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const CollectionRef = collection(db, 'users');

export {db , auth , CollectionRef}