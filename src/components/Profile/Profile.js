import React, { useContext, useEffect } from "react";
import { usersContext } from "../../contexts/UsersContext";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./Profile.css";

const Profile = () => {
    const { getUserOrders, orders } = useContext(usersContext);

    useEffect(() => {
        getUserOrders();
    }, []);

    return (
        <div className="profile">
            <ProfileCard />
            <ul className="responsive-table">
                <span className="profile__title">ВАШИ ЗАКАЗЫ</span>
                <li className="table-header">
                    <div className="col col-1">ID ЗАКАЗА</div>
                    <div className="col col-2">ДАТА ЗАКАЗА</div>
                    <div className="col col-3">ОБЩАЯ СУММА</div>
                    <div className="col col-4">СТАТУС</div>
                </li>
                {orders.map((elem) => (
                    <li className="table-row" key={"order" + elem.id}>
                        <div className="col col-1" data-label="Job Id">
                            {elem.id}
                        </div>
                        <div className="col col-2" data-label="Customer Name">
                            {elem.orderDate}
                        </div>
                        <div className="col col-3" data-label="Amount">
                            {elem.total}
                        </div>
                        <div className="col col-4" data-label="Payment Status">
                            {elem.status}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;
