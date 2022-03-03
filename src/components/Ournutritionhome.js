import React, {useEffect} from "react";
import Dogfoodimg from "../images/dog-food-home.jpeg";
import headingDivider from "../images/h3_divider.png";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Ournutritionhome() {
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
           <div className="our-nutrions-div py-5">
             <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 gx-lg-5 align-items-lg-center">
                    <div className="col" data-aos="fade-dwon">
                        <figure className="care-img-box mb-3 b-lg-0">
                            <img src={Dogfoodimg} alt="banner"/>                      
                        </figure>
                    </div>
                    <div className="col left-treat-sec ps-md-5" data-aos="fade-up">
                        
                            <h2> Our nutrition <br/> philosophy </h2>
                            <img src={headingDivider} alt="diverver"/>
                            <p className="mt-3"> Animal-based proteins to build muscle. Low carbs and low-glycemic ingredients to maintain 
                            healthy weight. And probiotics to boost immunity.  </p>
                            
                            <ul className="list-unstyled mt-4">

                                <li> <BsFillCheckCircleFill/> Pet nutritionists  </li>
                                <li> <BsFillCheckCircleFill/> Complete & balanced </li>
                                <li> <BsFillCheckCircleFill/> Vitamins C & E  </li>
                                <li> <BsFillCheckCircleFill/> Taurine & l-carnitine  </li>
                                <li> <BsFillCheckCircleFill/> Omega fatty acids </li>
                               

                            </ul>

                            <NavLink to="/about" className="btn about-more-btn"> Explore now </NavLink>
                        
                    </div>

                    
             
                </div>
             </div>
           </div>
         </>
     );
    
}
export default Ournutritionhome;