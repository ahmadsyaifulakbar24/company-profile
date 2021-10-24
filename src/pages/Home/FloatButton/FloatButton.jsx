import { Fab, makeStyles } from "@material-ui/core";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import React from "react";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(3),
        right: theme.spacing(2),
    }
}))

const FloatButton = () => {
    const classes = useStyles()
    return (
        <Fab
            className={classes.fab} 
            color="primary" 
            aria-label="add"
        >
            <ArrowDropUpIcon />
        </Fab>
    )
}

export default FloatButton