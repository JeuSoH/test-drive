import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { authContext } from '../../contexts/AuthContext';
import { shoesContext } from '../../contexts/shoesContext';
import './AdminPanel.css'

const AdminPanel = () => {
    const { currentUser } = useContext(authContext);
    const { shoesData, getShoes, deleteShoe } = useContext(shoesContext);
    const history = useHistory();

    useEffect(() => {
        getShoes();
    }, []);

    function handleEditBtn(id) {
        history.push(`/edit/${id}`);
    }

    return currentUser ? (
        <div className="admin-wrapper">
            {
                shoesData.map(elem => (
                    <div key={elem.id} className="admin-pannel__element">
                        <img src={elem.images} alt="shoe-photo" />
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
        :
        (
            <div className="admin-wrapper">
                <span className="admin__text">Вход в панель <br /> администратора</span>
                <form className="admin-form">
                    <input className="admin-form__input" type="text" placeholder="Введите ваш логин" />
                    <input className="admin-form__input" type="password" placeholder="Введите ваш пароль" />
                    <button className="admin-form__btn" type="submit">Войти</button>
                </form>
            </div>
        );
};

export default AdminPanel;