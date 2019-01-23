import React from 'react';
import FriendItem from './FriendItem';

const FriendsList = ({ friends }) => {
    return (
        <div class="collection">
            {friends.map(friend => <FriendItem friend={friend} />)}
        </div>
    );
};

export default FriendsList;
