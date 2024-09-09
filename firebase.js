// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxSROz1o67t95BWHaZo4Rggmo_IlvizEs",
  authDomain: "aconews-80cc5.firebaseapp.com",
  projectId: "aconews-80cc5",
  storageBucket: "aconews-80cc5.appspot.com",
  messagingSenderId: "138744169708",
  appId: "1:138744169708:web:200872c0aa72184fadd1c9",
  measurementId: "G-TE44Y12HZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);