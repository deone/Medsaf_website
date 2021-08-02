import * as React from "react";
import "./reviews.css";
import client1 from "../../../assets/client1.png";
import client2 from "../../../assets/client2.png";

const Reviews = () => {
    return (
        <>
           <div className="m-landing-section8 appContainer">
          <div className="m-landing-section2-ttl-shadow">Client reviews</div>
          <h4 className="m-landing-section2-ttl">
            Client <span> reviews</span>
          </h4>
          <p className="m-landing-section2-txt">
            We keep a track record for Quality service, few reviews we have
            collated from satisfied clients.
          </p>
          <div className="m-landing-section8-itemsec">
            <div className="m-landing-section8-item">
              <p className="m-landing-section8-item-star">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </p>
              <div className="m-landing-section8-item-txtsec">
                <p className="m-landing-section8-item-sign">"</p>
                <p className="m-landing-section8-item-txt">
                  MEDSAF has a very robust supply chain unit, Now we are not
                  bothered to check the source of these suppliers or who’s the
                  manufacturer, is it genuine or not, is it original or fake,
                  what is the quality assurance system, where the products are
                  stored. All of these issues we are not concerned now, because
                  MEDSAF takes care of them
                </p>
                <p className="m-landing-section8-item-sign m-landing-section8-item-sign-2">
                  "
                </p>
              </div>

              <p className="m-landing-section8-item-name">Chief Anil Grover </p>
              <p className="m-landing-section8-item-company">
                Medical Director - Grover Medical Center
              </p>
              <img
                className="m-landing-section8-item-clientImg"
                src={client1}
                alt=""
              />
            </div>
            <div className="m-landing-section8-item hide">
              <p className="m-landing-section8-item-star">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </p>
              <div className="m-landing-section8-item-txtsec">
                <p className="m-landing-section8-item-sign">"</p>
                <p className="m-landing-section8-item-txt">
                  We use to deal with so many suppliers, we had about 40 to 50
                  different suppliers, so that alone was an administrative
                  burden, sending requests to different suppliers, having to
                  process payment was and administrative nightmare. since we
                  started working with MEDSAF, i can say that all the challenges
                  went away. With MEDSAF the process is pretty streamlined,
                  there was speed and quality of service
                </p>
                <p className="m-landing-section8-item-sign m-landing-section8-item-sign-2">
                  "
                </p>
              </div>

              <p className="m-landing-section8-item-name">
                Dr. Ifeanyi Obiora{" "}
              </p>
              <p className="m-landing-section8-item-company">
                COO - Eko Hospital
              </p>
              <img
                className="m-landing-section8-item-clientImg"
                src={client2}
                alt=""
              />
            </div>
          </div>
        </div>
      
        </>
    )
}

export default Reviews;