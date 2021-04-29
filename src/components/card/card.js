import React, { useState } from 'react';
import Cards from 'react-credit-cards'
import './card.css'
import 'react-credit-cards/es/styles-compiled.css'


const Card = () => {

    const [number, setNumber] = useState ('')
    const [name, setName] = useState ('')
    const [expiry, setExpiry] = useState ('')
    const [cvc, setCvc] = useState ('')
    const [focus, setFocus] = useState ('')

    return (
        <div className="card">
        <Cards 
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
        />
            <form className="inpute">
                <input 
                    type='tel'
                    name='number'
                    placeholder='Card Number'
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />
                <input 
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />
                <input 
                    type='tel   '
                    name='expiry'
                    placeholder='MM/YY'
                    value={expiry}
                    onChange={e => setExpiry(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />
                <input 
                    type='tel'
                    name='cvc'
                    placeholder='CVC'
                    value={cvc}
                    onChange={e => setCvc(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />
                <button>Buy</button>
            </form>
        </div>
    );
};

export default Card;