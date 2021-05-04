import React from "react";
import "./Footer.css";
import Ms from "../../assets/img/mastercard.png";
import Visa from "../../assets/img/visa.png";
import Paypal from "../../assets/img/paypal.png";
import Instagram from "../../assets/img/inst.png";
import Facebook from "../../assets/img/fecebook.png";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer_blog">
                        <div className="footer_subblog">
                            <div className="footer_title_pay">
                                Способ оплаты
                            </div>
                            <div className="footer_img">
                                <img src={Ms} alt="" />
                                <img src={Visa} alt="" />
                                <img src={Paypal} alt="" />

                                <li>Подписаться на рассылки</li>
                            </div>
                        </div>
                        <div className="footer_subblog">
                            <div className="footer_title">Помощь</div>

                            <li>Доставка</li>
                            <li>Возврат</li>
                            <li>Связаться с нами</li>
                        </div>
                        <div className="footer_subblog">
                            <div className="footer_title">Для клиентов</div>

                            <li>Как совершить покупку</li>
                            <li>Условия пользования</li>
                        </div>

                        <div className="footer_subblog">
                            <div className="footer_title_street">
                                StreetHead
                            </div>
                            <li>О нас</li>
                            <li>Вакансии</li>
                            {/* <div className="social_net">
                                <img className="icon" src={Instagram} />
                                <img className="icon" src={Facebook} />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
