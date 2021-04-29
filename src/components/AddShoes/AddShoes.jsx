import React, { useContext, useState } from "react";
import { shoesContext } from "../../contexts/shoesContext";
import "./AddShoes.css";
import "./AddShoes.css";

const AddShoes = () => {
    const [shoe, setShoe] = useState({
        brand: "",
        model: "",
        sex: "",
        category: "",
        description: "",
        size: "",
        color: "",
        price: "",
        images: "",
    });

    const { postNewShoe } = useContext(shoesContext);

    const handleValue = (e) => {
        let newShoe = {
            ...shoe,
            [e.target.name]: e.target.value,
        };
        setShoe(newShoe);
    };

    const handleClick = () => {
        postNewShoe(shoe);
        setShoe({
            brand: "",
            model: "",
            sex: "",
            category: "",
            description: "",
            size: "",
            color: "",
            price: "",
            images: "",
        });
    };
    return (
        <div className="inputs">
            <div className="container">
                <div className="inps_block">
                    <select
                        className="inp-add"
                        value={shoe.brand}
                        name="brand"
                        onChange={handleValue}
                    >
                        <optgroup label="Brand">
                            <option value="nike">Nike</option>
                            <option>Adidas</option>
                            <option>Puma</option>
                        </optgroup>
                    </select>

                    <input
                        className="inp-add"
                        value={shoe.model}
                        name="model"
                        onChange={handleValue}
                        type="text"
                        placeholder="Модель"
                    />
                </div>
                <div className="inps_block">
                    <select
                        className="inp-add"
                        value={shoe.sex}
                        name="sex"
                        onChange={handleValue}
                    >
                        <optgroup label="Пол">
                            <option>Men</option>
                            <option>Women</option>
                        </optgroup>
                    </select>
                    <select
                        className="inp-add"
                        value={shoe.category}
                        name="category"
                        onChange={handleValue}
                    >
                        <optgroup label="Category">
                            <option>Running</option>
                            <option>Football</option>
                            <option>Basketball</option>
                            <option>Jordan</option>
                            <option>Air max</option>
                        </optgroup>
                    </select>
                </div>
                <div className="inps_block">
                    <input
                        className="inp-add"
                        value={shoe.size}
                        name="size"
                        onChange={handleValue}
                        type="number"
                        placeholder="Размер"
                    />
                    <input
                        className="inp-add"
                        value={shoe.color}
                        name="color"
                        onChange={handleValue}
                        type="text"
                        placeholder="Цвет"
                    />
                    <input
                        className="inp-add"
                        value={shoe.price}
                        name="price"
                        onChange={handleValue}
                        type="number"
                        placeholder="Цена(сом)"
                    />
                </div>
                <div className="inps_block">
                    <input
                        className="inp-add"
                        value={shoe.images}
                        name="images"
                        onChange={handleValue}
                        type="text"
                        placeholder="Изображение"
                    />
                    <input
                        className="inp-add"
                        value={shoe.description}
                        name="description"
                        onChange={handleValue}
                        type="text"
                        placeholder="Описание"
                    />
                </div>
                <div className="btn-inps">
                    <button className="btn-add" onClick={handleClick}>
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddShoes;
