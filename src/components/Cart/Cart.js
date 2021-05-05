import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { shoesContext } from "../../contexts/shoesContext";
import { useHistory } from "react-router";

const Cart = () => {
    const { cart, getCart, changeCount, deleteFromCart } = useContext(
        shoesContext
    );
    const history = useHistory();

    useEffect(() => {
        getCart();
    }, []);

    return (
        <div className="cart__container">
            <span>Корзина</span>
            <div className="cart__items">
                {cart.shoes.length > 0 ? (
                    cart.shoes.map((elem) => (
                        <div key={elem.id} className="cart__element">
                            <img
                                className="cart__image"
                                src={elem.images[0]}
                                alt="shoe-photo"
                            />
                            <span>{elem.brand}</span>
                            <span>Модель: {elem.model}</span>
                            <span>Цвет: {elem.color}</span>
                            <span>Размер: {elem.size}</span>
                            <span>
                                Количество:
                                <input
                                    onChange={(event) =>
                                        changeCount(event.target.value, elem.id)
                                    }
                                    className="cart__shoes-count"
                                    value={elem.count}
                                    type="number"
                                />
                            </span>
                            <span>Цена: {elem.price}</span>
                            <span
                                onClick={() => deleteFromCart(elem.id)}
                                className="cart__delete-btn"
                            >
                                Удалить
                            </span>
                        </div>
                    ))
                ) : (
                    <span>Корзина пуста</span>
                )}
                <span className="cart__total-price">
                    Общая сумма: {cart.totalPrice} $
                </span>

                {cart.shoes.length > 0 ? (
                    <button
                        onClick={() => history.push("/order-form")}
                        className="cart__order-btn"
                    >
                        Оформить заказ
                    </button>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Cart;
