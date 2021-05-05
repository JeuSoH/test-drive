import { CircularProgress } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import app from '../../base';
import { authContext } from '../../contexts/AuthContext';
import { shoesContext } from '../../contexts/shoesContext';
import './AdminPanel.css'

const AdminPanel = () => {
    const { currentUser } = useContext(authContext);
    const { shoesData, getShoes, deleteShoe } = useContext(shoesContext);
    const [pending, setPending] = useState(true);
    const history = useHistory();

    useEffect(() => {
        getShoes(history);
        app.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (!user) {
                history.push("/login");
            } else {
                setPending(false)
            }
        });
    }, []);

    function handleEditBtn(id) {
        history.push(`/edit/${id}`);
    }

    return pending ?
        (
            <div className="admin-wrapper">
                <CircularProgress color="secondary" />
            </div>
        )
        :
        (
            <div className="admin-wrapper">
                <Link className="add-product-btn" to="/add"><span>Добавить товар</span></Link>
                {
                    shoesData.map(elem => (
                        <div key={elem.id} className="admin-pannel__element">
                            <img className="product-img" src={elem.images[0]} alt="shoe-photo" />
                            <span>{elem.brand}</span>
                            <span>Модель: {elem.model}</span>
                            <span>Цвет: {elem.color}</span>
                            <span>Размер: {elem.size}</span><span>Цена: {elem.price}</span>
                            <span onClick={() => handleEditBtn(elem.id)} className="admin-pannel__delete-btn">Редактировать</span>
                            <span onClick={() => deleteShoe(elem.id)} className="admin-pannel__delete-btn">Удалить</span>
                        </div>
                    ))
                }
            </div>
        )
};

export default AdminPanel;