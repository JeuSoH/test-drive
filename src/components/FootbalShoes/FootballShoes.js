import React from "react";
import ShoeList from "../ShoeList/ShoeList";
import Footbar from "./Footbar";
import "./FootballShoes.css";
import { Grid } from "@material-ui/core";

const FootballShoes = (props) => {
    return (
        <>
            <div className="container">
                <h1 className="foot_sh">Спортивная обувь</h1>
                <Footbar {...props} />
                <Grid container>
                    <ShoeList />
                </Grid>
            </div>
        </>
    );
};

export default FootballShoes;
