import * as React from "react";
import "./footer.css";
import logo from "../../../assets/icons/medsafLogoWhite.svg";
import facebook from "../../../assets/icons/facebookWhite.svg";
import twitter from "../../../assets/icons/twitterWhite.svg";
import instagram from "../../../assets/icons/instagramWhite.svg";
import youtube from "../../../assets/icons/youtubeWhite.svg";
import { Link } from "react-router-dom";
import whatsapp from "../../../assets/icons/whatsappYellow.svg";
import email from "../../../assets/icons/emailYellow.svg";



const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <>
      <div className="appContainer m-footer">
        <div className="m-footer-grid">
          <div className="m-footer-grid-1">
            <img className="m-footer-logo" src={logo} alt="medsaf logo" />
            <p className="m-footer-grid-1-txt">
              MEDSAF is the premiere pharmaceutical technology provider of
              genuine and authentic medications.
              <br />
              We provide easy access to affordable medications through our
              technology platform.
            </p>
            <div className="m-footer-socials">
              <p className="m-footer-socials-txt m-footer-grid-item-hd">
                Socials
              </p>
              <div className="m-footer-socials-icons">
              <a target="_blank" href="https://facebook.com/medsafcom"><img src={facebook} alt="facebook" /></a>
              <a target="_blank" href="https://twitter.com/medsafcom"><img src={twitter} alt="twitter" /></a>
              <a target="_blank" href="https://instagram.com/medsafcom"><img src={instagram} alt="instagram" /></a>
              <a target="_blank" href="https://m.youtube.com/channel/UC_wYayI3FtdkXOJsdsM-T5g"><img src={youtube} alt="youtube" /></a>
              </div>
            </div>
          </div>
          <div className="m-footer-grid-2">
            <p className="m-footer-grid-item-hd">Quick Links</p>
            <ul className="m-footer-grid-item-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/offerings">What we offer</Link>
              </li>
              <li>
                <a target="_blank" href="https://shop.medsaf.com/web/login?redirect=/shop">Sign up</a>
              </li>
              <li>
                <a target="_blank" href="https://shop.medsaf.com/web/login?redirect=/shop">Log in</a>
              </li>
            </ul>
          </div>
          <div className="m-footer-grid-3">
            <p className="m-footer-grid-item-hd">Offerings</p>
            <ul className="m-footer-grid-item-list">
              <li>
              <a target="_blank" href="https://shop.medsaf.com/">Marketplace</a>
              </li>
              <li>
                <Link to="/">Platinum Partners Program</Link>
              </li>
              <li>
                <Link to="/">Consumables</Link>
              </li>
              <li>
              <a href="/offerings/#assure">MEDSAF Assure Program</a>
              </li>
              <li>
              <a href="/offerings/#patientDirect">Patient Direct</a>
              </li>
            </ul>
          </div>
          <div className="m-footer-grid-4">
            <p className="m-footer-grid-item-hd">Contact</p>
            <p className="m-footer-grid-3-txt m-footer-grid-3-txt1">
              Feel free to get in touch with us via phone or send us a message.
            </p>
            <address>
              <p className="m-footer-grid-3-txt">
                55 Sir Tony Eromosele Street, Ikoyi, Lagos, Nigeria
              </p>
            </address>
            {/* <a target="_blank" className="m-footer-grid-3-link" href="https://api.whatsapp.com/send?phone=2347034124566">
              <img src={whatsapp} alt="whatsapp" />
              +234 703 412 4566
            </a>
            <a target="_blank" className="m-footer-grid-3-link" href="https://api.whatsapp.com/send?phone=2349019987862">
              <img src={whatsapp} alt="whatsapp" />
              +234 901 998 7862
            </a> */}
            <div className="m-footer-numbers">
              <img src={whatsapp} alt="whatsapp" />
              <div>
                <a target="_blank" className="m-footer-grid-3-link" href="https://api.whatsapp.com/send?phone=2347034124566">
                  +234 703 412 4566
                </a>
                <a target="_blank" className="m-footer-grid-3-link" href="https://api.whatsapp.com/send?phone=2349019987862">
                  +234 901 998 7862
                </a>
              </div>
            </div>
            <a
              className="m-footer-grid-3-link"
              href="mailto: contact@medsaf.com"
            >
              <img src={email} alt="email" />
              contact@medsaf.com
            </a>
          </div>
        </div>
        <hr />
        <small>© MEDSAF {date}, All Rights Reserved</small>
      </div>
    </>
  );
};

export default Footer;
