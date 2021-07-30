import * as React from "react";
import "./footer.css";
import logo from "../../../assets/icons/medsafLogoWhite.svg";
import facebook from "../../../assets/icons/facebookWhite.svg";
import twitter from "../../../assets/icons/twitterWhite.svg";
import instagram from "../../../assets/icons/instagramWhite.svg";
import youtube from "../../../assets/icons/youtubeWhite.svg";
import { Link } from "react-router-dom";

const Footer = () => {
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
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={instagram} alt="instagram" />
                <img src={youtube} alt="youtube" />
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
                <Link to="/">What we offer</Link>
              </li>
              <li>
                <Link to="/">Sign up</Link>
              </li>
              <li>
                <Link to="/">Sign in</Link>
              </li>
            </ul>
          </div>
          <div className="m-footer-grid-3">
            <p className="m-footer-grid-item-hd">Services</p>
            <ul className="m-footer-grid-item-list">
              <li>
                <Link to="/">Shop now</Link>
              </li>
              <li>
                <Link to="/">Med Bank</Link>
              </li>
              <li>
                <Link to="/">Option 3</Link>
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
            <a className="m-footer-grid-3-link" href="tel: +234 801 2345 678">
              +234 801 2345 678
            </a>
            <a
              className="m-footer-grid-3-link"
              href="mailto: contact@medsaf.com"
            >
              contact@medsaf.com
            </a>
          </div>
        </div>
        <hr />
        <small>© MEDSAF 2021, All Rights Reserved</small>
      </div>
    </>
  );
};

export default Footer;
