import { Container, Grid } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import LeftContent from "./LeftContent/LeftContent";
import RightContent from "./RightContent/RightContent";

const styles = theme => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(3),
        },
        marginTop: theme.spacing(10),
    },
})

class Contact extends Component 
{
    render() {
        const { classes } = this.props;
        return (
            <Container
                className={classes.root}
            >
                <Grid 
                    container
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid lg={6} sm={12}>
                        <LeftContent />
                    </Grid>

                    <Grid lg={6} sm={12}>
                        <RightContent />
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Contact)