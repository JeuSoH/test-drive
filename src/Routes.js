import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SignIn from './components/SignIn/SignIn';
import SignUp from "./components/SignUp/SignUp";
import AuthContextProvider from "./contexts/AuthContext";

const Routes = () => {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={SignIn} />
                    <Route exact path="/register" component={SignUp} />
                </Switch>
            </BrowserRouter>
        </AuthContextProvider>
    );
};
export default Routes;
