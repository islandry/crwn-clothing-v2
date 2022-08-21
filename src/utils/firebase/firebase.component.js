// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

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
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);


//create user in the database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {displayName, email, createdAt, ...additionalInfo}); //use spreader ...additionalInfo at the END to override fields before it

    }catch (error){
      console.log('error creating the user', error.message);
    }
  }
};


//create user from email and password
export const createAuthUserWithEmailAndPassword = async (email, password) =>{
  if (!email || !password) return ;
  return await createUserWithEmailAndPassword(auth, email, password);
};

//sign in with email and password
export const signInEmailPassword = async(email, password) =>{
  if (!email || !password) return ;
  return await signInWithEmailAndPassword(auth, email, password);
}

