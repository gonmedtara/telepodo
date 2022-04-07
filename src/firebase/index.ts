// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNSQlTdjfJJiye6s9GC5TD7eaBLr_tBYE",
  authDomain: "fapp-82749.firebaseapp.com",
  projectId: "fapp-82749",
  storageBucket: "fapp-82749.appspot.com",
  messagingSenderId: "918940774152",
  appId: "1:918940774152:web:04892a12e75cd3adae46bd",
  measurementId: "G-YXGJ3HS85Q",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
