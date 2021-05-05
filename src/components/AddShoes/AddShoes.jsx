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
        images: [],
    });

    const { postNewShoe } = useContext(shoesContext);

    const handleValue = (e) => {
        console.log(e);
        let newShoe = { ...shoe };
        if (e.target.name === "images") {
            newShoe.images.push(e.target.value);
        } else {
            newShoe[e.target.name] = e.target.value;
        }
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
            images: [],
        });
        if (
            shoe.brand === "" ||
            shoe.model === "" ||
            shoe.sex === "" ||
            shoe.category === "" ||
            shoe.description === "" ||
            shoe.size === "" ||
            shoe.color === "" ||
            shoe.price === "" ||
            shoe.images.length === 0
        ) {
            alert("Заполните все поля");
        }
    };
    return (
        <div className="inputs">
            <div className="container">
                <div className="add_block">
                    <label>1)Brand:</label>
                    <label className="label_first">Nike</label>
                    <input
                        className="radio_inp"
                        type="radio"
                        name="brand"
                        value="Nike"
                        onChange={handleValue}
                    />
                    <label className="label_add">Adidas</label>
                    <input
                        className="radio_inp"
                        type="radio"
                        name="brand"
                        value="Adidas"
                        onChange={handleValue}
                    />
                    <label className="label_add">Puma</label>
                    <input
                        className="radio_inp"
                        type="radio"
                        name="brand"
                        value="Puma"
                        onChange={handleValue}
                    />
                </div>
                <div className="add_block">
                    <label>2)Model:</label>
                    <input
                        className="inp-add"
                        value={shoe.model}
                        name="model"
                        onChange={handleValue}
                        type="text"
                        placeholder="Модель"
                    />
                </div>
                <div className="add_block">
                    <label>3)Category:</label>
                    <label className="label_first">Running</label>
                    <input
                        type="radio"
                        name="category"
                        value="Running"
                        onChange={handleValue}
                    />
                    <label className="label_add">Football</label>
                    <input
                        type="radio"
                        name="category"
                        value="Football"
                        onChange={handleValue}
                    />
                    <label className="label_add">Bassketball</label>
                    <input
                        type="radio"
                        name="category"
                        value="Bassketball"
                        onChange={handleValue}
                    />
                    <label className="label_add">Jordan</label>
                    <input
                        type="radio"
                        name="category"
                        value="Jordan"
                        onChange={handleValue}
                    />
                    <label className="label_add">Air Max</label>
                    <input
                        type="radio"
                        name="category"
                        value="Air Max"
                        onChange={handleValue}
                    />
                </div>
                <div className="add_block">
                    <label>4)Sex:</label>
                    <label className="label_first">Men</label>
                    <input
                        type="radio"
                        name="sex"
                        value="Men"
                        onChange={handleValue}
                    />
                    <label className="label_add">Women</label>
                    <input
                        type="radio"
                        name="sex"
                        value="Women"
                        onChange={handleValue}
                    />
                </div>
                <div className="add_block">
                    <label>5)Description:</label>
                    <input
                        className="inp-add"
                        value={shoe.description}
                        name="description"
                        onChange={handleValue}
                        type="text"
                        placeholder="Описание"
                    />
                </div>
                <div className="add_block">
                    <label>6)Size:</label>
                    <label className="label_first">38</label>
                    <input
                        type="checkbox"
                        name="size"
                        value="38"
                        onChange={handleValue}
                    />
                    <label className="label_add">39</label>
                    <input
                        type="checkbox"
                        name="size"
                        value="39"
                        onChange={handleValue}
                    />
                    <label className="label_add">40</label>
                    <input
                        type="checkbox"
                        name="size"
                        value="40"
                        onChange={handleValue}
                    />
                    <label className="label_add">41</label>
                    <input
                        type="checkbox"
                        name="size"
                        value="41"
                        onChange={handleValue}
                    />
                    <label className="label_add">42</label>
                    <input
                        type="checkbox"
                        name="size"
                        value="42"
                        onChange={handleValue}
                    />
                </div>
                <div className="add_block">
                    <label>6)Color:</label>
                    <input
                        className="inp-add"
                        value={shoe.color}
                        name="color"
                        onChange={handleValue}
                        type="text"
                        placeholder="Цвет"
                    />
                </div>
                <div className="add_block">
                    <label>6)Price: $</label>
                    <input
                        className="inp-add"
                        value={shoe.price}
                        name="price"
                        onChange={handleValue}
                        type="number"
                        placeholder="Цена"
                    />
                </div>
                <div className="add_block">
                    <label>7)Главное изображение:</label>
                    <input
                        className="inp-add"
                        value={shoe.images[0]}
                        name="images"
                        onChange={handleValue}
                        type="text"
                    />
                    <label>Доп.Изображения:</label>
                    <input
                        className="inp-add"
                        value={shoe.images[1]}
                        name="images"
                        onChange={handleValue}
                        type="text"
                    />
                    <label>Доп.Изображения:</label>
                    <input
                        className="inp-add"
                        value={shoe.images[2]}
                        name="images"
                        onChange={handleValue}
                        type="text"
                    />
                    <label>Доп.Изображения:</label>
                    <input
                        className="inp-add"
                        value={shoe.images[3]}
                        name="images"
                        onChange={handleValue}
                        type="text"
                    />
                    <label>Доп.Изображения:</label>
                    <input
                        className="inp-add"
                        value={shoe.images[4]}
                        name="images"
                        onChange={handleValue}
                        type="text"
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
