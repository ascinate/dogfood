import React, { useEffect } from "react";
import headingDivider from "../images/h3_divider.png";
import abouminpic from "../images/bg-pic.png";
import Aos from "aos";
import "aos/dist/aos.css";


function AboutHistory () {
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
          <div className="About-history">
             <div className="container">
                 <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                     <div className="col" data-aos="fade-up">
                        <figure>
                           <img src={abouminpic} alt="aboutpic"/>
                        </figure>
                     </div>
                     <div className="col" data-aos="fade-down">
                        <h2 className="mb-0"> How It All started </h2>
                        <img src={headingDivider} alt="diviver"/>
                        <h6 className="mt-3"> Over 10 years working in Dog Grooming services developing Pet health food
                         for clients all over the world.</h6>
                         <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical, 
                         making it . This book is a treatise on the theory. </p>
                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap into electronic typesetting. </p>
                     </div>
                 </div>
             </div>
          </div>
        </>
    );
    
}
export default AboutHistory;
