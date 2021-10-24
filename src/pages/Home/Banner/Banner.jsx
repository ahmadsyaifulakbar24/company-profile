import {Button, Container, CssBaseline, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(7)
    },
    bannerTitle: {
        fontWeight: 900,
        marginBottom: theme.spacing(3),
    },
    subTitle: {
        
    },
    button : {
        marginTop: theme.spacing(5),
        padding: theme.spacing(1.5, 5),
        borderRadius: "5em",
        fontSize: 15,
        fontWeight: 700
    },
    image: {
        width: "100%",
        height: "auto",
        paddingTop: theme.spacing(5)
    }
}))
const Banner = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container>
                <Grid 
                    container
                    // direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <Grid 
                        container 
                        lg={5}
                    >
                        <Typography
                            className={classes.bannerTitle}
                            variant="h3"
                            color="primary"
                        >
                            SOFTWARE AND DEVELOPMENT
                        </Typography>
                        <Typography
                            classes={classes.subTitle}
                            variant="subtitle1"
                            color="textSecondary"
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, fugit? Consectetur excepturi voluptatibus inventore quasi quos distinctio eius odit facilis quo dolorem saepe, 
                        </Typography>
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                        >
                            Contact Now
                        </Button>
                    </Grid>
                    <Grid item lg={7}>
                        <img 
                            className={ classes.image }
                            src="/assets/images/banner.png" 
                            alt="" 
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Banner