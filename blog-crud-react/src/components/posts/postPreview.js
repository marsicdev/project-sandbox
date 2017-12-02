import React from 'react';

const PostPreview = () => (
    <div className="card-panel" key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </div>
);

export default PostPreview;