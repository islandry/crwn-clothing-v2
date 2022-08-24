import { useState, useContext} from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.component';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-up-form.style.scss';
import { UserContext } from '../../context/user.context';


const SignUpForm = () =>{

    const defaultValue = {
        displayName :"",
        email:"",
        password:"",
        confirmPassword:""
    }

    const [displayState, setDisplayState] = useState(defaultValue);
    const {displayName, email, password, confirmPassword} = displayState;

    const resetForm = () =>{
        setDisplayState(defaultValue);
    };
    
    const onSubmitHandler = async (event) =>{
        event.preventDefault();
        if (password !== confirmPassword){
            alert("Password not identical!");
            return;
        }

        try{
            const response = await createAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            //when using email and password, response.user doesn't have a display name field, so pass in {displayname} to supply that field
            await createUserDocumentFromAuth(response.user, {displayName}); 
            resetForm();
        }catch (error){
            if (error.code === "auth/email-already-in-use"){
                alert("email already in use!");
            }else{
                console.log('error creating user', error);
            }
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
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit = {onSubmitHandler}>
                <FormInput 
                    label = "Display Name"
                    type = "text" 
                    required 
                    name = 'displayName' 
                    value = {displayName} 
                    onChange = {onChangeHandler}
                />
                
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
                <FormInput
                    label = "Confirm Password"
                    type = "password" 
                    required 
                    name = 'confirmPassword' 
                    value = {confirmPassword} 
                    onChange = {onChangeHandler}
                />
                <Button buttonType = "" type = "submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;