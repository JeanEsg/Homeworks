// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAA40-bLzsH2THkksUAKRivLGzTflB45cc",
  authDomain: "first-project-336cb.firebaseapp.com",
  projectId: "first-project-336cb",
  storageBucket: "first-project-336cb.firebasestorage.app",
  messagingSenderId: "646793344502",
  appId: "1:646793344502:web:0db90e647022506bb583d7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };
