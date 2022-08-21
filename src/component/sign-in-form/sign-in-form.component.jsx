import { useState } from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInEmailPassword } from '../../utils/firebase/firebase.component';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.style.scss';


const SignInForm = () =>{

    const defaultValue = {
        email:"",
        password:""
    };

    const [displayState, setDisplayState] = useState(defaultValue);
    const {email, password} = displayState;

    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        //console.log(response);
        await createUserDocumentFromAuth(user);
    }

    const resetForm = () =>{
        setDisplayState(defaultValue);
    };
    
    const onSubmitHandler = async (event) =>{
        event.preventDefault();
        try{
            const response = await signInEmailPassword(email, password);
            console.log(response);
            resetForm();
        }catch (error){
            console.log(error);
            resetForm();
        }
    };

    const onChangeHandler = (event) =>{
        //console.log(event);
        const {name, value} = event.target;
        setDisplayState((previous)=>{
            return {...previous, [name]:value}; //use [] to wrap name since name is an argument, not the actual field name
        });
    };

    return (
        <div className = "sign-in-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit = {onSubmitHandler}>              
                <FormInput
                    label = "Email"
                    type = "email" 
                    required 
                    name = 'email' 
                    value = {email} 
                    onChange = {onChangeHandler}
                />
                <FormInput 
                    label = "Password"
                    type = "password" 
                    required 
                    name = 'password' 
                    value = {password} 
                    onChange = {onChangeHandler}
                />
                <div className = "button-container">
                    <Button buttonType = "" type = "submit">Sign In</Button>
                    <Button buttonType = "google" onClick = {logGoogleUser}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;