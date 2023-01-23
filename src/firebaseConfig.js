
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPslZiYimZB5q7CUq8QW3GynGmXbuvNuE",
  authDomain: "superchat-59b65.firebaseapp.com",
  projectId: "superchat-59b65",
  storageBucket: "superchat-59b65.appspot.com",
  messagingSenderId: "335636136382",
  appId: "1:335636136382:web:be1bf7f259062ea7d179ef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);