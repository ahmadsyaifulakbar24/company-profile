import React from "react";

// Material Ui Core
import { 
    Box, 
    CardMedia, 
    Container, 
    Grid, 
    makeStyles, 
    useTheme,
    Typography, 
    Card,
    CardContent
} from "@material-ui/core";

// Material Iconn
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(7),
    },
    gridRoot: {
        justifyContent: "space-between",
        [theme.breakpoints.down('md')]: {
            justifyContent: "center"
        }
    },
    music: {
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            marginBottom: theme.spacing(3)
        }
    }, 
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    titleContent: {
        fontWeight: 900
    },
    subTitle: {
        marginTop: theme.spacing(2)
    },
}))
const AudioComponent = () => {
    const classes = useStyles()
    const theme = useTheme();
    return (
        <Box className={classes.root}>
            <Container>
                <Grid
                    className={classes.gridRoot}
                    container
                    alignItems="center"
                    // justifyContent="space-between"
                >
                    <Grid
                        item
                        // lg={4}
                        // xs={12}
                    >
                        <Card className={classes.music}>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography component="h5" variant="h5">
                                        Live From Space
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Mac Miller
                                    </Typography>
                                </CardContent>
                                <div className={classes.controls}>
                                    <IconButton aria-label="previous">
                                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                                    </IconButton>
                                    <IconButton aria-label="play/pause">
                                        <PlayArrowIcon className={classes.playIcon} />
                                    </IconButton>
                                    <IconButton aria-label="next">
                                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                                    </IconButton>
                                </div>
                            </div>
                            <CardMedia
                                className={classes.cover}
                                image="/assets/images/music.jpg"
                                title="Live from space album cover"
                            />
                        </Card>
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

export default AudioComponent