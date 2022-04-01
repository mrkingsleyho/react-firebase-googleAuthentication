// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, getFireStore } from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa1H0pjCrA3Jc93eCm40GXyoRrmbfjQfk",
  authDomain: "public-blog-react-fireba-e773b.firebaseapp.com",
  projectId: "public-blog-react-fireba-e773b",
  storageBucket: "public-blog-react-fireba-e773b.appspot.com",
  messagingSenderId: "128970755354",
  appId: "1:128970755354:web:089a4a40633f1a02f130a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

