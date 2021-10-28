import React, { useState } from "react";
import FloatButton from "../../pages/Home/FloatButton/FloatButton";
import AppBarMenu from "./AppBarMenu/AppBarMenu";
import Footer from "./Footer/Footer";
 



const Layout = ({children}) => {
    const [appBarBackground, setAppBarBackground] = useState(true)

    const hideFab = () => {
        if(window.scrollY >= 80) {
            setAppBarBackground(true)
        } else {
            setAppBarBackground(false)
        }
    }
    window.addEventListener('scroll', hideFab)

    return (
        <div>
            <AppBarMenu />
            <div>
                {children}
            </div>
            {
                appBarBackground ?
                <FloatButton /> : null
            }
            <Footer />
        </div> 
    )
}

export default Layout