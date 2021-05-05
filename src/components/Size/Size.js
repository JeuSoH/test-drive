import React from "react";
import { Link } from "react-router-dom";

const Size = () => {
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
                <h1 className="foot_sh">Размер имеет значение</h1>
                <p>У каждого бренда своя собственная таблица размеров.</p>
                <p>
                    Даже у одного бренда в некоторых коллекциях (например, у
                    Nike, Adidas, Puma) размеры могут различаться.
                </p>
                <p>
                    Пожалуйста, не путайте российский размер и европейский — они
                    очень похожи, но всё-таки различаются.
                </p>
                <p>
                    На коробке не указывается Российский размер. Он дан для
                    ознакомления и переведен по рекомендациям
                    брендов-производителей.
                </p>
            </div>
        </>
    );
};

export default Size;
