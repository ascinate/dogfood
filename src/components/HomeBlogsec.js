import React, {useState , useEffect } from "react";
import { NavLink } from "react-router-dom";
import headingDivider from "../images/h3_divider.png";
import LatestBlog from "./HomeblogApi";
import { FaUserAlt, FaCalendarAlt, FaAngleDoubleRight } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

function HomeBlogsec() {
    const [ workData , setworkData] =useState(LatestBlog);
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
          <div className="blog-home-sec">
            <div className="container">
              <h2 className="text-center" data-aos="fade-up">
                 Latest News & Updates
              </h2>
              <div className="m-auto d-table" data-aos="fade-down">
                <img src={headingDivider} alt="diverver"/>
              </div>

              <div className="homeblo-div mt-5">
                 <div className="row gx-lg-5 row-cols-1 row-cols-md-2 row-cols-lg-3">
                   {
                       workData.map((curElem) => {
                           const{ id, cate, auto, date, images , blogtitle, descrition, link } = curElem;
                           return(
                               <>
                               <div className="col" data-aos="fade-down">
                                  <div className="lates-blog mb-5 mb-lg-0">
                                     <figure>
                                       <img src={images} alt={blogtitle}/>
                                       <span className="category-name"> {cate}</span>
                                     </figure>
                                     <div className="details-home-sec">
                                    
                                       <ul className="list-unstyled d-flex align-items-center">
                                         <li className="d-flex align-items-center"> <FaUserAlt/> {auto} </li>
                                         <li className="d-flex align-items-center"> <FaCalendarAlt/> {date} </li>
                                       </ul>
                                       <h5>{blogtitle}</h5>
                                       <p>{descrition}</p>
                                       <NavLink to={link} className="btn blogbtn"> Read more <FaAngleDoubleRight/> </NavLink>
                                     </div>
                                  </div>
                                </div>
                               </>
                           );
                       })
                   }
                    

                 </div>
              </div>
            </div>
          </div>
        </>
    );
    
}

export default HomeBlogsec;