import * as React from "react";
import "./navbar.css";
import logo from "../../../assets/medsafLogo.svg";

const NavBar = () => {
    return (
        <>
            <div className="m-nav">
                <div className="m-nav-desktop appContainer">
                    <img className="m-nav-logo" src={logo} alt="medsaf logo" />  
                    <nav className="m-nav-list">
                        <div className="m-nav-link m-nav-link-pry m-nav-link-active" role="button">Home</div>
                        <div className="m-nav-link m-nav-link-grey" role="button">What we offer</div>
                        <div className="m-nav-dvd"></div>
                        <div className="m-nav-link m-nav-link-pry" role="button">Login</div>
                        <button className="m-nav-btn">Sign up</button>
                    </nav>
                </div>
                <div className="m-nav-mobile"></div>
            </div>
        </>
    )
}

export default NavBar;