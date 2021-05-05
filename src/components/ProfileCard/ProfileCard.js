import { CircularProgress } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { usersContext } from '../../contexts/UsersContext';
import './ProfileCard.css'

const ProfileCard = () => {

    const { userData, getUserData, editUserData } = useContext(usersContext);
    const [userDataToEdit, setUserDataToEdit] = useState();
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        getUserData();
        setUserDataToEdit(userData);
    }, [edit]);

    function handleChange(event) {
        setUserDataToEdit({
            ...userDataToEdit,
            [event.target.name]: event.target.value
        });
        console.log(userDataToEdit);
    }

    function handleSaveBtn() {
        editUserData(userDataToEdit);
        setEdit(false);
    }

    return (
        <div className="profile__card">
            <img className="profile__card__image" src={userData.image ? userData.image : "https://specials-images.forbesimg.com/imageserve/6000b9e977541649a9df2cbd/960x0.jpg?fit=scale"} alt="User-img" />
            <p onClick={() => setEdit(true)} className="profile__card__edit-btn">Нажмите для редактировния</p>
            {
                edit ?
                    (
                        userDataToEdit ? (
                            <>
                                <input className="edit-inputs" name="firstName" onChange={handleChange} placeholder="Имя" value={userDataToEdit.firstName} />
                                <input className="edit-inputs" name="lastName" onChange={handleChange} placeholder="Фамилия" value={userDataToEdit.lastName} />
                                <input className="edit-inputs" name="address" onChange={handleChange} placeholder="Адрес доставки" value={userDataToEdit.address} />
                                <input className="edit-inputs" name="image" onChange={handleChange} placeholder="Фото" value={userDataToEdit.image} />
                                <button className="log-in-out" onClick={handleSaveBtn}>Сохранить</button>
                            </>
                        )
                            :
                            (
                                <CircularProgress />
                            )
                    )
                    :
                    (
                        <>
                            <p>Имя: {userData.firstName} Фамилия: {userData.lastName}</p>
                            <p>Адрес доставки: {userData.address}</p>
                        </>
                    )
            }
        </div>
    );
};

export default ProfileCard;