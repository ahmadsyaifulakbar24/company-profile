import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3)
    },
    image: {
        width: "100%",
        height: "auto",
        [theme.breakpoints.down('sm')] : {
            marginTop: theme.spacing(5)
        }
    },
    titleContent: {
        fontWeight: 900
    },
    subTitle: {
        marginTop: theme.spacing(2)
    },
    gridContent: {
        marginTop: theme.spacing(3)
    },
    gridContentMobile: {
        [theme.breakpoints.down('md')] : {
            marginTop: theme.spacing(3)
        }
    }, 
    gridParent: {
        [theme.breakpoints.down('md')] : {
            flexDirection: "column-reverse"
        }
    }
}))

const WebComponent = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {/* Web Component */}
            <Box
                bgcolor="#e8e8ff"
                py={7}
            >       
                <Container> 
                    <Grid
                        className={classes.gridParent}
                        container
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Grid item lg={4} xs={12}>
                            <img 
                                className={classes.image}
                                src="/assets/images/web.png" 
                                alt="" 
                            />
                        </Grid>

                        <Grid container lg={7} xs={12} >
                            <Grid item >
                                <Typography 
                                    className={classes.titleContent}
                                    variant="h4"
                                    color="primary"
                                >
                                    Easy Build Your Website
                                </Typography>
                                <Typography
                                    className={classes.subTitle}
                                    variant="subtitle1"
                                >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, fugit? Consectetur excepturi voluptatibus inventore quasi quos distinctio eius odit facilis quo dolorem saepe,
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                className={classes.gridContent}
                            >
                                <Typography 
                                    className={classes.titleContent}
                                    variant="h4"
                                    color="primary"
                                >
                                    Best Features For You
                                </Typography>
                                <Typography
                                    className={classes.subTitle}
                                    variant="subtitle1"
                                >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, fugit? Consectetur excepturi voluptatibus inventore quasi quos distinctio eius odit facilis quo dolorem saepe,
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid> 
                </Container>
            </Box>

                {/* Mobile Component */}
            <Box
                py={7}
            >
                <Container>
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Grid 
                            className={classes.gridContentMobile}
                            container lg={7} xs={12} 
                        >
                            <Grid item >
                                <Typography 
                                    className={classes.titleContent}
                                    variant="h4"
                                    color="primary"
                                >
                                    Easy Build Your Mobile Apps
                                </Typography>
                                <Typography
                                    className={classes.subTitle}
                                    variant="subtitle1"
                                >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, fugit? Consectetur excepturi voluptatibus inventore quasi quos distinctio eius odit facilis quo dolorem saepe,
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                className={classes.gridContent}
                            >
                                <Typography 
                                    className={classes.titleContent}
                                    variant="h4"
                                    color="primary"
                                >
                                    Best Features For You
                                </Typography>
                                <Typography
                                    className={classes.subTitle}
                                    variant="subtitle1"
                                >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, fugit? Consectetur excepturi voluptatibus inventore quasi quos distinctio eius odit facilis quo dolorem saepe,
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item lg={4} xs={12}>
                            <img 
                                className={classes.image}
                                src="/assets/images/mobile.png" 
                                alt="" 
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default WebComponent