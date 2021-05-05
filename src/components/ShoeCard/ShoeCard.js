import React, { useContext } from "react";
import { shoesContext } from "../../contexts/shoesContext";
import "./ShoeCard.css";
import Delete from "../../assets/img/trash (1).png";
import { Link } from "react-router-dom";
import Basket from "../../assets/img/basket.png";

const ShoeCard = ({ item }) => {
    const { deleteShoe, addToCart, checkShoeInCart } = useContext(shoesContext);

    return (
        <div className="card_blocks">
            <div className="card">
                <div className="card_img">
                    {""}
                    <img className="foot_img" src={item.images[0]} />
                    <div className="card_desc_brand">
                        <p className="card_brand">{item.brand}</p>
                        <p className="card_model">{item.model}</p>
                    </div>
                    <div className="block_price">
                        <p className="block_pr">{item.price} $</p>
                        <button className="btn_more">
                            {" "}
                            <Link to={`/details/${item.id}`}>More...</Link>
                        </button>
                        <img
                            style={{
                                backgroundColor: checkShoeInCart(item.id)
                                    ? "gray"
                                    : "white",
                            }}
                            onClick={() => addToCart(item)}
                            className="icon_card"
                            src={Basket}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoeCard;
