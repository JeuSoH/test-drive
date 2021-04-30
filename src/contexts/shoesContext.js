import axios from "axios";
import React, { useReducer } from "react";
import { act } from "react-dom/test-utils";

export const shoesContext = React.createContext();

const INIT_STATE = {
    shoesData: [],
    shoeDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_SHOES":
            return { ...state, shoesData: action.payload };
        case "GET_SHOES_DETAILS":
            return { ...state, shoeDetails: action.payload };
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
        console.log(data);
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

    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    return (
        <shoesContext.Provider
            value={{
                shoesData: state.shoesData,
                shoeDetails: state.shoeDetails,
                postNewShoe,
                getShoes,
                deleteShoe,
                getShoeDetails,
                saveShoe,
            }}
        >
            {children}
        </shoesContext.Provider>
    );
};
export default ShoesContextProvider;
