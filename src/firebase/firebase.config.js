// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNiBqRak_giPUEnUG5ARriDeuvs56M48g",
  authDomain: "bookstore-41cb4.firebaseapp.com",
  projectId: "bookstore-41cb4",
  storageBucket: "bookstore-41cb4.appspot.com",
  messagingSenderId: "313659954473",
  appId: "1:313659954473:web:bbec2717271cb97e9c5338",
  measurementId: "G-99JPH1SQYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;