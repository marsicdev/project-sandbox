import React from 'react';
import withStyles from 'material-ui/styles/withStyles';

const Content = ({ classes }) => (
    <main className={classes.content}>
        {'You think water moves fast? You should see ice.'}
    </main>
);

const styles = theme => ({
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
    }
});

export default withStyles(styles)(Content);
