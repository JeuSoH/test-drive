import axios from "axios";
import React, { useReducer } from "react";
import { countPrice } from "../helpers/Constants";

export const shoesContext = React.createContext();

const INIT_STATE = {
    shoesData: [],
    shoeDetails: {},
    cart: {
        shoes: [],
        totalPrice: 0,
    }
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_SHOES":
            return { ...state, shoesData: action.payload };
        case "GET_SHOES_DETAILS":
            return { ...state, shoeDetails: action.payload };
        case "GET_CART":
            return { ...state, cart: action.payload };
        default:
            return state;
    }
};

const ShoesContextProvider = ({ children }) => {
    function postNewShoe(shoe) {
        axios.post("http://localhost:8000/shoes", shoe);
    }
    async function getShoes() {
        let { data } = await axios.get("http://localhost:8000/shoes");
        dispatch({
            type: "GET_SHOES",
            payload: data,
        });
    }
    async function deleteShoe(id) {
        await axios.delete(`http://localhost:8000/shoes/${id}`);
        getShoes();
    }
    async function getShoeDetails(id) {
        let { data } = await axios.get(`http://localhost:8000/shoes/${id}`);
        dispatch({
            type: "GET_SHOES_DETAILS",
            payload: data,
        });
    }
    async function saveShoe(id, newShoe) {
        await axios.patch(`http://localhost:8000/shoes/${id}`, newShoe);
        getShoeDetails(id);
    }

    function addToCart(item) {
        item.count = 1;
        item.subPrice = item.price
        let cart = JSON.parse(localStorage.getItem("streetHeadShoes"));
        if (!cart) {
            cart = {
                shoes: [],
                totalPrice: 0,
            };
        }
        let isAddedToCart = cart.shoes.filter(elem => elem.id === item.id);
        if (isAddedToCart.length > 0) {
            cart.shoes = cart.shoes.filter(elem => elem.id !== item.id)
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
                totalPrice: 0
            };
        }
        dispatch({
            type: "GET_CART",
            payload: cart
        });
        console.log(cart);
    }

    function checkShoeInCart(id) {
        let cart = JSON.parse(localStorage.getItem("streetHeadShoes"));
        if (!cart) {
            cart = {
                shoes: [],
                totalPrice: 0
            };
        }
        console.log(cart);
        let isInCart = cart.shoes.filter(elem => elem.id === id);
        return isInCart.length > 0 ? true : false;
    }

    function changeCount(count, id) {
        if (count < 1) return;
        let cart = JSON.parse(localStorage.getItem("streetHeadShoes"));
        cart.shoes = cart.shoes.map(elem => {
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
        cart.shoes = cart.shoes.filter(elem => elem.id != id);
        cart.totalPrice = countPrice(cart.shoes);
        localStorage.setItem("streetHeadShoes", JSON.stringify(cart));
        getCart();
    }

    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    return (
        <shoesContext.Provider
            value={{
                shoesData: state.shoesData,
                shoeDetails: state.shoeDetails,
                cart: state.cart,
                getCart,
                postNewShoe,
                getShoes,
                deleteShoe,
                getShoeDetails,
                saveShoe,
                addToCart,
                checkShoeInCart,
                changeCount,
                deleteFromCart
            }}
        >
            {children}
        </shoesContext.Provider>
    );
};
export default ShoesContextProvider;
