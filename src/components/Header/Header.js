import React, { useContext } from "react";
import "./Header.css";
import { authContext } from "../../contexts/AuthContext";
import Search from "../../assets/img/search.svg";
import Cart from "../../assets/img/cart.svg";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
    const { currentUser, logoutUser } = useContext(authContext);
    const history = useHistory();

    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="navbar">
                        <div className="navbar_logo">
                            <p className="logo">
                                <Link to="/">Streethead</Link>
                            </p>
                        </div>
                        <div className="navbar_right">
                            <img className="icon" src={Search} alt="" />
                            <div onClick={() => history.push("/cart")} className="cart">
                                <img src={Cart} alt="" />
                            </div>
                            <div>
                                <p>
                                    <Link to="/add">Добавить</Link>
                                </p>
                            </div>
                            {currentUser ? (
                                <div className="log-in-out-container">
                                    <p
                                        className="log-in-out"
                                        onClick={logoutUser}
                                    >
                                        ВЫЙТИ
                                    </p>
                                </div>
                            ) : (
                                <div
                                    className="log-in-out-container"
                                    onClick={() => history.push("/login")}
                                    className="add"
                                >
                                    <p className="log-in-out">ВОЙТИ</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
