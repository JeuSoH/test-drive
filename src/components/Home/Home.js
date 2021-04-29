import React from "react";
import ShoeList from "../ShoeList/ShoeList";
import Welcome from "../Welcome/Welcome";

const Home = () => {
    return (
        <div className="container">
            <Welcome />
            <ShoeList />
        </div>
    );
};

export default Home;
