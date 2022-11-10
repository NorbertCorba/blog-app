import React from "react";
import { Switch, Route } from "react-router-dom";

import AppPosts from "./components/AppPosts";

export default function Router() {

    return (

<Switch>
    <Route exact path = "/posts">
        <AppPosts/>
    </Route>
</Switch>

    )
}