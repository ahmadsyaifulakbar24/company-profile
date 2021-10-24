import { Button, makeStyles, TextField } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          marginBottom: theme.spacing(5),
        },
        [theme.breakpoints.up('md')] : {
            padding: theme.spacing(0, 0, 0, 10),
        },
        [theme.breakpoints.down('md')] : {
            marginTop: theme.spacing(5)
        },
    },
}))

const RightContent = () => {
    const classes = useStyles()

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                required
                id="outlined-required"
                label="Full Name"
                variant="outlined"
                fullWidth
            />

            <TextField
                required
                type="email"
                id="outlined-required"
                label="Email Address"
                variant="outlined"
                fullWidth
            />

            <TextField
                required
                id="outlined-required"
                label="Message"
                variant="outlined"
                multiline
                rows={10}
                fullWidth
            />

            <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
            >
                Send Message
            </Button>
        </form>
    )
}

export default RightContent

