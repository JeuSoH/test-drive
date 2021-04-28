import React from "react";
import "./Welcome.css";
import shoes_2 from "../../assets/img/shoes1.png";
import shoes_1 from "../../assets/img/shoes2.png";
import instagram from "../../assets/img/inst.png";
import facebook from "../../assets/img/fecebook.png";
import nike from "../../assets/img/nike.svg";
import adidas from "../../assets/img/adidas.svg";
import puma from "../../assets/img/puma.svg";

const Welcome = () => {
    return (
        <div>
            <div className="welcome">
                <div className="title">
                    <p className="discover">Discover</p>
                    <p className="new">new</p>
                </div>
                <div className="welcome_blocks">
                    <div className="block_1">
                        <p className="number">01</p>
                        <img className="shoes_1" src={shoes_1} alt="" />
                        <p className="name_shoes_1">
                            Nike Dunk Low <br />
                            Ceramic (2020)
                        </p>
                    </div>
                    <div className="block_2">
                        <p className="number">02</p>
                        <img className="shoes_2" src={shoes_2} alt="" />
                        <p className="name_shoes_2">
                            Jordan 1 retro <br />
                            royal (2017)
                        </p>
                    </div>
                    <div className="social">
                        <img className="icon" src={instagram} alt="" />

                        <img className="icon" src={facebook} alt="" />
                    </div>
                    <div className="brand">
                        <img src={nike} alt="" />
                        <img src={adidas} alt="" />
                        <img src={puma} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
