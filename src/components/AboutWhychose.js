import React, { useState, useEffect } from "react";
import headingDivider from "../images/h3_divider.png";
import whyaboutchoose from "./AboutPagechoosingApi";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutWhychose () {
    const [ workData , setworkData] =useState(whyaboutchoose);
    console.log(workData);
    useEffect(() => {
        Aos.init({
            offset: 100,
            easing: 'ease',
            delay: 0,
            once: true,
            duration: 800,
          
          });
    });
    return (
        <>
          <div className="why-choose-partabout">
             <div className="container">
                 <h2 className="text-center" data-aos="fade-up"> Why Trust Us? </h2>
                 <div className="d-table m-auto" data-aos="fade-down">
                    <img src={headingDivider} alt="diverder"/>
                 </div>
                 <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 gx-lg-5 mt-5">
                 {
                     workData.map((curElem) => {
                         const { id, chooseimg, title} =curElem;
                         return (
                             <>
                             <div className="col" data-aos="fade-up">
                                <div className="comon-choose-div mb-5 col-sm-6 col-md-12 mx-sm-auto mb-lg-0 d-grid align-content-center text-center">
                                    <figure>
                                      <img src={chooseimg} alt={title}/>
                                    </figure>
                                   <h2>{title}</h2>
                                </div>
                             </div>
                             </>
                         );
                     })
                 }
                     
                 </div>
             </div>
          </div>
        </>
    );
}
export default AboutWhychose;
