import React from 'react';

const FriendItem = ({ friend: {photo, name, email} }) => {
    return (
        <li class="collection-item avatar">
            <img src={photo} alt="" class="circle" />
            <span class="title">{name}</span>
            <p>Email</p>
            <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
        </li>
    );
};

export default FriendItem;
