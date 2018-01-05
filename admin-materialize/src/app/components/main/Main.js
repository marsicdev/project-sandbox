import React, { Component } from 'react';
import { withStyles } from 'material-ui';

import HeaderToolbar from "./HeaderToolbar";
import NavigationDrawer from "./NavigationDrawer";
import Content from "./Content";

class Main extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <HeaderToolbar />
                    <NavigationDrawer />
                    <Content />
                </div>
            </div>
        );
    }
}

const styles = () => ({
    root: {
        width: '100%',
        height: 630,
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    }
});

export default withStyles(styles)(Main);
