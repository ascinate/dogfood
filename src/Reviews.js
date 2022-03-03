import React from "react";
import SubpageBanner from "./components/SubpageBanner";
import headingDivider from "./images/h3_divider.png";
import Googlereview from "./components/Googlereview";
import Ourwokdetail from "./components/Ourwokdetail";
import VeterinarianReview from "./components/VeterinarianReview";
import HealthReview from "./components/HealthReview";
import PrsonalCharityreview from "./components/PrsonalCharityreview";
import PersonaCharityNext from "./components/PersonaCharityNext";

function Reviews (){
    return (
        <>
          <SubpageBanner name="Reviews" indexpage="Home" indexvisit="/" activepage="Reviews" />
          <div className="review-total pt-5">
              <h2 className="text-center cm-sp-heading col-12"> We've changed for the better</h2>
              <div className="text-center d-block">
                   <img src={headingDivider} alt="divider"/>
              </div>
              <Googlereview/>
              <VeterinarianReview/>
              <PrsonalCharityreview/>
              <Ourwokdetail/>
              <HealthReview/>
              <PersonaCharityNext/>
              
          </div>
        </>
    );
}
export default Reviews;