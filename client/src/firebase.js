// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-app-fcb4a.firebaseapp.com",
  projectId: "mern-real-estate-app-fcb4a",
  storageBucket: "mern-real-estate-app-fcb4a.appspot.com",
  messagingSenderId: "371805166026",
  appId: "1:371805166026:web:8b1200d158db74000e5733"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);