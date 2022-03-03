import React, {useEffect} from "react";
import charitypic from "../images/Senior-and-dog-1080x675.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function PrsonalCharityreview(){
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
         <div className="personal-carity-div py-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-2 align-items-xl-center gx-lg-5 flex-column-reverse flex-md-row">
                    <div className="col" data-aos="fade-up">
                        <h2> Lulu is now a different dog </h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                         <p> There are many variations of passages of Lorem Ipsum available,
                          but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, 
                         injected humour, or non-characteristic words etc.</p>
                    </div>
                    <div className="col" data-aos="fade-down">
                        <figure>
                           <img src={charitypic} alt="ch"/>
                        </figure>
                    </div>
                </div>
            </div>
         </div>
        </>
    );
}
export default PrsonalCharityreview;