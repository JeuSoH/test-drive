import React from 'react';
import './ProfileCard.css'

const ProfileCard = () => {
    return (
        <div className="profile__card">
            <img className="profile__card__image" src="https://specials-images.forbesimg.com/imageserve/6000b9e977541649a9df2cbd/960x0.jpg?fit=scale" alt="User-img" />
            <p className="profile__card__edit-btn">Нажмите для редактировния</p>
            <p>Качок Кастомерович</p>
        </div>
    );
};

export default ProfileCard;