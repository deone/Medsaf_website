import * as React from "react";
import "./navbar.css";
import logo from "../../../assets/medsafLogo.svg";
import { Link, useHistory } from "react-router-dom";
import SideNav from "react-simple-sidenav";
import facebook from "../../../assets/icons/facebookWhite.svg";
import twitter from "../../../assets/icons/twitterWhite.svg";
import instagram from "../../../assets/icons/instagramWhite.svg";
import youtube from "../../../assets/icons/youtubeWhite.svg";
import close from "../../../assets/icons/burgerMenuClose.svg";

const NavBar = (props: any) => {
  let history = useHistory();
  const [nav, setNav] = React.useState(false);
  const uniqueKeygen = (): number => {
    return Math.floor(Math.random() * 100);
  };
  return (
    <>
      <div className="m-nav">
        <div className="m-nav-desktop appContainer">
          <Link to="/">
            <img className="m-nav-logo" src={logo} alt="medsaf logo" />
          </Link>
          <nav className="m-nav-list">
            <div
              className={
                props.home
                  ? "m-nav-link m-nav-link-pry m-nav-link-active"
                  : "m-nav-link m-nav-link-grey"
              }
              role="button"
              onClick={() => history.push("/")}
            >
              Home
            </div>
            <a href="/#offerings">
              <div
                className={
                  props.offerings
                    ? "m-nav-link m-nav-link-pry m-nav-link-active"
                    : "m-nav-link m-nav-link-grey"
                }
                role="button"
              >
                What we offer
              </div>
            </a>
            <div className="m-nav-dvd"></div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://shop.medsaf.com/web/login?redirect=/shop"
            >
              <div className="m-nav-link m-nav-link-pry" role="button">
                Login
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://shop.medsaf.com/web/signup?redirect=%2Fshop"
            >
              <button className="m-nav-btn">Sign up</button>
            </a>
          </nav>
        </div>
        <div className="m-nav-mobile appContainer">
          <SideNav
            openFromRight={true}
            style={{ background: nav ? "transparent" : "inherit" }}
            navStyle={{ width: "80%", background: "#33869D" }}
            showNav={nav}
            onHideNav={() => setNav(false)}
            titleStyle={{
              backgroundColor: "#33869D",
              color: "#444444",
              paddingLeft: 10,
              paddingRight: 15,
              paddingBottom: 0,
              paddingTop: 0,
              fontSize: 17,
              textAlign: "left",
              height: 73,
            }}
            itemStyle={{
              backgroundColor: "#33869D",
              listStyleType: "none",
              color: "#fff",
              textAlign: "center",
              padding: "0 8px",
              marginBottom: "3.7rem",
            }}
            itemHoverStyle={{ backgroundColor: "inherit" }}
            title={[
              <div
                key={uniqueKeygen()}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  background: "#33869D",
                  padding: "8px 4px 1px 8px",
                  color: "#fff",
                  fontSize: "4rem",
                  cursor: "pointer",
                }}
              >
                <span onClick={() => setNav(!nav ? true : false)}>
                  <img style={{ width: "35px" }} src={close} alt="close menu" />
                </span>
              </div>,
            ]}
            items={[
              <Link
                className={
                  props.home
                    ? "m-nav-link-white m-nav-link-active"
                    : "m-nav-link-white"
                }
                to="/"
              >
                Home
              </Link>,
              <a
                className={
                  props.offerings
                    ? "m-nav-link-white m-nav-link-active"
                    : "m-nav-link-white"
                }
                href="/#offerings"
              >
                What we offer
              </a>,
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://shop.medsaf.com/web/login?redirect=/shop"
              >
                <button className="m-nav-btn m-nav-btn1">Login</button>
              </a>,
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://shop.medsaf.com/web/signup?redirect=%2Fshop"
              >
                <button className="m-nav-btn">Sign up</button>
              </a>,
              <div className="m-nav-socials">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://instagram.com/medsafcom"
                >
                  <img src={instagram} alt="instagram" />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/MedsafCom"
                >
                  <img src={twitter} alt="twitter" />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://facebook.com/medsafcom"
                >
                  <img src={facebook} alt="facebook" />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://m.youtube.com/channel/UC_wYayI3FtdkXOJsdsM-T5g"
                >
                  <img src={youtube} alt="youtube" />
                </a>
              </div>,
            ]}
          />
          <nav className="m-nav-ctrl">
            <Link to="/">
              <img className="m-nav-logo" src={logo} alt="medsaf logo" />
            </Link>
            <div
              className="m-nav-mobile-toggle"
              onClick={() => setNav(!nav ? true : false)}
            >
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
