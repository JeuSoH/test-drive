import React from "react";
import { Link } from "react-router-dom";

const Contacts = () => {
    return (
        <>
            <div className="container">
                <div className="cat_content">
                    <div className="det_nav">
                        <button className="back_det">
                            <Link to="/">Назад </Link>
                        </button>
                    </div>
                </div>
                <h1 className="foot_sh">Контакты</h1>
                <div className="dost_wrapper">
                    <div className="dost_block">
                        <h3>СЛУЖБА ПОДДЕРЖКИ КЛИЕНТОВ</h3>
                        <p>
                            Работает для покупателей розничных магазинов и
                            интернет-магазина с 9:00 до 22:00 по бишкекскому
                            времени, без выходных. +(996) 999-77-99-47
                        </p>
                    </div>
                    <div className="dost_block">
                        <h3>СЛУЖБА КОНТРОЛЯ КАЧЕСТВА</h3>
                        <p>
                            Если у вас возникли вопросы, связанные с качеством
                            продукции и обслуживания в розничных магазинах и
                            интернет-магазине, воспользуйтесь формой обратной
                            связи.
                        </p>
                    </div>
                    <div className="dost_block">
                        <h3>HR-СЛУЖБА</h3>
                        <p>
                            Если Вам интересна работа в магазинах STREET HEAD,
                            отправьте ваше резюме или заполните анкету на сайте.
                        </p>
                    </div>
                    <div className="dost_block">
                        <h3>ПРЕСС-СЛУЖБА</h3>
                        <p>
                            Любые вопросы относительно интервью у руководителей,
                            участия в конференциях и семинарах, съёмках в
                            магазинах. +(996) 999-45-45-45
                        </p>
                    </div>
                    <div className="dost_block">
                        <h3>ОТДЕЛ МАРКЕТИНГА И РЕКЛАМЫ</h3>
                        <p>
                            Вопросы, связанные с рекламными активностями STREET
                            HEAD и партнерскими предложениями.
                        </p>
                    </div>
                    <div className="dost_block">
                        {" "}
                        <h3>ОТДЕЛ РАЗВИТИЯ И АРЕНДЫ</h3>
                        <p>Предложения по аренде новых торговых площадей.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contacts;
