import * as React from "react";
import "./home.css";
import Navbar from "../../../GeneralComponents/Navbar/navbar";
import cart from "../../../../assets/icons/cartWhite.svg";
import heroImg from "../../../../assets/heroImg.png";
import gsk from "../../../../assets/partners/GSK.png";
import roche from "../../../../assets/partners/roche.svg";
import swipha from "../../../../assets/partners/swipha.png";
import astrazeneca from "../../../../assets/partners/astrazeneca.svg";
import sanofi from "../../../../assets/partners/sanofi.svg";
import merck from "../../../../assets/partners/merck.svg";
import novartis from "../../../../assets/partners/novartis.svg";
import vedic from "../../../../assets/partners/vedic.png";
import cartYellow from "../../../../assets/icons/cartYellow.svg";
import partners from "../../../../assets/icons/threePeople.svg";
import consumables from "../../../../assets/icons/consumables.svg";
import hospital from "../../../../assets/icons/hospital.svg";
import patient from "../../../../assets/icons/twoPeople.svg";
import caretRight from "../../../../assets/icons/doubleCaretRightWhite.svg";
import delivery from "../../../../assets/deliveryImg.png";
import whyMedsaf from "../../../../assets/whyMedsaf.png";
import video from "../../../../assets/videoPlaceholder.png";
import blog from "../../../../assets/blog.png";
import cartGreen from "../../../../assets/icons/cartGreen.svg";
import logoTransparent from "../../../../assets/icons/medsafLogoTransparent.svg";
import arrow from "../../../../assets/icons/downArrow.svg";
import facebook from "../../../../assets/icons/facebookBlue.svg";
import twitter from "../../../../assets/icons/twitterBlue.svg";
import instagram from "../../../../assets/icons/instagramBlue.svg";
import youtube from "../../../../assets/icons/youtubeBlue.svg";
import ellipse from "../../../../assets/icons/ellipse.svg";
import Footer from "../../../GeneralComponents/Footer/footer";
import heroImgMobile from "../../../../assets/heroImgMobile.png";
import whyMedsafMobile from "../../../../assets/whyMedsafMobile.png";
import line from "../../../../assets/icons/trailingLine.svg";
import Reviews from "../../../GeneralComponents/Reviews/reviews";

