// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc5Qabyq4wxBAKkjFRAzYJXzR5gzV1Uk4",
  authDomain: "weather-app-db908.firebaseapp.com",
  projectId: "weather-app-db908",
  storageBucket: "weather-app-db908.appspot.com",
  messagingSenderId: "679354885912",
  appId: "1:679354885912:web:27a8d27ad553207a98606d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
