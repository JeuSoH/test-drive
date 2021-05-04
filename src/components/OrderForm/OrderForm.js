import { Link } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { shoesContext } from '../../contexts/shoesContext';
import './OrderForm.css'

const OrderForm = () => {

    let { cart, getCart } = useContext(shoesContext);

    useEffect(() => {
        getCart();
    }, []);
    console.log(cart);

    return (
        <>
            <div className="order-form__container">
                <span className="order-form__title">Ваш заказ:</span>
                {
                    cart.shoes.map(elem => (
                        <span key={elem.id} className="order-form__elem">{elem.brand} | {elem.model} | {elem.sex} | {elem.color} | {elem.price}</span>
                    ))
                }
            </div>
            <span className="total-price">Итого: {cart.totalPrice} сом</span>
            <div className="order-form__bottom">
                <Link to="/cart" className="pay-btn"><span>ОПЛАТИТЬ</span></Link>
            </div>
        </>
    );
};

export default OrderForm;