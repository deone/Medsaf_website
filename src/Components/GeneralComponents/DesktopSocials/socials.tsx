import * as React from "react";
import "./socials.css";
import arrow from "../../../assets/icons/downArrow.svg";
import facebook from "../../../assets/icons/facebookBlue.svg";
import twitter from "../../../assets/icons/twitterBlue.svg";
import instagram from "../../../assets/icons/instagramBlue.svg";
import youtube from "../../../assets/icons/youtubeBlue.svg";

const Socials = () => {
    return (
        <>
        <div className="m-landing-hero-socials">
                <img className="m-landing-hero-socials-arrow" src={arrow} alt="" />
                <a rel="noopener noreferrer" target="_blank" href="https://facebook.com/medsafcom"><img className="m-landing-hero-socials-icon" src={facebook} alt="" /></a>
                <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/MedsafCom"><img className="m-landing-hero-socials-icon" src={twitter} alt="" /></a>
                <a rel="noopener noreferrer" target="_blank" href="https://instagram.com/medsafcom"><img className="m-landing-hero-socials-icon" src={instagram} alt="" /></a>
                <a rel="noopener noreferrer" target="_blank" href="https://m.youtube.com/channel/UC_wYayI3FtdkXOJsdsM-T5g"><img className="m-landing-hero-socials-icon" src={youtube} alt="" /></a>
            </div>
        </>
    )
}

export default Socials;