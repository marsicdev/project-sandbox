import React from 'react';

const SideBar = ({ user }) => (
    <div className="">
        <div className="row">
            <img className="responsive-img" src={user.photo} alt={user.name}/>
            <h4>Name</h4>
        </div>
        <p>Followers <strong>{user.followers}</strong></p>
        <p>Posts <strong>{user.posts}</strong></p>
        <div className="devider"></div>
        <div class="collection">
            <a href="#!" class="collection-item"><span class="badge">1</span>Alan</a>
            <a href="#!" class="collection-item"><span class="new badge">4</span>Alan</a>
            <a href="#!" class="collection-item">Alan</a>
            <a href="#!" class="collection-item"><span class="badge">14</span>Alan</a>
        </div>
    </div>
);

export default SideBar;
