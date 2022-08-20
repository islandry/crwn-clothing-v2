import {auth, createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect } from "../../utils/firebase/firebase.component";

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../component/SignUpForm/Sign-up-form.component";

const SignIn = () =>{
    //with redirect useEffect is needed to call getRedirectResult after login
    useEffect(async ()=>{
        const response = await getRedirectResult(auth);
        if (response){
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }
    }, []);

    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        //console.log(response);
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>This is the sign in page</h1>
            <button onClick = {logGoogleUser}>Sign in with Google Popup</button>
            <button onClick = {signInWithGoogleRedirect}>Sign in with Google Redirect</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;