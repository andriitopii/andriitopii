import { initializeApp } from "firebase/app";
const apiKey = import.meta.env.VITE_API_KEY;
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "andriitopiicom.firebaseapp.com",
  projectId: "andriitopiicom",
  storageBucket: "andriitopiicom.appspot.com",
  messagingSenderId: "539154458834",
  appId: "1:539154458834:web:47baf222a08a9865b4a50b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
