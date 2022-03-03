import React, {useEffect} from "react";
import headingDivider from "../images/h3_divider.png";
import recipepicA from "../images/h4_img5.png";
import puppypic from "../images/5308459.png";
import smallpuppypic from "../images/5308459.png";
import largpuppypic from "../images/4364608.png";
import dogpng from "../images/nu-food.png";
import dogpfoodng from "../images/nu-food2.png";
import { NavLink } from "react-router-dom";
import womenpic from "../images/nuti.png";
import dogplastng from "../images/dogpng.png";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

function RecipesBody(){
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
          <div className="recipe-1">
              <div className="container">
                 <div className="row row-cols-1  row-cols-lg-2 align-items-center">
                    <div className="col" data-aos="fade-up">
                       <figure className="d-grid justify-content-lg-end pe-lg-5">
                          <img src={recipepicA} alt="recp"/>
                       </figure>
                    </div>
                    <div className="col" data-aos="fade-down">
                       <h2>Premium Recipes Made Meet The Unique Needs Of your
                       Dog </h2>
                       <div className="divider-div">
                          <img src={headingDivider} alt="divider"/>
                       </div>
                       <p className="mt-3"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                       took a galley of type and scrambled it to make a type specimen book.</p>
                       <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                       took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                       took a galley of type and scrambled it to make a type specimen book.</p>

                       <NavLink to="/plan" className="btn comon-bn-new"> Discover Your Dog's Plan </NavLink>
                    </div>
                 </div>
              </div>
          </div>

          <div className="recipe-2 py-5 mt-5">
              <div className="container">
                 <div className="row row-cols-1 row-cols-lg-2">
                    
                    <div className="col" data-aos="fade-down">
                       <h2>Every Dog Is Unique Food did you know </h2>
                       <div className="divider-div">
                          <img src={headingDivider} alt="divider"/>
                       </div>
                       <div className="comon-sp-recipe mt-4 d-flex ali-items-center">
                          <div className="col-3 col-sm-2">
                              <figure className="comon-iconpic">
                                <img src={smallpuppypic} alt="puppy"/>
                              </figure>
                          </div>
                          <div className="col-9 col-sm-10">
                            <h5>Puppy </h5>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                          </div>
                          
                       </div>
                       <div className="comon-sp-recipe mt-4 d-flex ali-items-center">
                          <div className="col-3 col-sm-2">
                              <figure className="comon-iconpic">
                                  <img src={puppypic} alt="puppy"/>
                              </figure>
                          </div>
                          <div className="col-9 col-sm-10">
                            <h5> Small & Medium Breed </h5>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                          </div>
                          
                       </div>
                       <div className="comon-sp-recipe mt-4 d-flex ali-items-center">
                         <div className="col-3 col-sm-2">
                              <figure className="comon-iconpic">
                                 <img src={largpuppypic} alt="puppy"/>
                              </figure>
                          </div>
                          <div className="col-9 col-sm-10">
                             <h5>Large Breed </h5>
                             <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                          </div>
                          
                       </div>
                    </div>
                    <div className="col" data-aos="fade-up">
                       <figure className="d-grid justify-content-lg-end">
                          <img src={dogpng} alt="recp"/>
                       </figure>
                    </div>
                 </div>
              </div>
          </div>

          <div className="recipe-3 py-5">
              <div className="container">
                 <div className="row row-cols-1 row-cols-lg-2">
                    <div className="col" data-aos="fade-up">
                        <figure className="d-grid">
                            <img src={dogpfoodng} alt="recp"/>
                        </figure>
                    </div>
                    <div className="col" data-aos="fade-down">
                       <h2>We start with fresh ingredients and end with fresh Dog's food
                        Just Add Water  </h2>
                       <div className="divider-div">
                          <img src={headingDivider} alt="divider"/>
                       </div>
                       <p className="mt-4">
                        A small change can have a big impact. Try out our Bowl Builder to explore the many ways that adding fresh food to your pet’s diet can make them 
                        happier and healthier—whether they eat canned, kibble, raw, or a mix of all.
                       </p>
                       <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, 
                       sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
                    
                 </div>
              </div>
          </div>

          <div className="recipe-4 pt-5">
              <div className="container">
                 <div className="row row-cols-1 row-cols-lg-2">
                    
                    <div className="col" data-aos="fade-up">
                       <h2>Our Dog's Food Formulated by Nutritionists  </h2>
                       <div className="divider-div">
                          <img src={headingDivider} alt="divider"/>
                       </div>
                       <p className="mt-4 text-white">
                        A small change can have a big impact. Try out our Bowl Builder to explore the many ways that adding fresh food to your pet’s diet can make them 
                        happier and healthier—whether they eat canned, kibble, raw, or a mix of all.
                       </p>
                       <p className="text-white mb-5"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, 
                       sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>

                    <div className="col" data-aos="fade-down">
                        <figure className="d-grid m-0">
                            <img src={womenpic} alt="recp"/>
                        </figure>
                    </div>
                    
                 </div>
              </div>
          </div>

          <div className="recipe-5 pt-5">
              <div className="container">
                 <div className="row row-cols-1 row-cols-lg-2 flex-column-reverse flex-lg-row">
                     <div className="col" data-aos="fade-up">
                        <figure className="d-grid m-0">
                            <img src={dogplastng} alt="recp"/>
                        </figure>
                    </div>
                    <div className="col" data-aos="fade-down">
                       <h2>Find your pup's perfect food with our Best Food Selector </h2>
                       <div className="divider-div">
                          <img src={headingDivider} alt="divider"/>
                       </div>
                       <p className="mt-4 ">
                        A small change can have a big impact. Try out our Bowl Builder to explore the many ways that adding fresh food to your pet’s diet can make them 
                        happier and healthier—whether they eat canned, kibble, raw, or a mix of all.
                       </p>
                       <p > It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, 
                       sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                       <NavLink to="/" className="btn order-now mb-3"> Order Now <BsFillArrowRightSquareFill/> </NavLink>
                    </div>

                    
                    
                 </div>
              </div>
          </div>
        </>
    );
}
export default RecipesBody;