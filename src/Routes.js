import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddShoes from "./components/AddShoes/AddShoes";
import Header from "./components/Header/Header";
import Card from './components/Card/Card';
import Home from "./components/Home/Home";
import SignIn from './components/SignIn/SignIn';
import SignUp from "./components/SignUp/SignUp";
import AuthContextProvider from "./contexts/AuthContext";
import ShoesContextProvider from "./contexts/shoesContext";

const Routes = () => {
    return (
        <ShoesContextProvider>
            <AuthContextProvider>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path="/add" component={AddShoes} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/card" component={Card} />
                        <Route exact path="/login" component={SignIn} />
                        <Route exact path="/register" component={SignUp} />
                    </Switch>
                </BrowserRouter>
            </AuthContextProvider>
        </ShoesContextProvider>
    );
};

export default Routes;
