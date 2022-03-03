import React, { useState, useEffect } from "react";
import headingDivider from "../images/h3_divider.png";
import TeamsMember from "./TeamExperApi";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Aos from "aos";
import "aos/dist/aos.css";



function TeamHome() {
    const [ workData , setworkData] =useState(TeamsMember);
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
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,
    
            }
        },
    };
   
    return(
         <>
          <div className="our-expart-team">
             <div className="container">
                 <h2 className="text-center" data-aos="fade-down"> Meet Our experts </h2>
                 <div className="m-auto d-table" data-aos="fade-up">
                    <img src={headingDivider} alt="diverver"/>
                 </div>

                 <div className="team-slider mt-5" data-aos="fade-down">
                    <OwlCarousel className='owl-theme' {...options}>
                    {
                        workData.map((curElem) => {
                            const{ id, images, name, descrition,} = curElem;
                             return(
                                <>
                                <div className="comon-teams-div text-center">
                                     <figure>
                                       <img src={images} alt={name}/>
                                     </figure>
                                     <h5>{name}</h5>
                                     <p> {descrition}</p>
                                </div>
                                </>
                            );
                        })
                    }
                    

                   </OwlCarousel>
                 </div>

             </div>
          </div>
         </>

    );
    
}
export default TeamHome;