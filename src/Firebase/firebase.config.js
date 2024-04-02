// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAegD5o4uaGsZ9raMeGA1V6uOsWzp4qRwM",
  authDomain: "practice-firebase-df865.firebaseapp.com",
  projectId: "practice-firebase-df865",
  storageBucket: "practice-firebase-df865.appspot.com",
  messagingSenderId: "6956897470",
  appId: "1:6956897470:web:9b86ff089bad59ff1cbaef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app