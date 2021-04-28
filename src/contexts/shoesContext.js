import React, { useReducer } from "react";

export const shoesContext = React.createContext();

const INIT_STATE = {};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "...":
        default:
            return state;
    }
};

const ShoesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    return <shoesContext.Provider value={{}}>{children}</shoesContext.Provider>;
};
export default ShoesContextProvider;
