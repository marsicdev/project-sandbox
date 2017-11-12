import React from 'react';
import { Route, Switch } from "react-router-dom";

import PostsHome from './posts/posts-home'
import NewPost from './posts/new-post'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={PostsHome} />
            <Route path='/posts/new' component={NewPost} />
            {/* <Route path='/' component={Schedule} /> */}
        </Switch>
    </main>
)

export default Main;