// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUyLzVi94Ond5QDsEWcgaNrKpWLVIw4wQ",
  authDomain: "recipe-app-9dcaa.firebaseapp.com",
  projectId: "recipe-app-9dcaa",
  storageBucket: "recipe-app-9dcaa.appspot.com",
  messagingSenderId: "648529619137",
  appId: "1:648529619137:web:1fa73bbd7ac9e8ab470c40",
  measurementId: "G-6ENB2YHWFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
