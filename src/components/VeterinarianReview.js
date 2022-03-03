import React, {useEffect , useState} from "react";
import headingDivider from "../images/h3_divider.png";
import Veterinariantext from "./VeterinariantesiApi";
import { FaPaperPlane , FaQuoteLeft} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

function VeterinarianReview(){
    const [ workData , setworkData] =useState(Veterinariantext);
    console.log(workData);
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
           <div className="next-review py-5">
              <div className="container">
                <h2 className="text-center" data-aos="fade-up"> Veterinarian Testimonials </h2>
                <div className="text-center d-block" data-aos="fade-down">
                    <img src={headingDivider} alt="divider"/>
                </div>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 gx-lg-5 my-5" data-aos="fade-down">
                {
                    workData.map((curElem) =>{
                        const { id, images, name, decription} = curElem;
                          return(
                               <>
                               <div className="col">
                                    <div className="veter-items text-center">
                                        <figure className="maskpic2">
                                        <img src={images} alt={name}/>
                                        </figure>
                                        <h5 className="mt-3">{name}</h5>
                                        <p className="text-center">
                                        <FaQuoteLeft/> {decription} </p>
                                        
                                        
                                    </div>
                                </div>
                               </>
                          );
                       

                    })
                   }

                    
                </div>
                <NavLink to="/order" className="btn getst-bn d-table m-auto"> <FaPaperPlane/> Get Started </NavLink>
              </div>
           </div>
         </>
     );
}
export default VeterinarianReview;