import { makeStyles } from "@material-ui/core";
import React from "react";
import AppBarMenu from "./AppBarMenu/AppBarMenu";
import Footer from "./Footer/Footer";
 
const Layout = ({children}) => {
    return (
        <div>
            <AppBarMenu />
            <div>
                {children}
            </div>
            <Footer />
        </div> 
    )
}

export default Layout