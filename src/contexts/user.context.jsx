import { createContext, useState, useEffect, useReducer } from 'react';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state, action) => {
  const {type, payload} = action;
  switch(type){
    case "SET_USER":
      return {
        ...state,
        currentUser: payload
      };
    default:
      return state;
  }
};

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  //const [currentUser, setCurrentUser] = useState(null);
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const setCurrentUser = (user) => {
    dispatch({type: "SET_USER", payload: user});
  };
  
  const {currentUser} = state;

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
