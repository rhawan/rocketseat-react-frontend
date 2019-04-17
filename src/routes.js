import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Box from "./pages/Box";
import BoxList from "./pages/BoxList";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/box" exact component={BoxList} />
            <Route path="/box/:id" component={Box} />
        </Switch>
    </BrowserRouter>
);

export default Routes;