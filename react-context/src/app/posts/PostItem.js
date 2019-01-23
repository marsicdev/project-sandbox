import React from 'react';

const PostItem = ({ post: {body, title} }) => (
    <div class="card blue-grey darken-1">
        <div class="card-content white-text">
            <span class="card-title">{title}</span>
            <p>{body}</p>
        </div>
    </div>
)

export default PostItem;
