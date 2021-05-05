import React from "react";
import { Link } from "react-router-dom";
const AboutUs = () => {
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
                <h1 className="foot_sh">
                    STREET HEAD — СЕТЬ МУЛЬТИБРЕНДОВЫХ <br /> МАГАЗИНОВ ОДЕЖДЫ,
                    ОБУВИ И АКСЕССУАРОВ
                </h1>
                <p>
                    Черпая вдохновение в ритме жизни крупных городов, STREET
                    HEAD представляет лучшие модели кроссовок, актуальную обувь,
                    одежду в спортивном стиле и аксессуары. Ассортимент STREET
                    HEAD формируется из ключевых новинок известных спортивных
                    производителей и товаров от брендов категории лайфстайл.
                    Наша миссия: популяризация кроссовок, как неотъемлемой части
                    гардероба современного человека.
                </p>
            </div>
        </>
    );
};

export default AboutUs;
