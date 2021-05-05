import React from "react";
import ShoeBar from "./ShoeBar";
import ShoeList from "../ShoeList/ShoeList";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const ShoesNew = (props) => {
    return (
        <>
            <div className="container">
                <div className="cat_content">
                    <div className="det_nav">
                        <button className="back_det">
                            <Link to="/">Назад </Link>
                        </button>
                    </div>
                    <h1 className="foot_sh">Обувь будущeго</h1>
                </div>
                <ShoeBar {...props} />
                <Grid container>
                    <ShoeList />
                </Grid>
            </div>
        </>
    );
};

export default ShoesNew;
