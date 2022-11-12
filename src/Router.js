import React from "react";
import { Switch, Route } from "react-router-dom";
import AddPost from "./pages/AddPost";

import AppPosts from "./pages/AppPosts";

export default function Router() {

    return (

        <Switch>
            <Route exact path="/posts">
                <AppPosts />
                <Route path="/add">
                    <AddPost />
                </Route>
            </Route>
        </Switch>

    )
}