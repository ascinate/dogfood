import React, {useEffect} from "react";
import headingDivider from "../images/h3_divider.png";
import Bestfoodhome from "../images/h1_warning-1.png"
import { BsFillCheckCircleFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

function ChosingdivHome() {
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
          <div className="comon-choseing-part">
             <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 align-items-lg-center">
                   <div className="col" data-aos="fade-up">
                     <figure className="mb-0">
                        <img src={Bestfoodhome} alt="choosingfood"/>
                     </figure>
                   </div>
                   <div className="col" data-aos="fade-down">
                  

                     <h2> Choosing the right food <br/> for
                     Your Dog </h2>
                     <img src={headingDivider} alt="divider"/>
                     <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
                      a piece of classical</p>

                      <ul className="list-unstyled">

                        <li> <BsFillCheckCircleFill/> High quality ingredients </li>
                        <li> <BsFillCheckCircleFill/> Complete & balanced </li>
                        <li> <BsFillCheckCircleFill/>  No additives or fillers </li>
                        <li> <BsFillCheckCircleFill/> consectetur felis </li>
                        <li> <BsFillCheckCircleFill/> High quality ingredients </li>
                        <li> <BsFillCheckCircleFill/> Complete & balanced </li>
                        <li> <BsFillCheckCircleFill/> No additives or fillers </li>
                        <li> <BsFillCheckCircleFill/> consectetur felis </li>

                      </ul>
                   </div>
                </div>
             </div>
          </div>
        </>
    );
    
}

export default ChosingdivHome;