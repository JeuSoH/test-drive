import React, { useContext, useState } from "react";
import "./Header.css";
import { authContext } from "../../contexts/AuthContext";
import SettingsIcon from '@material-ui/icons/Settings';
import Cart from "../../assets/img/cart.svg";
import { Link, useHistory } from "react-router-dom";
import { shoesContext } from "../../contexts/shoesContext";

const Header = () => {
    const { currentUser, logoutUser } = useContext(authContext);
    const history = useHistory();

    const { search, searchData } = useContext(shoesContext);
    const { searchValue, setSearchValue } = useState("");
    const [show, setShowResult] = useState(false);

    const handleValue = (e) => {
        // setSearchValue(e.target.value);
        if (e.target.value.length > 0) {
            setShowResult(true)
        } else {
            setShowResult(false)
        }
        search(e.target.value);
        console.log(e.target.value);
        console.log(searchData);
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
                                    onBlur={() => setShowResult(false)}
                                    onChange={handleValue}
                                    className="inp_search"
                                    placeholder="Поиск"
                                />
                                {
                                    show ?
                                        (
                                            <div className="search-result">
                                                {searchData.map((item) => (
                                                    <Link to={`/details/${item.id}`}>
                                                        <div className="search-item">
                                                            <div>
                                                                <img src={item.images[0]} />
                                                            </div>
                                                            <div>{item.brand}</div>
                                                            <div>, {item.model}</div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        )
                                        :
                                        ""
                                }
                            </div>
                            <div
                                onClick={() => history.push("/cart")}
                                className="cart"
                            >
                                <img src={Cart} alt="" />
                            </div>
                            {currentUser ? (
                                <div className="log-in-out-container">
                                    <p
                                        className="log-in-out"
                                        onClick={logoutUser}
                                    >
                                        ВЫЙТИ
                                    </p>
                                    <Link to="/profile" className="settings-btn"><SettingsIcon /></Link>
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
