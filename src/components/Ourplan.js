import React,{ useState, useEffect} from "react";
import subpagedevider from "../images/h3_divider.png";
import Basicplandiv from "./Basicplandiv";
import Greatplan from "./Greatplan";
import Bigplan from "./Bigplan";
import Aos from "aos";
import "aos/dist/aos.css";

function Ourplan () {
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
          <div className="ourplan-div my-5">
             <div className="container">
                 <h2 className="text-center" data-aos="fade-up"> Choose monthly or <br/> anual plans </h2>
                 <div className="text-center m-auto d-table col-lg-12" data-aos="fade-down">
                    <img src={subpagedevider} alt="subpagedivider"/>
                 </div>
                 <p className="col-lg-7 text-center m-auto" data-aos="fade-up"> You can order multiple recipes. Perfect for
                  taste-testing and offering your dog a variety of flavors! Bring it on, picky pups.
                 </p>
                 <div className="row justify-content-between gx-lg-5 row-cols-1 row-cols-lg-3 mt-5">
                    
                     <div className="col" data-aos="fade-left">
                        
                        <Basicplandiv/>
                       
                     </div>

                     <div className="col" data-aos="fade-up">
                        <Greatplan/>
                     </div>

                     <div className="col" data-aos="fade-right">
                        <Bigplan/>
                     </div>
                    
                 </div>
             </div>
          </div>
        </>
    );
    
}

export default Ourplan;
