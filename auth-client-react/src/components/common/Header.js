import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Header extends Component {

    renderLinks() {
        const { authenticated } = this.props

        if (authenticated) {
            return <li><Link to="/signout">Sign out</Link></li>
        } else {
            // show a link to sign up
            return [
                <li key={1}><Link to="/signin">SignIn</Link></li>,
                <li key={2}><Link to="/signup">SignUp</Link></li>,
            ]
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Auth</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderLinks()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps)(Header);
