import { CssBaseline } from "@material-ui/core";
import React, { Component, Fragment } from "react";
import Banner from "./Banner/Banner";
import WebComponent from "./WebComponent/WebComponent";
import FloatButton from "./FloatButton/FloatButton";
class Home extends Component 
{

    render() {
        return (
            <Fragment>
                <CssBaseline />
                <Banner />
                <WebComponent />

                <FloatButton />
            </Fragment>
        )
    }
}

export default Home