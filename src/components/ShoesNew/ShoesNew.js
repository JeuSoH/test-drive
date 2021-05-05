import React from "react";
import ShoeBar from "./ShoeBar";
import ShoeList from "../ShoeList/ShoeList";
import { Grid } from "@material-ui/core";

const ShoesNew = (props) => {
    return (
        <>
            <div className="container">
                <h1 className="foot_sh">Обувь будущуго</h1>
                <ShoeBar {...props} />
                <Grid container>
                    <ShoeList />
                </Grid>
            </div>
        </>
    );
};

export default ShoesNew;
