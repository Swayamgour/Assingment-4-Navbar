// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQzecT2j0V4Cg0EicPLYtVcK8GxtYpQ4o",
  authDomain: "g-auth-d0b20.firebaseapp.com",
  projectId: "g-auth-d0b20",
  storageBucket: "g-auth-d0b20.appspot.com",
  messagingSenderId: "270903617294",
  appId: "1:270903617294:web:b6857c1f145883ff38995f",
  measurementId: "G-8JFLQ02JDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
