import React, { useState, useEffect } from "react";
import OurPrograess from "../components/OurworkApi";
import headingDivider from "../images/h3_divider.png";
import Aos from "aos";
import "aos/dist/aos.css";


function Ourwokdetail() {
    const [ workData , setworkData] =useState(OurPrograess);
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
    return(

        <>
          <div className="ourclient-details-div">

             <div className="container">
                <h2 className="text-center" data-aos="fade-up">
                      Keeping Your Pets Happy, <br/> Healthy and Safe!
                </h2>
                <div className="m-auto d-table" data-aos="fade-down">
                   <img src={headingDivider} alt="diverver"/>
                </div> 
                <p className="text-center col-lg-6 m-auto d-table" data-aos="fade-up"> The process of cooking at lower temperatures & at slower
                 rates leads to an increase in nutrient retention. </p>
                 
                 <div className="row row-cols-1 row-cols-md-3 gx-lg-5 row-col-lg-3 mt-5">
                    
                   {
                    workData.map((curElem) => {
                        const{ id, images, number, name  } = curElem;
                        return (
                            <>
                             <div className="col" data-aos="fade-up">
                               <div className="our-ws-progress d-grid justify-content-center mb-5 mb-lg-0">
                                  <div className="d-flex align-items-center">
                                     <figure>
                                       <img src={images} alt={name}/>
                                     </figure>
                                     <div className="progress-details">
                                        <h4>{number}</h4>
                                        <h5>{name}</h5>
                                     </div>
                                  </div>
                               </div>
                             </div>
                            </>
                            )
                        })
                    }
                 </div>

                 <a id="" className="btn m-auto mt-5 d-table register-bn" data-aos="fade-down"> Register Now </a>

             </div>
          </div>
        </>
    );
    
}
export default Ourwokdetail;