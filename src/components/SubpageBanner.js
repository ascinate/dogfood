import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

function SubpageBanner(props) {
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
          <div className="subpage-banner">
             <div className="container">
                <div className="sub-page-content">
                    <h1 data-aos="fade-down"> {props.name} </h1>
                    <ul className="list-unstyled d-flex align-items-center" data-aos="fade-up">
                        <li>
                            <NavLink to={props.indexvisit}> {props.indexpage} </NavLink>
                        </li>
                        <li>
                          <FaAngleRight/>
                        </li>
                        <li>
                             {props.activepage}
                        </li>
                    </ul>
                </div>
                
             </div>
          </div>
        </>
    );
    
}
export default SubpageBanner;