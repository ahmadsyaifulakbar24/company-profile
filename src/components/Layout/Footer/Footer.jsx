import {Box, Button, Container, Grid, Hidden, List, ListItem, makeStyles} from "@material-ui/core";
import MenuItems from "../MenuItems/MenuItems";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(10)
    },
    navLink: {
        display: "flex",
    },
    button: {
        textTransform: "none",
        color: "#fff",
        padding: 0
    },
    copyright: {
        flexGrow:1,
        fontWeight: 500,
        padding: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            textAlign: "center",
        },
    }
}))
const Footer = () => {
    const classes = useStyles()
    const menu =(
        <List 
            className={classes.navLink}
        >
            {MenuItems.map((item, index) => (
                <ListItem 
                    key={index}
                >
                    <Button
                        className={classes.button}
                        size="small"
                    >
                        {item.name}
                    </Button>
                </ListItem>
            ))}
        </List>
    )
    return (
        <footer className={classes.root}>
            <Box
                py={{ lg: 1 }}
                bgcolor="primary.main"
                  color="primary.contrastText"
            >
                <Container >
                    <Grid
                        container
                        alignItems="center"
                    >
                        <div 
                            className={classes.copyright}
                        >
                            Created By Ahmad Syaiful Akbar &copy; 2021
                        </div>
                        <Hidden
                            mdDown
                            implementation="css"
                        >
                            <div>
                                {menu}
                            </div>
                        </Hidden>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer