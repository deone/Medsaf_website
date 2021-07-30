import * as React from "react";
import "./home.css";
import Navbar from "../../../GeneralComponents/Navbar/navbar";
import cart from "../../../../assets/icons/cartWhite.svg";
import heroImg from "../../../../assets/heroImg-crop.png";
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
import client1 from "../../../../assets/client1.png";
import client2 from "../../../../assets/client2.png";


const Home = () => {
  return (
    <>
      <div className="m-landing">
        <Navbar />
        <div className="m-landing-hero appContainer">
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
        <div className="m-landing-section3 appContainer">
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
                <div className="m-landing-section3-offers-icon m-landing-section3-offers-icon-1">
                  <img src={cartYellow} alt="shopping cart" />
                </div>
                <h5 className="m-landing-section3-offers-ttl">Marketplace</h5>
                <p className="m-landing-section3-offers-txt m-landing-section3-offers-txt-1">
                  Vitae egestas aliquam euismod consequat, mattis. Venenatis
                  euismod nunc nisi, vulputate. Aliquet viverra nulla aenean
                  faucibus ultrices diam est phasellus Vitae egestas aliquam
                  euismod consequat, mattis. Venenatis euismod nunc nisi,
                  vulputate. Aliquet viverra nulla aenean faucibus ultrices diam
                  est phasellus. Vitae egestas aliquam euismod
                </p>
                <button className="m-landing-section3-offers-btn m-landing-section3-offers-btn-1">
                  Shop now <img src={caretRight} alt="" />
                </button>
                <img className="m-landing-section3-offers-img" src={delivery} />
              </div>
            </div>
            <div>
              <div className="m-landing-section3-offers">
                <div className="m-landing-section3-offers-icon m-landing-section3-offers-icon-2">
                  <img src={partners} alt="shopping cart" />
                </div>
                <h5 className="m-landing-section3-offers-ttl">
                  Platinum Partners Program
                </h5>
                <p className="m-landing-section3-offers-txt">
                  Vitae egestas aliquam euismod consequat, mattis. Venenatis
                  euismod nunc nisi, vulputate. Aliquet viverra nulla aenean
                  faucibus ultrices diam est phasellus Vitae egestas aliquam
                  euismod consequat, mattis. Venenatis euismod nunc nisi,
                  vulputate. Aliquet viverra nulla aenean faucibus ultrices diam
                  est phasellus.
                </p>
                <button className="m-landing-section3-offers-btn">
                  Sign up
                </button>
              </div>
            </div>
            <div>
              <div className="m-landing-section3-offers">
                <div className="m-landing-section3-offers-icon m-landing-section3-offers-icon-3">
                  <img src={consumables} alt="shopping cart" />
                </div>
                <h5 className="m-landing-section3-offers-ttl">Consumables</h5>
                <p className="m-landing-section3-offers-txt">
                  Vitae egestas aliquam euismod consequat, mattis. Venenatis
                  euismod nunc nisi, vulputate. Aliquet viverra nulla aenean
                  faucibus ultrices diam est phasellus Vitae egestas aliquam
                  euismod consequat, mattis. Venenatis euismod nunc nisi,
                  vulputate. Aliquet viverra nulla aenean faucibus ultrices diam
                  est phasellus.
                </p>
                <button className="m-landing-section3-offers-btn">
                  Sign up
                </button>
              </div>
            </div>
            <div>
              <div className="m-landing-section3-offers">
                <div className="m-landing-section3-offers-icon m-landing-section3-offers-icon-4">
                  <img src={hospital} alt="shopping cart" />
                </div>
                <h5 className="m-landing-section3-offers-ttl">
                  MEDSAF Assure Program
                </h5>
                <p className="m-landing-section3-offers-txt">
                  Vitae egestas aliquam euismod consequat, mattis. Venenatis
                  euismod nunc nisi, vulputate. Aliquet viverra nulla aenean
                  faucibus ultrices diam est phasellus Vitae egestas aliquam
                  euismod consequat, mattis. Venenatis euismod nunc nisi,
                  vulputate. Aliquet viverra nulla aenean faucibus ultrices diam
                  est phasellus.
                </p>
                <button className="m-landing-section3-offers-btn">
                  Sign up
                </button>
              </div>
            </div>
            <div>
              <div className="m-landing-section3-offers">
                <div className="m-landing-section3-offers-icon m-landing-section3-offers-icon-5">
                  <img src={patient} alt="shopping cart" />
                </div>
                <h5 className="m-landing-section3-offers-ttl">
                  Patient Direct
                </h5>
                <p className="m-landing-section3-offers-txt">
                  Vitae egestas aliquam euismod consequat, mattis. Venenatis
                  euismod nunc nisi, vulputate. Aliquet viverra nulla aenean
                  faucibus ultrices diam est phasellus Vitae egestas aliquam
                  euismod consequat, mattis. Venenatis euismod nunc nisi,
                  vulputate. Aliquet viverra nulla aenean faucibus ultrices diam
                  est phasellus.
                </p>
                <button className="m-landing-section3-offers-btn">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="m-landing-section4 appContainer">
            <img className="m-landing-section4-img" src={whyMedsaf} />
            <div className="m-landing-section4-info">
                    <div className="m-landing-section2-ttl-shadow">Why choose MEDSAF</div>
                <h4 className="m-landing-section2-ttl">
                Why choose <span> MEDSAF</span>
                </h4>
                <p className="m-landing-section2-txt">
                    MEDSAF increases quality and access of medications dispensed across
                    Africa. We work and support only the best pharmaceutical partners
                    that pass our 7 layer quality control vetting process.
                </p>
                <button className="m-landing-hero-btn">
                    {" "}
                    <img src={cart} alt="shopping cart" />
                    Shop now
                    </button>
            </div>
        </div>
        <div className="m-landing-section5 appContainer">
            <div className="m-landing-section5-itemsec">
                <div className="m-landing-section5-item">
                    <h6 className="m-landing-section5-item-ttl">Introduction to <span>MEDSAF</span></h6>
                    <img className="m-landing-section5-item-vid" src={video} alt="" />
                </div>
                <div className="m-landing-section5-item">
                    <h6 className="m-landing-section5-item-ttl">Customer<span> Testimonials</span></h6>
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
                        <img className="m-landing-section6-grid-item-img" src={blog} />
                        <div >
                            <h6 className="m-landing-section6-grid-item-ttl">
                                Best quality medication in the Biz
                            </h6>
                            <a className="m-landing-section6-grid-item-link" href="">forbes.com/medsaf</a>
                        </div>
                    </div>
                </div>
                <div className="m-landing-section6-grid-2">
                <div className="m-landing-section6-grid-item">
                        <img className="m-landing-section6-grid-item-img" src={blog} />
                        <div >
                            <h6 className="m-landing-section6-grid-item-ttl">
                                Best quality medication in the Biz
                            </h6>
                            <a className="m-landing-section6-grid-item-link" href="">forbes.com/medsaf</a>
                        </div>
                    </div>
                </div>
                <div className="m-landing-section6-grid-3">
                <div className="m-landing-section6-grid-item">
                        <img className="m-landing-section6-grid-item-img" src={blog} />
                        <div >
                            <h6 className="m-landing-section6-grid-item-ttl">
                                Best quality medication in the Biz
                            </h6>
                            <a className="m-landing-section6-grid-item-link" href="">forbes.com/medsaf</a>
                        </div>
                    </div>
                </div>
                <div className="m-landing-section6-grid-4">
                <div className="m-landing-section6-grid-item">
                        <img className="m-landing-section6-grid-item-img" src={blog} />
                        <div >
                            <h6 className="m-landing-section6-grid-item-ttl">
                                Best quality medication in the Biz
                            </h6>
                            <a className="m-landing-section6-grid-item-link" href="">forbes.com/medsaf</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="m-landing-section7 appContainer">
            <div className="m-landing-section7-sec">
                <h6 className="m-landing-section7-sec-ttl">Your one stop shop for the highest quality medications and consumables</h6>
                <button className="m-landing-hero-btn m-landing-section7-btn">
                    {" "}
                    <img src={cartGreen} alt="shopping cart" />
                    Shop now
                </button>
                <img className="m-landing-section7-sec-img1" src={logoTransparent} />
            </div>
        </div>
        <div className="m-landing-section8 appContainer">
            <div className="m-landing-section2-ttl-shadow">Client reviews</div>
            <h4 className="m-landing-section2-ttl">
            Client <span> reviews</span>
            </h4>
            <p className="m-landing-section2-txt">
            We keep a track record for Quality service, few reviews we have collated from satisfied clients.
          </p>
            <div className="m-landing-section8-itemsec">
                <div  className="m-landing-section8-item">
                    <p className="m-landing-section8-item-star">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
                    <div className="m-landing-section8-item-txtsec">
                        <p className="m-landing-section8-item-sign">"</p>
                    <p className="m-landing-section8-item-txt">MEDSAF has a very robust supply chain unit, Now we are not bothered to check the source of these suppliers or who’s the manufacturer, is it genuine or not, is it original or fake, what is the quality assurance system, where the products are stored. All of these issues we are not concerned now, because MEDSAF takes care of them</p>
                    <p className="m-landing-section8-item-sign m-landing-section8-item-sign-2">"</p>

                    </div>
                    
                    <p className="m-landing-section8-item-name">Chief Anil Grover </p>
                    <p className="m-landing-section8-item-company">Medical Director - Grover Medical Center</p>
                    <img className="m-landing-section8-item-clientImg" src={client1} alt="" />
                </div>
                <div  className="m-landing-section8-item">
                    <p className="m-landing-section8-item-star">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
                    <div className="m-landing-section8-item-txtsec">
                        <p className="m-landing-section8-item-sign">"</p>
                    <p className="m-landing-section8-item-txt">We use to deal with so many suppliers, we had about 40 to 50 different suppliers, so that alone was an administrative burden, sending requests to different suppliers, having to process payment was and administrative nightmare. since we started working with MEDSAF, i can say that all the challenges went away. With MEDSAF the process is pretty streamlined, there was speed and quality of service</p>
                    <p className="m-landing-section8-item-sign m-landing-section8-item-sign-2">"</p>

                    </div>
                    
                    <p className="m-landing-section8-item-name">Dr. Ifeanyi Obiora </p>
                    <p className="m-landing-section8-item-company">COO - Eko Hospital</p>
                    <img className="m-landing-section8-item-clientImg" src={client2} alt="" />
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
