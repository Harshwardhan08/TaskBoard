
import React from 'react';
import { Card, CardContent, Grid, Typography, Box } from '@material-ui/core';
import Avatar from './Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    cardRoot: {
        borderRadius: '15px',
        margin: theme.spacing(1),
        marginBottom: 5,
        width: '273px',
        height: '100%'
    },
    details: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        justifyContent: 'center',
        flex: '1 0 auto',
        // paddingBottom: theme.spacing(2),
        height: '30%'
    },
    footer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // marginTop: theme.spacing(1)
    },
    delete: {
        justifyContent: 'flex-end',
    }
}));

export default function TaskCard(props) {
    const classes = useStyles();
    const { task } = props;
    const deleteTask = async (_id) => {
        const task = await(await fetch(`http://localhost:4000/api/task/${_id}`, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
				'Access-Control-Allow-Origin': '*',
				'Authorization': props.authToken
			},
		})).json();
		if (task.success) {
			props.fetchTasks();
		}
    }
    return (
        <Card
            className={classes.cardRoot}
            variant="outlined"
            style={{ borderTop: `5px solid red` }}
        >
            <div className={classes.details}>
                <CardContent style={{ position:'relative' }} className={classes.content}>
                    <Typography noWrap component="h5" variant="h6">
                        {task.heading}
                        <DeleteIcon onClick={() => deleteTask(task._id)} className={classes.delete} style={{ position:'absolute', top:'10px', right:'10px' }} />
                    </Typography>
                    <Grid item xs={12}>
                        <Box component="small" m={1}>
                            <Typography style={{overflow: 'hidden', textOverflow: 'ellipsis', height:'35px'}} variant='body2'>{task.details}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} className={classes.footer}>
                        {task.users.map(user => <Avatar key={user._id} name={user.name} self={user._id === props.user._id} />)}
                    </Grid>
                </CardContent>
            </div>
        </Card>
    );
}