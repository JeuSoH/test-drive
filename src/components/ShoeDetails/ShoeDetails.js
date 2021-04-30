import React, { useContext } from "react";
import { shoesContext } from "../../contexts/shoesContext";
import "./ShoeDetails.css";
import Share from "../../assets/img/share.png";

const ShoeDetails = () => {
    const { getShoeDetails, saveShoe } = useContext(shoesContext);
    return (
        <div className="details_card">
            <div className="container">
                <div className="det_nav">
                    <button>Назад</button>
                    <div>
                        <img src={Share} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoeDetails;
