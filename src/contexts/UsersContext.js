import axios from 'axios';
import React, { useReducer, useEffect, useState } from 'react';
import { DB_JSON } from '../helpers/Constants';

import Cookies from 'universal-cookie';

export const usersContext = React.createContext();

const INIT_STATE = {
    isAuth: false,
    orders: [],
    userData: {}
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
        case "GET_USER_DATA":
            return {
                ...state,
                userData: action.payload
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
            payload: data.orders
        })
    }

    async function getUserData() {
        let { data } = await axios.get(DB_JSON);
        console.log(data);
        dispatch({
            type: "GET_USER_DATA",
            payload: data
        })
    }

    async function submitShop(sum, history) {
        let { data } = await axios.get(DB_JSON);

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        data.orders.push({
            id: Date.now(),
            total: sum,
            orderDate: today,
            status: "Обработка"
        });

        await axios.post(DB_JSON, data);
        localStorage.getItem("streetHeadShoes", JSON.stringify({
            shoes: [],
            totalPrice: 0,
        }));
        getUserOrders();
        history.push("/")
    }

    async function editUserData(userData) {
        await axios.patch(DB_JSON, userData);
        getUserData();
    }

    const cookies = new Cookies();

    return (
        <usersContext.Provider value={{
            isAuth: state.isAuth,
            orders: state.orders,
            userData: state.userData,
            getUserOrders,
            getUserData,
            submitShop,
            editUserData

        }}>
            {children}
        </usersContext.Provider>
    )
}

export default UsersContextProvider;