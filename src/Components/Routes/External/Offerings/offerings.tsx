import * as React from "react";
import "./offerings.css";
import NavBar from "../../../GeneralComponents/Navbar/navbar";
import Footer from "../../../GeneralComponents/Footer/footer";
import Reviews from "../../../GeneralComponents/Reviews/reviews";
import Socials from "../../../GeneralComponents/DesktopSocials/socials";
import heroImg from "../../../../assets/offeringsHeroImg.png";
import cart from "../../../../assets/icons/cartWhite.svg";
import sectionTwoImg from "../../../../assets/offeringsSectionTwoImg.png";
import sectionThreeImg from "../../../../assets/offeringsSectionThreeImg.png";
import sectionFourImg from "../../../../assets/offeringsSectionFourImg.png";
import sectionFiveImg from "../../../../assets/offeringsSectionFiveImg.png";
import sectionSixImg from "../../../../assets/offeringsSectionSixImg.png";
import sectionTwoImgMobile from "../../../../assets/offeringsSectionTwoImgMobile.png";
import sectionThreeImgMobile from "../../../../assets/offeringsSectionThreeImgMobile.png";
import sectionFourImgMobile from "../../../../assets/offeringsSectionFourImgMobile.png";
import sectionFiveImgMobile from "../../../../assets/offeringsSectionFiveImgMobile.png";
import sectionSixImgMobile from "../../../../assets/offeringsSectionSixImgMobile.png";
import { Link } from "react-router-dom";

