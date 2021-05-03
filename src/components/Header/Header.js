import React, { useContext, useState } from "react";
import "./Header.css";
import { authContext } from "../../contexts/AuthContext";
import Search from "../../assets/img/search.svg";
import Cart from "../../assets/img/cart.svg";
import { Link, useHistory } from "react-router-dom";
import { shoesContext } from "../../contexts/shoesContext";

const Header = () => {
    const { currentUser, logoutUser } = useContext(authContext);
    const history = useHistory();

    const { search, searchData } = useContext(shoesContext);
    const { searchValue, setSearchValue } = useState("");

    const handleValue = (e) => {
        // setSearchValue(e.target.value);
        search(e.target.value);
    };

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
                            <div className="search">
                                <input
                                    onChange={handleValue}
                                    className="inp_search"
                                    placeholder="Поиск"
                                />
                                <div className="search-result">
                                    {searchData.map((item) => (
                                        <Link to={`/details/${item.id}`}>
                                            <div className="search-item">
                                                {item.brand}
                                                {item.model}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div
                                onClick={() => history.push("/cart")}
                                className="cart"
                            >
                                <img src={Cart} alt="" />
                            </div>
                            <div className="navbar__add-btn">
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
