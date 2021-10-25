import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    image: {
        width: "100%",
        height: "auto",
        [theme.breakpoints.down('md')] : {
            marginBottom: theme.spacing(3)
        }
    },
    titleContent: {
        fontWeight: 900
    },
    subTitle: {
        marginTop: theme.spacing(2)
    },
}))
const ImageComponent = () => {
    const classes = useStyles()
    return (
        <Box>
            <Container>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Grid
                        item
                        lg={4}
                        xs={12}
                    >
                        <img 
                        className={classes.image}
                            src="/assets/images/about.png" 
                            alt="" 
                        />
                    </Grid>

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
                              We Build Apps On Multiple Platforms
                            </Typography>

                            <Typography
                                className={classes.subTitle}
                                variant="subtitle1"
                            >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, fugit? Consectetur excepturi voluptatibus inventore quasi quos distinctio eius odit facilis quo dolorem saepe,
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, fugit? Consectetur excepturi voluptatibus inventore quasi quos distinctio eius odit facilis quo dolorem saepe,
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, fugit? Consectetur excepturi voluptatibus inventore quasi quos distinctio eius odit facilis quo dolorem saepe,
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, fugit? Consectetur excepturi voluptatibus inventore quasi quos distinctio eius odit facilis quo dolorem saepe,
                            </Typography>
                        </Grid>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ImageComponent