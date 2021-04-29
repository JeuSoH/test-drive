import React, { useState } from 'react';
import Cards from 'react-credit-cards'
import './Card.css'
import 'react-credit-cards/es/styles-compiled.css'


const Card = () => {

    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')

    return (
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
                    type='tel'
                    name='number'
                    placeholder='Card Number'
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />
                <input
                    className="card__input"
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />
                <input
                    className="card__input"
                    type='tel   '
                    name='expiry'
                    placeholder='MM/YY'
                    value={expiry}
                    onChange={e => setExpiry(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />
                <input
                    className="card__input"
                    type='tel'
                    name='cvc'
                    placeholder='CVC'
                    value={cvc}
                    onChange={e => setCvc(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />
                <button className="card__btn">Buy</button>
            </form>
        </div>
    );
};

export default Card;