import React, { useState , useEffect } from "react";
import Howprocess from "./HowitApi";
import headingDividerWhite from "../images/h3_divider-white.png";
import Aos from "aos";
import "aos/dist/aos.css";



function HowitworkHome() {
    const [workData , setworkData] = useState (Howprocess);
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
          <div className="how-it-work-home">
             <div className="container">
                <h2 className="text-center" data-aos="fade-up"> How Dose It work </h2>
                <div className="d-table m-auto text-center">
                    <img src={headingDividerWhite} alt="divider"/>
                </div>
                <h6 className="text-center steps-text" data-aos="fade-down"> 3 Easy Steps </h6>
                <div className="row gx-lg-5 row-cols-1 row-cols-md-3 mt-5">
                {
                    workData.map((curElem) => {
                      const { id, images, name, description, } =curElem;
                      return (
                            <>
                            <div className="col" data-aos="fade-down">
                                <div className="comon-work text-center mb-5 mb-lg-0" >
                                    <figure>
                                      <img src={images} alt={name}/>
                                    </figure>
                                    <h5 className="col-lg-11 m-auto d-table"> {name}
                                    </h5>
                                    <p className="col-lg-8 m-auto d-table mt-3"> {description} </p>
                                </div>
                            </div>
                            </>
                      )
                    })
                 }
                   
                </div>
                <a id="" className="btn m-auto d-table mt-5 get-st-bn" data-aos="fade-up"> Get started </a>
             </div>
          </div>   
        </>
    );
    
}

export default HowitworkHome;