import React, { useContext, useEffect } from 'react';
import './Cart.css'
import { shoesContext } from '../../contexts/shoesContext';

const Cart = () => {

    const { cart, getCart } = useContext(shoesContext);

    useEffect(() => {
        getCart();
    }, []);

    return (
        <div className="cart__container">
            <span>Корзина</span>
            <div className="cart__items">
                {
                    cart.shoes.length > 0 ?
                        (
                            cart.shoes.map(elem => (
                                <div key={elem.id} className="cart__element">
                                    <img src={elem.images} alt="shoe-photo" />
                                    <span>{elem.brand}</span>
                                    <span>Модель: {elem.model}</span>
                                    <span>Цвет: {elem.color}</span>
                                    <span>Размер: {elem.size}</span>
                                    <span>Цена: {elem.price}</span>
                                </div>
                            ))
                        )
                        :
                        (
                            <span>Корзина пуста</span>
                        )
                }
                <span className="cart__total-price">Общая сумма: {cart.totalPrice} сом</span>
            </div>
        </div>
    )
};

export default Cart;