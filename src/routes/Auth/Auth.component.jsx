// import {auth, createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect } from "../../utils/firebase/firebase.component";

// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import './Auth.style.scss';

import SignInForm from "../../component/sign-in-form/sign-in-form.component";
import SignUpForm from "../../component/SignUpForm/Sign-up-form.component";

const Auth = () =>{
    //with redirect useEffect is needed to call getRedirectResult after login
    // useEffect(async ()=>{
    //     const response = await getRedirectResult(auth);
    //     if (response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }, []);

    return (
        
            <div className = "auth-container">
                
                {/* <button onClick = {logGoogleUser}>Sign in with Google Popup</button>
                <button onClick = {signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
                <SignInForm />
                <SignUpForm />
            </div>
        
    );
}

export default Auth;