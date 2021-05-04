import React from "react";
import "./Categories.css";

const Categories = () => {
    return (
        <>
            <div class="admission">
                <div class="container">
                    <div class="admission_logo">Новые поступление</div>
                    <div class="admission_blog">
                        <div class="admission_future">
                            <div class="admission_left">
                                <span class="admission_left_type">
                                    Обувь будущего
                                </span>
                                <br />
                                <button class="btn_ftr">Купить</button>
                            </div>
                        </div>
                        <div class="admission_cleats">
                            <div class="admission_right">
                                <span class="admission_right_type">
                                    Футбольные бутсы
                                </span>
                                <br />
                                <button class="btn_cts">Купить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Categories;
