import * as React from "react";
import "./programs.css";
import NavBar from "../../../GeneralComponents/Navbar/navbar";
import arrow from "../../../../assets/icons/downArrow.svg";
import facebook from "../../../../assets/icons/facebookBlue.svg";
import twitter from "../../../../assets/icons/twitterBlue.svg";
import instagram from "../../../../assets/icons/instagramBlue.svg";
import youtube from "../../../../assets/icons/youtubeBlue.svg";

const Patient = () => {
  return (
    <>
      <div className="m-programs">
        <NavBar />
        <div className="m-waitlist">
          <div className="m-waitlist-formsec">
            <h4 className="m-programs-txt">Medsaf Patient Direct Waitlist</h4>
            <div className="m-waitlist-form">
              <div id="ff-compose2"></div>
            </div>
            <div className="m-programs-socials">
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={instagram} alt="instagram" />
              <img src={youtube} alt="youtube" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Patient;
