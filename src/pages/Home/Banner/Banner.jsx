import {Button, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(7)
    },
    bannerTitle: {
        fontWeight: 900,
        marginBottom: theme.spacing(3),
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
                            variant="subtitle1"
                            color="textSecondary"
                        >
                            Tim ahli kami menyediakan layanan menyeluruh mulai dari mendesain, mengembangkan hingga memelihara produk digital Anda. Pengalaman kami dapat membantu kesuksesan Anda dalam meluncurkan produk digital Anda. Siap untuk bekerja bersama kami?
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