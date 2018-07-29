import React from 'react';

const SideBar = ({ user }) => (
    <div>
        <div className="row">
            <img class="responsive-img" src={user.photo} alt={user.name}/>
            <h4>Name</h4>
        </div>
        <p>Followers <strong>{user.followers}</strong></p>
        <p>Posts <strong>{user.posts}</strong></p>
    </div>
);

export default SideBar;
