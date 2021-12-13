import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AddShoes from "./components/AddShoes/AddShoes";
import Header from "./components/Header/Header";

import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AuthContextProvider from "./contexts/AuthContext";
import ShoesContextProvider from "./contexts/shoesContext";
import ShoeDetails from "./components/ShoeDetails/ShoeDetails";
import Profile from "./components/Profile/Profile";
import UsersContextProvider from "./contexts/UsersContext";
import Cart from "./components/Cart/Cart";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import EditShoe from "./components/EditShoe/EditShoe";
import OrderForm from "./components/OrderForm/OrderForm";
import Footer from "./components/Footer/Footer";
import FootballShoes from "./components/FootbalShoes/FootballShoes";
import ShoesNew from "./components/ShoesNew/ShoesNew";
import AboutUs from "./components/AboutUs/AboutUs";
import Vakans from "./components/Vakans/Vakans";
import Dostavka from "./components/Dostavka/Dostavka";
import Contacts from "./components/Contacts/Contacts";
import Size from "./components/Size/Size";
import { Card } from "@material-ui/core";

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
                            <Route
                                exact
                                path="/details/:id"
                                component={ShoeDetails}
                            />
                            <Route exact path="/admin" component={AdminPanel} />
                            <Route
                                exact
                                path="/edit/:id"
                                component={EditShoe}
                            />
                            <Route
                                exact
                                path="/order-form"
                                component={OrderForm}
                            />
                            <Route
                                exact
                                path="/edit/:id"
                                component={EditShoe}
                            />
                            <Route
                                exact
                                path="/football"
                                component={FootballShoes}
                            />
                            <Route exact path="/new" component={ShoesNew} />
                            <Route exact path="/about" component={AboutUs} />
                            <Route exact path="/vak" component={Vakans} />
                            <Route
                                exact
                                path="/dostavka"
                                component={Dostavka}
                            />
                            <Route
                                exact
                                path="/contacts"
                                component={Contacts}
                            />
                            <Route exact path="/size" component={Size} />
                            <Redirect to="/" />
                        </Switch>
                        <Footer />
                    </BrowserRouter>
                </UsersContextProvider>
            </AuthContextProvider>
        </ShoesContextProvider>
    );
};

export default Routes;
