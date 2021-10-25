import { CssBaseline, Grid, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import AudioComponent from "./AudioComponent/AudioComponent";
import ImageComponent from "./ImageComponent/ImageComponent";
import TableComponent from "./TableComponent/TableComponent";
import VideoContent from "./VideoContent/VideoContent";

const styles = theme => ({
    root: {
        marginTop: theme.spacing(7)
    },
})
class About extends Component 
{
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <CssBaseline />
                <Grid>
                    <ImageComponent />
                </Grid>
                <Grid>
                    <VideoContent />
                </Grid>
                <Grid>
                    <AudioComponent />
                </Grid>
                <Grid>
                    <TableComponent />
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme : true}) (About)