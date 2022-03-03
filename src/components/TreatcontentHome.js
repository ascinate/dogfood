import React, {useEffect} from "react";
import Dogcareimg from "../images/dog-care.jpeg";
import { BsFillCheckCircleFill } from "react-icons/bs";
import headingDivider from "../images/h3_divider.png";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function TreatcontentHome() {
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
          <div className="our-treat-care py-5">
             <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 gx-lg-5 align-items-lg-center flex-column-reverse flex-md-row">
                    <div className="col left-treat-sec" data-aos="fade-up">
                      
                          <h2> Treat your dog like <br/> one of the family </h2>
                          <img src={headingDivider} alt="diverver"/>
                          <p className="mt-3 pe-md-3"> We offer exceptional dog food, rooted in science, 
                        to deliver essential nutritional solutions with unmatched quality. </p>
                           <ul className="list-unstyled mt-4">

                                <li> <BsFillCheckCircleFill/> High quality ingredients </li>
                                <li> <BsFillCheckCircleFill/> Complete & balanced </li>
                                <li> <BsFillCheckCircleFill/>  No additives or fillers </li>
                                <li> <BsFillCheckCircleFill/> consectetur felis </li>
                                <li> <BsFillCheckCircleFill/> High quality ingredients </li>
                                <li> <BsFillCheckCircleFill/> Complete & balanced </li>
                                <li> <BsFillCheckCircleFill/> No additives or fillers </li>
                                <li> <BsFillCheckCircleFill/> consectetur felis </li>

                           </ul>

                           <NavLink to="/about" className="btn about-more-btn"> About More </NavLink>
                      
                    </div>

                    <div className="col" data-aos="fade-down">
                       <figure className="care-img-box mb-3 mb-lg-0">
                         <img src={Dogcareimg} alt="banner"/>                      
                       </figure>
                    </div>
                  
                </div>
             </div>
          </div>
        </>
    );
    
}
export default TreatcontentHome;