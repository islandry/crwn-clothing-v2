import { signInWithGooglePopup } from "../../utils/firebase/firebase.component";

const SignIn = () =>{
    const logGoogleUser = async () =>{
        const response = await signInWithGooglePopup();
        console.log(response);
    }

    return (
        <div>
            <h1>This is the sign in page</h1>
            <button onClick = {logGoogleUser}>Sign in with Google Popup</button>
        </div>
    )
}

export default SignIn;