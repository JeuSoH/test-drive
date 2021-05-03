import React, { useContext, useEffect, useState } from "react";
import { shoesContext } from "../../contexts/shoesContext";
import "./ShoeDetails.css";
import Share from "../../assets/img/share.png";
import { Link, useHistory } from "react-router-dom";
import Star from "../../assets/img/star.png";
import Nike from "../../assets/img/nike.svg";
import Adidas from "../../assets/img/adidas.svg";
import Puma from "../../assets/img/puma.svg";
import Box from "../../assets/img/box.png";
import Clothes from "../../assets/img/clothes.png";
import Exch from "../../assets/img/exchange.png";

const ShoeDetails = (props) => {
    const { getShoeDetails, saveShoe, shoeDetails } = useContext(shoesContext);
    const [editStatus, setEditStatus] = useState(false);
    const [editedShoe, setEditedShoe] = useState({});

    const history = useHistory();

    const handleValue = (e) => {
        let newShoe = {
            ...editedShoe,
            [e.target.name]: e.target.value,
        };
        setEditedShoe(newShoe);
    };

    const handleSave = () => {
        saveShoe(props.match.params.id, editedShoe);
        setEditedShoe(false);
        history.push("/");
    };

    useEffect(() => {
        getShoeDetails(props.match.params.id);
    }, []);

    return (
        <div className="details_card">
            <div className="container">
                {editStatus ? (
                    <div className="edit-textareas">
                        <textarea name="brand" onChange={handleValue}>
                            {shoeDetails.brand}
                        </textarea>
                        <textarea name="category" onChange={handleValue}>
                            {shoeDetails.category}
                        </textarea>
                        <textarea name="model" onChange={handleValue}>
                            {shoeDetails.model}
                        </textarea>
                        <textarea name="sex" onChange={handleValue}>
                            {shoeDetails.sex}
                        </textarea>
                        <textarea name="description" onChange={handleValue}>
                            {shoeDetails.description}
                        </textarea>
                        <textarea name="size" onChange={handleValue}>
                            {shoeDetails.size}
                        </textarea>
                        <textarea name="color" onChange={handleValue}>
                            {shoeDetails.color}
                        </textarea>
                        <textarea name="price" onChange={handleValue}>
                            {shoeDetails.price}
                        </textarea>
                    </div>
                ) : (
                    <>
                        <div className="det_nav">
                            <button className="back_det">
                                <Link to="/">Назад </Link>
                            </button>
                            <div className="share">
                                <img className="icon_det" src={Share} />
                            </div>
                        </div>
                        <div className="det_title">
                            <p className="det_brand">{shoeDetails.brand} /</p>
                            <p className="det_brand">
                                {shoeDetails.category} /
                            </p>
                            <p className="det_brand">{shoeDetails.model}</p>
                        </div>
                        <div className="det_details">
                            <p>Артикул:{shoeDetails.id}</p>
                            <div className="icon_star">
                                <img src={Star} />
                                <img src={Star} />
                                <img src={Star} />
                                <img src={Star} />
                                <img src={Star} />
                            </div>
                        </div>
                        <div className="det_welcome">
                            <div className="det_images">
                                <img
                                    className="det_img"
                                    src={shoeDetails.images}
                                />
                                <img
                                    className="det_img"
                                    src={shoeDetails.oneImg}
                                />
                                <img
                                    className="det_img"
                                    src={shoeDetails.twoImg}
                                />
                                <img
                                    className="det_img"
                                    src={shoeDetails.threeImg}
                                />
                                <img
                                    className="det_img"
                                    src={shoeDetails.fourImg}
                                />
                            </div>
                            <div className="image">
                                <img
                                    className="image_img"
                                    src={shoeDetails.images}
                                />
                            </div>
                            <div className="det_inf">
                                <p className="det_price">
                                    {shoeDetails.price} сом
                                </p>
                                <p className="det_color">
                                    Цвет:{shoeDetails.color}
                                </p>
                                <p className="det_color">
                                    Пол:{shoeDetails.sex}
                                </p>
                                <p className="det_size">
                                    Таблица размеров: {shoeDetails.size}
                                </p>
                                <button className="btn_inf">
                                    Добавить в корзину
                                </button>
                                <p className="inf_dost">
                                    Доставка:в течении недeли
                                </p>
                                <p className="inf_dost">
                                    Склад отгрузки:склад StreetHead{" "}
                                </p>
                                <p className="det_size">
                                    Продавец:StreetHead OOO
                                </p>
                                <div className="inf_brand">
                                    <img className="icon_brand" src={Nike} />
                                    <img className="icon_brand" src={Adidas} />
                                    <img className="icon_brand" src={Puma} />
                                </div>
                                <div className="inf_desc">
                                    <div className="inf_block">
                                        <img className="cloth_icon" src={Box} />
                                        <p className="cloth_desc">
                                            Бесплатная доставка
                                        </p>
                                    </div>
                                    <div className="inf_block">
                                        <img
                                            className="cloth_icon"
                                            src={Clothes}
                                        />
                                        <p className="cloth_desc">Примерка</p>
                                    </div>
                                    <div className="inf_block">
                                        <img
                                            className="cloth_icon"
                                            src={Exch}
                                        />
                                        <p className="cloth_desc">
                                            28 день на возврат
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="det_description">
                            <h1>Описание</h1>
                            <p className="content_desc">
                                {shoeDetails.description}
                            </p>
                        </div>
                        <div>
                            <div className="review">
                                <p className="det_brand">Отзывы и вопросы</p>
                                <input />
                                <button>Оставить отзыв</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ShoeDetails;
