import React from "react";
import ShoeList from "../ShoeList/ShoeList";
import Welcome from "../Welcome/Welcome";
import Sidebar from "./Sidebar";
import { Grid } from "@material-ui/core";

const Home = (props) => {
    return (
        <div className="container">
            <Grid container>
                <Welcome />
                <Sidebar {...props} />
                <ShoeList />
            </Grid>
        </div>
    );
};

export default Home;
