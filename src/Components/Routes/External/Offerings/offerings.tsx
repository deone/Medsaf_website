import * as React from "react";
import "./offerings.css";
import NavBar from "../../../GeneralComponents/Navbar/navbar";
import Footer from "../../../GeneralComponents/Footer/footer";
import Reviews from "../../../GeneralComponents/Reviews/reviews";
import Socials from "../../../GeneralComponents/DesktopSocials/socials"

const Offerings = () => {
    return (
        <>
        <NavBar offerings={true} />
            <div className="appContainer">
                <Socials />
                
                offerings
            </div>
        <Reviews />
        <Footer />
        </>
    )
}

export default Offerings;