const Home = () => {
  return (
    <>
      <div className="m-landing">
        <Navbar home={true} />
        <div className="m-landing-hero appContainer">
          <img className="m-hero-line" src={line} alt="" />
            <div className="m-landing-hero-socials">
                <img className="m-landing-hero-socials-arrow" src={arrow} alt="" />
                <img className="m-landing-hero-socials-icon" src={facebook} alt="" />
                <img className="m-landing-hero-socials-icon" src={twitter} alt="" />
                <img className="m-landing-hero-socials-icon" src={instagram} alt="" />
                <img className="m-landing-hero-socials-icon" src={youtube} alt="" />
            </div>
          <div className="m-landing-hero-txt">
            <h1>
              Quality <span> medication</span> is a fundamental human right
            </h1>
            <button className="m-landing-hero-btn">
              {" "}
              <img src={cart} alt="shopping cart" />
              Shop now
            </button>
          </div>
          <div className="m-landing-hero-img">
            <img src={heroImg} alt="" />
          </div>
          <img className="m-landing-hero-img-mobile" src={heroImgMobile} />
        </div>
        <div className="m-landing-section2 appContainer">
          <div className="m-landing-section2-ttl-shadow">Our partners</div>
          <h4 className="m-landing-section2-ttl">
            Our <span> partners</span>
          </h4>
          <p className="m-landing-section2-txt">
            MEDSAF increases quality and access of medications dispensed across
            Africa. We work and support only the best pharmaceutical partners
            that pass our 7 layer quality control vetting process.
          </p>
          <div className="m-landing-section2-partners">
            <img src={gsk} alt="" />
            <img src={roche} alt="" />
            <img src={swipha} alt="" />
            <img src={astrazeneca} alt="" />
            <img src={sanofi} alt="" />
            <img src={merck} alt="" />
            <img src={novartis} alt="" />
            <img src={vedic} alt="" />
          </div>
        </div>
        <div className="m-landing-section3 appContainer" id="offerings">
          <h4 className="m-landing-section2-ttl">
            What <span> we offer</span>
          </h4>
          <p className="m-landing-section3-txt">
            At MEDSAF we offer a range of products and services tailored to meet
            your specific needs
          </p>
          <div className="m-landing-section3-offer-grid">
            <div className="m-landing-section3-offer-grid-1">
              <div className="m-landing-section3-offers">
                <div>
                <div className="m-landing-section3-offers-icon m-landing-section3-offers-icon-1">
                  <img src={cartYellow} alt="shopping cart" />
                </div>
                <h5 className="m-landing-section3-offers-ttl">Marketplace</h5>
                <p className="m-landing-section3-offers-txt m-landing-section3-offers-txt-1">
                  Medsaf has a high proficiency and stellar track record of
                  vetting suppliers and manufacturers of crucial medications in
                  the Nigerian landscape. Medsaf medications go through 7 layers
                  of vetting and quality control before they reach your
                  doorstep. We curate the medications based on hospital demand
                  and use our extensive market research and specialized
                  algorithms to set medication prices in real time. Our goal is
                  to provide you with the most up to date prices on the
                  medications you need immediately. The process is simple and
                  check out is easy. Your medications arrive within 48-72 hours
                  depending on location. Medsaf ships countrywide.
                </p></div>
                <button className="m-landing-section3-offers-btn m-landing-section3-offers-btn-1">
                  Shop now <img src={caretRight} alt="" />
                </button>
                <img className="m-landing-section3-offers-img" src={delivery} />
              </div>
            </div>
            <div>
              <div className="m-landing-section3-offers">
                <div>
                <div className="m-landing-section3-offers-icon m-landing-section3-offers-icon-2">
                  <img src={partners} alt="shopping cart" />
                </div>
                <h5 className="m-landing-section3-offers-ttl">
                  Platinum Partners Program
                </h5>
                <p className="m-landing-section3-offers-txt">
                  Medsaf partners with the hospitals that take Quality with the
                  utmost importance.
                  <br />
                  The Medsaf Platinum Partners Program is a specially curated
                  and tailored program where we handle all of your procurement
                  needs.
                  <br />
                  You work with your own dedicated Medsaf procurement team
                  member and we make the entire process of purchasing
                  medications and analyzing prices seamless and cost effective.
                </p></div>
                <button className="m-landing-section3-offers-btn">
                  Sign up
                </button>
              </div>
            </div>
            <div>
              <div className="m-landing-section3-offers">
                <div>
                <div className="m-landing-section3-offers-icon m-landing-section3-offers-icon-3">
                  <img src={consumables} alt="shopping cart" />
                </div>
                <h5 className="m-landing-section3-offers-ttl">Consumables</h5>
                <p className="m-landing-section3-offers-txt">
                  Medsaf specializes in sourcing high quality consumables for
                  your hospital’s daily needs.
                  <br />
                  Though low cost, consistent and quality consumables are some
                  of the hardest products to source.
                  <br />
                  Quality varies wildly and prices move with the market. We
                  source and build relationships world-wide to make sure you
                  have the best curation of consumables for your hospital or
                  diagnostic center.
                </p></div>
                <button className="m-landing-section3-offers-btn">
                  Sign up
                </button>
              </div>
            </div>
            <div>
              <div className="m-landing-section3-offers">
                <div>
                <div className="m-landing-section3-offers-icon m-landing-section3-offers-icon-4">
                  <img src={hospital} alt="shopping cart" />
                </div>
                <h5 className="m-landing-section3-offers-ttl">
                  MEDSAF Assure Program
                </h5>
                <p className="m-landing-section3-offers-txt">
                  Medication prices fluctuate drastically in the Nigerian market
                  due to FX and supply chain issues.
                  <br />
                  Medsaf Assure program allows you to lock in prices of crucial
                  medications and get in front of your medications needs.
                  <br />
                  We won’t let you stock out of crucial medications with Medsaf
                  Assure. Pick your medications and quantities, sign up for the
                  3-month, 6-month or 12-month program.<br /> Medsaf Assure helps you
                  get back to giving great patient care!
                </p></div>
                <button className="m-landing-section3-offers-btn">
                  Sign up
                </button>
              </div>
            </div>
            <div>
              <div className="m-landing-section3-offers">
                <div>
                <div className="m-landing-section3-offers-icon m-landing-section3-offers-icon-5">
                  <img src={patient} alt="shopping cart" />
                </div>
                <h5 className="m-landing-section3-offers-ttl">
                  Patient Direct
                </h5>
                <p className="m-landing-section3-offers-txt">
                  Medsaf works with our network of doctors to source the highest
                  quality chronic illness medications for patients.
                  <br />
                  We work on negotiating prices and offering them at wholesale
                  prices so that you and your loved ones can afford to have the
                  very best care possible.
                  <br />
                  Please inquire for more information.
                </p></div>
                <button className="m-landing-section3-offers-btn">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className="m-landing-section4 appContainer">
          <img className="m-landing-section4-img" src={whyMedsaf} />
          <img className="m-landing-section4-img-mobile" src={whyMedsafMobile} />
          <div className="m-landing-section4-info">
            <div className="m-landing-section2-ttl-shadow">
              Why choose MEDSAF
            </div>
            <h4 className="m-landing-section2-ttl">
              Why choose <span> MEDSAF</span>
            </h4>
            <p className="m-landing-section2-txt">
              MEDSAF is the number one pharmaceutical technology provider. We
              use data analytics, technology and quality control as a service to
              increase access, affordability and quality of medications
              dispensed.
            </p>
            <button className="m-landing-hero-btn">
              {" "}
              <img src={cart} alt="shopping cart" />
              Shop now
            </button>
          </div>
        </div>
        {/* <div className="m-landing"> */}

        <div className="m-landing-section5 appContainer">
          <div className="m-landing-section5-itemsec">
            <div className="m-landing-section5-item">
              <h6 className="m-landing-section5-item-ttl">
                Introduction to <span>MEDSAF</span>
              </h6>
              <img className="m-landing-section5-item-vid" src={video} alt="" />
            </div>
            <div className="m-landing-section5-item">
              <h6 className="m-landing-section5-item-ttl">
                Customer<span> Testimonials</span>
              </h6>
              <img className="m-landing-section5-item-vid" src={video} alt="" />
            </div>
          </div>
        </div>
        <div className="m-landing-section6 appContainer">
          <div className="m-landing-section6-sec">
            <h4 className="m-landing-section2-ttl">
              We are on the <span> NEWS</span>
            </h4>
            <div className="m-landing-section6-grid">
              <div className="m-landing-section6-grid-1">
                <div className="m-landing-section6-grid-item">
                  <img
                    className="m-landing-section6-grid-item-img"
                    src={blog}
                  />
                  <div>
                    <h6 className="m-landing-section6-grid-item-ttl">
                      Best quality medication in the Biz
                    </h6>
                    <a className="m-landing-section6-grid-item-link" href="">
                      forbes.com/medsaf
                    </a>
                  </div>
                </div>
              </div>
              <div className="m-landing-section6-grid-2">
                <div className="m-landing-section6-grid-item">
                  <img
                    className="m-landing-section6-grid-item-img"
                    src={blog}
                  />
                  <div>
                    <h6 className="m-landing-section6-grid-item-ttl">
                      Best quality medication in the Biz
                    </h6>
                    <a className="m-landing-section6-grid-item-link" href="">
                      forbes.com/medsaf
                    </a>
                  </div>
                </div>
              </div>
              <div className="m-landing-section6-grid-3">
                <div className="m-landing-section6-grid-item">
                  <img
                    className="m-landing-section6-grid-item-img"
                    src={blog}
                  />
                  <div>
                    <h6 className="m-landing-section6-grid-item-ttl">
                      Best quality medication in the Biz
                    </h6>
                    <a className="m-landing-section6-grid-item-link" href="">
                      forbes.com/medsaf
                    </a>
                  </div>
                </div>
              </div>
              <div className="m-landing-section6-grid-4">
                <div className="m-landing-section6-grid-item">
                  <img
                    className="m-landing-section6-grid-item-img"
                    src={blog}
                  />
                  <div>
                    <h6 className="m-landing-section6-grid-item-ttl">
                      Best quality medication in the Biz
                    </h6>
                    <a className="m-landing-section6-grid-item-link" href="">
                      forbes.com/medsaf
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-landing-section7 appContainer">
          <div className="m-landing-section7-sec">
            <h6 className="m-landing-section7-sec-ttl">
              Your one stop shop for the highest quality medications and
              consumables
            </h6>
            <button className="m-landing-hero-btn m-landing-section7-btn">
              {" "}
              <img src={cartGreen} alt="shopping cart" />
              Shop now
            </button>
            <img
              className="m-landing-section7-sec-img1"
              src={logoTransparent}
            />
            <img
              className="m-landing-section7-sec-img2"
              src={ellipse}
            />
          </div>
        </div>
        </div>
        <Reviews />
      <Footer />
    </>
  );
};

export default Home;
