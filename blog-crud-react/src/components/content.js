import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import PostList from './posts/postList'
import PostCreate from './posts/postCreate'
import PostPreview from './posts/postPreview'

class Content extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={PostList} />
                    <Route path="/about" component={PostList} />
                    {/* <Route path="/post/new" component={PostCreate} /> */}
                    {/* <Route path="/posts/:postId" component={PostPreview} /> */}
                </Switch>
            </div>
        );
    }
}

export default Content;
