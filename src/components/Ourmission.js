import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import headingDivider from "../images/h3_divider.png";
import { BsFillCheckCircleFill } from "react-icons/bs";
import missionpic from "../images/our-mission.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function Ourmission(){
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
          <div className="our-miison py-5">
             <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 align-items-lg-center gx-lg-5">
                    <div className="col" data-aos="fade-up">
                       <figure className="ourmisson-pic mb-5 mb-lg-0">
                          <img src={missionpic} alt="picmission"/>
                       </figure>
                    </div>
                    <div className="col" data-aos="fade-down">
                       <h6> Our mission </h6>
                       <h2> We're always here for our customers </h2>
                       <div className="divider-div">
                          <img src={headingDivider} alt="divider"/>
                       </div>
                       <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                       printer took a galley of type and scrambled it to make a type specimen book.</p>
                       <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                       printer took a galley of type and scrambled it to make a type specimen book.</p>

                       <ul className="list-unstyled">

                            <li> <BsFillCheckCircleFill/> Maximus neque eget </li>
                            <li> <BsFillCheckCircleFill/> Pellentesque consequat quis nisi </li>
                            <li> <BsFillCheckCircleFill/>  Quis molestie erat porta </li>
                           

                       </ul>

                       <NavLink to="/plan" className="btn build-bn mt-3" data-aos="fade-up"> Build My Plan </NavLink>
                    </div>
                </div>
             </div>
          </div>
        </>
    );
}
export default Ourmission;