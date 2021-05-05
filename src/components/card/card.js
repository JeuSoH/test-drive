import React, { useContext, useEffect, useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { shoesContext } from "../../contexts/shoesContext";
import { authContext } from "../../contexts/AuthContext";
import "./card.css";
import { usersContext } from "../../contexts/UsersContext";
import { useHistory } from "react-router";

const Card = () => {
    const { currentUser } = useContext(authContext);
    const { cart, getCart } = useContext(shoesContext);
    const { submitShop } = useContext(usersContext);
    const history = useHistory();

    useEffect(() => {
        getCart();
    }, []);

    console.log(currentUser);
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCvc] = useState("");
    const [focus, setFocus] = useState("");

    function handleBuyBtn(event, sum) {
        event.preventDefault();
        submitShop(sum, history);
    }

    return currentUser ? (
        <div className="card__container">
            <span>Заполните поля</span>
            {/* <span>{currentUser.ba.email}</span> */}
            <span>Итого к оплате: {cart.totalPrice} сом</span>
            <div className="plastic-card">
                <Cards
                    number={number}
                    name={name}
                    expiry={expiry}
                    cvc={cvc}
                    focused={focus}
                />
                <form className="card__inputs">
                    <input
                        className="card__input"
                        type="number"
                        name="number"
                        placeholder="Card Number"
                        value={number.slice(0, 16)}
                        onChange={(e) => setNumber(e.target.value)}
                        onFocus={(e) => setFocus(e.target.name)}
                    />
                    <input
                        className="card__input"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={(e) => setFocus(e.target.name)}
                    />
                    <input
                        className="card__input"
                        type="tel   "
                        name="expiry"
                        placeholder="MM/YY"
                        value={expiry.slice(0, 3)}
                        onChange={(e) => setExpiry(e.target.value)}
                        onFocus={(e) => setFocus(e.target.name)}
                    />
                    <input
                        className="card__input"
                        type="tel"
                        name="cvc"
                        placeholder="CVC"
                        value={cvc.slice(0, 3)}
                        onChange={(e) => setCvc(e.target.value)}
                        onFocus={(e) => setFocus(e.target.name)}
                    />
                    <button
                        onClick={(event) =>
                            handleBuyBtn(event, cart.totalPrice)
                        }
                        className="card__btn"
                    >
                        Оплатить
                    </button>
                </form>
            </div>
        </div>
    ) : (
        <div className="cart__container">
            <span
                style={{
                    minHeight: "60vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                Требуется авторизация для оплаты
            </span>
        </div>
    );
};

export default Card;
