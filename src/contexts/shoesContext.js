import axios from "axios";
import React, { useReducer } from "react";
import { countPrice, JSON_API } from "../helpers/Constants";
import { useHistory } from "react-router-dom";

export const shoesContext = React.createContext();

const INIT_STATE = {
    shoesData: [],
    shoeDetails: {},
    cart: {
        shoes: [],
        totalPrice: 0,
    },
    searchData: [],
    paginationPages: 1,
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_SHOES":
            return {
                ...state,
                shoesData: action.payload.data,
                paginationPages: Math.ceil(
                    action.payload.headers["x-total-count"] / 6
                ),
            };
        case "GET_SHOE_DETAILS":
            return { ...state, shoeDetails: action.payload };
        case "GET_CART":
            return { ...state, cart: action.payload };
        case "SEARCH":
            return { ...state, searchData: action.payload };
        default:
            return state;
    }
};

const ShoesContextProvider = ({ children }) => {
    let history = useHistory();
    function postNewShoe(shoe) {
        axios.post(`${JSON_API}`, shoe);
    }
    async function getShoes(history) {
        console.log(history);
        const search = new URLSearchParams(history.location.search);
        search.set("_limit", 6);
        history.push(`${history.location.pathname}?${search.toString()}`);

        let res = await axios.get(`${JSON_API}${window.location.search}`);
        dispatch({
            type: "GET_SHOES",
            payload: res,
        });
    }

    async function deleteShoe(id) {
        await axios.delete(`http://localhost:8000/shoes/${id}`);
        let res = await axios.get(`${JSON_API}`);
        dispatch({
            type: "GET_SHOES",
            payload: res,
        });
    }
    async function getShoeDetails(id) {
        let { data } = await axios.get(`http://localhost:8000/shoes/${id}`);
        dispatch({
            type: "GET_SHOE_DETAILS",
            payload: data,
        });
        console.log(data, ' in context getShoedetails');
    }
    async function saveShoe(id, newShoe) {
        await axios.patch(`http://localhost:8000/shoes/${id}`, newShoe);
        getShoeDetails(id);
    }

    function addToCart(item) {
        item.count = 1;
        item.subPrice = item.price;
        let cart = JSON.parse(localStorage.getItem("streetHeadShoes"));
        if (!cart) {
            cart = {
                shoes: [],
                totalPrice: 0,
            };
        }
        let isAddedToCart = cart.shoes.filter((elem) => elem.id === item.id);
        if (isAddedToCart.length > 0) {
            cart.shoes = cart.shoes.filter((elem) => elem.id !== item.id);
        } else {
            cart.shoes.push(item);
        }
        cart.totalPrice = countPrice(cart.shoes);
        localStorage.setItem("streetHeadShoes", JSON.stringify(cart));
        console.log(cart.totalPrice);
        getCart();
    }

    function getCart() {
        let cart = JSON.parse(localStorage.getItem("streetHeadShoes"));
        if (!cart) {
            cart = {
                shoes: [],
                totalPrice: 0,
            };
        }
        dispatch({
            type: "GET_CART",
            payload: cart,
        });
        console.log(cart);
    }

    function checkShoeInCart(id) {
        let cart = JSON.parse(localStorage.getItem("streetHeadShoes"));
        if (!cart) {
            cart = {
                shoes: [],
                totalPrice: 0,
            };
        }
        console.log(cart);
        let isInCart = cart.shoes.filter((elem) => elem.id === id);
        return isInCart.length > 0 ? true : false;
    }

    function changeCount(count, id) {
        if (count < 1) return;
        let cart = JSON.parse(localStorage.getItem("streetHeadShoes"));
        cart.shoes = cart.shoes.map((elem) => {
            if (elem.id == id) {
                elem.count = count;
                elem.subPrice = elem.price * count;
            }
            return elem;
        });
        cart.totalPrice = countPrice(cart.shoes);
        localStorage.setItem("streetHeadShoes", JSON.stringify(cart));
        getCart();
    }

    function deleteFromCart(id) {
        let cart = JSON.parse(localStorage.getItem("streetHeadShoes"));
        cart.shoes = cart.shoes.filter((elem) => elem.id != id);
        cart.totalPrice = countPrice(cart.shoes);
        localStorage.setItem("streetHeadShoes", JSON.stringify(cart));
        getCart();
    }

    async function search(value) {
        let { data } = await axios.get(
            `http://localhost:8000/shoes?q=${value}`
        );
        dispatch({
            type: "SEARCH",
            payload: data,
        });
    }

    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    return (
        <shoesContext.Provider
            value={{
                shoesData: state.shoesData,
                shoeDetails: state.shoeDetails,
                cart: state.cart,
                searchData: state.searchData,
                paginationPages: state.paginationPages,
                getCart,
                postNewShoe,
                getShoes,
                deleteShoe,
                getShoeDetails,
                saveShoe,
                addToCart,
                checkShoeInCart,
                changeCount,
                deleteFromCart,
                search,
            }}
        >
            {children}
        </shoesContext.Provider>
    );
};
export default ShoesContextProvider;
