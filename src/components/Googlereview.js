import React, {useEffect, useState} from "react";
import headingDivider from "../images/h3_divider.png";
import { FaStar } from "react-icons/fa";
import Tesimonialgoogle from "./GooglereviewApi";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Aos from "aos";
import "aos/dist/aos.css";

function Googlereview(){
    const [ workData , setworkData] =useState(Tesimonialgoogle);
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
    return (
        <>
          <div className="container">
             <h6 className="text-center col-lg-8 m-auto my-3"  data-aos="fade-down"> A simple change in what we put in dogs’ bowls can have a transformative impact on their health — improving everything from digestion and weight issues, to energy levels and life span. But these humans tell it best.</h6>
          </div>
          <div className="google-revies py-5 mt-5">
             <div className="container">
                <div className="text-center ratinghead" data-aos="fade-down">
                    <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </div>
                <h2 className="text-center" data-aos="fade-up"> Google Reviews </h2>
                <div className="text-center d-block">
                   <img src={headingDivider} alt="divider"/>
                </div>
                <div className="g-reviw-slide mt-4" data-aos="fade-down">
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
export default Googlereview;