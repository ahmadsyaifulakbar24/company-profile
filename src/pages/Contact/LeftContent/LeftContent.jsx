import { Box, Grid, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('md')] : {
            padding: theme.spacing(0, 9, 0, 0)
        }
    },
    contatTitle: {
        fontWeight: 600,
        letterSpacing: "3px"
    },
    image: {
        width: "100%",
        height: "auto"
    }
}))
const LeftContent = (props) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid>
                <Typography
                    className={classes.contatTitle}
                    variant="h3"
                >
                    Let's talk about everyting!
                </Typography>
                <Box
                    pt={7}
                >
                    <img 
                        className={classes.image}
                        src={`${props.image_url}contact.png`} 
                        alt="contact" 
                    />
                </Box>
            </Grid>
        </div>
    )
}

const mapStatToProps = (state) => {
    return {
        image_url: state.image_url
    }
}

export default connect(mapStatToProps, null) (LeftContent)