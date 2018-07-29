import React from 'react';
import UserAvatar from './UserAvatar';

const Nav = ({ user }) => (
    <nav>
        <div class="nav-wrapper">
            <div class="container">
                <a class="brand-logo"><i class="material-icons">cloud</i>Logo</a>
                <UserAvatar user={user} />
            </div>
        </div>
    </nav>
);

export default Nav;
