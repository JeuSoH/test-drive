import React, { useContext } from "react";
import { shoesContext } from "../../contexts/shoesContext";
import "./ShoeCard.css";

const ShoeCard = ({ item }) => {
    const { deleteShoe } = useContext(shoesContext);

    return (
        <div className="card">
            <div className="card_img">
                <img src={item.images} />
                <p>{item.brand}</p>
            </div>
        </div>
    );
};

export default ShoeCard;
