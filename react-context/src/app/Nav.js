import React from 'react';
import UserAvatar from './user/UserAvatar';

const Nav = ({ user }) => (
    <nav className="teal lighten-2">
        <div className="nav-wrapper">
            <div className="container">
                <a className="brand-logo"><i className="material-icons">cloud</i>Logo</a>
                <UserAvatar user={user} />
            </div>
        </div>
    </nav>
);

export default Nav;
