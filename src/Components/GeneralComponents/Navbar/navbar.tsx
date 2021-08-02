import * as React from "react";
import "./navbar.css";
import logo from "../../../assets/medsafLogo.svg";
import { Link } from "react-router-dom";
import SideNav from "react-simple-sidenav";
import facebook from "../../../assets/icons/facebookWhite.svg";
import twitter from "../../../assets/icons/twitterWhite.svg";
import instagram from "../../../assets/icons/instagramWhite.svg";
import youtube from "../../../assets/icons/youtubeWhite.svg";
import close from "../../../assets/icons/burgerMenuClose.svg";

const NavBar = (props: any) => {
  const [nav, setNav] = React.useState(false);
  const uniqueKeygen = (): number => {
    return Math.floor(Math.random() * 100);
  };
  return (
    <>
      <div className="m-nav">
        <div className="m-nav-desktop appContainer">
          <img className="m-nav-logo" src={logo} alt="medsaf logo" />
          <nav className="m-nav-list">
            <div
              className={
                props.home
                  ? "m-nav-link m-nav-link-pry m-nav-link-active"
                  : "m-nav-link m-nav-link-grey"
              }
              role="button"
            >
              Home
            </div>
            <div
              className={
                props.offer
                  ? "m-nav-link m-nav-link-pry m-nav-link-active"
                  : "m-nav-link m-nav-link-grey"
              }
              role="button"
            >
              What we offer
            </div>
            <div className="m-nav-dvd"></div>
            <div className="m-nav-link m-nav-link-pry" role="button">
              Login
            </div>
            <button className="m-nav-btn">Sign up</button>
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
              <Link className="m-nav-link-white m-nav-link-active" to="/">
                Home
              </Link>,
              <Link className="m-nav-link-white" to="">
                What we offer
              </Link>,
              <button className="m-nav-btn m-nav-btn1">Login</button>,
              <button className="m-nav-btn">Sign up</button>,
              <div className="m-nav-socials">
                <img src={instagram} alt="instagram" />
                <img src={twitter} alt="twitter" />
                <img src={facebook} alt="facebook" />
                <img src={youtube} alt="youtube" />
              </div>,
              //   <div>
              //     <div className="navbar-nav mr-auto">
              //       <a href=""><span>Home</span></a>
              //       <a href="/#services"><span>Services</span></a>
              //       <a href="/#contact"><span>Contact Us</span></a>
              //       <a href="https://wa.me/2348032912487?text=Hello,%20I%20want%20to%20start%20a%20trade">
              //         <button>Start Trading</button>
              //       </a>
              //       </div>
              //   </div>,
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
