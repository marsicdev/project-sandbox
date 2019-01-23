import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts = [1, 2, 3, 4] }) => {
    return posts.map(post => <PostItem post={post} />)
}

export default PostList
