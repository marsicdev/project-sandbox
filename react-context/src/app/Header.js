import React from 'react';
import Nav from './Nav';

const Header = ({ user }) => (
    <header>
        <Nav user={user} />
    </header>
);

export default Header;
