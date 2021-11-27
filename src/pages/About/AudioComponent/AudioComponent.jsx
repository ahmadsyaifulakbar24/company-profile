import React, { useState } from "react";

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
import PauseIcon from '@material-ui/icons/Pause';


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

let musicItems = [
    {
        image: '/assets/images/music/music.jpg',
        title: 'Only You',
        subTitle: 'ROY KNOX x Derpcat',
        music: '/assets/music.mp3',
    }, 
    {
        image: '/assets/images/music/music2.jpg',
        title: 'Freefalling',
        subTitle: 'Facading',
        music: '/assets/music2.mp3',
    }, 
    {
        image: '/assets/images/music/music3.jpg',
        title: 'Where We Started',
        subTitle: 'Lost Sky',
        music: '/assets/music3.mp3',
    } 
]
const AudioComponent = () => {
    const [play, setPlay] = useState(false)
    const [audiDesc, setAudioDesc] = useState({
        image: '/assets/images/music/music.jpg',
        title: 'Only You',
        subTitle: 'ROY KNOX x Derpcat'
    })
    const [audio, setAudio] = useState(new Audio('/assets/music.mp3'))
    const [musicOrder, setMusicOrder] = useState(0)
    const classes = useStyles()
    const theme = useTheme();

    const handleAudio = () => {
        if (play) {
            setPlay(false)
            audio.pause()
        } else {
            setPlay(true)
            audio.play()
        }

    }
    
    const setNewAudio = (music) => {
        setAudioDesc({
            image: music.image,
            title: music.title,
            subTitle: music.subTitle,
        })

        setAudio(new Audio(music.music))
        setPlay(false)
        audio.pause()
    }

    const nextMusic = () => {
        let music
        if(musicOrder + 1 === musicItems.length) {
            music = musicItems[0]
            setMusicOrder(0)
        } else {
            music = musicItems[musicOrder + 1]
            setMusicOrder(musicOrder + 1)
        }
        setNewAudio(music)
    }

    const previousMusci = () => {
        let music
        if(musicOrder === 0) {
            music = musicItems[musicItems.length - 1]
            setMusicOrder(musicItems.length - 1)
        } else {
            music = musicItems[musicOrder - 1]
            setMusicOrder(musicOrder - 1)
        }
        setNewAudio(music)
    }

    return (
        <Box className={classes.root}>
            <Container>
                <Grid
                    className={classes.gridRoot}
                    container
                    alignItems="center"
                >
                    <Grid item >
                        <Card className={classes.music}>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography component="h5" variant="h5">
                                        {audiDesc.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {audiDesc.subTitle}
                                    </Typography>
                                </CardContent>
                                <div className={classes.controls}>
                                    <IconButton aria-label="previous">
                                        {
                                            theme.direction === 'rtl' ? 
                                            <SkipNextIcon /> : 
                                            <SkipPreviousIcon 
                                                onClick={previousMusci}
                                            />
                                        }
                                    </IconButton>
                                    <IconButton 
                                        aria-label="play/pause"
                                        onClick={handleAudio}
                                    >
                                        {play ? 
                                            <PauseIcon className={classes.playIcon} /> : 
                                            <PlayArrowIcon className={classes.playIcon} />
                                        }
                                    </IconButton>
                                    <IconButton aria-label="next">
                                        {
                                            theme.direction === 'rtl' ? 
                                            <SkipPreviousIcon /> : 
                                            <SkipNextIcon 
                                                onClick={nextMusic}
                                            />
                                        }
                                    </IconButton>
                                </div>
                            </div>
                            <CardMedia
                                className={classes.cover}
                                image={audiDesc.image}
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
                              Mari Mulai Bersama Kami!
                            </Typography>

                            <Typography
                                className={classes.subTitle}
                                variant="subtitle1"
                            >
                                Kami bangga dapat mengembangkan aplikasi berkualitas yang membantu memajukan bisnis klien. Itulah mengapa kami dipercaya oleh berbagai perusahaan dan startup dalam merealisasikan proyek mereka.
                            </Typography>
                        </Grid>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default AudioComponent