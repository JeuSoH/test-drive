import React, { useContext, useEffect } from "react";
import { shoesContext } from "../../contexts/shoesContext";
import ShoeCard from "../ShoeCard/ShoeCard";
import "./ShoeList.css";

const ShoeList = () => {
    const { getShoes, shoesData } = useContext(shoesContext);

    useEffect(() => {
        getShoes();
    }, []);
    return (
        <div className="list">
            {shoesData.map((item) => (
                <ShoeCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ShoeList;
