import * as React from "react";
import "./programs.css";
import NavBar from "../../../GeneralComponents/Navbar/navbar";
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
            <div className="m-waitlist-form m-waitlist-form-nopayment">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc9r5rFRF34TrzPyV_eCU8XBKqK2C0ym9CGY61xnf7Xnx5_pQ/viewform?embedded=true" width="100%" height="800" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
            </div>
            {/* <button className="m-waitlist-payment-btn btn-disabled" disabled>Proceed to payment</button> */}
          </div>
          <div className="m-programs-socials">
                <a rel="noopener noreferrer" target="_blank" href="https://facebook.com/medsafcom"><img src={facebook} alt="facebook" /></a>
                <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/medsafcom"><img src={twitter} alt="twitter" /></a>
                <a rel="noopener noreferrer" target="_blank" href="https://instagram.com/medsafcom"><img src={instagram} alt="instagram" /></a>
                <a rel="noopener noreferrer" target="_blank" href="https://m.youtube.com/channel/UC_wYayI3FtdkXOJsdsM-T5g"><img src={youtube} alt="youtube" /></a>
            </div>
        </div>
      </div>
    </>
  );
};

export default Patient;
