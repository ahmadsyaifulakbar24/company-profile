import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(7)
    },
    titleContent: {
        fontWeight: 900
    },
    subTitle: {
        marginTop: theme.spacing(2)
    },
    video: {
        [theme.breakpoints.down('md')] : {
            marginBottom: theme.spacing(3)
        }
    },
    gridContent: {
        [theme.breakpoints.down('md')] : {
            flexDirection: "column-reverse",
            alignItems: "inherit"
        }
    },
}))
const VideoContent = () => {
    const classes = useStyles()
    return (
        <Box bgcolor="#e8e8ff" py={7} className={classes.root}>
            <Container>
                <Grid
                    className={classes.gridContent}
                    container
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Grid
                        container
                        lg={7}
                        xs={12}
                    >
                        <Grid item>
                            <Typography 
                                className={classes.titleContent}
                                variant="h4"
                                color="primary"
                            >
                             Complete Documentation
                            </Typography>

                            <Typography
                                className={classes.subTitle}
                                variant="subtitle1"
                            >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, fugit? Consectetur excepturi voluptatibus inventore quasi quos distinctio eius odit facilis quo dolorem saepe,
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, fugit? Consectetur excepturi voluptatibus inventore quasi quos distinctio eius odit facilis quo dolorem saepe,
                            </Typography>
                        </Grid>

                    </Grid>

                    <Grid
                        item
                        lg={4}
                        xs={12}
                    >
                        <iframe 
                            className={classes.video}
                            width="100%"
                            height="257"
                            src="https://www.youtube.com/embed/0KEpWHtG10M?list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        ></iframe>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default VideoContent