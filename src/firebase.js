// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {getStorage} from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZfeFbg4NTkv33to4cQ6g5hTxHe5pMWdw",
  authDomain: "react-portfolio-dashboar-14293.firebaseapp.com",
  projectId: "react-portfolio-dashboar-14293",
  storageBucket: "react-portfolio-dashboar-14293.appspot.com",
  messagingSenderId: "694991815457",
  appId: "1:694991815457:web:ad5a2e63811481fa86b460",
  measurementId: "G-FL1WG9LZZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);

