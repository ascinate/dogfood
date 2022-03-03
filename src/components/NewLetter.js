import React, {useEffect} from "react";
import headingDividerWhite from "../images/h3_divider-white.png";
import NewletterDog from "../images/h1_img-7.png";
import Aos from "aos";
import "aos/dist/aos.css";

function NewLetter() {
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
          <div className="new-letter-div">
             <figure className="newbg-pic" data-aos="fade-up">
                <img src={NewletterDog} alt="neb"/>
             </figure>
             <div className="container" data-aos="fade-down">
                <h2 className="text-center"> Join Our Newsletter </h2>
                <p className="text-center mb-0 col-lg-7 m-auto"> Subscribe to the our store mailing list to receive updates on new arrivals, 
                special offers and other discount information.</p>
                <div className="d-table m-auto">
                  <img src={headingDividerWhite} alt="hed"/>
                </div>
                <div className="form-group mt-4 d-flex justify-content-md-center col-md-6 col-lg-5 m-auto">
                   <input type="text" className="form-control" placeholder="Your Email Address"/>
                   <input type="submit" value="Subscribe" className="btn subscribe-bn"/>
                </div>
             </div>
          </div>
        </>
    );
    
}
export default NewLetter;