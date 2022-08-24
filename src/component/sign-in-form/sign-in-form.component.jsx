import { useContext, useState } from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInEmailPassword } from '../../utils/firebase/firebase.component';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.style.scss';
import { UserContext } from '../../context/user.context';


const SignInForm = () =>{

    const defaultValue = {
        email:"",
        password:""
    };

    const [displayState, setDisplayState] = useState(defaultValue);
    const {email, password} = displayState;

    const logGoogleUser = async () =>{
        await signInWithGooglePopup();
        //console.log(response);
    }

    const resetForm = () =>{
        setDisplayState(defaultValue);
    };
    
    const onSubmitHandler = async (event) =>{
        event.preventDefault();
        try{
            const response = await signInEmailPassword(email, password);
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
        <div className = "sign-up-container">
            <h2>Already have an account?</h2>
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
                <div className = "buttons-container">
                    <Button buttonType = "" type = "submit">Sign In</Button>
                    <Button buttonType = "google" type = "button" onClick = {logGoogleUser}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;