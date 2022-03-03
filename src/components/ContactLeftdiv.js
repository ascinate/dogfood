import React, {useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaFax } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

function ContactLeftdiv() {
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
         <div className="left-sec-div1 cm-text-n" data-aos="fade-left">
             <h6> Let's Talk </h6>
             <h2> We Are Here To Help You </h2>
             <ul className="list-unstyled mt-4">
                <li className="d-flex">
                <span  className="icon-c"> <FaPhoneAlt/> </span> 
                <span className="text-c">  Call Us 
                    <small className="d-block"> +990-123-4567 </small> 
                </span>
                </li>
                <li className="d-flex">
                <span  className="icon-c"> <FaEnvelope/> </span> 
                <span className="text-c">  
                    Email: 
                    <small className="d-block"> support@rdememe.com </small> 
                </span>
                </li>
                <li className="d-flex">
                <span  className="icon-c"> <FaFax/> </span> 
                <span className="text-c"> Fax: 
                    <small className="d-block"> +990-123-4567 </small> 
                </span>
                </li>
            </ul>
         </div>
        </>
    );
}

export default ContactLeftdiv;