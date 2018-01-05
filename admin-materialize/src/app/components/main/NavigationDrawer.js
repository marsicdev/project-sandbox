import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles,
    Drawer,
    List,
    Divider
} from 'material-ui';

import { drawerMenuItems } from "./menuItems";

const NavigationDrawer = ({ classes }) => (
    <Drawer
        type="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper, }}>
        <div className={classes.drawerHeader} />
        <Divider />
        <List>{drawerMenuItems}</List>
    </Drawer>
);

NavigationDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

const drawerWidth = 240;

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        height: '100%',
        width: drawerWidth,
    },
    drawerHeader: theme.mixins.toolbar,
    content: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
        padding: theme.spacing.unit * 3,
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    },
});

export default withStyles(styles)(NavigationDrawer);
