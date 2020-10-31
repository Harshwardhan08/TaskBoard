import React from 'react';
import {
    Button,
    TextField,
    Grid,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 225,
        maxWidth: 225

    },
    addCard: {
        justifyContent: 'center',
        marginBottom: theme.spacing(1)
    }
}));

const AddTaskDialog = (props) => {
    const classes = useStyles();
    const [name, setName] = React.useState('');
    const [designation, setDesignation] = React.useState('');
    const [team, setTeam] = React.useState('');

    const handleName = (event) => {
        setName(event.target.value);
    };
    const handleDesignation = (event) => {
        setDesignation(event.target.value);
    };
    const handleTeam = (event) => {
        setTeam(event.target.value);
    };
    const handleSignUp = () => {
        props.handleSignUp({ name, designation, team });
        props.setSignUpState(false);
    };
    return (
        <Dialog open={props.open} onClose={() => props.setSignUpState(false)} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
            <DialogContent>
                <Grid>
                    <TextField
                        required
                        label='Name'
                        variant='outlined'
                        fullWidth
                        onChange={handleName}
                        id="outlined-required"
                        className={classes.addCard}
                    />
                </Grid>
                <Grid>
                    <TextField
                        required
                        label='Designation'
                        variant='outlined'
                        fullWidth
                        onChange={handleDesignation}
                        className={classes.addCard}
                    />
                </Grid>
                <Grid>
                    <TextField
                        required
                        label='Team'
                        variant='outlined'
                        fullWidth
                        onChange={handleTeam}
                        className={classes.addCard}
                    />
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={handleSignUp}>Sign Up</Button>
                <Button color="secondary" onClick={() => props.setSignUpState(false)}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddTaskDialog;
