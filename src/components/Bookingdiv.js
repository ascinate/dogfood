import React, { useEffect } from "react";
import subpagedevider from "../images/h3_divider.png";
import dogpicbook from "../images/dog.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Bookingdiv () {
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
         <div className="booking-part my-5">
             <div className="container">
                 <h2 className="text-center" data-aos="fade-down">Please fill in the details below to <br/> find
                 the perfect Grooming for your pup! </h2>
                 <div className="d-table m-auto text-center" data-aos="fade-down">
                    <img src={subpagedevider} alt="divider"/>
                 </div>

                 <p className="text-center col-lg-7 m-auto" data-aos="fade-down"> If you have a business query or a comment to share about our
                  product we would love to hear from you. Please fill in the details below. </p>

                <div className="row mt-5">
                    <div className="col-lg-5">
                       <figure className="d-grid pe-5 justify-content-end">
                          <img src={dogpicbook} alt="dogpic"/>
                       </figure>
                        
                    </div>
                    <div className="col-lg-7">
                        <form action="" method="get">
                            <div className="row justify-content-between gx-lg-5">
                                <div className="col-lg-6">
                                <div className="form-group">
                                    
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="form-group">
                                    
                                    <input type="text" className="form-control" placeholder="Your Phone Number" />
                                </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        
                                        <input type="text" className="form-control" placeholder="Your Email" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="form-group">
                                    
                                    <input type="text" className="form-control" placeholder="Your Pet Name" />
                                </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="form-group">
                                    
                                    <input type="text" className="form-control" placeholder="Breed" />
                                </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="form-group">
                                    
                                    <input type="text" className="form-control" placeholder="Your Pet Gender" />
                                </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="form-group">
                                    
                                    <input type="text" className="form-control" placeholder="Your Pet Age" />
                                </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="form-group">
                                    
                                    <input class="form-control" type="file" id="formFile"/>
                                </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <textarea class="form-control" placeholder="Your Requierment"></textarea>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                    <input type="submit" className="btn booking-bn" value="Book Grooming" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
    
                
             </div>
         </div>
        </>
    );
    
}
export default Bookingdiv;