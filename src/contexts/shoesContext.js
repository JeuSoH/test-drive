import axios from "axios";
import React, { useReducer } from "react";

export const shoesContext = React.createContext();

const INIT_STATE = {
    shoesData: [],
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_SHOES":
            return { ...state, shoesData: action.payload };
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

    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    return (
        <shoesContext.Provider
            value={{
                shoesData: state.shoesData,
                postNewShoe,
                getShoes,
                deleteShoe,
            }}
        >
            {children}
        </shoesContext.Provider>
    );
};
export default ShoesContextProvider;
