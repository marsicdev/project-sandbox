import React from 'react';
import classNames from 'classnames';
import {
    withStyles,
    AppBar,
    Toolbar,
    Typography,
} from 'material-ui';

import ProfileAvatar from "./ProfileAvatar";

const HeaderToolbar = ({ classes }) => {
    return (
        <AppBar className={classNames(classes.appBar, classes[`appBar-left`])}>
            <Toolbar>
                <Typography className={classes.flex} type="title" color="inherit" noWrap>
                    Permanent drawer
                </Typography>
                <ProfileAvatar />
            </Toolbar>
        </AppBar>
    );
};

const styles = theme => ({
    appBar: {
        position: 'absolute',
        width: `calc(100% - 240px)`,
    },
    'appBar-left': {
        marginLeft: 240,
    },
    flex: {
        flex: 1,
    },
});

export default withStyles(styles)(HeaderToolbar);
