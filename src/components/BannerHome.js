import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Bannerimg from "../images/bg-pic.png";
import subimgtext from "../images/h4_deco1.png";
import headingDivider from "../images/h3_divider.png";
import BannerPicnew from "../images/banner-new.png";
import { FaLongArrowAltRight , FaShoppingBasket ,FaShoppingCart  } from "react-icons/fa";
import { BsFillCartFill, BsFillTelephoneFill, BsCalendarCheckFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

function BannerHome() {
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
         <div className="banner-part">
            <div className="container">
                    <div className="banner-content">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            
                            <h1>
                             
                            DELICIOUS FOOD <span className="d-block">
                            specially YOUR DOG </span> 
                            </h1>
                            <p className="col-9 col-lg-10"> Show your dog just how loved they are with tasty, wholesome, healthy dog food.
                            </p>
                            <NavLink to="/about" className="about-bn"> About More <FaLongArrowAltRight/> </NavLink>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
         </>
     );
}

export default BannerHome;
