// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:VITE_apiKey,
  authDomain:VITE_authDomain,
  projectId:VITE_projectId,
  storageBucket:VITE_storageBucket,
  messagingSenderId:VITE_messagingSenderId,
  appId:VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);