import React from 'react';

const UserAvatar = ({ user: { name, photo } }) => (
    <div className='row'>
        <div className="right valign-wrapper">
            <p className="left-align">{name}</p>
            <img width={40} className="right-align responsive-img" src={photo} alt={name} />
        </div>
    </div>
);

export default UserAvatar;
