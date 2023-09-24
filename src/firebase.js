// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtZaBYkMbsHjgMo3qMnRW5vzJsNQ4iiHA",
  authDomain: "circuit-dbd51.firebaseapp.com",
  projectId: "circuit-dbd51",
  storageBucket: "circuit-dbd51.appspot.com",
  messagingSenderId: "680537598544",
  appId: "1:680537598544:web:6fdb518194bc4cedf07f55",
  measurementId: "G-7TFR3455G8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app);
export default app;