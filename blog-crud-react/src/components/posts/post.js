import React from 'react';

const Post = ({ post }) => (
    <div className="card-panel" key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </div>
);

export default Post;