const Offerings = () => {
    React.useEffect(() => {
        window.scrollTo(-0,-0);
    }, [])
  return (
    <>
    <div className="m-offerings">
      <NavBar offerings={true} />
      <div className="m-offerings-hero appContainer">
        <Socials />
        <div className="m-landing-hero-txt">
          <h1>
            What we <span> offer</span>
          </h1>
          <p className="m-offerings-hero-txt">
            At MEDSAF we offer a range of products and services tailored to meet
            your specific needs
          </p>
        </div>
        <div className="m-offerings-hero-img">
          <img src={heroImg} alt="" />
        </div>
        {/* <img className="m-landing-hero-img-mobile" src={heroImgMobile} /> */}
      </div>
      <div id="marketplace" className="m-landing-section4 m-offerings-section2 appContainer">
        <img className="m-landing-section4-img" src={sectionTwoImg} />
        <img
          className="m-landing-section4-img-mobile"
          src={sectionTwoImgMobile}
        />
        <div className="m-landing-section4-info">
          <div className="m-landing-section2-ttl-shadow">Marketplace</div>
          <h4 className="m-landing-section2-ttl">Marketplace</h4>
          <p className="m-landing-section2-txt m-offerings-section2-txt">
            Medsaf has a high proficiency and stellar track record of vetting
            suppliers and manufacturers of crucial medications in the Nigerian
            landscape. Medsaf medications go through 7 layers of vetting and
            quality control before they reach your doorstep.
            <br />
            We curate the medications based on hospital demand and use our
            extensive market research and specialized algorithms to set
            medication prices in real time.
            <br />
            Our goal is to provide you with the most up to date prices on the
            medications you need immediately.
            <br />
            The process is simple and check out is easy. Your medications arrive
            within 48-72 hours depending on location. Medsaf ships countrywide.
          </p>
          <a target="_blank" href="https://shop.medsaf.com/">
            <button className="m-landing-hero-btn">
              {" "}
              <img src={cart} alt="shopping cart" />
              Shop now
            </button>
          </a>
        </div>
      </div>
      <div id="platinum" className="m-landing-section4 m-offerings-section3 appContainer">
        <img className="m-landing-section4-img" src={sectionThreeImg} />
        <img className="m-landing-section4-img-mobile" src={sectionThreeImgMobile} />
        <div className="m-landing-section4-info">
          <div className="m-landing-section2-ttl-shadow">
            Platinum Partners Program
          </div>
          <h4 className="m-landing-section2-ttl">Platinum Partners program</h4>
          <p className="m-landing-section2-txt m-offerings-section2-txt">
            Medsaf partners with the hospitals that take Quality with the utmost
            importance.
            <br />
            The Medsaf Platinum Partners Program is a specially curated and
            tailored program where we handle all of your procurement needs.
            <br />
            You work with your own dedicated Medsaf procurement team member and
            we make the entire process of purchasing medications and analyzing
            prices seamless and cost effective.
          </p>
          <button className="m-landing-hero-btn center-btntxt btn-disabled">Sign up</button>
        </div>
      </div>
      <div id="consumables" className="m-landing-section4 m-offerings-section4 appContainer">
        <img className="m-landing-section4-img" src={sectionFourImg} />
        <img className="m-landing-section4-img-mobile" src={sectionFourImgMobile} />
        <div className="m-landing-section4-info">
          <div className="m-landing-section2-ttl-shadow">Consumables</div>
          <h4 className="m-landing-section2-ttl">Consumables</h4>
          <p className="m-landing-section2-txt m-offerings-section2-txt">
            Medsaf specializes in sourcing high quality consumables for your
            hospital’s daily needs.
            <br />
            Though low cost, consistent and quality consumables are some of the
            hardest products to source.
            <br />
            Quality varies wildly and prices move with the market. We source and
            build relationships world-wide to make sure you have the best
            curation of consumables for your hospital or diagnostic center.
          </p>
          <button className="m-landing-hero-btn center-btntxt btn-disabled">Sign up</button>
        </div>
      </div>
      <div id="assure" className="m-landing-section4 m-offerings-section5 appContainer">
        <img className="m-landing-section4-img" src={sectionFiveImg} />
        <img className="m-landing-section4-img-mobile" src={sectionFiveImgMobile} />
        <div className="m-landing-section4-info">
          <div className="m-landing-section2-ttl-shadow">
            MEDSAF Assure Program
          </div>
          <h4 className="m-landing-section2-ttl">MEDSAF Assure Program</h4>
          <p className="m-landing-section2-txt m-offerings-section2-txt">
            Medication prices fluctuate drastically in the Nigerian market due
            to FX and supply chain issues.
            <br />
            Medsaf Assure program allows you to lock in prices of crucial
            medications and get in front of your medications needs.
            <br />
            We won’t let you stock out of crucial medications with Medsaf
            Assure.
            <br />
            Pick your medications and quantities, sign up for the 3-month,
            6-month or 12-month program.
            <br />
            You are guaranteed to reduce your medication procurement costs with
            our program. <br />
            The medications are assured to arrive at your door just before you
            really need them. <br />
            Medsaf Assure helps you get back to giving great patient care!
          </p>
          <Link to="/offerings/MedsafAssureProgram" className="m-landing-hero-btn center-btntxt">Sign up</Link>
        </div>
      </div>
      <div id="patientDirect" className="m-landing-section4 m-offerings-section6 appContainer">
        <img className="m-landing-section4-img" src={sectionSixImg} />
        <img className="m-landing-section4-img-mobile" src={sectionSixImgMobile} />
        <div className="m-landing-section4-info">
          <div className="m-landing-section2-ttl-shadow">Patient Direct</div>
          <h4 className="m-landing-section2-ttl">Patient Direct</h4>
          <p className="m-landing-section2-txt m-offerings-section2-txt">
            Medsaf partners with the hospitals that take Quality with the utmost
            importance.
            <br />
            The Medsaf Platinum Partners Program is a specially curated and
            tailored program where we handle all of your procurement needs.
            <br />
            You work with your own dedicated Medsaf procurement team member and
            we make the entire process of purchasing medications and analyzing
            prices seamless and cost effective.
          </p>
          <Link to="/offerings/PatientDirectProgram"><button className="m-landing-hero-btn center-btntxt">Sign up</button></Link>
        </div>
      </div>
      <Reviews />
      </div>
      <Footer />
    </>
  );
};

export default Offerings;
