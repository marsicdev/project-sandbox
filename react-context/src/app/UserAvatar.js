import React from 'react';

const UserAvatar = ({ user: { name, photo } }) => (
    <div className="right valign-wrapper">
        <p class="left-align">{name}</p>
        <img width={60} class="right-align responsive-img" src={photo} alt={name} />
    </div>
);

export default UserAvatar;
