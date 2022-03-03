import React, {useState, useEffect} from "react";
import headingDividerWhite from "../images/h3_divider-white.png";
import TesimonialReviw from "./TesimonailDetailsApi";
import TesimonailbodyImg from "../images/h1_bg-1.png";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Aos from "aos";
import "aos/dist/aos.css";


function TesimonalSild() {
    const [ workData , setworkData] =useState(TesimonialReviw);
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
         <div className="testmonial-sec-div">
             <figure className="bd-img-testmonial">
                <img src={TesimonailbodyImg} alt="bgm"/>
             </figure>
            <div className="container">
               <h6 className="text-center" data-aos="fade-down"> Customer Review</h6>
               <h2 className="text-center" data-aos="fade-up">Clients are Saying</h2>
               <div className="m-auto d-table" data-aos="fade-down">
                    <img src={headingDividerWhite} alt="diverver"/>
                </div>

                <div className="textimonalcarosule mt-5" data-aos="fade-up">
                 <OwlCarousel className='owl-theme'
                 {...options}>
                  {
                      workData.map((curElem) =>{
                          const { id, images, name, decription, jobtitle} = curElem;
                          return(
                              <>
                              <div className="inside-client-re text-center">
                                   <figure className="maskpic">
                                    <img src={images} alt={name}/>
                                    </figure>
                                    <p> {decription}</p>
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
export default TesimonalSild;