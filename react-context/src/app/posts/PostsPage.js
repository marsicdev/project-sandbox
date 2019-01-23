import React, { Component } from 'react';

import PostList from './PostList';

import { postService } from '../../services/PostService';

class PostsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.loadPosts()
    }

    async loadPosts() {
        try {
            const posts = await postService.fetchPosts()
            this.setState({ posts });
        } catch (error) {
            throw Error("Something bad happened")
        }
    }

    render() {
        const { posts } = this.state;
        return (<PostList posts={posts} />)
    }
}

export default PostsPage;
