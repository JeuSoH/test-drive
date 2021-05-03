import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AddShoes from "./components/AddShoes/AddShoes";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AuthContextProvider from "./contexts/AuthContext";
import ShoesContextProvider from "./contexts/shoesContext";
import ShoeDetails from "./components/ShoeDetails/ShoeDetails";
import Profile from "./components/Profile/Profile";
import UsersContextProvider from "./contexts/UsersContext";
import Cart from "./components/Cart/Cart";
import AdminPannel from "./components/AdminPannel/AdminPannel";
import EditShoe from "./components/EditShoe/EditShoe";

const Routes = () => {
    return (
        <ShoesContextProvider>
            <AuthContextProvider>
                <UsersContextProvider>
                    <BrowserRouter>
                        <Header />
                        <Switch>
                            <Route exact path="/add" component={AddShoes} />
                            <Route exact path="/" component={Home} />
                            <Route exact path="/card" component={Card} />
                            <Route exact path="/login" component={SignIn} />
                            <Route exact path="/register" component={SignUp} />
                            <Route exact path="/profile" component={Profile} />
                            <Route exact path="/cart" component={Cart} />
                            <Route exact path="/details/:id" component={ShoeDetails} />
                            <Route exact path="/admin" component={AdminPannel} />
                            <Route exact path="/edit/:id" component={EditShoe} />
                            <Redirect to="/" />
                        </Switch>
                    </BrowserRouter>
                </UsersContextProvider>
            </AuthContextProvider>
        </ShoesContextProvider>
    );
};

export default Routes;
