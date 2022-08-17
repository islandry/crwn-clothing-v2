// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkvtMoBVc50AHmKLLHhxPWr3WZxb7hvoo",
  authDomain: "crwn-clothing-db-f2bb7.firebaseapp.com",
  projectId: "crwn-clothing-db-f2bb7",
  storageBucket: "crwn-clothing-db-f2bb7.appspot.com",
  messagingSenderId: "692636285988",
  appId: "1:692636285988:web:02448d606d10dc623b6cb1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",

});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);