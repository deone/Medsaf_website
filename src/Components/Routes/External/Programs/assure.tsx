import * as React from "react";
import "./programs.css";
import NavBar from "../../../GeneralComponents/Navbar/navbar";
import arrow from "../../../../assets/icons/downArrow.svg";
import facebook from "../../../../assets/icons/facebookBlue.svg";
import twitter from "../../../../assets/icons/twitterBlue.svg";
import instagram from "../../../../assets/icons/instagramBlue.svg";
import youtube from "../../../../assets/icons/youtubeBlue.svg";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

const Assure = () => {
  const [payment, setPayment] = React.useState(false);
  const [plan, setPlan] = React.useState("");
  const handleChange = (e: any) => {
    setPlan(e.target.value)
  }
  const submitPlan = () => {
    // console.log(plan)
    setPayment(false);
    setPlan("");
  }
  return (
    <>
      <div className="m-programs">
        <NavBar />
        <div className="m-waitlist">
          <div className="m-waitlist-formsec">
            <h4 className="m-programs-txt">Medsaf Assure Waitlist</h4>
            <div className="m-waitlist-form">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSctoeURWAvTeTT2CdBZ-yTyOQbyHSK_KrAcPmHPLWlxAqg89g/viewform?embedded=true" width="100%" height="800" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
            </div>
            <button onClick={() => setPayment(true)} className="m-waitlist-payment-btn">Continue to payment</button>
          </div>
          <div className="m-programs-socials">
                <a target="_blank" href="https://facebook.com/medsafcom"><img src={facebook} alt="facebook" /></a>
                <a target="_blank" href="https://twitter.com/medsafcom"><img src={twitter} alt="twitter" /></a>
                <a target="_blank" href="https://instagram.com/medsafcom"><img src={instagram} alt="instagram" /></a>
                <a target="_blank" href="https://m.youtube.com/channel/UC_wYayI3FtdkXOJsdsM-T5g"><img src={youtube} alt="youtube" /></a>
            </div>
        </div>
      </div>
      <Modal className="m-waitlist-modal" show={payment} onHide={() => setPayment(false)}>
        <Modal.Body>
          <select onChange={handleChange} value={plan}>
            <option value="" disabled selected>Please select a plan</option>
            <option value="300,000">Gold - 300,000</option>
            <option value="600,000">Premium - 600, 000</option>
          </select>
          {plan === "300,000" && <a target="_blank" href="https://paystack.com/pay/xghvuh-ysk"><button onClick={submitPlan}>Submit</button></a>}
          {plan === "600,000" && <a target="_blank" href="https://paystack.com/pay/d7qn8pgu8i"><button onClick={submitPlan}>Submit</button></a>}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Assure;
