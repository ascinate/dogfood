import React, { useState, useEffect } from "react";
import AllBlogpost from "./BlogpostApi";
import subpagedevider from "../images/h3_divider.png";
import { FaAngleDoubleRight , FaUser , FaTags } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";



function BlogPage() {
    useEffect(() => {
        Aos.init({
            offset: 100,
            easing: 'ease',
            delay: 0,
            once: true,
            duration: 800,
          
          });
    });
    const [ posts , setworkData] =useState(AllBlogpost);
    console.log(posts);

    return(
        <>
          <div className="blog-page-div mt-5">
             <div className="container">
                <h2 className="text-center" data-aos="fade-up"> Our Blog </h2>
                <div className="d-table m-auto text-center">
                   <img src={subpagedevider} alt="divider"/>
                </div>
                <div className="row row-cols-1 row-cols-lg-2 gx-lg-5 mt-5" >
                {
                    posts.map((post) => {
                    const{ id, cate, author, images, blogtitle, date, blogtitel, descrition } = post;
                      return(
                          <>
                            <div className="col" data-aos="fade-down">
                                <NavLink to="/blogdetails" className="comon-blog-post">
                                    <figure className="mb-3 mb-md-0">
                                       <img src={images} alt={blogtitel}/>
                                        <span className="dateblog">
                                        {date}
                                        </span>
                                    </figure>
                                    <div className="post-details">
                                        <ul className="list-unstyled d-flex align-items-center">
                                        <li> <FaUser/> {author} </li>
                                        <li className="ms-3"> <FaTags/> {cate} </li>
                                        </ul>
                                        <h5> {blogtitle} </h5>
                                        <p> {descrition} </p>
                                        <h6 className="btn read-more-bn"> Read more <FaAngleDoubleRight/> </h6>
                                    </div>
                                    
                                </NavLink>
                            </div>
                          </>
                      )
                    })
                }
                    
                </div>
             </div>
          </div>
        </>
    );
    
}
export default BlogPage;