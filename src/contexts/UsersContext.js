import axios from 'axios';
import React, { useReducer, useEffect, useState } from 'react';
import { DB_JSON } from '../helpers/Constants';

import Cookies from 'universal-cookie';

export const usersContext = React.createContext();

const INIT_STATE = {
    isAuth: false,
    orders: []
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_AUTH_INFO":
            return {
                ...state,
                isAuth: action.payload
            }
        case "GET_USER_ORDERS":
            return {
                ...state,
                orders: action.payload
            }
        default:
            return state
    }
}

const UsersContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    async function getUserOrders() {
        let { data } = await axios.get(DB_JSON);
        console.log(data);
        dispatch({
            type: "GET_USER_ORDERS",
            payload: data[0].orders
        })
    }

    const cookies = new Cookies();

    return (
        <usersContext.Provider value={{
            isAuth: state.isAuth,
            orders: state.orders,
            getUserOrders

        }}>
            {children}
        </usersContext.Provider>
    )
}

export default UsersContextProvider;