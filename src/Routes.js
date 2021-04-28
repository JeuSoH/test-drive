import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ShoesContextProvider from "./contexts/shoesContext";

const Routes = () => {
    return (
        <ShoesContextProvider>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </ShoesContextProvider>
    );
};

export default Routes;
