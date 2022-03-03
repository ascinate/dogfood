import React, {useEffect, useState } from "react";
import HealthtesimonialReviw from "./HealthtextApi";
import headingDivider from "../images/h3_divider.png";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Aos from "aos";
import "aos/dist/aos.css";

function HealthReview(){
    const [ workData , setworkData] =useState(HealthtesimonialReviw);
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
                items: 3,
    
            }
        },
    };
    return(
        <>
          <div className="health-reviews py-5 mt-5">
             <div className="container">
                <h2 className="text-center" data-aos="fade-down"> Boosting Health & Wellness </h2>
                <div className="text-center d-block" data-aos="fade-up">
                   <img src={headingDivider} alt="divider"/>
                </div>
                <div className="health-slide-testimonials mt-5" data-aos="fade-down">
                  <OwlCarousel className='owl-theme'
                    {...options}>
                    {
                    workData.map((curElem) =>{
                        const { id, images, name, decription, jobtitle} = curElem;

                        return(
                            <>
                            <div className="items-review text-center">
                                <figure className="maskpic">
                                <img src={images} alt={name}/>
                                </figure>
                                <p className="text-center"> {decription} </p>
                                <h5>{name}</h5>
                                <h6>{jobtitle}</h6>
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
export default HealthReview;