import React from 'react';
import { Grid, Typography, Paper, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Board from './Board';

const useStyles = makeStyles((theme) => ({

    root: {
        margin: '7px 7px 7px 7px',
        borderRadius: '35px',
        display: 'flex',
        background: '#1DC0F4'
    },
    content: {
        flex: '1 1 auto',
        padding: '0px 15px 15px',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
    },
    title: {
        marginLeft: '40%',
        marginTop: '5%',
        borderRadius: '15px',
        background: '#148DB5'
    },
    logout: {
        borderRadius: '15px',
        marginRight: '40%',
        marginLeft: '20%',
        marginTop: '5%',
        background: '#ad0014'
    }
}));

const BoardOutline = (props) => {
    const classes = useStyles();
    return <Paper elevation={2} className={classes.root}>
        {/* <CssBaseline /> */}
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Paper elevation={3} className={classes.title}>
                    <Toolbar>
                        <Typography noWrap align='center' variant="h6">
                            Team Tasks
                        </Typography>
                    </Toolbar>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper elevation={3} onClick={props.logout} className={classes.logout}>
                    <Toolbar>
                        <Button align='center' >
                            Logout
                        </Button>
                    </Toolbar>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <main className={classes.content}>
                    <Board {...props} />;
                </main>
            </Grid>
        </Grid>
    </Paper >
}

export default BoardOutline