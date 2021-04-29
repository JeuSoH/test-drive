import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import card from './components/card/card';
import Home from './components/Home/Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cart" component={card} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;