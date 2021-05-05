import { Link } from "react-router-dom";
import React from "react";
import "./Categories.css";

const Categories = () => {
    return (
        <>
            <div class="admission">
                <div class="container">
                    <div class="admission_logo">Новые поступления</div>
                    <div class="admission_blog">
                        <div class="admission_future">
                            <div class="admission_left">
                                <span class="admission_left_type">
                                    Обувь будущего
                                </span>
                                <br />
                                <button class="btn_ftr">
                                    <Link to="/new"> Купить</Link>{" "}
                                </button>
                            </div>
                        </div>
                        <div class="admission_cleats">
                            <div class="admission_right">
                                <span class="admission_right_type">
                                    Спортивная обвуь
                                </span>
                                <br />
                                <button class="btn_cts">
                                    {" "}
                                    <Link to="/football">Купить</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Categories;
