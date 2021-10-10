// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzm-tWm1kXCL5Ge5ZhxkXHRyHQqJWjyZg",
  authDomain: "caique-coelho.firebaseapp.com",
  projectId: "caique-coelho",
  storageBucket: "caique-coelho.appspot.com",
  messagingSenderId: "42768373419",
  appId: "1:42768373419:web:7311f9c034bea63b9bc9ee",
  measurementId: "G-X02BSBJVGF"
};

export const initializeFirebase = () => {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
}