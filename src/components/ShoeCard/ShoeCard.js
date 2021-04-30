import React, { useContext } from "react";
import { shoesContext } from "../../contexts/shoesContext";
import "./ShoeCard.css";
import Delete from "../../assets/img/trash (1).png";
import { Link } from "react-router-dom";
import Basket from "../../assets/img/basket.png";

const ShoeCard = ({ item }) => {
    const { deleteShoe } = useContext(shoesContext);

    return (
        <div className="card_blocks">
            <div className="card">
                <div className="card_img">
                    {""}
                    <img className="foot_img" src={item.images} />
                    <div className="card_desc_brand">
                        <p className="card_brand">{item.brand}</p>
                        <p className="card_model">{item.model}</p>
                        <img className="icon_card" src={Basket} />
                        <img
                            onClick={() => deleteShoe(item.id)}
                            className="icon_card"
                            src={Delete}
                        />
                    </div>
                    <div className="block_price">
                        <p className="block_pr">{item.price} сом</p>
                        <button className="btn_more">
                            {" "}
                            <Link to={`/details/${item.id}`}>More...</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoeCard;
