import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { fetchPosts } from "../../actions/index";
import Post from './post'

class PostList extends Component {

    componentDidMount() {
        this.props.fetchPosts();
        console.log(this.props)
    }

    renderPosts() {
        const postsArr = this.props.posts;
        console.log(this.props)
        console.log(postsArr)

        return _.map((postsArr, post) => {
            const postUrl = `/${match.url}/${post.url}`
            console.log(postUrl);
            return (
                // <Link to={postUrl}>
                    <Post post={post} key={post.id} />
                // </Link>
            );
        })
    }

    render() {
        return (
            <div>
                <h2>Posts</h2>
                {this.renderPosts()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state.posts);
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostList);
