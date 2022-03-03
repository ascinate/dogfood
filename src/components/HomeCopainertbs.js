import React, {useEffect} from "react";
import headingDivider from "../images/h3_divider.png";
import Fegitableicon from "../images/2153786.png";
import FressInicon from "../images/2253446.png";
import Fegitablenicon from "../images/3082019.png";
import Ingrident from "../images/3449418.png";
import Biscuts from "../images/bisucit-bg.png";
import wetbg from "../images/wet-bg.png";
import rawbg from "../images/raw-bg.png";
import Homemadebg from "../images/homemade-bg.png";
import Aos from "aos";
import "aos/dist/aos.css";


function HomeCopainertbs() {
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
          <div className="compainer-div mt-5 py-5">
              <div className="container">
                    <h2 className="text-center mb-2" data-aos="fade-up"> What makes us different <br/> makes them stronger </h2>
                    <figure className="heading-divider-img d-table m-auto" data-aos="fade-down">
                            <img src={headingDivider} alt="divier"/>
                    </figure> 
                    <p className="text-center col-lg-6 m-auto mt-3"
                    data-aos="fade-down"> The process of cooking at lower temperatures & at slower rates leads to an increase in nutrient retention.</p>

                    <div className="tabs-sec-food mt-4">
                           
                            <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist"
                            data-aos="fade-up">
                                <li className="nav-item" role="presentation">
                                <button className="nav-link active"  data-bs-toggle="tab" data-bs-target="#food-ps1" 
                                type="button" role="tab" aria-controls="home" aria-selected="true">Kibble biscuits</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#food-ps2" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                Raw</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#food-ps3" 
                                type="button" role="tab" aria-controls="contact" aria-selected="false">Wet food</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#food-ps4" 
                                type="button" role="tab" aria-controls="contact" aria-selected="false">Home cooked</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent" data-aos="fade-down">
                                <div className="tab-pane fade show active" id="food-ps1" role="tabpanel" aria-labelledby="home-tab">
                                    
                                    <div className="row mt-5 align-items-center">
                                    
                                         <div className="col-lg-3 order-2 order-lg-1">
                                           <div className="left-sec comon-details-ps">
                                               <div className="comon-part-ps d-flex ali-items-center">
                                                  <div className="col-lg-4">
                                                     <figure>
                                                        <img src={Fegitableicon} alt="fegitable"/>
                                                     </figure>
                                                  </div>
                                                  <div className="col-lg-8">
                                                    <h5> Real Food </h5>
                                                    <p> Human-grade meat and veggies in simple recipes, made for dogs
                                                    </p>
                                                  </div>
                                               </div>
                                               <div className="comon-part-ps d-flex ali-items-center">
                                                  <div className="col-lg-4">
                                                     <figure>
                                                        <img src={Ingrident} alt="fegitable"/>
                                                     </figure>
                                                  </div>
                                                  <div className="col-lg-8">
                                                    <h5> Premium Ingredient </h5>
                                                    <p> Human-grade meat and veggies in simple recipes, made for dogs
                                                    </p>
                                                  </div>
                                               </div>
                                           </div>
                                         </div>

                                         <div className="col-lg-6 order-1 order-lg-3">
                                            <figure className="m-auto d-table">
                                               <img src={Biscuts} alt="bisucts"/>
                                            </figure>
                                         </div>

                                         <div className="col-lg-3 order-3 order-lg-3">
                                            <div className="left-sec comon-details-ps">
                                                <div className="comon-part-ps d-flex ali-items-center">
                                                    <div className="col-lg-4">
                                                    <figure>
                                                        <img src={Fegitablenicon} alt="fegitable"/>
                                                    </figure>
                                                    </div>
                                                    <div className="col-lg-8">
                                                    <h5> Made Fresh  </h5>
                                                    <p> Human-grade meat and veggies in simple recipes, made for dogs
                                                    </p>
                                                    </div>
                                                </div>
                                                <div className="comon-part-ps d-flex ali-items-center">
                                                    <div className="col-lg-4">
                                                    <figure>
                                                        <img src={FressInicon} alt="fegitable"/>
                                                    </figure>
                                                    </div>
                                                    <div className="col-lg-8">
                                                    <h5> Vet Developed </h5>
                                                    <p> Human-grade meat and veggies in simple recipes, made for dogs
                                                    </p>
                                                    </div>
                                                </div>
                                            </div>
                                         </div>

                                         
                                      
                                    </div>
                                    
                                    
                                </div>
                                <div className="tab-pane fade" id="food-ps2" role="tabpanel" aria-labelledby="profile-tab">
                                    
                                  <div className="row mt-5 align-items-center">
                                    
                                        <div className="col-lg-3 order-2 order-lg-1">
                                         <div className="left-sec comon-details-ps">
                                            <div className="comon-part-ps d-flex ali-items-center">
                                                <div className="col-lg-4">
                                                    <figure>
                                                    <img src={Fegitableicon} alt="fegitable"/>
                                                    </figure>
                                                </div>
                                                <div className="col-lg-8">
                                                <h5> Natural Food </h5>
                                                <p> Human-grade meat and veggies in simple recipes, made for dogs
                                                </p>
                                                </div>
                                            </div>
                                            <div className="comon-part-ps d-flex ali-items-center">
                                                <div className="col-lg-4">
                                                    <figure>
                                                    <img src={Ingrident} alt="fegitable"/>
                                                    </figure>
                                                </div>
                                                <div className="col-lg-8">
                                                <h5> Easily prepared </h5>
                                                <p> Human-grade meat and veggies in simple recipes, made for dogs
                                                </p>
                                                </div>
                                            </div>
                                         </div>
                                        </div>

                                        <div className="col-lg-6 order-1 order-lg-3">
                                            <figure className="m-auto d-table">
                                                <img src={rawbg} alt="bisucts"/>
                                            </figure>
                                        </div>

                                        <div className="col-lg-3 order-3 order-lg-3">
                                         <div className="left-sec comon-details-ps">
                                            <div className="comon-part-ps d-flex ali-items-center">
                                                <div className="col-lg-4">
                                                <figure>
                                                    <img src={Fegitablenicon} alt="fegitable"/>
                                                </figure>
                                                </div>
                                                <div className="col-lg-8">
                                                <h5> contains absolutely </h5>
                                                <p> Human-grade meat and veggies in simple recipes, made for dogs
                                                </p>
                                                </div>
                                            </div>
                                            <div className="comon-part-ps d-flex ali-items-center">
                                                <div className="col-lg-4">
                                                <figure>
                                                    <img src={FressInicon} alt="fegitable"/>
                                                </figure>
                                                </div>
                                                <div className="col-lg-8">
                                                <h5> no nasties </h5>
                                                <p> Human-grade meat and veggies in simple recipes, made for dogs
                                                </p>
                                                </div>
                                            </div>
                                         </div>
                                        </div>

                                   </div>

                                </div>
                                <div className="tab-pane fade" id="food-ps3" role="tabpanel" aria-labelledby="contact-tab">
                                     
                                  <div className="row mt-5 align-items-center">
                                    
                                        <div className="col-lg-3 order-2 order-lg-1">
                                         <div className="left-sec comon-details-ps">
                                            <div className="comon-part-ps d-flex ali-items-center">
                                                <div className="col-lg-4">
                                                    <figure>
                                                    <img src={Fegitableicon} alt="fegitable"/>
                                                    </figure>
                                                </div>
                                                <div className="col-lg-8">
                                                <h5> designed for better health Food </h5>
                                                <p> Human-grade meat and veggies in simple recipes, made for dogs
                                                </p>
                                                </div>
                                            </div>
                                            <div className="comon-part-ps d-flex ali-items-center">
                                                <div className="col-lg-4">
                                                    <figure>
                                                    <img src={Ingrident} alt="fegitable"/>
                                                    </figure>
                                                </div>
                                                <div className="col-lg-8">
                                                <h5> high quality ingredients </h5>
                                                <p> Human-grade meat and veggies in simple recipes, made for dogs
                                                </p>
                                                </div>
                                            </div>
                                         </div>
                                        </div>

                                        <div className="col-lg-6 order-1 order-lg-3">
                                            <figure className="m-auto d-table">
                                                <img src={wetbg} alt="bisucts"/>
                                            </figure>
                                        </div>

                                        <div className="col-lg-3 order-3 order-lg-3">
                                         <div className="left-sec comon-details-ps">
                                            <div className="comon-part-ps d-flex ali-items-center">
                                                <div className="col-lg-4">
                                                <figure>
                                                    <img src={Fegitablenicon} alt="fegitable"/>
                                                </figure>
                                                </div>
                                                <div className="col-lg-8">
                                                <h5> Real Food </h5>
                                                <p> Human-grade meat and veggies in simple recipes, made for dogs
                                                </p>
                                                </div>
                                            </div>
                                            <div className="comon-part-ps d-flex ali-items-center">
                                                <div className="col-lg-4">
                                                <figure>
                                                    <img src={FressInicon} alt="fegitable"/>
                                                </figure>
                                                </div>
                                                <div className="col-lg-8">
                                                <h5> Premium Ingredient </h5>
                                                <p> Human-grade meat and veggies in simple recipes, made for dogs
                                                </p>
                                                </div>
                                            </div>
                                         </div>
                                        </div>

                                   </div>
                                
                                </div>
                                <div className="tab-pane fade" id="food-ps4" role="tabpanel" aria-labelledby="contact-tab">
                                    <div className="row mt-5 align-items-center">
                                    
                                        <div className="col-lg-3 order-2 order-lg-1">
                                        <div className="left-sec comon-details-ps">
                                            <div className="comon-part-ps d-flex ali-items-center">
                                                <div className="col-lg-4">
                                                    <figure>
                                                    <img src={Fegitableicon} alt="fegitable"/>
                                                    </figure>
                                                </div>
                                                <div className="col-lg-8">
                                                <h5> natural ingredients </h5>
                                                <p> Human-grade meat and veggies in simple recipes, made for dogs
                                                </p>
                                                </div>
                                            </div>
                                            <div className="comon-part-ps d-flex ali-items-center">
                                                <div className="col-lg-4">
                                                    <figure>
                                                    <img src={Ingrident} alt="fegitable"/>
                                                    </figure>
                                                </div>
                                                <div className="col-lg-8">
                                                <h5> Easily prepared </h5>
                                                <p> Human-grade meat and veggies in simple recipes, made for dogs
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>

                                        <div className="col-lg-6 order-1 order-lg-3">
                                            <figure className="m-auto d-table">
                                                <img src={Homemadebg} alt="bisucts"/>
                                            </figure>
                                        </div>

                                        <div className="col-lg-3 order-3 order-lg-3">
                                        <div className="left-sec comon-details-ps">
                                            <div className="comon-part-ps d-flex ali-items-center">
                                                <div className="col-lg-4">
                                                <figure>
                                                    <img src={Fegitablenicon} alt="fegitable"/>
                                                </figure>
                                                </div>
                                                <div className="col-lg-8">
                                                <h5> Real Food </h5>
                                                <p> Human-grade meat and veggies in simple recipes, made for dogs
                                                </p>
                                                </div>
                                            </div>
                                            <div className="comon-part-ps d-flex ali-items-center">
                                                <div className="col-lg-4">
                                                <figure>
                                                    <img src={FressInicon} alt="fegitable"/>
                                                </figure>
                                                </div>
                                                <div className="col-lg-8">
                                                <h5> Premium Ingredient </h5>
                                                <p> Human-grade meat and veggies in simple recipes, made for dogs
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                    </div>

              </div>
          </div>
          </>
      );
    
}

export default HomeCopainertbs;