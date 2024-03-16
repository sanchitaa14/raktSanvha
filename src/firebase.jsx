// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfIOrAYYHIoqooSmReepWKJ_WJbNAjuSU",
  authDomain: "rakt-f94a6.firebaseapp.com",
  projectId: "rakt-f94a6",
  storageBucket: "rakt-f94a6.appspot.com",
  messagingSenderId: "782634451874",
  appId: "1:782634451874:web:15a625565f8c60e33c68fb",
  measurementId: "G-T8BYL0BZXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app); // Initialize Firebase Storage

export { app, analytics, auth, firestore, storage };