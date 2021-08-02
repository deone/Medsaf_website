import * as React from "react";
import "./offerings.css";
import NavBar from "../../../GeneralComponents/Navbar/navbar";
import Footer from "../../../GeneralComponents/Footer/footer";
import Reviews from "../../../GeneralComponents/Reviews/reviews";

const Offerings = () => {
    return (
        <>
        <NavBar offerings={true} />
            <div>
                offerings
            </div>
        <Reviews />
        <Footer />
        </>
    )
}

export default Offerings;