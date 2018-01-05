import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/index";
import Post from './post'

class PostsHome extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        const postsArr = this.props.posts;

        return _.map(postsArr, post => {
            return (
                <Post post={post} key={post.id} />
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderPosts()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostsHome);
