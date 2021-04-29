import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import card from './components/card/card';
import Home from "./components/Home/Home";
import SignIn from './components/SignIn/SignIn';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cart" component={card} />
                <Route exact path="/login" component={SignIn} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
