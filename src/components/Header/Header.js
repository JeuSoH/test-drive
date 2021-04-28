import React from "react";
import "./Header.css";
import Search from "../../assets/img/search.svg";
import Menu from "../../assets/img/menu.svg";
import Cart from "../../assets/img/cart.svg";

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="navbar">
                        <div className="navbar_logo">
                            <p className="logo">Streethead</p>
                        </div>
                        <div className="navbar_left">
                            <p className="men">Men</p>
                            <p className="women">Women</p>
                        </div>
                        <div className="navbar_right">
                            <img className="icon" src={Search} alt="" />
                            <div className="cart">
                                <p>Cart</p>

                                <img src={Cart} alt="" />
                                <div className="menu">
                                    <p>Menu</p>
                                    <img src={Menu} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
