import React from "react";
import ShoeList from "../ShoeList/ShoeList";
import Welcome from "../Welcome/Welcome";
import Sidebar from "./Sidebar";
import { Grid } from "@material-ui/core";
import Categories from "../Categories/Categories";

const Home = (props) => {
    return (
        <div className="container">
            <Welcome />
            <Sidebar {...props} />
            <Grid container>
                <ShoeList />
                <Categories />
            </Grid>
        </div>
    );
};

export default Home;
