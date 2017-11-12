import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <nav>
            <div className="nav-wrapper">
                <Link to='/' className="brand-logo left">Blog</Link>
                <ul id="nav-mobile" className="right">
                    <li>
                        <Link to='/posts/new'
                            className="waves-effect waves-light btn red darken-2">
                            New post
                            <i className="material-icons left">add</i>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Header;