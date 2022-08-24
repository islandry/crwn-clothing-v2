import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.component';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const UserProvider = ({children}) =>{

    useEffect(()=>{
        const unsubsribe = onAuthStateChangedListener((user)=>{
            console.log('auth state changed', user);
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
            
        });
        return unsubsribe; //return a cleanup function, clean up will run when the component is unmounted
    }, []);

    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    return (
        <UserContext.Provider value = {value}>{children}</UserContext.Provider>
    );
}