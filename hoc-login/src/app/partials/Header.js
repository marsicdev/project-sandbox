import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ onLogin, isLoggedIn}) => (
    <header>
        <nav className="blue darken-2">
            <div className="container">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo left">
                        HOC Login
                    </Link>
                    <ul className="right">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <button onClick={onLogin} >{isLoggedIn ? 'Log Out' : 'Log In'}</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
)

export default Header