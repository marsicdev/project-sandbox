import React, { Component } from 'react';

import {
    IconButton
} from 'material-ui';
import Menu, { MenuItem } from 'material-ui/Menu';

import AccountCircle from 'material-ui-icons/AccountCircle';

class ProfileAvatar extends Component {
    state = {
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleRequestClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {

        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div>
                <IconButton
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="contrast"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onRequestClose={this.handleRequestClose}
                >
                    <MenuItem onClick={this.handleRequestClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleRequestClose}>My account</MenuItem>
                </Menu>
            </div>
        );
    }
}

export default ProfileAvatar;