import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import bunowimg from "../images/3082051.png";
import contatimg from "../images/2437630.png";
import bookkingicon from "../images/2460877.png";
import QuickDetails from "./QuickcontactApi";
import { BsFillCartFill, BsFillTelephoneFill, BsCalendarCheckFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

function QuickContactHome() {
    useEffect(() => {
        Aos.init();
    });
    
     return(
         <>
         <div className="quick-contact-sec mt-md-5">
           <div className="container">
               <div className="row gx-lg-5 row-cols-1 row-cols-md-3 row-cols-lg-3">
           
                    <div className="col" data-aos="fade-up">
                        <div className="comon-quick-div text-center">
                            <figure>  
                                <img src={bunowimg} alt="food icon"/>
                            </figure>
                            <h2>Buy Our Food</h2>
                            <p> There Are Many Variations Of Passages Of Lorem Ipsum Available</p>
                            <NavLink to="/orderpage" className="btn comon-bn"> 
                                <BsFillCartFill/> Order Now
                            </NavLink>
                        </div>
                    </div>


                    <div className="col" data-aos="fade-up">
                        <div className="comon-quick-div text-center">
                            <figure>  
                                <img src={contatimg} alt="food icon"/>
                            </figure>
                            <h2>Quick Enquiry</h2>
                            <p>All The Lorem Ipsum Generators On The Internet Tend</p>
                            <NavLink to="/contact" className="btn comon-bn"> 
                              <BsFillTelephoneFill/> Contact Us
                            </NavLink>
                        </div>
                    </div>


                    <div className="col" data-aos="fade-up">
                        <div className="comon-quick-div text-center">
                            <figure>  
                                <img src={bookkingicon} alt="food icon"/>
                            </figure>
                            <h2> Book Our Groming Servise </h2>
                            <p> Lorem Ipsum Passage, And Going Through The Cites Of Classical </p>
                            <NavLink to="/booking" className="btn comon-bn"> 
                              <BsCalendarCheckFill/> Book Now
                            </NavLink>
                        </div>
                    </div>

                    
                       
                
                </div>
            </div>
         </div>
         </>
     )
}
export default QuickContactHome;