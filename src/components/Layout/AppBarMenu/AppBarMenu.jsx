import { 
    AppBar, 
    Button, 
    Container, 
    CssBaseline, 
    Drawer, 
    Hidden, 
    IconButton, 
    List, 
    ListItem, 
    ListItemText, 
    makeStyles, 
    Toolbar, 
    Typography 
} from "@material-ui/core";

import React, { useState } from "react";

// icon
import MenuIcon from '@material-ui/icons/Menu';
import { useLocation, useHistory } from "react-router-dom";
import MenuItems from "../MenuItems/MenuItems";

const drawerWidth = 240;
const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    logo : {
        cursor: 'pointer',
        flexGrow: 1
    },
    navLinks: {
        display: 'flex'
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    button: {
        textTransform: "none",
    },
    drawerPaper: {
        width: drawerWidth
    },
    active : {
        color: "#3f51b5",
    },
    activeBackground: {
        color: "#fff",
        background: "#303f9f"
    }
}))

const AppBarMenu = () => {
    const classes = useStyle()
    const history = useHistory()
    const location = useLocation()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [appBarBackground, setAppBarBackground] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <List>
            {MenuItems.map((item, index) => (
                <ListItem 
                    button
                    key={index}
                >
                    <Button
                         className = {`${classes.button} ${location.pathname === item.url ? classes.active : null}`}
                         onClick={() => history.push(item.url)}
                    >
                        <ListItemText >
                            {item.name}
                        </ListItemText>
                    </Button>
                </ListItem>
            ))}
        </List>
    )

    const appBar = (
        <List className={classes.navLinks}>
            {MenuItems.map((item, index) => (
                <ListItem key={index}>
                    <Button
                        className = {`${classes.button} ${location.pathname === item.url ? appBarBackground ? classes.activeBackground : classes.active : null}`}
                        color="inherit"
                        variant={appBarBackground && location.pathname === item.url ? 'contained' : 'text'}
                        onClick={() => history.push(item.url)}
                    >
                        <ListItemText>
                            {item.name}
                        </ListItemText>
                    </Button>
                </ListItem>
            ))}
        </List>
    )
 
    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setAppBarBackground(true)
        } else {
            setAppBarBackground(false)
        }
    }

    window.addEventListener('scroll', changeBackground)
    return (
        <div className={classes.root}>
            <AppBar 
                elevation="0"
                position="fixed"
                color={appBarBackground ? 'primary' : 'transparent'}
            >
                <CssBaseline />
                <Container>
                    <Toolbar disableGutters>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography 
                            variant="h6" 
                            className={classes.logo}
                            onClick = {() => history.push('/')}
                        >
                            My Logo
                        </Typography>

                        <Hidden
                            xsDown
                            implementation="css"
                        >
                            {appBar}
                        </Hidden>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* side drawer */}
            <Hidden 
                smUp
                implementation="css"
            >
                <nav className={classes.drawer} >
                    <Drawer
                        // container={container}
                        classes = {{ paper: classes.drawerPaper }}
                        variant="temporary"
                        anchor="left"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
            </Hidden>
        </div>
    )
}

export default AppBarMenu