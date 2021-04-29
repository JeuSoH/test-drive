import axios from 'axios';
import React, { useReducer, useEffect, useState } from 'react';
import { AUTH_API, LOGIN_API, REGISTER_API } from '../helpers/Constants'
import app from "../base.js";

import Cookies from 'universal-cookie';

export const authContext = React.createContext();

const INIT_STATE = {
    isAuth: false,
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_AUTH_INFO":
            return {
                ...state,
                isAuth: action.payload
            }
        default:
            return state
    }
}

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);
    const cookies = new Cookies();

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
            setPending(false)
        });
    }, []);

    async function registerUser(event, newUser, history) {
        event.preventDefault();
        try {
            await app.auth()
                .createUserWithEmailAndPassword(newUser.email, newUser.password);
            history.push('/login');
            console.log(currentUser);
        } catch (err) {
            console.log(err);
        }
    }

    async function loginUser(event, userData, history) {
        event.preventDefault();
        try {
            await app
                .auth()
                .signInWithEmailAndPassword(userData.email, userData.password);
            history.push('/')
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <authContext.Provider value={{
            isAuth: state.isAuth,
            currentUser,
            registerUser,
            loginUser
        }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthContextProvider;