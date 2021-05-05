import React from "react";
import ShoeList from "../ShoeList/ShoeList";
import Footbar from "./Footbar";
import "./FootballShoes.css";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const FootballShoes = (props) => {
    return (
        <>
            <div className="container">
                <div className="cat_content">
                    <div className="det_nav">
                        <button className="back_det">
                            <Link to="/">Назад </Link>
                        </button>
                    </div>
                    <h1 className="foot_sh">Спортивная обувь</h1>
                </div>
                <Footbar {...props} />
                <Grid container>
                    <ShoeList />
                </Grid>
            </div>
        </>
    );
};

export default FootballShoes;
